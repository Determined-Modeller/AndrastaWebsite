import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const HERO_VESSEL_SRC = "/hero-vessel.png";

const tags = [
  "Vessel OEM",
  "Hydrogen-electric",
  "Hydride replenishment",
  "Decommissioning survey first",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,#12345a_0%,#07111f_38%,#04070d_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Andrasta Marine
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.mission}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {siteConfig.heroCopy}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
            >
              Discuss a Demonstration Mission
            </Link>

            <Link
              href="/product-lines"
              className="rounded-full border border-slate-500/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-white"
            >
              Explore Vessel Form Factors
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-visible sm:min-h-[460px] lg:min-h-[560px]">
          <Image
            src={HERO_VESSEL_SRC}
            alt="Andrasta Marine vessel concept for autonomous offshore survey and inspection"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-contain object-center drop-shadow-[0_28px_90px_rgba(34,211,238,0.22)]"
          />
        </div>
      </div>
    </section>
  );
}
