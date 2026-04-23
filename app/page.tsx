import Link from 'next/link';
import { CtaBlock } from '@/components/cta-block';
import { BaseCard } from '@/components/cards';
import { Hero } from '@/components/hero';
import { SectionWrapper } from '@/components/section-wrapper';
import { caseStudies, payloadFamilies, productLines, siteConfig } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper heading="Mission and Positioning" intro="Andrasta Marine is focused on persistent offshore operations where continuity of evidence and reduced disturbance matter.">
        <p className="max-w-4xl text-sm leading-8 text-muted sm:text-base">{siteConfig.heroCopy}</p>
      </SectionWrapper>
      <SectionWrapper heading="Operational model" intro="The operating model is designed to reduce dependence on high-cost support fleets and increase time-on-task.">
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            title="Our Solution"
            detail="Route-following operations with waypoint return, in-situ refuelling concepts, and multimodal deployment pathways for offshore flexibility."
          >
            <Link href="/our-solution" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Explore Our Solution →
            </Link>
          </BaseCard>
          <BaseCard
            title="Technology"
            detail="Hydrogen-electric propulsion, low-noise loiter profile, low-pressure storage concept, and modular payload families."
          >
            <Link href="/technology" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Review Technology →
            </Link>
          </BaseCard>
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Product lines preview">
        <div className="grid gap-4 md:grid-cols-2">
          {productLines.map((product) => (
            <BaseCard key={product.name} title={product.name} subtitle={product.scale} detail={product.summary} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Payload and sensor families">
        <div className="grid gap-4 md:grid-cols-3">
          {payloadFamilies.map((payload) => (
            <BaseCard key={payload.name} title={payload.name} detail={payload.note} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Case study highlight">
        <BaseCard
          title={caseStudies[0].title}
          subtitle={caseStudies[0].framing}
          detail="Initial case framing focuses on persistent evidence continuity for emissions enforcement in the North Sea."
        >
          <Link href="/case-studies" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
            View Case Studies →
          </Link>
        </BaseCard>
      </SectionWrapper>
      <CtaBlock />
    </>
  );
}
