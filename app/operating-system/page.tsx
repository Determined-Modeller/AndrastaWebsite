import Image from 'next/image';
import Link from 'next/link';

import { ScalePath } from '@/components/scale-path';
import { SectionWrapper } from '@/components/section-wrapper';

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
        heading="Persistence changes the mission when the logistics change with it."
        intro="Andrasta connects autonomous vehicles, conformal hydride hydrogen storage, replenishment and flexible deployment into one operating architecture."
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

      <div className="border-y border-slate-800/80 bg-slate-950/20">
        <SectionWrapper
          eyebrow="Design for manufacture + scale"
          heading="Scale the platform without redesigning the operating system."
          intro="Common interfaces carry energy, payload, autonomy, handling and service learning forward. Additive manufacture is applied where it improves iteration, part count, weight or repair; conventional marine fabrication remains where it is the stronger answer."
        >
          <ScalePath />
        </SectionWrapper>
      </div>

      <SectionWrapper
        eyebrow="System engagement"
        heading="Bring the mission constraint."
        intro="We can test where endurance, replenishment, deployment flexibility or cohort performance changes the operating case."
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
