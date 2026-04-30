import Link from 'next/link';
import { BaseCard, SpecCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { payloadFamilies, productLines } from '@/data/site';

export const metadata = {
  title: 'Vessel Form Factors',
  description: 'AndraMini and Andra40 vessel form factors for Andrasta Marine offshore operations.'
};

export default function ProductLinesPage() {
  return (
    <>
      <SectionWrapper
        heading="Vessel form factors"
        intro="AndraMini and Andra40 define platform scale. Mission capability is configured through payload families, operating concepts, and partner-specific survey requirements."
      >
        <div className="space-y-6">
          {productLines.map((product) => (
            <div key={product.name} className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <BaseCard title={product.name} subtitle={product.scale} detail={product.summary}>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </BaseCard>
              <SpecCard title={`${product.name} public status`} items={product.specs} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Form factors, not locked variants"
        intro="The vessel scale is separated from the mission package so payloads, replenishment logic, and survey workflows can be matched to the operational problem."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            title="Platform scale"
            detail="AndraMini supports early demonstration, smaller survey workflows, and payload integration. Andra40 is the larger form factor under development for broader offshore logistics and endurance-led missions."
          />
          <BaseCard
            title="Mission configuration"
            detail="Payload families such as AndraBeam, AndraField, AndraRise, and AndraKeep define the sensing or operating package rather than replacing the underlying vessel form factor."
          />
          <BaseCard
            title="Controlled publication"
            detail="Detailed endurance, range, depth, and autonomy figures remain publication pending. Public claims are limited to the current demonstration and development envelope."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Compatible payload families" intro="Payload naming is used to structure conversations around mission fit, not to overstate final product maturity.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {payloadFamilies.map((payload) => (
            <BaseCard key={payload.name} title={payload.name} detail={payload.note} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Demonstration pathway" intro="The immediate commercial priority is to validate useful offshore workflows with partners before publishing detailed performance envelopes.">
        <BaseCard
          title="Discuss a demonstration mission"
          detail="Andrasta Marine is seeking credible test and demonstration partners for decommissioning environmental survey, hull inspection, payload integration, and related offshore monitoring workflows."
        >
          <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
            Contact Andrasta Marine →
          </Link>
        </BaseCard>
      </SectionWrapper>
    </>
  );
}
