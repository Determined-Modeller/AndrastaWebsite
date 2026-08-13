import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { missionScenarios } from '@/data/site';

export const metadata = {
  title: 'Mission Applications',
  description:
    'Illustrative civil, security, defence, and partner-integration applications for Andrasta Marine autonomous subsea systems.'
};

export default function CaseStudiesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Mission applications"
        headingAs="h1"
        heading="Persistent systems should be judged against a real operating need."
        intro="These application frames guide partner discussions and demonstration planning. They are not presented as completed customer case studies, contracted deployments, or claims of fielded capability."
      >
        <div className="space-y-5">
          {missionScenarios.map((scenario) => (
            <BaseCard
              key={scenario.slug}
              titleAs="h2"
              eyebrow={scenario.market}
              title={scenario.title}
              subtitle={scenario.framing}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-5 border-t border-slate-700/70 pt-6 md:grid-cols-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Mission need</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{scenario.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Andrasta approach</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{scenario.approach}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Potential value</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{scenario.value}</p>
                </div>
              </div>
            </BaseCard>
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Demonstration gate"
          heading="A useful demonstration has a customer question and an acceptance decision."
          intro="Before committing to a trial, the parties should agree the mission boundary, configuration, responsibilities, safety and security controls, evidence to be captured, and what a successful result would allow them to decide next."
        >
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Frame a demonstration
          </Link>
        </SectionWrapper>
      </div>
    </>
  );
}
