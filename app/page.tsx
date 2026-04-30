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
      <SectionWrapper
        heading="Vessel OEM for persistent offshore survey"
        intro="Andrasta Marine integrates commercial-off-the-shelf and bespoke marine, hydrogen, sensing, autonomy, and payload systems into complete offshore products."
      >
        <p className="max-w-4xl text-sm leading-8 text-muted sm:text-base">{siteConfig.heroCopy}</p>
      </SectionWrapper>
      <SectionWrapper
        heading="The operating problem"
        intro="Useful offshore information is often limited by endurance, handling, recovery, replenishment, and support-vessel cost rather than by sensor capability alone."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            title="Support-vessel dependence"
            detail="Conventional survey and inspection campaigns can become tied to vessel availability, mobilisation windows, and the cost of keeping assets on station."
          />
          <BaseCard
            title="Battery and handling limits"
            detail="Battery systems are effective in shorter-duration roles, but larger form factors and repeated offshore redeployment create mass, charging, and wet/dry handling constraints."
          />
          <BaseCard
            title="Decision-quality data"
            detail="Decommissioning and inspection decisions benefit from repeated observations over useful time windows, not only isolated campaign snapshots."
          />
        </div>
      </SectionWrapper>
      <SectionWrapper
        heading="The Andrasta approach"
        intro="Hydride-focused hydrogen-electric vessels, remote replenishment, waypoint mission logic, and modular payload families are combined to improve time-on-task and asset utilisation."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            title="Our Solution"
            detail="Waypoint missions, patrol patterns, linger modes, and recovery planning are structured around practical offshore survey and inspection workflows."
          >
            <Link href="/our-solution" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Explore Our Solution →
            </Link>
          </BaseCard>
          <BaseCard
            title="Technology"
            detail="The architecture is built around hydride-based hydrogen storage, low-pressure storage philosophy, quiet sensing, and patent pending remote refuelling IP."
          >
            <Link href="/technology" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Review Technology →
            </Link>
          </BaseCard>
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Vessel form factors" intro="AndraMini and Andra40 define vessel scale. Mission capability is then configured through payload and operating variants.">
        <div className="grid gap-4 md:grid-cols-2">
          {productLines.map((product) => (
            <BaseCard key={product.name} title={product.name} subtitle={product.scale} detail={product.summary} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Payload and mission families" intro="The payload families are framed as practical mission packages, not unsupported final product claims.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {payloadFamilies.map((payload) => (
            <BaseCard key={payload.name} title={payload.name} detail={payload.note} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Lead commercial focus" intro="The first target application is low-regret environmental survey during and after offshore decommissioning works.">
        <BaseCard
          title={caseStudies[0].title}
          subtitle={caseStudies[0].framing}
          detail="Persistent autonomous survey can support baseline data, repeat transects, environmental observations, and post-works assurance without continuous dependence on support vessels."
        >
          <Link href="/case-studies" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
            View Mission Scenarios →
          </Link>
        </BaseCard>
      </SectionWrapper>
      <CtaBlock />
    </>
  );
}
