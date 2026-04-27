import Link from 'next/link';

export function CtaBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8">
      <div className="rounded-xl border border-border bg-surface p-8 shadow-panel">
        <h2 className="text-2xl font-semibold tracking-tight text-text">Operational conversations start with mission context.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Share your inspection, awareness, or emissions-monitoring objective and Andrasta Marine can map an initial operational concept.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90">
            Contact Andrasta Marine
          </Link>
        </div>
      </div>
    </section>
  );
}
