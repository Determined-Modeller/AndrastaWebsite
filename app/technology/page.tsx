import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { payloadFamilies, technologyThemes } from '@/data/site';

export const metadata = {
  title: 'Technology',
  description: 'Hydrogen-electric, hydride-focused technology architecture behind Andrasta Marine offshore autonomous operations.'
};

export default function TechnologyPage() {
  return (
    <>
      <SectionWrapper
        heading="Technology architecture"
        intro="Andrasta Marine combines vessel design, hydrogen-electric power, hydride storage, mission autonomy, remote replenishment, and modular payloads into a complete offshore product architecture."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {technologyThemes.map((theme) => (
            <BaseCard key={theme.title} title={theme.title} detail={theme.detail} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Hydride-focused by design"
        intro="The differentiator is not simply adding hydrogen to an AUV. The vessel, powertrain, handling approach, and replenishment chain are designed around hydride-based hydrogen storage from the start."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BaseCard
            title="Low-pressure storage philosophy"
            detail="The public design intent is to use low-pressure hydride storage to improve practical handling, shock tolerance, and operational flexibility without publishing unvalidated performance numbers."
          />
          <BaseCard
            title="Ruggedised hydrogen-electric powertrain"
            detail="Hydrogen-electric propulsion is framed around endurance, quiet operation, and useful offshore utilisation rather than unsupported range or depth claims."
          />
          <BaseCard
            title="Remote replenishment pathway"
            detail="Andrasta Marine owns IP for a droppable refuelling robot, with patent pending protection. The concept has demonstrated principle-level functionality and requires further validation before operational deployment."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Autonomy and mission logic"
        intro="Autonomy is presented conservatively: repeatable mission execution, remote monitoring, patrol and linger behaviours, and recovery planning. No autonomy figures are published."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <BaseCard
            title="Waypoint-based survey"
            detail="Mission plans can be structured around repeatable survey routes, patrol patterns, station-keeping windows, and return or recovery logic for practical offshore workflows."
          />
          <BaseCard
            title="Commercially deployed autonomy features"
            detail="The operating concept can integrate commercially deployed vessel autonomy software and features where appropriate, without claiming unsupported AI or fully autonomous decision-making capability."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        heading="Quiet sensing platform"
        intro="The vessel architecture is intended to support better data quality by reducing avoidable self-noise and operational disturbance."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BaseCard title="Minimal moving parts" detail="A quiet operating profile supports environmental survey and acoustic inspection workflows." />
          <BaseCard title="Low bubble generation" detail="Reduced disturbance is useful where observation quality matters over repeated mission windows." />
          <BaseCard title="Polymer hull design intent" detail="A low electrical and acoustic signature is part of the wider sensing-quality proposition." />
          <BaseCard title="Higher-quality observations" detail="The objective is decision-useful information over longer operating windows, not isolated campaign snapshots." />
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Payload and mission families" intro="Payload families define practical mission packages while detailed performance and maturity data remain publication pending.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {payloadFamilies.map((payload) => (
            <BaseCard key={payload.name} title={payload.name} detail={payload.note} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
