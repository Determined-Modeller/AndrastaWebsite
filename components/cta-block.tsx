import Link from "next/link";

export function CtaBlock() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),rgba(15,22,36,0.95)_42%,rgba(4,7,13,1)_100%)] p-8 shadow-2xl shadow-cyan-950/20 sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Operational conversations start with mission context.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Share your inspection, awareness, or emissions-monitoring objective and Andrasta Marine can map an initial operational concept.
          </p>

          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Contact Andrasta Marine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
