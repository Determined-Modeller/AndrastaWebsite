import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { partnerPlaceholders, teamPlaceholders } from '@/data/site';

export const metadata = {
  title: 'About Us',
  description: 'Andrasta Marine company profile, engineering philosophy, and partner engagement focus.'
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        heading="About Andrasta Marine"
        intro="Andrasta Marine is a vessel OEM developing hydrogen-powered autonomous marine products for persistent offshore survey, inspection, and environmental evidence-gathering."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            title="Company purpose"
            detail="The company exists to redefine what is possible offshore by reducing support-vessel dependence and improving the continuity of useful survey and inspection data."
          />
          <BaseCard
            title="OEM model"
            detail="Andrasta Marine integrates commercial-off-the-shelf and bespoke marine, hydrogen, sensing, autonomy, and payload systems into complete offshore products."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Engineering philosophy"
        intro="The architecture is deliberately focused on practical offshore handling, controlled public claims, and useful demonstration pathways."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            title="Hydride-focused design"
            detail="Hydrogen is not treated as a late-stage energy module. Vessel scale, powertrain, handling, and replenishment are developed around hydride-based storage logic."
          />
          <BaseCard
            title="Operational realism"
            detail="The priority is useful time-on-task, recovery planning, quiet operation, and repeatable survey data rather than unsupported headline performance figures."
          />
          <BaseCard
            title="Controlled disclosure"
            detail="Performance figures, maturity claims, and detailed operating envelopes are released only when validated and appropriate for public disclosure."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Team" intro="The public team profile is intentionally staged while platform development, partner engagement, and IP protection mature.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamPlaceholders.map((member) => (
            <BaseCard key={member.title} title={member.title} subtitle={member.subtitle} detail={member.detail} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Partners" intro="Current partner conversations are focused on practical demonstration, payload integration, and credible route-to-market development.">
        <div className="grid gap-4 md:grid-cols-3">
          {partnerPlaceholders.map((partner) => (
            <BaseCard key={partner.title} title={partner.title} subtitle={partner.subtitle} detail={partner.detail} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
