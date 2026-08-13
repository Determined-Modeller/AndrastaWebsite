import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { companyPrinciples } from '@/data/site';

export const metadata = {
  title: 'Company',
  description: 'Andrasta Marine company model, engineering approach, and current development priorities.'
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Company"
        headingAs="h1"
        heading="A UK subsea systems company built around engineering evidence."
        intro="Andrasta Marine is developing persistent autonomous subsea systems and the energy, payload, replenishment, logistics, and assurance architecture required to operate them credibly."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            titleAs="h2"
            title="What we build"
            detail="Development platforms, physical system architecture, mission-support concepts, controlled interfaces, and engineering evidence for civil, security, and defence applications."
          />
          <BaseCard
            titleAs="h2"
            title="How we work"
            detail="A focused system-authority model: retain control of the platform architecture and integrate specialist capability through explicit partner, supplier, IP, and assurance boundaries."
          />
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Operating principles"
          heading="Credibility is designed into the programme."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {companyPrinciples.map((principle) => (
              <BaseCard key={principle.title} title={principle.title} detail={principle.detail} />
            ))}
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Current priorities"
        heading="Prototype evidence, full-scale integration, and supplier readiness."
        intro="The near-term programme is concentrated on retiring physical integration risk, validating the first evidence set, developing the AndraSound integration path, and implementing the controls required for larger customer and prime-contractor engagement."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard title="Build + test" detail="Generate evidence on energetics, manoeuvring, acoustic behaviour, payload integration, maintainability, and the assumptions that govern scale-up." />
          <BaseCard title="Integrate + demonstrate" detail="Develop controlled partner routes for autonomy, sensing, command-and-control, facilities, marine operations, and customer-backed trials." />
          <BaseCard title="Assure + procure" detail="Build the quality, cyber, responsible-business, supply-chain, and disclosure controls expected by serious customers." />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/responsibility"
            className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Review responsibility + readiness
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white"
          >
            Contact Andrasta Marine
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
