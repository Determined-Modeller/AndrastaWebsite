const stages = [
  {
    name: 'Manta',
    role: 'Rapid physical iteration'
  },
  {
    name: 'AndraSound',
    role: 'Mission-scale integration'
  },
  {
    name: 'AndraHold',
    role: 'Extended payload + endurance'
  }
];

const commonElements = [
  'Energy modules',
  'Payload interfaces',
  'Autonomy + C2',
  'Handling points',
  'Service access'
];

export function ScalePath() {
  return (
    <div className="rounded-3xl border border-slate-700/70 bg-slate-950/55 p-6 sm:p-8">
      <div className="relative grid gap-6 md:grid-cols-3">
        <div className="absolute left-[16.5%] right-[16.5%] top-4 hidden h-px bg-gradient-to-r from-cyan-300/25 via-cyan-200/70 to-cyan-300/25 md:block" aria-hidden="true" />
        {stages.map((stage, index) => (
          <div key={stage.name} className="relative z-10 flex gap-4 md:block md:text-center">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan-200/60 bg-[#07111b] text-xs font-semibold text-cyan-100 md:mx-auto">
              {index + 1}
            </span>
            <div className="md:mt-4">
              <h3 className="font-semibold text-white">{stage.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{stage.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-slate-700/70 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/85">Common interface spine</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {commonElements.map((element) => (
            <span key={element} className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200">
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
