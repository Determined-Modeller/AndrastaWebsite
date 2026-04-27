import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { partnerPlaceholders, teamPlaceholders } from '@/data/site';

export const metadata = {
  title: 'About Us',
  description: 'Andrasta Marine company profile, team placeholders, and partner placeholders.'
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper heading="About Andrasta Marine" intro="Company information is intentionally concise for v1 while preserving clear structure for future expansion.">
        <p className="max-w-3xl text-sm leading-7 text-muted">
          Andrasta Marine is developing autonomous offshore systems for persistent maritime awareness, inspection, and evidence continuity in operationally demanding environments.
        </p>
      </SectionWrapper>
      <SectionWrapper heading="Team" intro="Placeholder cards are production-ready containers for future name, role, image, and profile details.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamPlaceholders.map((member) => (
            <BaseCard key={member.title} title={member.title} subtitle={member.subtitle} detail={member.detail} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Partners" intro="Partner card structure is ready for logos, role descriptions, and collaboration context.">
        <div className="grid gap-4 md:grid-cols-3">
          {partnerPlaceholders.map((partner) => (
            <BaseCard key={partner.title} title={partner.title} subtitle={partner.subtitle} detail={partner.detail} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
