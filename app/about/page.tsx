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
        heading="A UK subsea systems company built to own the architecture."
        intro="Andrasta Marine integrates autonomous vehicles, hydrogen-electric energy, payloads, robotic replenishment, manufacturing, and mission logistics for persistent maritime operations."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            titleAs="h2"
            title="What we build"
            detail="Replenishable autonomous platforms and mission-support systems for civil, security, and defence applications."
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
        heading="From rapid physical iteration to persistent system delivery."
        intro="The programme advances Manta development, AndraSound mission-scale integration, partner capability, and supplier qualification in parallel."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard title="Build + test" detail="Advance energetics, manoeuvring, acoustic performance, payload integration, maintainability, and scalable construction." />
          <BaseCard title="Integrate + demonstrate" detail="Combine autonomy, sensing, command-and-control, facilities, marine operations, and customer-relevant mission cases." />
          <BaseCard title="Assure + qualify" detail="Progress the quality, cyber, responsible-business, supply-chain, and procurement controls expected by serious customers." />
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
