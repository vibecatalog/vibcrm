# VibCRM Landing Template

A production-ready, fully responsive React + Tailwind CSS landing page template. Built for high conversion, performance, and accessibility. Ideal for SaaS, product, or startup landing pages.

## Features
- Pixel-perfect, responsive layout (mobile, tablet, desktop)
- Modular component architecture (sections, layout, UI)
- Design tokens via Tailwind CSS variables (colors, spacing, shadows)
- Accessibility-first (ARIA roles, focus styles, reduced-motion)
- SEO-ready index with Open Graph/Twitter meta and JSON-LD
- Vite-powered DX (fast dev, optimized build)

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS 3
- Vite 6

## Getting Started
```bash
npm install
npm run dev
# build
npm run build
npm run preview
```

## Project Structure
```
src/
  components/
    layout/      # Navigation, Footer
    sections/    # Hero, Benefits, Testimonials, Pricing, FAQ, CTA
    ui/          # Buttons, Cards, primitives
  hooks/
  lib/
  pages/
public/
```

## Customization
- Update tokens in `global.css` and `tailwind.config.ts` to fit your brand.
- Edit sections in `src/components/sections/*`.
- Replace meta tags/URLs in `index.html`.

## Live Preview
You can deploy easily to Netlify, Vercel, or any static host. Run `npm run build` and host `dist/spa`.

## About VibeCatalog
VibeCatalog curates high-quality, production-ready templates for modern web apps and marketing sites. Learn more at https://vibecatalog.com.

## License
This template is provided for commercial use under the VibeCatalog Template License. Redistribution or resale outside the marketplace is prohibited. See LICENSE for details.


