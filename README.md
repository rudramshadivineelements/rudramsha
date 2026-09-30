# Rudramsha Divine Elements

Static website for [rudramsha.com](https://rudramsha.com), built with React, Vite, and Tailwind CSS and deployed through GitHub Pages.

## Catalogue editing

Products are stored as one employee-editable JSON file per item in [`content/products`](content/products). See [CATALOG_EDITING.md](CATALOG_EDITING.md) for the simple GitHub workflow, field reference, photo instructions, and how to add a product.

The production build validates every catalogue file and image before deployment. Confirm all origin, treatment, certification, availability, and care claims for each real product before publishing it.

## Local development

```bash
npm install
npm run dev
```

Create the static production build with:

```bash
npm run build
```

The deployable site is generated in `dist/`.

## Incremental roadmap

### Phase 1 — Brand foundation (current)

- Elegant educational landing page
- Rudraksha origin and selection guidance
- Authenticity philosophy
- Collection categories
- WhatsApp enquiry path
- Mobile-responsive static build and GitHub Pages deployment

### Phase 2 — Real collection

- Replace sample product photography and records with real inventory
- Add filters for type, mukhi, origin, size, and availability
- Add a consistent product-detail template
- Add care instructions, certification notes, and transparent pricing context

### Phase 3 — Trust and education

- Detailed Rudraksha guide and glossary
- Sourcing and authenticity page
- Frequently asked questions based on real customer conversations
- Testimonials only after permission and verification

### Phase 4 — Operations

- Employee-editable structured JSON inventory with automatic validation
- Enquiry message prefilled with the chosen product
- Analytics with consent-aware privacy settings
- Optional payments only when fulfilment and return policies are ready

## Content principles

- Never promise medical, financial, or guaranteed spiritual outcomes.
- Separate traditional beliefs from verifiable material facts.
- State treatments, origin, and documentation honestly.
- Use original product photos wherever possible and show natural variation clearly.
