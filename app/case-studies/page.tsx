import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { missionUseCases } from '@/data/site';

export const metadata: Metadata = {
  title: 'Mission scenarios | Andrasta Marine',
  description: 'Mission scenario frames for emissions enforcement, offshore inspection, and persistent maritime awareness.',
  alternates: { canonical: '/case-studies' },
  openGraph: { title: 'Mission scenarios | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function CaseStudiesPage() {
  return (
    <SectionWrapper heading="Mission scenarios" intro="These are use-case frames for technical and commercial discussion, not claimed completed customer deployments.">
      <div className="space-y-4">
        {missionUseCases.map((study) => (
          <article key={study.slug} className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6">
            <h3 className="text-lg font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-sm text-cyan-200">{study.framing}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Challenge</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.operationalProblem}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Current operational limitation</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.currentLimitation}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Andrasta Marine approach</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.andrastaApproach}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Outputs and evidence</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.outputs}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Likely benefit</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.likelyBenefit}</p></div>
              <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">Readiness/status</h4><p className="mt-1 text-sm leading-7 text-slate-300">{study.readinessCaveat}</p></div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
