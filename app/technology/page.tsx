import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { payloadFamilies, technologyThemes } from '@/data/site';

export const metadata = {
  title: 'Technology',
  description: 'Technology modules behind Andrasta Marine offshore autonomous operations.'
};

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper heading="Technology" intro="Modular technology themes are presented as an evolving system architecture without overclaiming frozen specifications.">
        <div className="grid gap-4 md:grid-cols-2">
          {technologyThemes.map((theme) => (
            <BaseCard key={theme.title} title={theme.title} detail={theme.detail} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper heading="Payload and partner variant families">
        <div className="grid gap-4 md:grid-cols-3">
          {payloadFamilies.map((payload) => (
            <BaseCard key={payload.name} title={payload.name} detail={payload.note} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
