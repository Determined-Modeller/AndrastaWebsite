import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { missionMarkets } from '@/data/site';

export const metadata = {
  title: 'Our Approach',
  description: 'The mission-led development approach behind Andrasta Marine autonomous subsea systems.'
};

export default function OurSolutionPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Our approach"
        headingAs="h1"
        heading="Begin with the mission. Control the interfaces. Prove the system."
        intro="Andrasta Marine is developing autonomous subsea capability through controlled, partner-led demonstrations and an engineering evidence spine that can support future procurement and assurance."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard titleAs="h2" title="Mission definition" detail="Agree the operating boundary, payload, environment, decision need, and acceptance evidence before selecting the configuration." />
          <BaseCard titleAs="h2" title="System integration" detail="Control interfaces between the physical platform, energy system, payload, autonomy, command-and-control, and logistics." />
          <BaseCard titleAs="h2" title="Demonstrate + learn" detail="Test against explicit objectives, retain anomalies and configuration history, and use evidence to set the next development baseline." />
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Market routes"
          heading="A common architecture with mission-specific assurance."
          intro="Civil, security, defence, and research customers do not share one procurement or operating model. The core engineering can be reused while the evidence and governance route changes."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {missionMarkets.map((market) => (
              <BaseCard key={market.title} eyebrow={market.label} title={market.title} detail={market.detail} />
            ))}
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper heading="See the complete operating architecture.">
        <Link
          href="/operating-system"
          className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Explore the operating system
        </Link>
      </SectionWrapper>
    </>
  );
}
