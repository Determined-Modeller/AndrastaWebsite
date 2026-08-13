import Image from 'next/image';
import Link from 'next/link';

import { SectionWrapper } from '@/components/section-wrapper';
import { missionScenarios } from '@/data/site';

export const metadata = {
  title: 'Mission Applications',
  description:
    'Civil and dual-use applications for Andrasta Marine autonomous subsea systems.'
};

export default function CaseStudiesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Mission applications"
        headingAs="h1"
        heading="Two mission routes. One replenishable operating architecture."
        intro="Civil and dual-use cases show where persistent cohorts, in-water replenishment and flexible logistics change the operating model."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {missionScenarios.map((scenario) => (
            <article
              key={scenario.slug}
              className="flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-700/70 bg-[#07101a]/85"
            >
              {scenario.imageUrl && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={scenario.imageUrl}
                    alt={scenario.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <p className="absolute bottom-3 left-3 text-[8px] font-medium uppercase tracking-[0.15em] text-slate-300/50">
                    Indicative system render
                  </p>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/85">{scenario.market}</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">{scenario.title}</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-400">{scenario.framing}</p>

                <div className="mt-7 border-y border-slate-700/70">
                  <div className="grid gap-2 py-5 sm:grid-cols-[0.38fr_1fr]">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Mission need</h3>
                    <p className="text-sm leading-6 text-slate-300">{scenario.challenge}</p>
                  </div>
                  <div className="grid gap-2 border-t border-slate-700/70 py-5 sm:grid-cols-[0.38fr_1fr]">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">System response</h3>
                    <p className="text-sm leading-6 text-slate-300">{scenario.approach}</p>
                  </div>
                </div>

                <div className="mt-auto pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Operating advantage</p>
                  <p className="mt-3 text-lg font-medium leading-8 text-white">{scenario.value}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Compare the operating model"
          heading="See the logistics behind each mission."
          intro="The interactive comparator shows how deployment, cohort operation, replenishment and recovery differ from a conventional campaign."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/operating-system"
              className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Open the mission comparator
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
            >
              Frame an operating concept
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
