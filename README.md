# NOUR — Import, Export & Technology Supply

A responsive, English-only, dark-theme website presenting NOUR as an importer, exporter, and supplier of communications systems and technology equipment. Built with React, TypeScript, Vite, and Tailwind CSS, using NOUR’s cyan/blue identity and restrained motion.

## Run locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open this folder in VS Code.
3. In the VS Code terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

For a production build, run `npm run build`. The output is written to `dist/`.

## Project structure

- `src/App.tsx` — product categories, trade process, navigation, motion, and enquiry form.
- `src/styles.css` — responsive dark theme and visual styling.
- `src/siteConfig.ts` — business name, domain, and approved contact email.
- `public/assets/` — supplied NOUR logo and website images.
- `public/favicon.png` — supplied favicon.

## Before launch

- Set the approved NOUR business email in `src/siteConfig.ts`; the enquiry form then opens a prefilled message in the visitor’s email app. Connect a form service or backend if enquiries should submit directly on the website.
- Confirm all service descriptions, company details, and partner/agency claims with NOUR before publishing.
- Replace the temporary hero and product-category imagery with the import/export image set when it is ready.
- The current source artwork contains AI-generated imagery. Do not present any of it as a photograph of a real NOUR shipment, warehouse, employee, partner, or completed order.
- Add official manufacturer logos and product images only after confirming the relevant brands and image-use permissions.

The site includes no fabricated client names, certifications, trade routes, order statistics, or contact details.
