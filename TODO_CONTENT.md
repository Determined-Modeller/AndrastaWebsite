# Andrasta Marine content and evidence TODOs

These items are intentionally unresolved. Do not replace them with invented copy, values, badges, or downloads.

1. **Platform datasheets**
   - Approve public configurations, maturity statements, evidence basis, and release classification for Manta, AndraSound, AndraHold, and AndraCharge.
   - Add the approved PDF URLs to `platforms[].datasheetUrl` in `data/site.ts`. The UI will enable the existing download controls automatically.
2. **ISO 9001 evidence**
   - Maintain the public status as a target until an accredited external certification process is complete.
   - Update the site only after the scope, certificate, certification body, and validity can be verified.
3. **DEF STAN 05-138 / CSMv4 evidence**
   - Record contract-specific Cyber Risk Profiles, Supplier Assurance Questionnaire results, Cyber Improvement Plans, and Defence Cyber Certification evidence where applicable.
   - Do not publish a blanket compliance claim.
4. **Procurement policy pack**
   - Approve controlled versions of the quality, cyber, responsible innovation, export/sanctions, anti-bribery/counter-fraud, counterparty due-diligence, modern-slavery, and supplier-conduct documents.
   - Decide which documents should be public downloads and which should be supplied only during due diligence.
5. **Interactive operating-system explainer**
   - Build and approve the animation/interactive experience, including clickable logistics nodes and mission-specific advantage overlays.
   - Pass its approved URL to `SystemExplainer` in `app/operating-system/page.tsx`; the current static logistics map is the no-server-change fallback.
6. **Board and team page**
   - Deliberately deferred from this release. Add only when biographies, roles, photography, permissions, and disclosure wording are approved.
7. **Real programme imagery**
   - Replace illustrative website imagery progressively with approved prototype, integration, and test photography as it becomes public-release ready.
   - Replace the current platform wireframes with controlled CAD-derived renders when public geometry is frozen.
   - Add one strong visual per mission application, with optional interactive hotspots and comparison overlays. The mission data structure and layouts should remain compatible with this expansion.
8. **Contact workflow**
   - Direct email is the production contact route. Add a form only when a real submission backend, privacy notice, retention rule, and response owner are in place.
