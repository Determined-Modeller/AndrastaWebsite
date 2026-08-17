const sharedInterfaces = [
  'Hydride energy',
  'Battery power',
  'Payload volume',
  'Autonomy + C2',
  'Handling + service'
];

const missionPlatforms = [
  {
    name: 'AndraSound',
    label: 'Lead mission architecture',
    detail: 'Integrates persistence, low signature, mission payloads and practical deployment at operational scale.'
  },
  {
    name: 'AndraHold',
    label: 'Capability expansion',
    detail: 'Extends endurance, flooded payload volume and available mission power for larger or special-purpose systems.'
  }
];

export function PlatformArchitectureMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_50%_12%,rgba(14,116,144,0.18),rgba(4,7,13,0.97)_48%)] shadow-2xl shadow-cyan-950/15">
      <div className="border-b border-slate-700/70 px-6 py-7 sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">Programme architecture</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Each system closes a different part of the development and operating loop.
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
          Manta accelerates physical learning. AndraSound and AndraHold carry it into mission-scale platforms. AndraCharge changes how compatible vehicles are sustained.
        </p>
      </div>

      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[0.82fr_0.95fr_1.23fr] lg:items-stretch lg:p-8">
        <article className="relative rounded-2xl border border-slate-700/70 bg-slate-950/60 p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">Physical learning</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Manta</h3>
          <p className="mt-2 text-sm font-medium text-cyan-100">Close risk quickly</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Short build-test loops develop geometry, controls, manufacture and payload integration before those decisions become expensive at mission scale.
          </p>
          <span className="absolute -right-3 top-1/2 hidden h-px w-3 bg-cyan-300/50 lg:block" aria-hidden="true" />
        </article>

        <article className="relative rounded-2xl border border-cyan-300/30 bg-cyan-950/15 p-6 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Common architecture</p>
          <h3 className="mt-4 text-xl font-semibold text-white">Carry learning forward through common interfaces.</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {sharedInterfaces.map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/20 bg-slate-950/55 px-3 py-1.5 text-xs text-slate-200">
                {item}
              </span>
            ))}
          </div>
          <span className="absolute -right-3 top-1/2 hidden h-px w-3 bg-cyan-300/50 lg:block" aria-hidden="true" />
        </article>

        <div className="grid gap-4">
          {missionPlatforms.map((platform) => (
            <article key={platform.name} className="rounded-2xl border border-slate-700/70 bg-slate-950/60 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">{platform.label}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">{platform.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-700/70 bg-slate-950/45 p-5 sm:p-7 lg:px-8">
        <article className="grid gap-5 rounded-2xl border border-blue-300/20 bg-blue-950/10 p-6 lg:grid-cols-[0.28fr_1fr] lg:items-center">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-200/70">Distributed sustainment layer</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">AndraCharge</h3>
          </div>
          <p className="text-sm leading-7 text-slate-300">
            Portable fuel and service nodes support compatible vehicles across the family, separating mission endurance from dependence on one fixed recovery and turnaround point.
          </p>
        </article>

        <p className="mt-6 text-sm font-medium leading-7 text-cyan-100">
          Manta accelerates evidence. AndraSound proves the lead architecture. AndraHold expands payload power and volume. AndraCharge changes how the family is sustained.
        </p>
      </div>
    </div>
  );
}
