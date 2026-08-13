import Image from 'next/image';
import Link from 'next/link';

import { ScalePath } from '@/components/scale-path';
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
        headingAs="h1"
        heading="Persistence is delivered by the complete operating system."
        intro="Andrasta integrates vehicle, energy, payload, manufacture, replenishment, and deployment logistics into a repeatable mission architecture - extending useful operating windows without designing every mission around a specialist support vessel."
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
          <p className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-300/60 sm:bottom-5 sm:left-5">
            Indicative system render
          </p>
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Multimodal mission logistics"
          heading="Move, operate, replenish, and re-task as one loop."
          intro="The architecture connects shore and port logistics, flexible insertion, persistent vehicle cohorts, recovery of opportunity, and subsea replenishment. This is where endurance becomes operating leverage."
        >
          <SystemExplainer />
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="System architecture"
        heading="Four layers. One controlled interface spine."
        intro="Each layer can evolve independently while common physical, energy, data, and handling interfaces preserve integration discipline."
      >
        <div className="grid divide-y divide-slate-700/70 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/50 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {systemLayers.map((layer) => (
            <div key={layer.index} className="p-6 lg:p-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-200/80">{layer.index}</p>
              <h3 className="mt-5 text-lg font-semibold text-white">{layer.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{layer.detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Design for manufacture + scale"
          heading="Build quickly at compact scale. Preserve the architecture as capability grows."
          intro="Modular construction and additive manufacture are applied where they shorten iteration, reduce tooling or part count, improve weight, or simplify repair. Conventional marine fabrication remains where it provides the better engineering answer."
        >
          <ScalePath />
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="System engagement"
        heading="Start with the mission, payload, or logistics constraint."
        intro="Andrasta works with operators, primes, and technology partners to define the operating concept and identify where endurance, replenishment, deployment flexibility, or cohort performance changes the mission case."
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
