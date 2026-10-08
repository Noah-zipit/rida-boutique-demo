# Ashar Store (demo storefront)

A fictional clothing-store demo in the Nike design language: photography-first
commerce with towering uppercase display type (Bebas Neue) burned into
full-bleed campaign imagery, then dense neutral retail chrome — black/white
monochrome, pill CTAs, tight 1:1 product cards, hairline dividers, no shadows.

Design reference: `~/workspace/design-md/nike.md`. Constraints: `DESIGN.md`.

Live demo: **https://rida-boutique-demo.vercel.app**

## What's inside

- `src/` — React 19 + Vite app
  - `src/data/catalog.js` — 9 sample products (stitched suits, lawn, khaddar,
    festive wear) with Rs. prices and WhatsApp order links to a **placeholder**
    demo number (`0300 0000000`)
  - `src/components/` — Chrome (utility bar, nav + mobile drawer, footer),
    Hero, Shop (category filter chips + live search + product grid),
    Sections (campaign tile, story band, FAQ accordion), Legal
    (terms, privacy, custom 404)
- `public/img/` — demo product photography
- `public/` — `sitemap.xml`, `robots.txt`, `llms.txt`

This is a portfolio demo: fictional brand, sample catalog, placeholder contact
details. No real store, phone number, or address appears anywhere.

## Run it locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

Deploys to Vercel (project `rida-boutique-demo`) from `master`.
