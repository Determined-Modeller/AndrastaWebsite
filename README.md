# Andrasta Marine Frontend (v1)

Production-ready v1 frontend for **Andrasta Marine** built from `docs/frontend-prd.md` using:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static-friendly architecture suitable for AWS Amplify Hosting

## Routes

- `/`
- `/our-solution`
- `/technology`
- `/product-lines`
- `/about`
- `/case-studies`
- `/contact`

## Project structure

- `app/` - route files, layout, metadata, and page content composition
- `components/` - reusable UI components
- `data/site.ts` - centralized structured content and placeholders
- `docs/frontend-prd.md` - source-of-truth requirements
- `IMPLEMENTATION_PLAN.md` - implementation plan followed for v1
- `TODO_CONTENT.md` - unresolved content items to finalize

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Serve locally (production mode)

```bash
npm run build
npm run serve
```

This serves the built app at `http://localhost:3000` (bound to `0.0.0.0` for local/network visibility).

## Quality checks

```bash
npm run lint
npm run build
```

## AWS Amplify Hosting notes

This project is static-friendly and compatible with Amplify’s Next.js hosting support.

Recommended build settings:

- Build command: `npm run build`
- Output: `.next`
- Node runtime: 20+

Optional `amplify.yml` can be added later if environment-specific build customization is required.

## Placeholder policy

Where business-critical values are not confirmed, the site intentionally uses explicit placeholders (not fabricated claims). See `TODO_CONTENT.md`.
