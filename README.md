# Andrasta Marine Website Frontend

Next.js App Router frontend for **Andrasta Marine** with a static-export deployment path for AWS Amplify Hosting.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: "export"`)

## Routes

- `/`
- `/our-solution`
- `/technology`
- `/product-lines`
- `/about`
- `/case-studies`
- `/contact`

## Project structure

- `app/` - route files and metadata
- `components/` - reusable UI components
- `data/site.ts` - structured content model/source of truth
- `docs/frontend-prd.md` - requirements reference
- `TODO_CONTENT.md` - unresolved content placeholders

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Static preview

```bash
npm run build
npm run preview:static
```

Then open `http://localhost:4173`.

## AWS Amplify Hosting

- Static export output is generated to `out/`.
- `amplify.yml` is configured with artifact base directory `out`.
- Build command: `npm run build`.

## Contact form configuration

The contact form posts to an external endpoint only when configured:

- `NEXT_PUBLIC_CONTACT_ENDPOINT`

If unset, the UI shows a clear fallback state and does not fake success.
