import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { MissionEconomicsModel } from '@/components/mission-economics-model';
import { SectionWrapper } from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'For Investors',
  description:
    'The Andrasta Marine investment thesis: persistent subsea autonomy, distributed sustainment, cold-water efficiency, disciplined scale-up, and transparent mission economics.',
  path: '/investors/'
});

export default function InvestorsPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="For investors"
        headingAs="h1"
        heading="Persistent autonomy is an operating model, not an endurance specification."
        intro="Andrasta Marine is building a common subsea architecture around the cost and capability constraints that determine whether persistent systems can operate at fleet scale."
      >
        <div className="grid overflow-hidden rounded-3xl border border-cyan-300/20 bg-[linear-gradient(125deg,rgba(8,47,73,0.28),rgba(4,7,13,0.94)_58%)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-9 lg:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">The thesis</p>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-10 tracking-tight text-white sm:text-3xl sm:leading-[1.35]">
              Endurance creates enterprise value only when it reduces the total support burden, expands the useful decision window, and can be manufactured and sustained as a fleet.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Andrasta integrates vehicle, hydrogen-electric energy, payload, distributed replenishment, manufacture, and lifecycle as one controlled architecture. The objective is not the longest-running demonstrator. It is repeatable mission capability with fewer forced reunions between the vehicle and an expensive support chain.
            </p>
          </div>
          <div className="grid border-t border-slate-700/70 lg:border-l lg:border-t-0">
            {[
              ['01', 'Own the architecture', 'Retain the system interfaces and evidence that compound across platforms.'],
              ['02', 'Expose the support cost', 'Measure vessel days, recovery events, service time, and useful days on task.'],
              ['03', 'Scale against demand', 'Add repeat capacity when customer commitments justify tooling and supply-chain depth.']
            ].map(([index, title, detail]) => (
              <div key={title} className="border-t border-slate-700/70 p-6 first:border-t-0 sm:p-7">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200/70">{index}</p>
                <h2 className="mt-3 text-base font-semibold text-white">{title}</h2>
                <p className="mt-2 text-xs leading-6 text-slate-400">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Mission economics"
          heading="Put the support chain inside the unit cost."
          intro="A recoverable vehicle can appear inexpensive while mobilisation, vessel time, weather delay, recovery, turnaround, and lost observation time sit elsewhere in the campaign budget. The useful comparator is cost per verified, decision-grade day on task."
        >
          <MissionEconomicsModel />
          <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-950/45 px-5 py-5 sm:px-6">
            <p className="text-sm leading-7 text-slate-300">
              <span className="font-semibold text-white">Levelised mission cost</span> = annualised platform and support-node capital + mobilisation + vessel and crew support + recovery and refit + energy + maintenance + expected loss, divided by verified mission-days meeting the required coverage and data standard.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Market context"
        heading="More activity. Longer distances. The same unforgiving environment."
        intro="High North maritime activity is increasing while polar operations remain infrastructure-constrained, environmentally sensitive, and expensive to support. That strengthens the case for quiet systems designed to remain useful in cold water."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <BaseCard eyebrow="2013–2023" title="+37%" subtitle="Unique ships in the Arctic Polar Code area" detail="Approximately 500 additional unique vessels entered the area over the ten-year period reported by PAME." />
          <BaseCard eyebrow="2013–2023" title="+111%" subtitle="Aggregate distance sailed" detail="Distance sailed increased from 6.1 million to 12.9 million nautical miles across the same reporting area." />
          <BaseCard eyebrow="Design implication" title="Cold water is not a niche condition" subtitle="It changes the system economics" detail="Thermal behaviour, useful energy, reliability, intervention cost, and infrastructure access must be considered together rather than corrected after vehicle selection." />
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500">
          Market context: <a className="text-cyan-100 transition hover:text-white" href="https://pame.is/news/arctic-shipping-update-37-increase-in-ships-in-the-arctic-over-10-years/" target="_blank" rel="noreferrer">PAME Arctic Shipping Status Report update</a>. Polar operating context: <a className="text-cyan-100 transition hover:text-white" href="https://www.imo.org/en/ourwork/safety/pages/polar-code.aspx" target="_blank" rel="noreferrer">IMO Polar Code</a>.
        </p>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-[linear-gradient(90deg,rgba(8,47,73,0.24),rgba(15,23,42,0.18))]">
        <SectionWrapper
          eyebrow="Cold-water proof point"
          heading="Mission 2028 makes the design thesis visible."
          intro="A planned Arctic under-ice transit before 2029 is intended to demonstrate what it means to design a hydrogen-electric autonomous system around cold-water endurance from the outset."
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/mission-2028" className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              Explore Mission 2028
            </Link>
            <Link href="/technology" className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white">
              Review the architecture
            </Link>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Current position"
        heading="Physical learning first. Capacity when demand earns it."
        intro="The company is intentionally lean through early development, using Manta to close physical risk and carrying validated interfaces and programme evidence into the larger platform family."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard eyebrow="Physical development" title="Manta" detail="First prototype completed in Q2 2026, with first water trials planned for Q4 2026." />
          <BaseCard eyebrow="Pre-integration design" title="AndraSound" detail="The lead persistent mission architecture is defined, with research, design, and development continuing." />
          <BaseCard eyebrow="Scale-up discipline" title="Fleet demand trigger" detail="Dedicated repeat-production capacity follows committed demand, qualified suppliers, and a configuration stable enough to earn tooling." />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/about" className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white">
            Read the company story
          </Link>
          <Link href="/contact" className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
            Discuss investment or partnership
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
