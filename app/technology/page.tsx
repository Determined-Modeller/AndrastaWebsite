import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { Faq } from '@/components/site-sections';
import { faqs, payloadFamilies } from '@/data/site';

export const metadata: Metadata = {
  title: 'Technology | Andrasta Marine',
  description: 'Technology architecture overview: autonomy, hydrogen-electric power, payload pathways, and deployment concepts.',
  alternates: { canonical: '/technology' },
  openGraph: { title: 'Technology | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper heading="Technology architecture overview" intro="Andrasta Marine frames technology as an integrated autonomy + power + payload + deployment architecture.">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">
          The system direction is communicated conservatively: publishable architecture information is shared publicly, while detailed quantitative performance and validation outcomes remain controlled until release-ready.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Hydrogen-electric architecture" intro="High-level architecture direction for endurance-oriented offshore operations.">
        <p className="text-sm leading-8 text-slate-300">
          Hydrogen-electric power pathways are being developed to support mission continuity and extended time-on-task objectives. Public content does not claim finalized range, efficiency, or certification outcomes before validation.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Low-noise mission profile" intro="Lower-disturbance operation matters for sensing quality and evidence continuity.">
        <p className="text-sm leading-8 text-slate-300">
          Low-noise loiter and survey posture is intended to support repeatable measurements and operational suitability in contexts where disturbance profile influences sensing outcomes.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Payload architecture" intro="Payload families are structured as modular mission-package pathways.">
        <div className="grid gap-4 md:grid-cols-3">
          {payloadFamilies.map((family) => (
            <article key={family.name} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5">
              <h3 className="text-base font-semibold text-white">{family.name}</h3>
              <p className="mt-2 text-sm text-cyan-200">{family.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{family.detail}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-amber-200">Status: {family.status}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Deployment and refuelling concept" intro="Operational concept and development pathway, not a finished service claim.">
        <p className="text-sm leading-8 text-slate-300">
          Deployment and refuelling approaches are discussed as staged concepts designed to reduce repeated support-vessel dependency over mission cycles. Detailed operational envelopes and procedures remain publication pending.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Safety and operational realism" intro="Claims are intentionally bounded and publishable.">
        <p className="text-sm leading-8 text-slate-300">
          Andrasta Marine avoids overstatement in public materials and does not present unverified hazardous-system, certification, or production-readiness claims as established fact.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Technical FAQ">
        <Faq items={faqs} />
      </SectionWrapper>
    </>
  );
}
