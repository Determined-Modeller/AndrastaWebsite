import Image from 'next/image';

import { DatasheetLink, StatusPill } from '@/components/cards';
import { PlatformArchitectureMap } from '@/components/platform-architecture-map';
import { SectionWrapper } from '@/components/section-wrapper';
import { platforms } from '@/data/site';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Platforms',
  description: 'Andrasta Marine autonomous subsea platforms and robotic mission-support systems.',
  path: '/product-lines/'
});

export default function ProductLinesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Platform family"
        headingAs="h1"
        heading="A platform family that carries learning forward."
        intro="Each system closes a different part of the development and operating loop, while common interfaces carry evidence and validated modules into larger platforms."
      >
        <PlatformArchitectureMap />

        <div className="mt-12 space-y-7">
          {platforms.map((platform, index) => (
            <article
              id={platform.slug}
              key={platform.slug}
              className="group grid scroll-mt-36 overflow-hidden rounded-3xl border border-slate-700/70 bg-[#07101a]/90 shadow-2xl shadow-cyan-950/10 lg:grid-cols-2"
            >
              <div className={`relative min-h-[280px] sm:min-h-[390px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={platform.imageUrl}
                  alt={`${platform.name} indicative technical wireframe`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-300/55">
                  Indicative system render
                </p>
              </div>

              <div className="flex flex-col p-6 sm:p-9 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/85">{platform.category}</p>
                  <StatusPill>{platform.status}</StatusPill>
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{platform.name}</h2>
                <p className="mt-3 text-sm font-medium text-cyan-100">{platform.role}</p>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{platform.summary}</p>

                <ul className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {platform.highlights.map((highlight) => (
                    <li key={highlight} className="border-l border-cyan-300/35 pl-3 leading-6">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {platform.showDatasheet !== false && (
                  <div className="mt-auto pt-8">
                    <DatasheetLink href={platform.datasheetUrl} product={platform.name} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
