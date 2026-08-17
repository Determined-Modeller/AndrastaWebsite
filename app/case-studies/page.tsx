import Link from 'next/link';

import { MissionStorySelector } from '@/components/mission-story-selector';
import { SectionWrapper } from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Missions',
  description:
    'Civil and dual-use value stories for Andrasta Marine persistent autonomous subsea systems.',
  path: '/case-studies/'
});

export default function CaseStudiesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Mission value stories"
        headingAs="h1"
        heading="Start with the decision, not the vehicle."
        intro="Endurance matters when it improves what an operator can know, carry or decide. These cases show how the operating system changes a practical constraint."
      >
        <MissionStorySelector />
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper
          eyebrow="Mission design"
          heading="Design the system around the decision window."
          intro="The useful configuration follows from the evidence required, time on task, payload power, service interval and available logistics."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#mission-operating-model"
              className="inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Compare the operating model
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
            >
              Frame an operating concept
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
