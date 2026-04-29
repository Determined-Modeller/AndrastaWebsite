import Link from 'next/link';

export function CtaBlock() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
      <div className="rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),rgba(15,22,36,0.95)_42%,rgba(4,7,13,1)_100%)] p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">Discuss a demonstration mission</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Start a technical conversation focused on decommissioning survey or ad hoc hull inspection use cases.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950">Discuss a demonstration mission</Link>
      </div>
    </section>
  );
}
