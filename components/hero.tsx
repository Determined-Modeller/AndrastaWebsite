import Image from "next/image";

import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Andrasta Marine
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {siteConfig.mission}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
          {siteConfig.heroCopy}
        </p>
      </div>

      <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <Image
          src="/hero-vessel.png"
          alt="Andrasta Marine vessel concept"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />

        <div className="absolute bottom-0 p-6">
          <p className="text-sm font-medium text-text">
            Persistent, low-disturbance autonomous marine systems.
          </p>
        </div>
      </div>
    </section>
  );
}
