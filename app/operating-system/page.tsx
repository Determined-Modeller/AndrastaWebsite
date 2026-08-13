import Image from 'next/image';
import Link from 'next/link';

import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { SystemExplainer } from '@/components/system-explainer';
import { systemLayers } from '@/data/site';

export const metadata = {
  title: 'Operating System',
  description:
    'How Andrasta Marine combines autonomous subsea vehicles, energy, payloads, replenishment, and logistics into one operating architecture.'
};

export default function OperatingSystemPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Operating System"
        heading="Vehicle + energy + payload + replenishment + logistics."
        intro="The commercial product is the repeatable mission system, not only the underwater vehicle. Andrasta Marine is developing the physical platform and the operating loop together so endurance, handling, assurance, and useful data can be improved as one architecture."
      >
        <div className="relative aspect-[16/8.5] overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950 shadow-2xl shadow-cyan-950/20">
          <Image
            src="/mission-dual-use.webp"
            alt="Autonomous underwater vehicle inspecting subsea energy infrastructure"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-xl text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 sm:bottom-7 sm:left-7">
            Illustrative mission environment · Development-stage system
          </p>
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="The operating bottleneck"
          heading="Endurance alone does not create persistence."
          intro="A mission can still fail commercially or operationally when handling, recovery, resupply, weather, support assets, or the evidence chain are treated separately."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <BaseCard title="Mobilisation" detail="Deployment method, port access, transport, handling, and support assets shape what can be used and when." />
            <BaseCard title="Time on task" detail="Energy, hotel load, payload duty cycle, autonomy, and environmental conditions determine useful operating time." />
            <BaseCard title="Turnaround" detail="Recovery, inspection, energy resupply, payload servicing, and configuration control determine the next mission window." />
            <BaseCard title="Decision evidence" detail="Mission data, vehicle health, test results, anomalies, and provenance must support both operations and assurance." />
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="System architecture"
        heading="Four layers, controlled through one development baseline."
        intro="Each layer can evolve, but interfaces, assumptions, maturity, and test evidence need to remain explicit."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {systemLayers.map((layer) => (
            <BaseCard key={layer.index} eyebrow={layer.index} title={layer.title} detail={layer.detail} />
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Mission cycle"
          heading="Design the loop, then improve it with evidence."
          intro="The development programme is structured around a repeatable operating cycle rather than a single demonstration event."
        >
          <SystemExplainer />
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="Engagement model"
        heading="A practical entry point for operators, primes, and technology partners."
        intro="Conversations can begin with a mission need, a subsystem to integrate, a controlled test environment, or a supplier-assurance requirement. Sensitive performance and design information is shared only through the appropriate review and disclosure route."
      >
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
        >
          Discuss an operating concept
        </Link>
      </SectionWrapper>
    </>
  );
}
