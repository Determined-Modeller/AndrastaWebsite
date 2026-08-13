import Link from 'next/link';

import { BaseCard, DatasheetLink, StatusPill } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { platforms } from '@/data/site';

export const metadata = {
  title: 'Platforms',
  description: 'Andrasta Marine autonomous subsea platform and mission-support development roadmap.'
};

export default function ProductLinesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Platform roadmap"
        heading="A family built to retire risk in the right order."
        intro="The roadmap progresses from compact evidence generation to persistent mission integration and, later, larger payload and replenishment concepts. Status labels describe the present development stage; they are not availability or fielded-capability claims."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {platforms.map((platform) => (
            <BaseCard
              key={platform.slug}
              eyebrow={platform.category}
              title={platform.name}
              subtitle={platform.role}
              detail={platform.summary}
              className="flex min-h-full flex-col"
            >
              <div className="mt-5">
                <StatusPill>{platform.status}</StatusPill>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                {platform.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <DatasheetLink href={platform.datasheetUrl} product={platform.name} />
              </div>
            </BaseCard>
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Datasheet policy"
          heading="Performance will be published against a controlled configuration."
          intro="Datasheet slots are already built into the platform architecture. They will be activated when the relevant configuration, test basis, maturity statement, and public-release review are complete."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <BaseCard title="Configuration" detail="A product name alone is not enough. Published values will identify the configuration and assumptions they apply to." />
            <BaseCard title="Evidence" detail="Claims will be linked to analysis, test, or supplier evidence appropriate to the maturity and intended audience." />
            <BaseCard title="Release control" detail="Public, commercial, partner-confidential, patent-sensitive, and export-controlled information will remain separated." />
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper heading="Bring a mission, payload, or integration requirement.">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Discuss platform fit
        </Link>
      </SectionWrapper>
    </>
  );
}
