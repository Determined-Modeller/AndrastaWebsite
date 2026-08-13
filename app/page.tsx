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
        eyebrow="Mission operating model"
        heading="Compare the mission, not just the vehicle."
        intro="Select Civil or Dual-use, then explore the nodes to see where persistence, sustainment and flexible deployment change the operating case."
      >
        <LogisticsComparator />
        <Link
          href="/operating-system"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
        >
          Explore the operating system and scale path <span aria-hidden="true">→</span>
        </Link>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Dual-use by design"
          heading="One core architecture. Different mission and assurance routes."
          intro="The short-term market strategy is focused on civil and dual-use programmes. Each route has its own operating boundaries, evidence needs, and procurement expectations."
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
        heading="Fast physical learning. Mission-scale integration."
        intro="Manta drives rapid iteration; AndraSound carries the lead persistent operating architecture. Both sit within the same modular development path."
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
          heading="Building for serious procurement from the outset."
          intro="Quality, cyber, governance, and supplier controls are progressing alongside the platform programme."
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
            href="/responsibility"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
          >
            Review responsibility and readiness <span aria-hidden="true">→</span>
          </Link>
        </SectionWrapper>
      </div>

      <CtaBlock />
    </>
  );
}
