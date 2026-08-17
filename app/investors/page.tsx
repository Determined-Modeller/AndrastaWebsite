import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { MissionEconomicsModel } from '@/components/mission-economics-model';
import { SectionWrapper } from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'For Investors',
  description:
    'Andrasta Marine investor information: mission economics, cold-water endurance, platform scale-up, current development and Mission 2028.',
  path: '/investors/'
});

export default function InvestorsPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="For investors"
        headingAs="h1"
        heading="Endurance is valuable when it lowers the cost of staying on task."
        intro="Andrasta designs the vehicle and its field-support system together to reduce vessel days, recovery cycles and lost mission time. The value can be tested through a simple operating model."
      >
        <MissionEconomicsModel />

        <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-950/45 px-5 py-5 sm:px-6">
          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-white">The full comparison:</span> vehicle and support equipment + mobilisation + vessel and crew + energy + maintenance + expected loss, divided by the days delivering the required data.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <BaseCard title="Stay deployed longer" detail="In-field replenishment can move recovery away from every energy cycle, reducing expensive interruptions where the mission and service interval allow it." />
          <BaseCard title="Reuse one architecture" detail="Common energy, power, payload, autonomy and service interfaces carry learning and validated modules into larger systems." />
          <BaseCard title="Scale when demand is real" detail="Andrasta remains lean through development and adds dedicated production capacity when committed fleet demand justifies it." />
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/30">
        <SectionWrapper
          eyebrow="Cold-water opportunity"
          heading="More Arctic activity increases the need for systems that can work efficiently in cold water."
          intro="Polar operations remain difficult, infrastructure-constrained and expensive to support. Those conditions make energy efficiency, low intervention and useful endurance commercially important."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <BaseCard eyebrow="2013–2023" title="+37%" subtitle="Unique ships in the Arctic Polar Code area" detail="Approximately 500 additional unique vessels entered the area over the ten-year period reported by PAME." />
            <BaseCard eyebrow="2013–2023" title="+111%" subtitle="Aggregate distance sailed" detail="Distance sailed increased from 6.1 million to 12.9 million nautical miles across the same reporting area." />
            <BaseCard eyebrow="System implication" title="Cold water changes the economics" detail="Available energy, heat management, reliability, intervention cost and infrastructure access must be designed together." />
          </div>

          <Link
            href="/mission-2028"
            className="group relative mt-10 grid min-h-[330px] overflow-hidden rounded-3xl border border-cyan-300/25 bg-[radial-gradient(circle_at_78%_45%,rgba(34,211,238,0.2),transparent_24%),linear-gradient(120deg,rgba(4,7,13,0.98),rgba(5,30,43,0.86))] p-7 transition hover:border-cyan-200/55 sm:p-10 lg:grid-cols-[1fr_0.45fr] lg:items-center"
          >
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Mission 2028 · High Arctic proof point</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A planned Arctic under-ice transit before 2029.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Mission 2028 turns the cold-water design thesis into a public objective that customers, partners and investors can understand.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                Explore Mission 2028 <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </p>
            </div>
            <div aria-hidden="true" className="relative mt-8 flex items-center justify-center lg:mt-0">
              <div className="absolute h-52 w-52 rounded-full border border-cyan-200/15" />
              <div className="absolute h-36 w-36 rounded-full border border-cyan-200/20" />
              <span className="relative text-7xl font-semibold tracking-[-0.07em] text-white/15 sm:text-8xl">2028</span>
            </div>
          </Link>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Market context: <a className="text-cyan-100 transition hover:text-white" href="https://pame.is/news/arctic-shipping-update-37-increase-in-ships-in-the-arctic-over-10-years/" target="_blank" rel="noreferrer">PAME Arctic Shipping Status Report update</a>. Polar operating context: <a className="text-cyan-100 transition hover:text-white" href="https://www.imo.org/en/ourwork/safety/pages/polar-code.aspx" target="_blank" rel="noreferrer">IMO Polar Code</a>.
          </p>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Current position"
        heading="What is built now, and how the company scales."
        intro="Manta closes physical risk quickly. Validated interfaces and evidence then carry into the mission-scale platform family, with production capacity added against committed demand."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard eyebrow="Physical development" title="Manta" detail="First prototype completed in Q2 2026, with first water trials planned for Q4 2026." />
          <BaseCard eyebrow="Pre-integration design" title="AndraSound" detail="The lead persistent mission architecture is defined, with research, design and development continuing." />
          <BaseCard eyebrow="Scale-up model" title="Fleet demand triggers capacity" detail="Dedicated production follows committed demand, qualified suppliers and a configuration stable enough to justify repeat tooling." />
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
