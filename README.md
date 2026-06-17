# Kim Inouye — site hand-off

Deploy-ready static site. No build step, no framework, no server. Drag the
folder into Vercel (or any static host) and it works.

## Files

```
index.html                 The site (single page)
site-tweaks.jsx            In-page design Tweaks panel (optional — see below)
tweaks-panel.jsx           Tweaks panel framework (optional)
uploads/
  kim_brannigan_241.jpg    Hero portrait
Case Study Template.html   Reusable case study page (duplicate to add new ones)
case-studies/
  paypal-focus-time.html   Example case study (prefilled header, body = placeholders)
  etsy-design-ops.html     Example case study (prefilled header, body = placeholders)
```

## Deploy (Vercel)

1. Put this folder's contents at the project root so `index.html` is the homepage.
2. Deploy. Nothing else to configure.
3. Fonts load from Google Fonts; React/Babel load from a CDN (only used by the
   optional Tweaks panel — see below).

## Page structure (top to bottom)

Hero → Services (engagement spectrum) → Clients → Contact → Footer.

The "Selected work" case-study section is in `index.html` but **commented out**.
To enable it: search for `SELECTED WORK (hidden for now)`, uncomment the
`<section id="work">…</section>` block, and add a `Work` link back to the nav
(`<li><a href="#work">Work</a></li>`).

## Locked design decisions

- Palette: **Cocoa** (warm). Two alternates (Linen, Stone) live in the CSS.
- Photo treatment: **Soft** grayscale.
- Services layout: **4 columns** on desktop, single-column stack on mobile.
- Service detail bullets: **off**.
- Clients layout: **two-column**.

These are set on `<html data-*>` by a small inline script near the bottom of
`index.html` (the `TWEAK_DEFAULTS` block). Change the values there to re-bake a
different default.

## Accessibility

- Body text 18px; all reading text ≥16px; smallest labels 12px.
- Text contrast meets WCAG AA on all three palettes (primary 16.9:1,
  secondary 6.4:1, tertiary ~4.8:1 against the background).

## The Tweaks panel (optional — remove for production)

`index.html` loads React, Babel, `tweaks-panel.jsx`, and `site-tweaks.jsx` to
power an in-page design panel. It stays hidden in a normal browser, but it adds
CDN downloads you don't need in production.

To remove it: delete the four `<script>` tags at the very bottom of
`index.html` (React, react-dom, babel, and the two `text/babel` tweak files),
the `<div id="tweaks-mount"></div>`, and the `tweak-defaults`/apply scripts —
**but keep** the small inline script that sets the `data-palette`, `data-svc`,
`data-portrait`, and `data-clients` attributes, since those drive the locked
design choices above. Then you can delete `site-tweaks.jsx` and
`tweaks-panel.jsx`.

## Adding a case study

1. Duplicate `Case Study Template.html` into `case-studies/` and rename it
   (e.g. `case-studies/my-engagement.html`).
2. Fill in every `[bracketed]` placeholder; swap the striped image placeholders
   for `<img>` tags.
3. Add a row to the (re-enabled) Selected work list in `index.html`.

## Notes

- Hero copy and all service/proof figures are the real, approved text.
- Email links point to `kim@aperi.co`; LinkedIn to the existing profile URL.
- Brand names in Clients are typographic wordmarks (no logos), per request.
