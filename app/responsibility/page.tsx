import Link from 'next/link';

import { StatusPill } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { responsibilityPillars, supplierReadiness } from '@/data/site';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Responsibility + Supplier Readiness',
  description:
    'Andrasta Marine responsible innovation, business conduct, supply-chain, and supplier-readiness programme.',
  path: '/responsibility/'
});

export default function ResponsibilityPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Responsibility + governance"
        headingAs="h1"
        heading="Responsible by design."
        intro="Andrasta applies the same discipline to governance as engineering: clear accountability, lawful end use, proportionate controls, and evidence that can support serious customers and partners."
      >
        <div className="grid overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/50 md:grid-cols-2">
          {responsibilityPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`p-6 sm:p-8 ${index % 2 === 1 ? 'md:border-l md:border-slate-700/70' : ''} ${index > 1 ? 'border-t border-slate-700/70' : index === 1 ? 'border-t border-slate-700/70 md:border-t-0' : ''}`}
            >
              <h2 className="text-lg font-semibold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Supplier readiness"
          heading="Building for approved-supplier qualification."
          intro="Quality, cyber, governance, and procurement controls are being developed alongside the platform programme so customer qualification can progress on a credible evidence base."
        >
          <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[#07101a]/80">
            {supplierReadiness.map((item, index) => (
              <article
                key={item.standard}
                className={`grid gap-5 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.15fr_1.8fr] lg:items-center ${index > 0 ? 'border-t border-slate-700/70' : ''}`}
              >
                <h2 className="text-lg font-semibold text-white">{item.standard}</h2>
                <div>
                  <StatusPill>{item.status}</StatusPill>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Customer assurance"
        heading="Prepared for the detail behind the pre-qualification form."
        intro="Procurement and partner discussions can address the applicable quality, cyber, information-security, export, business-integrity, supply-chain, and responsible-innovation requirements directly."
      >
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Discuss supplier assurance
        </Link>
      </SectionWrapper>
    </>
  );
}
