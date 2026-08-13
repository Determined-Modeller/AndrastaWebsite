import Link from 'next/link';

import { BaseCard, StatusPill } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { responsibilityPillars, supplierReadiness } from '@/data/site';

export const metadata = {
  title: 'Responsibility + Supplier Readiness',
  description:
    'Andrasta Marine responsible innovation, business conduct, supply-chain, and supplier-readiness programme.'
};

export default function ResponsibilityPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Responsibility + governance"
        headingAs="h1"
        heading="Responsible innovation is part of the engineering system."
        intro="Autonomous subsea technology is inherently dual-use. Andrasta Marine is building a proportionate governance framework around lawful end use, safety, security, export control, business integrity, supply-chain responsibility, and evidence-based environmental claims."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {responsibilityPillars.map((pillar) => (
            <BaseCard key={pillar.title} title={pillar.title} detail={pillar.detail} />
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Supplier readiness"
          heading="A visible roadmap, without premature badges."
          intro="The statements below describe current implementation objectives. Andrasta Marine does not presently claim ISO 9001 certification or blanket approval under DEF STAN 05-138."
        >
          <div className="space-y-5">
            {supplierReadiness.map((item) => (
              <BaseCard key={item.standard} title={item.standard} detail={item.detail}>
                <div className="mt-5">
                  <StatusPill>{item.status}</StatusPill>
                </div>
              </BaseCard>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-200/[0.04] p-6">
            <h3 className="font-semibold text-white">Important standards boundary</h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
              ISO 9001 certification requires an independent certification process. DEF STAN 05-138 Issue 4 is applied through the MOD Cyber Security Model v4 against a customer-assigned Cyber Risk Profile; the applicable supplier controls and assurance route therefore depend on the contract.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Policy + evidence pack"
        heading="Core controls being prepared for customer and procurement review."
        intro="The public site summarises the direction. Customer due diligence will be supported by controlled policies, registers, evidence, and improvement plans as they are approved."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BaseCard title="Quality + configuration" detail="Requirements, document control, configuration status, change authority, supplier records, test evidence, non-conformance, and corrective action." />
          <BaseCard title="Information + cyber security" detail="Asset and access control, secure handling, incident response, supplier flow-down, improvement planning, and contract-specific cyber evidence." />
          <BaseCard title="Responsible innovation" detail="End-use review, operating boundaries, human accountability, ethical escalation, disclosure classification, and controlled technical engagement." />
          <BaseCard title="Export + sanctions" detail="Classification, destinations, counterparties, end use, licensing, controlled technology transfer, record keeping, and escalation." />
          <BaseCard title="Anti-bribery + financial crime" detail="Conflicts, gifts and hospitality, counter-fraud and AML risk, transparent payment routes, sanctions, and proportionate counterparty/ownership checks." />
          <BaseCard title="People + supply chain" detail="Modern slavery risk, fair work, supplier conduct, proportionate due diligence, reporting, escalation, and remediation expectations." />
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Reference framework"
          heading="Built against the current public guidance."
          intro="The detailed applicability of law, standards, licences, and contractual controls will be confirmed for each activity with appropriate professional support."
        >
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-200 hover:text-white" href="https://www.iso.org/standards/popular/iso-9000-family" target="_blank" rel="noreferrer">ISO 9001 overview ↗</a>
            <a className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-200 hover:text-white" href="https://www.gov.uk/guidance/cyber-security-model" target="_blank" rel="noreferrer">MOD Cyber Security Model v4 ↗</a>
            <a className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-200 hover:text-white" href="https://www.gov.uk/guidance/export-controls-dual-use-items-software-and-technology-goods-for-torture-and-radioactive-sources" target="_blank" rel="noreferrer">UK dual-use export controls ↗</a>
            <a className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-200 hover:text-white" href="https://www.gov.uk/government/publications/bribery-act-2010-guidance" target="_blank" rel="noreferrer">Bribery Act guidance ↗</a>
            <a className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-cyan-200 hover:text-white" href="https://www.gov.uk/government/publications/transparency-in-supply-chains-a-practical-guide" target="_blank" rel="noreferrer">Modern slavery supply-chain guidance ↗</a>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper heading="Procurement, compliance, or supplier-assurance enquiry?">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Contact Andrasta Marine
        </Link>
      </SectionWrapper>
    </>
  );
}
