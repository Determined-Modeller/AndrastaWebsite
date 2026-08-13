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

  // Replace the static cycle with an approved embedUrl when the interactive explainer is ready.
  return (
    <div
      data-future-interactive-explainer="operating-system"
      className="rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.1),rgba(4,7,13,0.96)_48%)] p-5 shadow-2xl shadow-cyan-950/20 sm:p-8"
    >
      <div className="grid gap-3 lg:grid-cols-5">
        {operatingCycle.map((item, index) => (
          <article key={item.step} className="relative rounded-2xl border border-slate-700/70 bg-slate-950/65 p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">{item.step}</span>
              {index < operatingCycle.length - 1 && (
                <span className="hidden text-cyan-300/60 lg:block" aria-hidden="true">
                  →
                </span>
              )}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
