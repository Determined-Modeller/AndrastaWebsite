# IMPLEMENTATION_PLAN

## Objective
Evolve the existing Andrasta Marine site from an early brochure state into a credible programme/platform company frontend while preserving the dark industrial visual direction, route structure, and static AWS Amplify compatibility.

## Plan
1. **Restructure content source of truth**
   - Expand `data/site.ts` with typed interfaces for platforms, mission use cases, technology themes, payload families, trust signals, FAQs, and resources.
   - Replace flat placeholders with publishable, non-fabricated content and explicit pending-status wording.
2. **Add reusable presentation components**
   - Introduce maintainable components (`PageHero`, `ProofRibbon`, `PlatformCard`, `MissionCard`, `SpecStatusTable`, `Faq`, `TrustSignals`) to improve hierarchy without redesigning theme.
3. **Upgrade all required routes**
   - Rebuild `/`, `/our-solution`, `/technology`, `/product-lines`, `/case-studies`, `/about`, and `/contact` content flow and CTAs using the updated data model.
   - Keep copy conservative and separate confirmed/pending information.
4. **Improve navigation/footer and metadata**
   - Add active route styling, consistent CTA language, mature header/footer layout, route-level metadata, canonical settings, robots/sitemap, and safe organisation JSON-LD.
5. **Preserve static deployment compatibility**
   - Keep `output: "export"` and unoptimized images.
   - Ensure Amplify artifacts point to `out/`.
   - Add `typecheck` and static preview scripts.
6. **Contact flow realism and TODO alignment**
   - Replace mock success behaviour with endpoint-driven handling via `NEXT_PUBLIC_CONTACT_ENDPOINT` plus explicit fallback.
   - Add honeypot, loading/error states, and update unresolved items in `TODO_CONTENT.md`.
7. **Validate and deliver**
   - Run lint, typecheck, and build.
   - Commit changes and create PR message.
