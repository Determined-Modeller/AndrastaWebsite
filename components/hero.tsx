import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const HERO_VESSEL_SRC = "/hero-vessel.png";

const tags = [
  "Hydrogen-electric",
  "Low-noise loiter",
  "Persistent evidence",
  "Container-scale systems",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,#12345a_0%,#07111f_38%,#04070d_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
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
              href="/our-solution"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
            >
              Explore Our Solution
            </Link>

            <Link
              href="/technology"
              className="rounded-full border border-slate-500/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-white"
            >
              Review Technology
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

        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/70 shadow-2xl shadow-cyan-950/30 sm:min-h-[520px]">
          <Image
            src={HERO_VESSEL_SRC}
            alt="Andrasta Marine vessel concept"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-center p-5 sm:p-8 lg:p-10"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04070d]/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="max-w-sm rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-white">
                Persistent autonomous maritime systems
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Low-disturbance offshore operation, evidence continuity, and flexible deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
