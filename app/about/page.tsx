import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { companyPrinciples } from '@/data/site';

export const metadata = {
  title: 'Company',
  description: 'Andrasta Marine company model, engineering approach, and current development priorities.'
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Company"
        headingAs="h1"
        heading="A UK subsea systems company built to own the architecture."
        intro="Andrasta Marine integrates autonomous vehicles, hydrogen-electric energy, payloads, robotic replenishment, manufacturing, and mission logistics for persistent maritime operations."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            titleAs="h2"
            title="What we build"
            detail="Replenishable autonomous platforms and mission-support systems for civil, security, and defence applications."
          />
          <BaseCard
            titleAs="h2"
            title="How we work"
            detail="A focused system-authority model: retain control of the platform architecture and integrate specialist capability through explicit partner, supplier, IP, and assurance boundaries."
          />
          <BaseCard
            titleAs="h2"
            title="How we scale"
            detail="Capital-disciplined development from an Edinburgh engineering centre, with production centralised against validated fleet demand to capture repeat-manufacture economies of scale."
          />
        </div>

        <div className="mt-12 grid gap-9 border-y border-slate-700/70 py-10 lg:grid-cols-[0.34fr_1fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Founder + technical lead</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Rhodri Hawkins</h2>
            <p className="mt-2 text-sm font-medium text-cyan-100">Chartered Chemical Engineer · CEng MIChemE</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              More than five years&apos; experience in high-consequence system design and technical decision-making across regulated hydrogen and multi-energy projects.
            </p>
          </div>

          <blockquote className="founder-quote relative border-l border-cyan-300/35 pl-8 sm:pl-10">
            <span aria-hidden="true" className="founder-quote-mark founder-quote-mark-open">“</span>
            <div className="relative z-10">
              <p className="text-lg leading-8 text-slate-200">
                I founded Andrasta Marine on the belief that extreme endurance and adversarial operation in an uncrewed context demand a different design starting point. Energy, logistics, replenishment, geometry, acoustic behaviour, payload, manufacture, and lifecycle must be treated as one coupled system problem - not assembled by adding hydrogen or more batteries to an existing development platform.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Across the mission profiles studied and simulated, hydrogen has justified its integration only where it creates additional system-level value. Andrasta Marine&apos;s systems combine replenishment, biomimicry, and geometric multiphysics design with protected IP and retained engineering know-how to pursue greater endurance and, where the architecture allows, simpler supporting systems. Each platform is configured for model-based iteration, manufacture, long service life, and reuse.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                After more than a year of design iteration, simulation, and component testing, our first system is in physical development. We are now preparing the systems for independent validation and opening discussions with development partners, licensees, distributors, and test operators.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The platforms are designed as endurant flexible hydrogen-electric hybrids from the outset, supporting quiet, efficient propulsion and emerging payload demands without surrendering robustness, practical logistics, or a credible route to fleet-scale unit cost.
              </p>
              <footer className="mt-7 flex items-center gap-3 border-t border-slate-700/60 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                <span className="h-px w-8 bg-cyan-300/60" aria-hidden="true" />
                Founder statement
              </footer>
            </div>
            <span aria-hidden="true" className="founder-quote-mark founder-quote-mark-close">”</span>
          </blockquote>
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Operating principles"
          heading="Credibility is designed into the programme."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {companyPrinciples.map((principle) => (
              <BaseCard key={principle.title} title={principle.title} detail={principle.detail} />
            ))}
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Programme status"
        heading="Development maturity, stated directly."
        intro="The platform family advances through staged physical development, pre-integration design, and independent evidence rather than unsupported performance claims."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            eyebrow="Physical development"
            title="Manta"
            detail="The first prototype was completed in Q2 2026, with first water trials planned for Q4 2026."
          />
          <BaseCard
            eyebrow="RD&D ongoing"
            title="AndraSound + AndraHold"
            detail="Platform architecture and pre-integration design are defined while research, design, and development continue."
          />
          <BaseCard
            eyebrow="Validation pathway"
            title="AndraCharge"
            detail="The robotic replenishment system is planned to undergo independent testing as its controlled development programme advances."
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/responsibility"
            className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Review responsibility + readiness
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white"
          >
            Contact Andrasta Marine
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
