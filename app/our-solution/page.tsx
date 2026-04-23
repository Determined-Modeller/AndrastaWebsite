import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { designPrinciples, solutionApproach, solutionProblems } from '@/data/site';

export const metadata = {
  title: 'Our Solution',
  description: 'Operational framing for Andrasta Marine autonomous offshore deployment model.'
};

export default function OurSolutionPage() {
  return (
    <>
      <SectionWrapper
        heading="Our Solution"
        intro="A model designed to move offshore inspection and awareness from high-cost episodic operations toward persistent, flexible autonomy."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard title="Current constraints">
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
              {solutionProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BaseCard>
          <BaseCard title="Andrasta operational approach">
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
              {solutionApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BaseCard>
        </div>
      </SectionWrapper>
      <SectionWrapper
        heading="Design principles"
        intro="System architecture is framed for manufacturability, operational realism, and low-disturbance mission continuity."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {designPrinciples.map((principle) => (
            <BaseCard key={principle} title={principle} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
