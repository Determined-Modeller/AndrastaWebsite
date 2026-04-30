import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { caseStudies } from '@/data/site';

export const metadata = {
  title: 'Mission Scenarios',
  description: 'Mission scenarios and application cases for Andrasta Marine offshore survey and inspection workflows.'
};

export default function CaseStudiesPage() {
  return (
    <SectionWrapper
      heading="Mission Scenarios"
      intro="These are application frames for partner discussion and demonstration planning. They are not presented as completed customer case studies."
    >
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <BaseCard key={study.slug} title={study.title} subtitle={study.framing}>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Operational context</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Current limitation</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.limitation}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Andrasta Marine approach</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.approach}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Potential outputs</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.outcomes}</p>
              </div>
            </div>
          </BaseCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
