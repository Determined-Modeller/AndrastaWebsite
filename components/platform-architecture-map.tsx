const sharedInterfaces = ['Energy', 'Power', 'Payload', 'Autonomy', 'Service'];

const platformNodes = [
  {
    number: '02',
    name: 'AndraSound',
    role: 'Prove the mission platform',
    accent: 'border-cyan-300/40 bg-cyan-950/20'
  },
  {
    number: '03',
    name: 'AndraHold',
    role: 'Expand payload and power',
    accent: 'border-slate-600/80 bg-slate-950/65'
  }
];

export function PlatformArchitectureMap() {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_52%_24%,rgba(14,116,144,0.17),rgba(4,7,13,0.97)_52%)] shadow-2xl shadow-cyan-950/15">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/70 px-6 py-5 sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">Programme Architecture</p>
        <p className="max-w-sm text-sm leading-6 text-slate-400">Shared interfaces carry learning and validated modules between platforms.</p>
      </div>

      <div className="relative p-5 sm:p-7 lg:p-9">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_0.95fr_1.18fr] lg:items-stretch lg:gap-8">
          <article className="relative flex min-h-48 flex-col justify-between rounded-2xl border border-slate-600/80 bg-slate-950/65 p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold tabular-nums text-slate-500">01</span>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Manta</h3>
              <p className="mt-2 text-sm font-medium text-cyan-100">Learn fast</p>
            </div>
            <span className="absolute -right-8 top-1/2 hidden h-px w-8 bg-gradient-to-r from-cyan-300/20 to-cyan-300/70 lg:block" aria-hidden="true" />
          </article>

          <article className="relative flex min-h-48 flex-col justify-between rounded-2xl border border-cyan-300/30 bg-cyan-950/15 p-6 shadow-[0_0_32px_rgba(34,211,238,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Common Interface Spine</p>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/45" />
                <span className="h-px w-5 bg-cyan-300/45" />
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-200">
              {sharedInterfaces.map((item, index) => (
                <li key={item} className={`flex items-center gap-2 ${index === sharedInterfaces.length - 1 ? 'col-span-2' : ''}`}>
                  <span className="h-1 w-1 rounded-full bg-cyan-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <span className="absolute -right-8 top-1/2 hidden h-px w-8 bg-gradient-to-r from-cyan-300/70 to-cyan-300/20 lg:block" aria-hidden="true" />
          </article>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {platformNodes.map((platform) => (
              <article key={platform.name} className={`flex items-center gap-5 rounded-2xl border p-5 ${platform.accent}`}>
                <span className="text-xs font-semibold tabular-nums text-slate-500">{platform.number}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{platform.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto hidden h-8 w-px bg-gradient-to-b from-cyan-300/20 to-blue-300/60 lg:block" aria-hidden="true" />

        <article className="mt-5 grid items-center gap-5 rounded-2xl border border-blue-300/25 bg-blue-950/15 p-5 sm:grid-cols-[auto_1fr_auto] sm:px-6 lg:mt-0">
          <span className="text-xs font-semibold tabular-nums text-blue-200/45">04</span>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold text-white">AndraCharge</h3>
            <p className="text-sm text-blue-100">Sustain the family</p>
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-200/65">Distributed Support Layer</p>
        </article>
      </div>

      <figcaption className="sr-only">
        Manta accelerates physical learning. A common interface spine carries that learning into AndraSound and AndraHold, while AndraCharge supports the platform family as a distributed sustainment layer.
      </figcaption>
    </figure>
  );
}
