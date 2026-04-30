import Link from 'next/link';
import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { designPrinciples, solutionApproach, solutionProblems } from '@/data/site';

export const metadata = {
  title: 'Our Solution',
  description: 'Operational framing for Andrasta Marine autonomous offshore survey and inspection model.'
};

export default function OurSolutionPage() {
  return (
    <>
      <SectionWrapper
        heading="Our Solution"
        intro="Andrasta Marine is focused on moving selected offshore survey and inspection work away from high-cost episodic campaigns and toward persistent, practical autonomous operations."
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
        heading="Operating model"
        intro="The operating concept is built around useful mission persistence: plan, deploy, survey, linger or patrol, recover, replenish, and redeploy."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            title="Plan and deploy"
            detail="Missions are structured around decommissioning survey, hull inspection, or environmental monitoring objectives before deployment method and payload configuration are selected."
          />
          <BaseCard
            title="Survey, patrol, or linger"
            detail="Waypoint-based mission logic supports repeatable transects, patrol patterns, station-keeping windows, and longer observation periods where decision-quality data matters."
          />
          <BaseCard
            title="Recover, replenish, redeploy"
            detail="Hydride-focused remote replenishment is intended to reduce the friction of repeated deck recovery and improve practical asset utilisation over multiple mission windows."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Why this matters"
        intro="The value proposition is not just endurance. It is the combination of endurance, handling, recovery, replenishment, quiet operation, and useful data continuity."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {designPrinciples.map((principle) => (
            <BaseCard key={principle} title={principle} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Initial commercial focus"
        intro="The first commercial pathway is environmental survey during and after offshore decommissioning works. Ad hoc hull inspection is the secondary target application."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            title="Decommissioning environmental survey"
            detail="Longer time-on-task and repeatable mission logic can support baseline survey data, works-phase observation, and post-works assurance without continuous support-vessel dependence."
          />
          <BaseCard
            title="Ad hoc hull inspection"
            detail="Low-disturbance operation with acoustic or camera-capable payloads can support targeted inspection planning and anomaly review without claiming class-approved inspection capability at this stage."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Demonstration-led next step" intro="The current priority is credible partner-led validation, not unsupported public performance claims.">
        <BaseCard
          title="Discuss a demonstration mission"
          detail="Andrasta Marine is seeking partners where the operating problem is clear, the data need is useful, and a controlled demonstration can validate the workflow."
        >
          <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
            Contact Andrasta Marine →
          </Link>
        </BaseCard>
      </SectionWrapper>
    </>
  );
}
