# Editing the catalogue on GitHub

Each catalogue item has its own small file in [`content/products`](content/products). Employees can update products without touching the website code.

## Change a product

1. Open the product's `.json` file in `content/products` on GitHub.
2. Click the pencil icon (**Edit this file**).
3. Change only the value after the colon. Keep the quotation marks, commas, and field names intact.
4. Click **Commit changes** and commit directly to `main`.
5. Open the repository's **Actions** tab. A green check means the catalogue passed validation and was published. The live site normally updates within a few minutes.

Example:

```json
"price": "₹2,850",
"availability": "available"
```

## Fields employees may change

| Field | What to enter |
| --- | --- |
| `published` | `true` to show the item, or `false` to hide it |
| `order` | A whole number; smaller numbers appear first |
| `name` | Product name |
| `category` | Exactly `rudraksha`, `stones`, or `yantras` |
| `detail` | Short facts such as origin, size, material, or bead count |
| `description` | One concise paragraph about the individual piece |
| `image` | Exact image filename from `public/catalog` |
| `alt` | A plain description of the photo for accessibility |
| `price` | A display price such as `₹2,850`, or `""` for **On enquiry** |
| `availability` | Exactly `available`, `reserved`, or `sold` |

Leave `id` unchanged after a product is first published.

## Replace a product photo

1. In GitHub, open `public/catalog`.
2. Choose **Add file → Upload files** and upload a compressed `.webp`, `.jpg`, or `.png` image.
3. Copy its exact filename into the product's `image` field.
4. Commit both changes. Use a portrait image where possible; the catalogue display is 4:5.

## Add a new product

1. Open the most similar existing product file and copy its contents.
2. In `content/products`, choose **Add file → Create new file**.
3. Give it a unique lowercase filename such as `seven-mukhi-rudraksha.json`.
4. Paste the copied content and update every field. Give `id` a unique lowercase value with hyphens.
5. Upload the image to `public/catalog`, then commit the changes.

If a field, category, status, duplicate ID, JSON comma, or image filename is wrong, GitHub Actions will stop the deployment and show a clear error. The currently published site stays online while the file is corrected.
