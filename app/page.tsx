import Image from 'next/image';
import Link from 'next/link';

import { BaseCard, StatusPill } from '@/components/cards';
import { CtaBlock } from '@/components/cta-block';
import { Hero } from '@/components/hero';
import { LogisticsComparator } from '@/components/logistics-comparator';
import { SectionWrapper } from '@/components/section-wrapper';
import { missionMarkets, platforms, supplierReadiness } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionWrapper
        id="mission-operating-model"
        eyebrow="Mission operating model"
        heading="Endurance becomes persistence when the logistics change with it."
        intro="A vehicle must remain taskable, fuelled and serviceable for the full decision window. Andrasta designs the vehicle and its support model as one system."
      >
        <div className="mb-7 grid gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-950/10 px-5 py-5 sm:grid-cols-[0.42fr_1fr] sm:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Why compare the operating model?</p>
          <p className="text-sm leading-7 text-slate-300">
            Conventional campaigns repeatedly reunite the vehicle and its support chain. Andrasta separates those dependencies so vehicles can follow waypoints, remain on task and use distributed sustainment until the information is actionable or the mission and service state calls for recovery.
          </p>
        </div>
        <LogisticsComparator />
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            See the mission value stories <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Understand the energy architecture <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Link
          href="/mission-2028"
          className="group relative mt-12 grid overflow-hidden rounded-3xl border border-cyan-300/25 bg-[radial-gradient(circle_at_82%_50%,rgba(34,211,238,0.17),transparent_26%),linear-gradient(120deg,rgba(4,7,13,0.98),rgba(5,30,43,0.82))] p-7 transition hover:border-cyan-200/50 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12"
        >
          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Mission 2028 · High Arctic</p>
            <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              A planned Arctic under-ice transit before 2029.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              A clear public objective for Andrasta&apos;s cold-water endurance thesis, and a defining proof point for a system designed around persistence from the outset.
            </p>
          </div>
          <div className="relative z-10 mt-7 flex items-end justify-between gap-6 lg:mt-0 lg:block lg:text-right">
            <span className="text-5xl font-semibold tracking-[-0.06em] text-white/15 sm:text-7xl">2028</span>
            <span className="ml-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/35 text-cyan-100 transition group-hover:border-cyan-100 group-hover:bg-cyan-100 group-hover:text-slate-950" aria-hidden="true">→</span>
          </div>
        </Link>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Dual-use by design"
          heading="One core architecture, configured for civil and dual-use missions."
          intro="The vehicle and energy architecture remain common. Payloads, operating boundaries, evidence and procurement routes change with the mission."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {missionMarkets.map((market) => (
              <BaseCard key={market.title} eyebrow={market.label} title={market.title} detail={market.detail} />
            ))}
          </div>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            Explore mission applications <span aria-hidden="true">→</span>
          </Link>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Near-term development"
        heading="Prototype quickly. Carry the learning into mission-scale systems."
        intro="Manta closes physical and integration risk quickly. AndraSound carries the lead persistent architecture into an operationally useful platform."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {platforms.slice(0, 2).map((platform) => (
            <article key={platform.slug} className="group overflow-hidden rounded-3xl border border-slate-700/70 bg-[#07101a]/90">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={platform.imageUrl}
                  alt={`${platform.name} indicative technical wireframe`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.015]"
                />
                <p className="absolute bottom-3 left-3 text-[8px] font-medium uppercase tracking-[0.15em] text-slate-300/50">
                  Indicative system render
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">{platform.category}</p>
                  <StatusPill>{platform.status}</StatusPill>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{platform.name}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-100">{platform.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{platform.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/product-lines"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
        >
          View the platform roadmap <span aria-hidden="true">→</span>
        </Link>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-[linear-gradient(90deg,rgba(8,47,73,0.22),rgba(15,23,42,0.18))]">
        <SectionWrapper
          eyebrow="Supplier readiness"
          heading="Built for customer qualification as well as technical performance."
          intro="Quality, cyber, governance and supplier controls are developing alongside the vehicles, so procurement evidence does not become a late programme constraint."
        >
          <div className="grid divide-y divide-slate-700/70 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/50 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {supplierReadiness.map((item) => (
              <div key={item.standard} className="p-6 lg:p-7">
                <p className="text-lg font-semibold text-white">{item.standard}</p>
                <p className="mt-2 text-sm font-medium text-cyan-100">{item.status}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about#responsibility"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            Review governance and supplier readiness <span aria-hidden="true">→</span>
          </Link>
        </SectionWrapper>
      </div>

      <CtaBlock />
    </>
  );
}
