# Andrasta Marine website

Production website for [andrastamarine.com](https://andrastamarine.com), built with Next.js App Router, TypeScript, and Tailwind CSS. The site is statically exported and deployed from `main` through the existing AWS Amplify workflow.

## Public routes

- `/` - dual-use positioning and programme overview
- `/operating-system` - vehicle, energy, payload, replenishment, and logistics thesis
- `/technology` - public-safe technology architecture
- `/product-lines` - platform development roadmap and datasheet placeholders
- `/case-studies` - illustrative mission applications
- `/responsibility` - responsible innovation, business conduct, and supplier readiness
- `/about` - company model and current priorities
- `/contact` - direct company contact route
- `/our-solution` - retained approach route for existing links

## Content controls

- Public claims must be supportable and development status must remain explicit.
- Do not publish private performance figures, customer context, protected partner routes, patent-sensitive detail, or restricted technical information.
- ISO 9001 and DEF STAN 05-138 language describes targets, not current certification or blanket approval.
- Product datasheet controls are backed by nullable URLs in `data/site.ts`; leave them disabled until approved PDFs exist.
- The board/team page is intentionally deferred.

## Interactive explainer readiness

`components/system-explainer.tsx` provides a static multimodal-logistics map and an optional iframe path. When an approved interactive explainer exists, pass its URL through the `embedUrl` prop in `app/operating-system/page.tsx`. No hosting or server change is required.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run check:assets
npm run lint
npm run build
```

The production build exports to `out/` for AWS Amplify.

## Required public assets

- `public/andrasta-logo.png`
- `public/AndrastaMinilogo.png`
- `public/hero-dual-use.webp`
- `public/mission-dual-use.webp`
- `public/manta-wireframe.webp`
- `public/andrasound-wireframe.webp`
- `public/andrahold-wireframe.webp`
- `public/andracharge-wireframe.webp`

The operational and platform images are illustrative and are labelled accordingly on the public site. Replace them with approved programme photography and CAD-derived product renders when available.

## Deployment

`amplify.yml` is the source of truth for the existing AWS Amplify build. Keep the current static export and Git-connected deployment path; do not introduce a second hosting stack.
