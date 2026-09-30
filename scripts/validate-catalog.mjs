import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = process.cwd();
const productDirectory = path.join(projectRoot, 'content', 'products');
const imageDirectory = path.join(projectRoot, 'public', 'catalog');
const allowedCategories = new Set(['rudraksha', 'stones', 'yantras']);
const allowedAvailability = new Set(['available', 'reserved', 'sold']);
const requiredTextFields = ['id', 'name', 'category', 'detail', 'description', 'image', 'alt', 'availability'];

const filenames = (await readdir(productDirectory))
  .filter((filename) => filename.endsWith('.json'))
  .sort();

const errors = [];
const seenIds = new Map();

if (filenames.length === 0) {
  errors.push('No product JSON files were found in content/products.');
}

for (const filename of filenames) {
  const filePath = path.join(productDirectory, filename);
  let product;

  try {
    product = JSON.parse(await readFile(filePath, 'utf8'));
  } catch (error) {
    errors.push(`${filename}: invalid JSON (${error.message}).`);
    continue;
  }

  for (const field of requiredTextFields) {
    if (typeof product[field] !== 'string' || product[field].trim() === '') {
      errors.push(`${filename}: "${field}" must be a non-empty line of text.`);
    }
  }

  if (typeof product.published !== 'boolean') {
    errors.push(`${filename}: "published" must be true or false.`);
  }

  if (!Number.isInteger(product.order) || product.order < 0) {
    errors.push(`${filename}: "order" must be a whole number of 0 or greater.`);
  }

  if (typeof product.price !== 'string') {
    errors.push(`${filename}: "price" must be text; use an empty string for On enquiry.`);
  }

  if (typeof product.category === 'string' && !allowedCategories.has(product.category)) {
    errors.push(`${filename}: "category" must be rudraksha, stones, or yantras.`);
  }

  if (typeof product.availability === 'string' && !allowedAvailability.has(product.availability)) {
    errors.push(`${filename}: "availability" must be available, reserved, or sold.`);
  }

  if (typeof product.id === 'string' && product.id.trim() !== '') {
    const previousFilename = seenIds.get(product.id);
    if (previousFilename) {
      errors.push(`${filename}: "id" duplicates the one in ${previousFilename}.`);
    } else {
      seenIds.set(product.id, filename);
    }
  }

  if (typeof product.image === 'string' && product.image.trim() !== '') {
    if (path.basename(product.image) !== product.image) {
      errors.push(`${filename}: "image" must contain a filename only, without folders.`);
    } else {
      try {
        await access(path.join(imageDirectory, product.image));
      } catch {
        errors.push(`${filename}: image public/catalog/${product.image} does not exist.`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error('Catalogue validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${filenames.length} catalogue products.`);
