# Codex handoff — NOUR import/export website

Continue this project as the NOUR importer, exporter, and supplier of communications systems and technology equipment.

## Requirements to preserve

- Dark theme only and English only for this version.
- Never show the word “beta” in the website UI or page copy.
- Use the supplied NOUR wordmark and favicon as provided.
- Keep the NOUR identity high-tech and modern: deep navy surfaces, cyan/electric-blue gradients, restrained glow, clear typography, and generous spacing.
- Aim for the crafted motion quality of the Herbanol site, while keeping NOUR’s visual identity distinct. Keep motion controlled, purposeful, responsive, and compatible with `prefers-reduced-motion`.
- Preserve responsive behavior, accessible labels, keyboard-friendly navigation, and readable contrast.
- Do not invent customer names, certifications, partner brands, trade routes, shipment records, order counts, contact details, or quantified performance claims.
- Position the company around import, export, international sourcing, and equipment supply. Do not describe NOUR as an installer or imply installation services.
- Treat existing AI imagery as illustrative only. Do not present it as documentary proof of NOUR's staff, warehouse, partners, shipments, or transactions.

## Current implementation

- React + TypeScript + Vite + Tailwind CSS.
- Framer Motion, GSAP/ScrollTrigger, Lenis, and Lucide icons.
- One-page sections: hero, product categories, supply process, import/export model, about, enquiry, footer.
- The enquiry form is a frontend mailto flow. Set the approved NOUR email in `src/siteConfig.ts` before enabling it; use a backend or form service if direct web submission is required.

After changes, run `npm run build` and check the page at desktop and mobile widths.
