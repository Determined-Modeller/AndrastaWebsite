import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { faqs, payloadFamilies } from '@/data/site';
export const metadata: Metadata = { title: 'Technology | Andrasta Marine', description: 'Hydrogen-hydride architecture, remote replenishment, and mission logic.' };
export default function TechnologyPage(){return <><SectionWrapper heading="Technology overview"><p className="text-sm leading-8 text-slate-300">Andrasta Marine combines vessel architecture, hydrogen-electric power, payload families, autonomy logic, and remote replenishment into a practical offshore operating model.</p></SectionWrapper><SectionWrapper heading="Hydrogen-hydride architecture"><p className="text-sm leading-8 text-slate-300">The vessel is designed around low-pressure hydride storage and a ruggedised hydrogen-electric powertrain to improve offshore handling and deployment logistics.</p></SectionWrapper><SectionWrapper heading="Remote replenishment"><p className="text-sm leading-8 text-slate-300">Andrasta Marine is developing remote refuelling and replenishment around hydride fuel logistics. The company owns patent pending IP for a droppable refuelling robot. Principle-level functionality has been demonstrated; further validation is required before operational deployment.</p></SectionWrapper><SectionWrapper heading="Autonomy and mission logic"><p className="text-sm leading-8 text-slate-300">Commercially deployed vessel autonomy software and features are integrated where appropriate for waypoint missions, patrol patterns, linger modes, recovery planning, and repeatable data capture.</p></SectionWrapper><SectionWrapper heading="Quiet sensing platform"><p className="text-sm leading-8 text-slate-300">Design intent includes minimal moving parts, polymer hull construction, low electrical signature, and low bubble generation to support data quality in survey and inspection operations.</p></SectionWrapper><SectionWrapper heading="Payload families"><div className="grid gap-4 md:grid-cols-2">{payloadFamilies.map((p)=><article key={p.name} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5"><h3 className="text-white">{p.name}</h3><p className="mt-2 text-sm text-slate-300">{p.summary}</p></article>)}</div></SectionWrapper><SectionWrapper heading="Safety and handling philosophy"><p className="text-sm leading-8 text-slate-300">Public claims are intentionally conservative. Detailed hazardous-system design, certifications, and quantitative envelopes are released progressively.</p></SectionWrapper><SectionWrapper heading="FAQ"><div className="space-y-3">{faqs.map((f)=><details key={f.question} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4"><summary className="text-sm font-semibold text-white">{f.question}</summary><p className="mt-2 text-sm text-slate-300">{f.answer}</p></details>)}</div></SectionWrapper></>}
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
