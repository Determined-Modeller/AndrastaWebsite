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
          High-integrity marine systems for advanced subsea operations.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm font-medium text-text">
          Subsea fibre, autonomy, and containerised marine systems.
        </p>
      </div>
    </section>
  );
}
