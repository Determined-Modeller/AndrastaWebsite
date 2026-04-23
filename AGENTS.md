# AGENTS.md

## Purpose
This repository contains the frontend website for Andrasta Marine, a credible offshore/maritime technology company focused on autonomous vessel systems. The site should feel like a serious OEM/industrial technology frontend, not a startup landing page.

## Source of truth
- Primary requirements doc: `docs/frontend-prd.md`
- If requirements are underspecified, prefer the most credible B2B maritime/offshore interpretation.
- Do not invent business-critical facts, performance numbers, certifications, or partner claims.
- If copy or contact details are unclear, preserve a marked placeholder or TODO rather than guessing.

## Product/brand direction
- Brand: Andrasta Marine
- Domain: andrastamarine.com
- Tone: slick, high-tech, restrained, technically credible
- Avoid hype-heavy marketing language
- Avoid consumer-SaaS aesthetics
- Prefer serious hierarchy, strong typography, clean spacing, and subtle motion

## Tech stack preferences
- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Static-first or static-friendly where practical
- AWS Amplify Hosting compatible
- Keep dependencies minimal

## Architecture preferences
- Use small reusable components
- Keep content structured and easy to edit
- Centralize repeated content/config/data where sensible
- Prefer maintainability over cleverness
- Avoid premature abstraction
- Avoid large monolithic page files when components would be clearer

## UX/UI rules
- Responsive from the start
- Accessible semantic HTML
- Good keyboard/focus behavior
- Strong defaults for performance
- Subtle transitions only
- Dark or near-dark industrial palette is preferred unless the PRD clearly dictates otherwise

## Content rules
- Use meaningful placeholders, not lorem ipsum
- Placeholder spec cards are acceptable where values are intentionally blank
- Keep sections easy to populate later for team, partners, products, and case studies
- Preserve exact approved headline copy where given in the PRD

## Contact form rules
- Frontend-ready form is acceptable if backend is not explicitly specified
- Include validation and clear success/error states
- Do not hardcode a potentially incorrect production email address without confirmation
- Leave clear TODO markers for unresolved contact details

## SEO and metadata
- Include sensible page metadata
- Include Open Graph basics
- Include favicon/app icon placeholders if final assets are not present
- Use clean route naming and titles

## Delivery workflow
When doing substantial work:
1. Read the PRD first
2. Inspect the existing repo structure
3. Write or update `IMPLEMENTATION_PLAN.md`
4. Implement incrementally
5. Run checks/build
6. Fix issues before concluding
7. Update `TODO_CONTENT.md` with unresolved placeholders

## Quality bar
- Production-ready structure
- No dead code
- No broken routes/imports
- No unnecessary libraries
- No throwaway hackathon patterns
- Code should be understandable by the next engineer without explanation

## What not to do
- Do not add a CMS unless explicitly asked
- Do not add backend infrastructure unless explicitly required
- Do not fabricate technical claims or performance numbers
- Do not overdesign with flashy effects
- Do not treat this like a generic SaaS template site