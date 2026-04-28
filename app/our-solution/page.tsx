import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';
import { solutionContent } from '@/data/site';

export const metadata: Metadata = {
  title: 'Operational model | Andrasta Marine',
  description: 'Operational argument for persistent offshore autonomy and lower-disturbance mission delivery.',
  alternates: { canonical: '/our-solution' },
  openGraph: { title: 'Operational model | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function OurSolutionPage() {
  return (
    <>
      <SectionWrapper heading="The operational problem" intro="Offshore sensing and inspection are often constrained by cost, support assets, and mission continuity gaps.">
        <ul className="grid gap-3 md:grid-cols-2">
          {solutionContent.operationalProblems.map((item) => (
            <li key={item} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4 text-sm leading-7 text-slate-300">{item}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper heading="The Andrasta approach" intro="A mission model oriented toward persistence, low disturbance, and deployment flexibility.">
        <ul className="grid gap-3 md:grid-cols-2">
          {solutionContent.andrastaApproach.map((item) => (
            <li key={item} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4 text-sm leading-7 text-slate-300">{item}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper heading="Operating model" intro="Structured mission flow from planning through recovery or redeployment.">
        <ol className="space-y-3">
          {solutionContent.operatingModel.map((item, index) => (
            <li key={item.step} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4">
              <p className="text-sm font-semibold text-white">{index + 1}. {item.step}</p>
              <p className="mt-1 text-sm leading-7 text-slate-300">{item.detail}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper heading="Where this fits">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">{solutionContent.fitStatement}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/product-lines" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Explore platforms</Link>
          <Link href="/contact" className="rounded-full border border-slate-500/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-white">Discuss a mission profile</Link>
        </div>
      </SectionWrapper>
    </>
  );
}
