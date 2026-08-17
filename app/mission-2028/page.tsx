import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Mission 2028',
  description:
    'Mission 2028 is Andrasta Marine’s planned Arctic under-ice transit objective and defining cold-water proof point for persistent hydrogen-electric subsea autonomy.',
  path: '/mission-2028/'
});

export default function Mission2028Page() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14">
        <div className="relative isolate min-h-[620px] overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#030810] shadow-2xl shadow-cyan-950/30 sm:min-h-[660px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_72%_52%,rgba(14,116,144,0.18),transparent_45%),linear-gradient(120deg,rgba(4,7,13,0.98),rgba(4,20,31,0.82))]" />
          <div aria-hidden="true" className="absolute left-[72%] top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />
          <div aria-hidden="true" className="absolute left-[72%] top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/15" />
          <div aria-hidden="true" className="absolute left-[72%] top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
          <div aria-hidden="true" className="absolute left-[72%] top-[8%] h-[84%] w-px bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent" />
          <div aria-hidden="true" className="absolute left-[46%] top-1/2 h-px w-[52%] bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
          <div aria-hidden="true" className="absolute left-[55%] top-[54%] h-px w-[36%] origin-left -rotate-[27deg] border-t border-dashed border-cyan-100/50" />
          <div aria-hidden="true" className="absolute left-[72%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100 bg-cyan-200/40 shadow-[0_0_30px_rgba(103,232,249,0.7)]" />
          <p aria-hidden="true" className="absolute bottom-4 right-5 text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[11rem] lg:text-[15rem]">2028</p>

          <div className="relative z-10 flex min-h-[620px] max-w-3xl flex-col justify-between p-7 sm:min-h-[660px] sm:p-11 lg:p-14">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
              <span>Mission 2028</span>
              <span className="h-px w-8 bg-cyan-200/40" aria-hidden="true" />
              <span>High Arctic</span>
            </div>

            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-cyan-100/75">Cold. Quiet. Persistent.</p>
              <h1 className="max-w-[16ch] text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                A planned under-ice transit. A public test of a different design starting point.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Before 2029, Andrasta Marine intends to take a hydrogen-electric autonomous system beneath Arctic ice as the defining demonstration of its cold-water endurance thesis.
              </p>
            </div>

            <p className="max-w-xl border-l border-cyan-200/35 pl-5 text-sm leading-7 text-slate-400">
              The objective is deliberately simple to state and difficult to achieve: prove useful persistence where energy, heat, logistics, communications, and recovery margin are least forgiving.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Why the High Arctic"
        heading="The environment removes the easy answers."
        intro="Cold water exposes weaknesses in stored energy, thermal management, supporting systems, reliability, and mission logistics. It is therefore the clearest place to demonstrate whether the complete architecture has been designed for endurance rather than assembled around a favourable component specification."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard title="A hard proof point" detail="A single, intelligible objective that makes cold-water system performance visible beyond the engineering community." />
          <BaseCard title="A growing operating frontier" detail="Arctic activity and distance sailed are increasing while infrastructure, intervention, and environmental constraints remain severe." />
          <BaseCard title="A Scottish design lineage" detail="A programme grounded in Shetland operating reality and developed through Andrasta Marine’s Edinburgh engineering centre." />
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="What Mission 2028 stands for"
          heading="Evidence at the edge of the operating envelope."
          intro="The public proposition is not a release of the vehicle design. It is a commitment to submit the architecture to a mission that customers, partners, and investors can understand."
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/45 lg:grid-cols-3">
            {[
              ['01', 'Endurance with purpose', 'Remain useful for long enough to deliver information across real decision windows.'],
              ['02', 'Cold-water efficiency', 'Demonstrate that thermal behaviour and stored energy were designed as one system problem.'],
              ['03', 'Credible ambition', 'Retire risk through physical evidence, independent scrutiny, and appropriately controlled partnerships.']
            ].map(([index, title, detail], itemIndex) => (
              <article key={title} className={`p-7 sm:p-8 ${itemIndex > 0 ? 'border-t border-slate-700/70 lg:border-l lg:border-t-0' : ''}`}>
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200/70">{index}</p>
                <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-xs leading-6 text-slate-500">
            Route, vehicle configuration, navigation architecture, endurance reserves, and sustainment details will remain controlled while the mission basis and partnerships mature.
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Mission partnerships"
        heading="The right proof point attracts the right collaborators."
        intro="Andrasta Marine welcomes appropriate discussions with cold-region operators, research and environmental organisations, test and assurance bodies, payload specialists, and strategic partners able to strengthen a credible High Arctic demonstration."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
            Discuss Mission 2028
          </Link>
          <Link href="/investors" className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white">
            Read the investment thesis
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
