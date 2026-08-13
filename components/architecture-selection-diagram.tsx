const architecturePressures = [
  {
    title: 'Battery-only endurance',
    strength: 'High peak power and simple onboard electrical distribution.',
    pressure:
      'At extreme endurance and cold soak, thermal conditioning, installed mass, recharge, repeat recovery, and cell lifecycle can become system-defining.'
  },
  {
    title: 'Mid-scale liquid hydrogen',
    strength: 'High gravimetric fuel storage.',
    pressure:
      'Cryogenic containment, insulation, conditioning, boil-off management, and specialist logistics can dominate a mid-size platform.'
  },
  {
    title: 'Ultra-high-pressure hydrogen',
    strength: 'Avoids cryogenic fuel storage.',
    pressure:
      'Containment mass, high-pressure hardware, safety demonstration, compliance work, handling, and cost compound at endurance scale.'
  },
  {
    title: 'Combustion + bulk-liquid AIP',
    strength: 'Mature fuel logistics and established machinery.',
    pressure:
      'Noise, thermal and reaction management, mechanical complexity, maintenance, and survivability conflict with future low-signature persistence.'
  }
];

const optimisationAxes = [
  'Endurance',
  'Thermal balance',
  'Acoustic signature',
  'Survivability',
  'Lifecycle + recovery',
  'Serviceability',
  'Safety + compliance',
  'Unit cost'
];

export function ArchitectureSelectionDiagram() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_50%_0%,rgba(14,116,144,0.17),rgba(4,7,13,0.98)_48%)] shadow-2xl shadow-cyan-950/15">
      <div className="border-b border-slate-700/70 px-6 py-7 sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Extreme-endurance design space</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          The architecture is selected by coupled physics, not one energy-density figure.
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
          At mid-size and extreme endurance, thermal behaviour, signature, handling, safety, compliance, serviceability, survivability, and cost reshape the useful design space.
        </p>
      </div>

      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.25fr_auto_0.75fr] lg:items-stretch lg:gap-5 lg:p-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {architecturePressures.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold leading-6 text-white">{item.title}</h3>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-300/70 shadow-[0_0_14px_rgba(252,211,77,0.28)]" aria-hidden="true" />
              </div>
              <p className="mt-3 text-xs font-medium leading-5 text-slate-300">{item.strength}</p>
              <div className="mt-4 border-t border-slate-700/60 pt-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-200/65">What compounds</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">{item.pressure}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center" aria-hidden="true">
          <div className="flex items-center gap-2 lg:flex-col">
            <span className="h-px w-8 bg-gradient-to-r from-slate-700 to-cyan-300/70 lg:h-8 lg:w-px lg:bg-gradient-to-b" />
            <span className="rounded-full border border-cyan-300/25 bg-slate-950 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-100">Optimise jointly</span>
            <span className="h-px w-8 bg-gradient-to-r from-cyan-300/70 to-slate-700 lg:h-8 lg:w-px lg:bg-gradient-to-b" />
          </div>
        </div>

        <article className="flex flex-col rounded-2xl border border-cyan-300/35 bg-[linear-gradient(145deg,rgba(8,47,73,0.55),rgba(5,12,20,0.96))] p-6 shadow-[0_0_36px_rgba(34,211,238,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">Andrasta design space</p>
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.65)]" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">Hybrid multiphysics architecture</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Mission-appropriate low-pressure hydrogen storage, electrochemical conversion, battery peak-power buffering, and shared thermal management are sized together around the vehicle and duty cycle.
          </p>

          <div className="mt-6 space-y-3 border-t border-cyan-300/20 pt-5 text-sm text-slate-300">
            <p className="border-l border-cyan-300/40 pl-3">No single subsystem is allowed to optimise at the expense of the whole vehicle.</p>
            <p className="border-l border-cyan-300/40 pl-3">Cost, manufacturability, service, and adversarial design enter at concept stage.</p>
            <p className="border-l border-cyan-300/40 pl-3">The result is intended to scale into distributed systems, not only exquisite platforms.</p>
          </div>
        </article>
      </div>

      <div className="border-t border-slate-700/70 bg-slate-950/55 px-6 py-6 sm:px-8">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">Optimised concurrently</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {optimisationAxes.map((axis) => (
            <span key={axis} className="rounded-full border border-slate-600/70 bg-slate-900/65 px-3 py-1.5 text-xs font-medium text-slate-200">
              {axis}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
