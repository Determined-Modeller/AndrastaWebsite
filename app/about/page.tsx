import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { companyPrinciples } from '@/data/site';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Company',
  description: 'Andrasta Marine company model, engineering approach, and current development priorities.',
  path: '/about/'
});

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Company"
        headingAs="h1"
        heading="A UK subsea systems company built to own the architecture."
        intro="Andrasta Marine integrates autonomous vehicles, hydrogen-electric energy, payloads, robotic replenishment, manufacturing, and mission logistics for persistent maritime operations."
      >
        <nav aria-label="Company page sections" className="mb-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
          {[
            ['Origins', '#origins'],
            ['How we work', '#how-we-work'],
            ['Founder', '#founder'],
            ['Careers', '#careers']
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-slate-700/80 px-4 py-2 transition hover:border-cyan-300/50 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <section id="origins" className="scroll-mt-36 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[linear-gradient(125deg,rgba(8,47,73,0.3),rgba(4,7,13,0.94)_58%)]">
          <div className="grid gap-9 p-7 sm:p-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:p-11">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Origins</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built from the North Atlantic outward.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-cyan-50/75">
                Ruggedness is not a finishing specification. It is a consequence of understanding where a system must remain useful.
              </p>
            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                Founder and Technical Lead Rhodri Hawkins grew up in Shetland, where severe weather, cold water, remoteness, and long support chains turn maintainability and practical usefulness into immediate engineering concerns. Offshore work still carries substantial vessel, fuel, weather, cost, and environmental overhead where available technology forces repeated intervention. That experience shaped Andrasta&apos;s focus on robust systems that reduce avoidable offshore activity rather than merely perform well in controlled conditions.
              </p>
              <p>
                Before moving into hydrogen systems, Rhodri worked as an engineer in the water sector, developing an early grounding in regulated infrastructure, environmental responsibility, and long-life assets. He subsequently spent more than five years making high-consequence technical decisions across regulated hydrogen and multi-energy projects.
              </p>
              <p>
                In 2025, aged 26, he became the youngest person ever awarded Chartered Chemical Engineer status by IChemE, a record that remains unbroken. Andrasta Marine brings that career path together: North Atlantic operating reality, disciplined process engineering, and a whole-system approach to energy, logistics, payload, manufacture, and lifecycle.
              </p>
            </div>
          </div>
          <div className="grid border-t border-slate-700/70 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Shetland', 'North Atlantic operating context'],
              ['Water sector', 'Infrastructure + lifecycle grounding'],
              ['Chartered at 26', 'Youngest awarded by IChemE'],
              ['Edinburgh', 'Engineering centre of excellence']
            ].map(([title, detail], index) => (
              <div
                key={title}
                className={`p-6 ${index === 1 ? 'border-t border-slate-700/70 sm:border-l sm:border-t-0' : ''} ${index === 2 ? 'border-t border-slate-700/70 lg:border-l lg:border-t-0' : ''} ${index === 3 ? 'border-t border-slate-700/70 sm:border-l lg:border-t-0' : ''}`}
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div id="how-we-work" className="mt-8 scroll-mt-36 grid gap-4 md:grid-cols-3">
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
            title="Capital discipline"
            detail="Remain asset-light through early development, adding dedicated production capacity only when customer commitments justify repeat manufacture."
          />
        </div>

        <section className="mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[linear-gradient(125deg,rgba(8,47,73,0.2),rgba(4,7,13,0.92)_62%)]">
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Scale-up model</p>
              <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                From programme learning to repeat manufacture.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-slate-300">
              <p>
                Scale is designed into the architecture rather than deferred to production. Manta closes physical, integration, and manufacturing risk quickly; AndraSound establishes the repeatable mission platform; and common energy, power, payload, autonomy, handling, and service interfaces carry validated modules and evidence between programmes.
              </p>
              <p>
                Andrasta remains asset-light through development, integrating specialist capability where partners are stronger. Production will be centralised when committed fleet demand supports repeat tooling, qualified suppliers, and dedicated capacity. Customer-specific capability is concentrated in configurable payload, software, and mission-system layers, limiting the need to redesign the underlying vehicle for each application.
              </p>
            </div>
          </div>
          <div className="grid border-t border-slate-700/70 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Close physical risk', 'Rapid build-test learning'],
              ['02', 'Carry evidence forward', 'Common modules + interfaces'],
              ['03', 'Configure capability', 'Payload + mission layers'],
              ['04', 'Repeat manufacture', 'Capacity against fleet demand']
            ].map(([index, title, detail], itemIndex) => (
              <div
                key={title}
                className={`p-6 ${itemIndex === 1 ? 'border-t border-slate-700/70 sm:border-l sm:border-t-0' : ''} ${itemIndex === 2 ? 'border-t border-slate-700/70 lg:border-l lg:border-t-0' : ''} ${itemIndex === 3 ? 'border-t border-slate-700/70 sm:border-l lg:border-t-0' : ''}`}
              >
                <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200/70">{index}</p>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div id="founder" className="mt-12 scroll-mt-36 grid gap-9 border-y border-slate-700/70 py-10 lg:grid-cols-[0.34fr_1fr] lg:gap-14">
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

      <div id="careers" className="scroll-mt-36 border-t border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Careers"
          heading="Build difficult systems with a disciplined team."
          intro="Andrasta Marine expects to grow selectively across marine engineering, autonomy, energy systems, manufacturing, test, and assurance as programmes mature."
        >
          <div className="grid gap-6 rounded-3xl border border-slate-700/70 bg-[linear-gradient(120deg,rgba(8,47,73,0.2),rgba(4,7,13,0.92))] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">No open roles are listed at present.</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Future opportunities will be published here as testing, customer programmes, and production demand justify them. Specialist partners and suppliers can still introduce relevant capability through the contact route.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
            >
              Introduce capability
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
