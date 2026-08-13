import Image from 'next/image';
import Link from 'next/link';

import { SectionWrapper } from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Operating System',
  description:
    'How Andrasta Marine combines autonomous subsea vehicles, energy, payloads, replenishment, and logistics into one operating architecture.',
  path: '/operating-system/'
});

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
          eyebrow="Explore the system"
          heading="Follow the system from mission need to platform delivery."
          intro="Compare the mission logistics, examine the multiphysics integration, or trace how learning and common interfaces move through the platform family."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#mission-operating-model"
              className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Compare the operating model
            </Link>
            <Link
              href="/technology"
              className="inline-flex rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
            >
              Examine the technology
            </Link>
            <Link
              href="/product-lines"
              className="inline-flex rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
            >
              View the programme architecture
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
