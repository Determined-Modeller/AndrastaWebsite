import Link from 'next/link';

import { BaseCard, StatusPill } from '@/components/cards';
import { CtaBlock } from '@/components/cta-block';
import { Hero } from '@/components/hero';
import { SectionWrapper } from '@/components/section-wrapper';
import { missionMarkets, platforms, supplierReadiness, systemLayers } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionWrapper
        eyebrow="The system thesis"
        heading="Persistence is a logistics problem before it is a vehicle specification."
        intro="Useful autonomy depends on the whole operating loop. Andrasta Marine is developing the platform, energy architecture, payload interfaces, and mission-support model together so each part can be tested and improved against a real mission."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {systemLayers.map((layer) => (
            <BaseCard key={layer.index} eyebrow={layer.index} title={layer.title} detail={layer.detail} />
          ))}
        </div>
        <Link
          href="/operating-system"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
        >
          See how the operating system fits together <span aria-hidden="true">→</span>
        </Link>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Dual-use by design"
          heading="One core architecture. Different mission and assurance routes."
          intro="The short-term market strategy spans civil offshore work, security and defence integration, and research applications. Each route has its own operating boundaries, evidence needs, and procurement expectations."
        >
          <div className="grid gap-4 lg:grid-cols-3">
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
        heading="Evidence at compact scale. Integration at mission scale."
        intro="The public roadmap separates what is being used to learn from what is being developed for persistent operations. Detailed performance remains controlled until it is validated and appropriate to release."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {platforms.slice(0, 2).map((platform) => (
            <BaseCard
              key={platform.slug}
              eyebrow={platform.category}
              title={platform.name}
              subtitle={platform.role}
              detail={platform.summary}
            >
              <div className="mt-5">
                <StatusPill>{platform.status}</StatusPill>
              </div>
            </BaseCard>
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
          heading="Building the controls expected by serious customers."
          intro="The roadmap is deliberately explicit about current status. These are implementation targets, not claims of certification or approval already achieved."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {supplierReadiness.map((item) => (
              <BaseCard key={item.standard} title={item.standard} subtitle={item.status} detail={item.detail} />
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
