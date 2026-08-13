import { operatingCycle } from '@/data/site';

type SystemExplainerProps = {
  embedUrl?: string | null;
};

export function SystemExplainer({ embedUrl = null }: SystemExplainerProps) {
  if (embedUrl) {
    return (
      <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/60 shadow-2xl shadow-cyan-950/20">
        <iframe
          title="Andrasta Marine operating system explainer"
          src={embedUrl}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          className="aspect-video w-full"
        />
      </div>
    );
  }

  // Replace the static map with an approved embedUrl when the interactive explainer is ready.
  return (
    <div
      data-future-interactive-explainer="operating-system"
      className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.13),rgba(4,7,13,0.97)_46%)] px-5 py-8 shadow-2xl shadow-cyan-950/20 sm:px-8 sm:py-10"
    >
      <div className="relative grid gap-8 md:grid-cols-5 md:gap-4">
        <div
          className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent md:block"
          aria-hidden="true"
        />
        {operatingCycle.map((item, index) => (
          <article key={item.step} className="relative text-left md:text-center">
            <div className="relative z-10 flex items-center gap-4 md:flex-col md:gap-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-200/50 bg-slate-950 text-[10px] font-semibold tracking-[0.18em] text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.13)]">
                {item.step}
              </span>
              {index < operatingCycle.length - 1 && (
                <span className="absolute left-5 top-10 h-[calc(100%+2rem)] w-px bg-cyan-300/25 md:hidden" aria-hidden="true" />
              )}
              <div className="md:mt-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid border-t border-slate-700/70 pt-6 text-sm sm:grid-cols-3">
        {['Longer useful operating windows', 'Flexible cohort deployment', 'Fewer specialised support interventions'].map((outcome) => (
          <p key={outcome} className="border-slate-700/70 py-2 font-medium text-slate-200 sm:border-l sm:px-5 first:sm:border-l-0 first:sm:pl-0">
            {outcome}
          </p>
        ))}
      </div>
    </div>
  );
}
