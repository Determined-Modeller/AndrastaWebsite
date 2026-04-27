import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { caseStudies } from '@/data/site';

export const metadata = {
  title: 'Case Studies',
  description: 'Operational case studies for persistent offshore awareness outcomes.'
};

export default function CaseStudiesPage() {
  return (
    <SectionWrapper heading="Case Studies" intro="Reusable case study blocks support future expansion without redesign.">
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <BaseCard key={study.slug} title={study.title} subtitle={study.framing}>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Challenge</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Current operational limitation</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.limitation}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Andrasta Marine approach</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.approach}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Likely outcomes</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{study.outcomes}</p>
              </div>
            </div>
          </BaseCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
