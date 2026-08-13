import Link from 'next/link';

import { ArchitectureSelectionDiagram } from '@/components/architecture-selection-diagram';
import { EnergyRoleDiagram } from '@/components/energy-role-diagram';
import { SectionWrapper } from '@/components/section-wrapper';
import { technologyThemes } from '@/data/site';

const technologyBorders = [
  '',
  'border-t border-slate-700/70 md:border-l md:border-t-0',
  'border-t border-slate-700/70 lg:border-l lg:border-t-0',
  'border-t border-slate-700/70 md:border-l lg:border-l-0',
  'border-t border-slate-700/70 lg:border-l',
  'border-t border-slate-700/70 md:border-l lg:border-l'
];

export const metadata = {
  title: 'Technology',
  description:
    'Andrasta Marine hybrid multiphysics architecture for hydrogen-electric endurance, low-signature propulsion, modular payloads, replenishment, and scalable manufacture.'
};

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Technology"
        headingAs="h1"
        heading="The technology is the integration."
        intro="Extreme endurance is a coupled thermophysics, signature, lifecycle, safety, and cost problem. Andrasta optimises the complete architecture around the mission rather than maximising one component metric."
      >
        <ArchitectureSelectionDiagram />
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Hybrid duty cycle"
          heading="Persistence and peak performance are different jobs."
          intro="Once the system architecture is selected, hydride-based hydrogen-electric endurance and the battery power domain can each be sized for the part of the duty cycle they perform best."
        >
          <EnergyRoleDiagram />
        </SectionWrapper>
      </div>

      <div className="border-b border-slate-800/80 bg-slate-950/15">
        <SectionWrapper
          eyebrow="Integrated building blocks"
          heading="One controlled architecture, not a collection of subsystems."
          intro="Physical, energy, payload and command interfaces are developed together so capability can scale without multiplying integration risk."
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
          heading="Build for iteration. Design for repeatable manufacture."
          intro="The physical architecture is intended to move from fast prototype learning to reusable production methods without freezing the wrong answer too early."
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
        heading="Specialist capability, integrated through explicit interfaces."
        intro="Andrasta controls the physical subsea architecture and works with specialist partners across autonomy, command-and-control, sensing, fabrication, testing, and assurance."
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
