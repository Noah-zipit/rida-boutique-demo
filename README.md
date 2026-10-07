# Rida Boutique Demo

A boutique website demo for **Rida Boutique** — women's wear at Shop UG-10A,
Hyderi Gold Mark, North Nazimabad, Karachi. Built with React 19, Vite, and
Three.js (via @react-three/fiber), with a scroll-reactive Silk WebGL shader
hero (adapted from React Bits' Silk component).

Live demo: **https://rida-boutique-demo.vercel.app**

## What's inside

- `src/` — the React app: product grid, product detail views, and 3D scene components
- `products.json` — 8 real products with real Rs. prices, scraped from the
  boutique's Instagram posts (HZ 3pc embroidered luxury, BinSaeed, Sadabahar, Saya)
- `ig-posts.json` — raw Instagram post data the catalogue is built from
- `public/img/` — product photos
- `rida-boutique-demo.html` — a standalone static version of the site
- `dist.zip` — an archived production build

Every product carries a WhatsApp order button pointing at the boutique's own
number, so a customer can message them directly about a suit.

## Run it locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

Pushes to `master` are deployed automatically: the repo has a GitHub Pages
workflow (`.github/workflows/pages.yml`) that builds `dist/` and publishes it.
