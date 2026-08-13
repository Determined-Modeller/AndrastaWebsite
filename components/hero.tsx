import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/data/site';

const tags = ['Civil + defence', 'Hydrogen-electric', 'Modular payloads', 'Mission-system integration'];

export function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden border-b border-slate-800 bg-[#04070d]">
      <Image
        src="/hero-dual-use.webp"
        alt="Uncrewed autonomous underwater vehicle operating near offshore subsea infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,13,0.98)_0%,rgba(4,7,13,0.9)_30%,rgba(4,7,13,0.32)_65%,rgba(4,7,13,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,13,0.25)_0%,transparent_55%,rgba(4,7,13,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-7xl items-center px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100">
            Autonomous subsea systems
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            {siteConfig.mission}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {siteConfig.heroCopy}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/operating-system"
              className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-100"
            >
              Explore the operating system
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-slate-400/70 bg-slate-950/25 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:border-cyan-200 hover:text-white"
            >
              Start a partner conversation
            </Link>
          </div>

          <div className="mt-9 flex max-w-2xl flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-500/65 bg-slate-950/45 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute bottom-6 right-5 z-10 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300/80 sm:block sm:right-8">
        Development programme · Product imagery illustrative
      </p>
    </section>
  );
}
