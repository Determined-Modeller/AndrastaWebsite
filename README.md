# Andrasta Marine Frontend (v1)

Production-ready v1 frontend for **Andrasta Marine** built from `docs/frontend-prd.md` using:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static-friendly architecture suitable for AWS Amplify Hosting

> Recovery note: `main` was restored to the known-good website baseline after the later Codex content pass caused build instability. This note is documentation-only and does not change the application or deployment configuration.

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


## Asset policy (avoid binary patch issues)

All brand/hero image binaries must live directly in the repository under `public/` and be committed to git.
Do not rely on temporary upload paths (for example `/tmp/user_uploaded_attachments/...`) for long-term project state.

Required files:

- `public/andrasta-logo.svg`
- `public/hero-vessel.svg`
- `public/icon.svg`
- `public/apple-touch-icon.svg`

Verify assets at any time:

```bash
npm run check:assets
```

## Quality checks

```bash
npm run lint
npm run build
```



## AWS Amplify deployment (no code edits required)

This repository is now preconfigured for static Amplify Hosting:

- Next.js static export is enabled (`output: "export"`)
- Build output is generated to `out/`
- `amplify.yml` is included and points artifacts to `out/`
- `.nvmrc` pins Node 20 for consistent builds

### Deploy steps

1. Push this repo/branch to your Git provider.
2. In AWS Amplify, create a new app from that repo/branch.
3. Amplify will auto-detect `amplify.yml`; do not override build settings.
4. Deploy.

After deploy, the full site routes are statically served and visible without additional code edits.

## AWS Amplify Hosting notes

This project is configured for static Amplify Hosting using Next.js export output.
## AWS Amplify Hosting notes

This project is static-friendly and compatible with Amplify’s Next.js hosting support.

Recommended build settings:

- Build command: `npm run build`
- Output: `out`
- Node runtime: 20+

`amplify.yml` is already included and should be used as-is for deployment.
- Output: `.next`
- Node runtime: 20+

Optional `amplify.yml` can be added later if environment-specific build customization is required.

## Placeholder policy

Where business-critical values are not confirmed, the site intentionally uses explicit placeholders (not fabricated claims). See `TODO_CONTENT.md`.
