import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { technologyThemes } from '@/data/site';

export const metadata = {
  title: 'Technology',
  description:
    'Public overview of Andrasta Marine hydrogen-electric endurance, low-signature platform, modular integration, and engineering assurance architecture.'
};

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Technology"
        headingAs="h1"
        heading="An integrated architecture for persistent subsea operations."
        intro="The development focus is the relationship between energy, vehicle form, thermal management, payload duty cycle, autonomy interfaces, replenishment, and assurance. Public information is intentionally limited to the architecture and validation approach."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologyThemes.map((theme, index) => (
            <BaseCard
              key={theme.title}
              eyebrow={String(index + 1).padStart(2, '0')}
              title={theme.title}
              detail={theme.detail}
            />
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Integration model"
          heading="Specialist partners. Explicit interfaces. One evidence baseline."
          intro="Andrasta Marine's role is to control the physical subsea system architecture and integrate specialist capability where it is stronger than building everything in-house."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <BaseCard title="Autonomy + navigation" detail="Defined interfaces for partner algorithms, navigation, remote oversight, and command-and-control within an agreed operating boundary." />
            <BaseCard title="Sensors + payloads" detail="Mission payload integration with explicit power, data, geometry, thermal, acoustic, and evidence requirements." />
            <BaseCard title="Marine engineering" detail="Vehicle architecture, packaging, propulsion, materials, handling, and environmental design treated as one physical system." />
            <BaseCard title="Test + assurance" detail="Controlled requirements, hazards, configurations, procedures, results, anomalies, and acceptance evidence." />
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Publication boundary"
        heading="Credibility comes from stating what is known, what is being tested, and what remains controlled."
        intro="Exact endurance, range, depth, hydrogen inventory, acoustic signature, detailed storage construction, and customer-specific configurations are not published here. They will be released through validated datasheets or controlled technical engagement when appropriate."
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/product-lines"
            className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View platform roadmap
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
