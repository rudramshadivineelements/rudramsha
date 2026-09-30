# Rudramsha Divine Elements

Static website for [rudramsha.com](https://rudramsha.com), built with React, Vite, and Tailwind CSS and deployed through GitHub Pages.

## Before the public launch

1. Add the business WhatsApp number to `src/site-config.ts` in international format, using digits only.
2. Replace the starter collection descriptions with the first real products and availability.
3. Confirm all origin, treatment, certification, and care claims for each product before publishing them.
4. In the GitHub repository settings, choose **GitHub Actions** as the Pages source and confirm the custom domain is `rudramsha.com`.

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

- Add product photography and individual Rudraksha records
- Add filters for type, mukhi, origin, size, and availability
- Add a consistent product-detail template
- Add care instructions, certification notes, and transparent pricing context

### Phase 3 — Trust and education

- Detailed Rudraksha guide and glossary
- Sourcing and authenticity page
- Frequently asked questions based on real customer conversations
- Testimonials only after permission and verification

### Phase 4 — Operations

- Simple inventory source (structured JSON first; managed catalog later)
- Enquiry message prefilled with the chosen product
- Analytics with consent-aware privacy settings
- Optional payments only when fulfilment and return policies are ready

## Content principles

- Never promise medical, financial, or guaranteed spiritual outcomes.
- Separate traditional beliefs from verifiable material facts.
- State treatments, origin, and documentation honestly.
- Use original product photos wherever possible and show natural variation clearly.
