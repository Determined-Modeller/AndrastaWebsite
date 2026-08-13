# Andrasta Marine dual-use website implementation plan

## Objective

Reposition the public website around Andrasta Marine's near-term dual-use strategy: persistent autonomous subsea systems for civil, security, and defence missions, presented as a complete operating architecture rather than an isolated vehicle.

The release must look credible to offshore operators, primes, supermajors, procurement teams, assessors, and technical partners while avoiding unsupported maturity, performance, certification, customer, or partnership claims.

## Content controls

- Use private founder material to understand the programme, not as public copy or an image source.
- Publish only high-level system architecture, intended mission applications, development status, and supplier-readiness objectives.
- Keep exact performance figures, construction detail, protected partner routes, customer context, and patent-sensitive architecture out of the public site.
- Label development platforms and mission scenarios clearly; do not present concepts as fielded products or completed case studies.
- Describe standards work as a roadmap. Do not imply ISO certification, MOD approval, or contract-specific DEF STAN compliance before evidence exists.
- Do not add a board/team page in this release.

## Information architecture

1. **Home** - immediate dual-use positioning, system thesis, mission markets, platform roadmap, and supplier-readiness signal.
2. **Operating System** - vehicle + energy + payload + replenishment + logistics, with a code-level integration point for a future interactive explainer or iframe.
3. **Technology** - public-safe architecture, low-signature design, modular integration, and evidence-led development.
4. **Platforms** - Manta, AndraSound, AndraHold, and AndraCharge development roadmap with disabled datasheet placeholders.
5. **Missions** - illustrative civil, security, and defence application frames, not claimed customer deployments.
6. **Responsibility** - responsible dual-use governance, safety, export/sanctions, anti-bribery and financial-crime controls, modern-slavery/supply-chain principles, and environmental responsibility.
7. **Company** - focused company model, operating principles, and partner/supplier engagement without team-photo placeholders.
8. **Contact** - direct `info@andrastamarine.com` path and clear enquiry categories; no non-functional form submission.

## Supplier-readiness wording

- **ISO 9001:** state that a quality management system is being implemented, with certification readiness targeted before 2027. Never display a certification mark or state that certification has been achieved.
- **DEF STAN 05-138 Issue 4:** state that the company is building readiness for the MOD Cyber Security Model v4 supplier controls before 2027. Make clear that compliance is contract-specific and depends on the customer-assigned Cyber Risk Profile and supplier-assurance process.
- Present the policy suite and evidence pack as work in progress: quality/configuration control, information security, responsible innovation, export control and sanctions, anti-bribery/counter-fraud, counterparty due diligence, modern slavery, and supplier conduct.

## Visual direction

- Retain the existing restrained dark industrial identity and improve hierarchy, spacing, navigation, and status labelling.
- Replace the current crewed-submarine-style hero with a public-safe autonomous subsea system image.
- Do not publish brochure renders that contain artefacts, unsupported configurations, draft specifications, or ambiguous deployment claims.
- Use layout, diagrams, type, and restrained technical motifs for most explanation; imagery should support credibility rather than carry technical claims.

## Implementation sequence

1. Update central site data and public claim boundaries.
2. Add the Operating System and Responsibility routes.
3. Rework Home, Technology, Platforms, Missions, Company, and Contact around the new narrative.
4. Add a reusable future-explainer component that can later accept an iframe/source without server changes.
5. Add accessible datasheet placeholders backed by nullable URLs so documents can be enabled without redesign.
6. Update navigation, footer, metadata, and content TODOs.
7. Add and inspect the new public-safe imagery.
8. Run type, lint, asset, production-build, route, responsive, and visual checks.
9. Commit and publish through the existing GitHub/AWS Amplify workflow, then verify the live deployment.
