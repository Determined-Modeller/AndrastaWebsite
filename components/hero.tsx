import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Andrasta Marine</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">{siteConfig.mission}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{siteConfig.heroCopy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/our-solution" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90">
            Explore Our Solution
          </Link>
          <Link href="/product-lines" className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/60">
            View Product Lines
          </Link>
          <Link href="/contact" className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent/60">
            Contact Andrasta Marine
          </Link>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-6 shadow-panel">
        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border bg-bg">
          <p className="max-w-xs text-center text-sm text-muted">
            Hero render placeholder: AUV / semi-sub system visual block.
            <br />
            TODO: replace with approved production render.
          </p>
        </div>
      </div>
    </section>
  );
}
