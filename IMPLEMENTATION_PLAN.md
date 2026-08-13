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
2. **Technology** - public-safe architecture, low-signature design, modular integration, and evidence-led development.
3. **Platforms** - the interlocking Manta, AndraSound, AndraHold, and AndraCharge programme architecture, with concise public datasheets released only where a useful controlled configuration is ready.
4. **Missions** - image-led civil and dual-use value stories, clearly framed as mission cases rather than completed customer deployments.
5. **Responsibility** - responsible dual-use governance, safety, export/sanctions, anti-bribery and financial-crime controls, modern-slavery/supply-chain principles, and environmental responsibility.
6. **Company** - focused company model, operating principles, and partner/supplier engagement without team-photo placeholders.
7. **Contact** - direct `info@andrastamarine.com` path and clear enquiry categories; no non-functional form submission.

The former Operating System navigation item is retired. Its useful content is distributed deliberately: the homepage owns the mission comparator, Technology owns integration, Platforms owns programme architecture, and Missions owns value stories. The legacy route remains as a lightweight wayfinding page for old links.

## Supplier-readiness wording

- **ISO 9001:** state that a quality management system is being implemented, with certification readiness targeted before 2027. Never display a certification mark or state that certification has been achieved.
- **DEF STAN 05-138 Issue 4:** state that the company is building readiness for the MOD Cyber Security Model v4 supplier controls before 2027. Make clear that compliance is contract-specific and depends on the customer-assigned Cyber Risk Profile and supplier-assurance process.
- Present the policy suite and evidence pack as work in progress: quality/configuration control, information security, responsible innovation, export control and sanctions, anti-bribery/counter-fraud, counterparty due diligence, modern slavery, and supplier conduct.

## Visual direction

- Retain the existing restrained dark industrial identity and improve hierarchy, spacing, navigation, and status labelling.
- Replace the current crewed-submarine-style hero with a public-safe autonomous subsea system image.
- Do not publish brochure renders that contain artefacts, unsupported configurations, draft specifications, or ambiguous deployment claims.
- Use layout, diagrams, type, and restrained technical motifs for most explanation; imagery should support credibility rather than carry technical claims.

## Direction refinement - 13 August 2026

- Reduce defensive qualification and repeated maturity language across public pages.
- Keep standards targets accurate but state them once, without prominent non-certification disclaimers.
- Make the homepage mission comparator the single home of the multimodal logistics thesis.
- Add design-for-manufacture, selective additive manufacturing, modular scale-up, and lifecycle serviceability to the core technology story.
- Replace generic platform cards with image-led product panels using public-safe CAD-style wireframes.
- Present mission applications through mission need, system response, and operating advantage; add dedicated mission imagery in a later visual pass.

## Interactive logistics comparator - 13 August 2026

- Replace the static five-step logistics strip with a native React/SVG mission comparator; do not introduce Flash, video hosting, an iframe, or a new runtime dependency.
- Limit public mission routes to **Civil** and **Dual-use**. Environmental survey remains a civil application rather than a separate market category.
- Show the conventional and Andrasta operating models side by side so the value proposition is visible without relying on long explanatory copy.
- Provide clickable, keyboard-focusable mission nodes with concise contextual detail for deployment, support assets, cohort operation, subsea replenishment, command interfaces, and recovery.
- Animate operating routes using lightweight CSS, respect reduced-motion preferences, and keep all content usable on touch devices and small screens.
- Keep the comparison qualitative until controlled programme evidence supports public numerical claims.
- Remove repeated system-architecture cards and the linear scale path; use the comparator as the primary operational explanation and move programme logic into Platforms.

## Storytelling refinement - 13 August 2026

- Feature the full mission comparator immediately below the homepage hero and remove the earlier generic system-thesis card row.
- Expand the civil route around waypoint tasking, hibernation or continuous service, actionable multi-day and multi-week decision windows, portable fuelling nodes, and long intended service intervals between inspection and maintenance windows.
- Expand the dual-use route around distributed sustainment, vehicle-to-vehicle support, and a hybrid energy split in which hydrogen-electric power carries persistence while a managed battery buffer supplies peak loads.
- Add a dedicated energy-role diagram to the Technology page so battery performance and shared thermal management are explained without overloading the logistics comparator.
- Describe AndraCharge publicly as a portable distributed-sustainment system. Do not publish deployment medium, interface geometry, transfer conditions, control logic, or other enabling implementation detail without a specific release review.
- Precede the energy-role diagram with an extreme-endurance architecture-selection diagram. Show why battery-only endurance, mid-scale liquid hydrogen, ultra-high-pressure hydrogen, and combustion/bulk-liquid AIP can become dominated by thermal, acoustic, containment, safety, compliance, logistics, or lifecycle burdens at the target scale.
- Present the Andrasta thesis as a hybrid multiphysics optimisation across endurance, thermal balance, signature, survivability, lifecycle/recovery, serviceability, safety/compliance, and unit cost, with adversarial design and affordable distributed deployment considered from concept stage.
- Keep the interactive mission comparator in one prominent location on the homepage, preceded by a short explanation of why persistence must be compared at operating-system rather than vehicle level. Do not repeat the full comparator on the Operating System page.
- Name conformal low-pressure hydride storage where it clarifies the hybrid architecture, and explain that separating endurance energy from battery peak power creates electrical headroom for demanding mission appliances without publishing the enabling electrical configuration.

## Mission and programme narrative refinement - 13 August 2026

- Retire the Operating System item from primary navigation. Keep its legacy route only as a concise signpost to the homepage comparator, Technology integration case, and Platforms programme architecture.
- Replace the linear Manta–AndraSound–AndraHold timeline with an interlocking programme map: Manta closes physical-development risk; a common interface spine carries learning; AndraSound proves the lead mission architecture; AndraHold expands flooded payload volume and mission power; AndraCharge provides the cross-platform sustainment layer.
- Replace the repetitive Missions card/table layout with an accessible Civil/Dual-use story selector, strong imagery, a decision at stake, the practical barrier, the system response, and explicit decision value.
- Lead the civil story with the UK offshore-decommissioning evidence problem: removal remains the regulatory starting point; persistent, repeatable ecological evidence helps operators evaluate high-cost, high-consequence decisions where alternatives may legally be considered.
- Lead the dual-use story with affordable configurable capability: large flooded payload volume, hydride endurance, a configurable battery power domain, quiet efficient propulsion over a usable seakeeping window, and selective reduction of auxiliary acoustic/thermal machinery.

## Scale-up and discovery refinement - 13 August 2026

- Keep the public website as a restrained credibility and qualification surface rather than a public investor deck.
- Make the commercial scale logic explicit once on the Company page: rapid physical learning, common interfaces and evidence, customer configuration in payload and mission layers, and centralised repeat production only when committed fleet demand justifies dedicated capacity.
- Narrow the Contact page to the company's current engagement priorities rather than presenting every possible commercial route with equal prominence.
- Add page-specific canonical metadata, a concise XML sitemap, crawler guidance, and public-safe organisation structured data using only already-disclosed company and founder information.
- Do not add public market-sizing graphics, competitor matrices, unconfirmed partner or board signals, speculative pipeline language, or additional evidence imagery before controlled release is appropriate.

## Implementation sequence

1. Update central site data and public claim boundaries.
2. Add the Operating System and Responsibility routes.
3. Rework Home, Technology, Platforms, Missions, Company, and Contact around the new narrative.
4. Add a native interactive logistics comparator that can be extended with future approved media without server changes.
5. Add accessible datasheet controls backed by nullable URLs: publish review-ready Manta and AndraSound PDFs, and omit the AndraHold and AndraCharge controls until useful public configurations are ready.
6. Update navigation, footer, metadata, and content TODOs.
7. Add and inspect the new public-safe imagery.
8. Run type, lint, asset, production-build, route, responsive, and visual checks.
9. Commit and publish through the existing GitHub/AWS Amplify workflow, then verify the live deployment.
