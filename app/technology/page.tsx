import Link from 'next/link';

import { ArchitectureSelectionDiagram } from '@/components/architecture-selection-diagram';
import { EnergyRoleDiagram } from '@/components/energy-role-diagram';
import { SectionWrapper } from '@/components/section-wrapper';
import { technologyThemes } from '@/data/site';
import { createPageMetadata } from '@/lib/page-metadata';

const technologyBorders = [
  '',
  'border-t border-slate-700/70 md:border-l md:border-t-0',
  'border-t border-slate-700/70 lg:border-l lg:border-t-0',
  'border-t border-slate-700/70 md:border-l lg:border-l-0',
  'border-t border-slate-700/70 lg:border-l',
  'border-t border-slate-700/70 md:border-l lg:border-l'
];

export const metadata = createPageMetadata({
  title: 'Technology',
  description:
    'How Andrasta Marine combines hydride hydrogen storage, batteries, thermal management, low-signature propulsion, payloads and replenishment for persistent subsea operations.',
  path: '/technology/'
});

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Technology"
        headingAs="h1"
        heading="Extreme endurance is a whole-system design problem."
        intro="Energy choice cannot be separated from heat, acoustic signature, payload, servicing, safety or cost. Andrasta designs those constraints together around the mission."
      >
        <ArchitectureSelectionDiagram />
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Hybrid duty cycle"
          heading="Hydrogen carries endurance. Batteries deliver peak power."
          intro="Low-pressure hydride hydrogen storage supports persistent demand, while a temperature-managed battery system is configured for propulsion peaks, sensing and high-power payloads."
        >
          <EnergyRoleDiagram />
        </SectionWrapper>
      </div>

      <div className="border-b border-slate-800/80 bg-slate-950/15">
        <SectionWrapper
          eyebrow="Integrated building blocks"
          heading="Capability depends on controlled interfaces."
          intro="Vehicle, energy, payload and command interfaces are developed together so new capability can be added without redesigning the whole platform."
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/50 md:grid-cols-2 lg:grid-cols-3">
            {technologyThemes.map((theme, index) => (
              <article
                key={theme.title}
                className={`p-6 sm:p-8 ${technologyBorders[index]}`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200/75">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-5 text-lg font-semibold text-white">{theme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{theme.detail}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <div className="border-b border-slate-800/80 bg-slate-950/25">
        <SectionWrapper
          eyebrow="Manufacturing strategy"
          heading="Prototype quickly without designing out repeat manufacture."
          intro="Early builds are used to close physical risk quickly, while common interfaces and production methods carry the useful learning into repeatable systems."
        >
          <div className="grid gap-10 rounded-3xl border border-slate-700/70 bg-[linear-gradient(120deg,rgba(8,47,73,0.24),rgba(4,7,13,0.9))] p-6 sm:p-9 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Additive where it earns its place.</p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Printed structures and tooling can shorten design loops, consolidate parts, reduce weight, and support repairable modular construction. Conventional composite and metal processes remain part of the same production system.
              </p>
            </div>
            <div className="divide-y divide-slate-700/70 border-y border-slate-700/70">
              {[
                ['Prototype', 'Rapid geometry, controls, energetics, and payload learning.'],
                ['Scale', 'Common modules and interfaces carried into mission-size vehicles.'],
                ['Lifecycle', 'Inspection, replacement, refurbishment, and fleet learning designed in.']
              ].map(([title, detail]) => (
                <div key={title} className="grid gap-2 py-5 sm:grid-cols-[0.35fr_1fr]">
                  <h3 className="font-semibold text-cyan-100">{title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Integration model"
        heading="Own the platform. Integrate specialist capability where it is stronger."
        intro="Andrasta controls the physical subsea architecture and defines the interfaces used by specialist partners in autonomy, command-and-control, sensing, fabrication, testing and assurance."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/product-lines"
            className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View platforms
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white"
          >
            Discuss technical integration
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
