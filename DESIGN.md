# DESIGN.md — Ashar Store (demo storefront)

## What this is
A fictional demo clothing store ("Ashar Store") for the portfolio. Rebuilt from the
old client demo; ZERO mentions of any real client name, phone number, or address.
Sample catalog of stitched Pakistani suits (lawn, khaddar, embroidered 3-pieces)
with WhatsApp ordering to a placeholder number.

## Reference
`~/workspace/design-md/nike.md` — follow faithfully. Photography-first commerce:
towering uppercase display type burned into full-bleed editorial imagery, then
dense neutral retail chrome. The reference itself uses pill CTAs — that is the
brand system, not slop.

## Tokens (from nike.md)
- ink #111111 · canvas #ffffff · soft-cloud #f5f5f5
- charcoal #39393b · mute #707072 · stone #9e9ea0
- hairline #cacacb · hairline-soft #e5e5e5
- sale #d30005 · success #007d48
- Display: Bebas Neue (open substitute for Nike Futura ND), 96px desktop /
  64px tablet / 48px mobile, line-height 0.9, uppercase, letter-spacing 0
- UI/body: Inter 400/500. Base 16px, line-height 1.5
- Radius: 0 on cards/tiles/containers; 30px pills on every CTA; 9999px swatch dots
- Section rhythm: 48px desktop, 32px tablet, 24px mobile. Grid gutters 8px
- No drop shadows anywhere. 1px hairline dividers only

## Page structure (stacked like a printed catalog)
1. Utility bar (#f5f5f5, 36px): "Demo store · Cash on delivery all over Pakistan"
2. Primary nav (white, 64px): ASHAR STORE wordmark left, center links
   (New in / Embroidered / Lawn / Sale), right search + WhatsApp icons.
   Mobile: wordmark left, icons right, hamburger drawer.
3. Campaign hero: full-bleed p00 (black HZ embroidery), white display type
   "DRESS LOUD." burned lower-left, white on-image pill "Shop the drop".
4. Shop section: heading "LATEST DROPS" (32px), filter chips
   (All / Embroidered / Lawn / Khaddar / Festive) + search field,
   3-up product grid (2-up tablet, 1-up mobile). Cards: 1:1 photo on #f5f5f5,
   name (body-strong), category (caption/mute), price, black pill "Order".
5. Campaign tile: full-bleed p05 (teal festive), "FESTIVE SEASON IS HERE."
   + white pill "Shop festive" (applies the Festive filter).
6. Story band: solid #111, p03 tile, white headline + copy, white pill "Chat with us".
7. FAQ: hairline-divided accordion rows (ordering, sizes, delivery, exchange).
8. Footer: white, hairline top divider, 4 columns + fine print.
   Location line: "Karachi, Pakistan" only. WhatsApp: 0300 0000000 (placeholder).
9. Routes (hash): #/ terms, #/privacy, unknown → custom 404.

## Copy voice
Casual Pakistani-boutique voice, plain words, no em dashes. Humanizer pass applied
to hero/story/FAQ. Never: gradient text, centered 3-card template, generic icons,
fake testimonials, AI-generated images.

## Hard rules
- No "Rida Boutique", no real phone (0334 2973795), no "Hyderi"/"UG-10A" anywhere:
  UI, titles, meta, alt text, filenames kept, code comments.
- Images: only the 8 clean product shots in public/img (p00,p01,p02,p03,p05,p07,p13,p14,p17).
  Shots with burned-in client contact info are deleted from the repo.
- Every product has a working WhatsApp order link: wa.me/923000000000 with the
  product name + price prefilled.
- npm run build passes. Screenshot desktop + mobile, one fix pass, stop.
- Commit as Noah-zipit <noahext994@gmail.com>. Deploy to Vercel project
  rida-boutique-demo, verify 200 + new design live.
