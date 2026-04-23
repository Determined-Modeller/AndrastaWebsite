# IMPLEMENTATION_PLAN

## Objective
Deliver a production-ready v1 frontend for Andrasta Marine based on `docs/frontend-prd.md`, using Next.js App Router, TypeScript, and Tailwind CSS with a serious, industrial maritime visual direction.

## Plan
1. **Initialize foundation**
   - Set up Next.js App Router project structure with TypeScript and Tailwind.
   - Configure metadata, static-friendly defaults, and Amplify-compatible scripts.
2. **Create shared architecture**
   - Build reusable layout components (Navbar, Footer, Section wrapper, CTA, cards).
   - Centralize structured site content in data/config modules for maintainability.
3. **Implement required routes**
   - Build `/`, `/our-solution`, `/technology`, `/product-lines`, `/about`, `/case-studies`, and `/contact`.
   - Ensure required copy, placeholders, and hierarchy from the PRD are represented.
4. **Contact UX and placeholders**
   - Implement validated frontend contact form with clear success/error states.
   - Preserve TODO markers for unresolved content (contact email, imagery, specs, partner details).
5. **Quality checks and docs**
   - Run lint and build; resolve any issues.
   - Update `README.md` and `TODO_CONTENT.md` with local run/deploy guidance and unresolved content items.
