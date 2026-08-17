const demandStates = [
  {
    title: 'Hibernate + watch',
    detail: 'Low-power awareness between active tasks.',
    level: 'w-[24%]'
  },
  {
    title: 'Transit + station-keep',
    detail: 'Efficient continuous mission demand.',
    level: 'w-[58%]'
  },
  {
    title: 'Manoeuvre + appliance burst',
    detail: 'High-power propulsion, sensing and mission appliances.',
    level: 'w-full'
  }
];

export function EnergyRoleDiagram() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_50%_0%,rgba(14,116,144,0.18),rgba(4,7,13,0.97)_48%)] shadow-2xl shadow-cyan-950/15">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-slate-700/70 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">Hybrid energy architecture</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Separate the endurance load from the peak-power load.</h3>

          <div className="mt-7 space-y-3">
            <article className="rounded-2xl border border-cyan-300/30 bg-cyan-950/15 p-5">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-semibold text-white">Hydride hydrogen for endurance</h4>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Conformal low-pressure hydride hydrogen storage carries persistent hotel, transit, loiter and mission demand through electrochemical conversion.</p>
            </article>

            <article className="rounded-2xl border border-blue-300/25 bg-blue-950/15 p-5">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-semibold text-white">Batteries for peak power</h4>
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.55)]" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Configured for peak propulsion, sensing and demanding appliance loads without carrying the complete endurance requirement.</p>
            </article>

            <div className="rounded-2xl border border-slate-600/70 bg-slate-950/65 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Shared thermal architecture</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Maintains the battery within its intended operating environment as part of the integrated power system.</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4 border-b border-slate-700/70 pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Mission demand</p>
              <h4 className="mt-2 text-lg font-semibold text-white">Power demand changes through the mission.</h4>
            </div>
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-slate-600">Low → peak</p>
          </div>

          <div className="mt-6 space-y-6">
            {demandStates.map((state, index) => (
              <article key={state.title}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h5 className="text-sm font-semibold text-white">{state.title}</h5>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{state.detail}</p>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-cyan-200/70">0{index + 1}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800/80">
                  <div className={`${state.level} h-full rounded-full bg-gradient-to-r from-cyan-400/55 via-cyan-300/80 to-blue-300 shadow-[0_0_16px_rgba(34,211,238,0.22)]`} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-700/70 pt-6">
            <p className="text-sm font-medium leading-7 text-cyan-100">
              Separating energy from peak power creates electrical headroom for demanding mission appliances that are difficult to accommodate within a compact, cost-controlled endurance vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
