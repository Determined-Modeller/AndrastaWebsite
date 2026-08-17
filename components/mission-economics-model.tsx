'use client';

import { useMemo, useState } from 'react';

const currency = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0
});

type RangeControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
};

function RangeControl({ label, value, min, max, step, display, onChange }: RangeControlProps) {
  return (
    <label className="block border-t border-slate-700/70 py-5 first:border-t-0 first:pt-0">
      <span className="flex items-center justify-between gap-5 text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-semibold tabular-nums text-white">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 h-1.5 w-full cursor-pointer accent-cyan-300"
      />
    </label>
  );
}

export function MissionEconomicsModel() {
  const [fleetSize, setFleetSize] = useState(4);
  const [recoveries, setRecoveries] = useState(6);
  const [vesselDays, setVesselDays] = useState(1.5);
  const [dayRate, setDayRate] = useState(25000);
  const [eventsDisplaced, setEventsDisplaced] = useState(50);

  const outputs = useMemo(() => {
    const annualEvents = fleetSize * recoveries;
    const supportDays = annualEvents * vesselDays;
    const grossSupportCost = supportDays * dayRate;
    const displacedFraction = eventsDisplaced / 100;

    return {
      annualEvents,
      supportDays,
      grossSupportCost,
      supportDaysDisplaced: supportDays * displacedFraction,
      grossBurdenDisplaced: grossSupportCost * displacedFraction,
      burdenPerVehicle: (grossSupportCost * displacedFraction) / fleetSize
    };
  }, [dayRate, eventsDisplaced, fleetSize, recoveries, vesselDays]);

  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#06101a] shadow-2xl shadow-cyan-950/20">
      <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
        <div className="border-b border-slate-700/70 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Illustrative inputs</p>
          <div className="mt-6">
            <RangeControl label="Fleet size" value={fleetSize} min={1} max={20} step={1} display={`${fleetSize} vehicles`} onChange={setFleetSize} />
            <RangeControl label="Recovery cycles per vehicle-year" value={recoveries} min={1} max={18} step={1} display={`${recoveries}`} onChange={setRecoveries} />
            <RangeControl label="Support-vessel days per event" value={vesselDays} min={0.5} max={5} step={0.5} display={`${vesselDays.toFixed(1)} days`} onChange={setVesselDays} />
            <RangeControl label="Support-vessel day rate" value={dayRate} min={5000} max={100000} step={5000} display={currency.format(dayRate)} onChange={setDayRate} />
            <RangeControl label="Recovery events displaced" value={eventsDisplaced} min={10} max={90} step={10} display={`${eventsDisplaced}%`} onChange={setEventsDisplaced} />
          </div>
        </div>

        <div className="bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_48%)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Support-chain exposure</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/45 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Annual recovery events</p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-white">{outputs.annualEvents}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/45 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Support-vessel days</p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-white">{outputs.supportDays.toFixed(1)}</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/25 bg-cyan-950/20 p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-100/70">Gross annual support burden potentially displaced</p>
              <p className="mt-3 text-4xl font-semibold tabular-nums tracking-tight text-cyan-50 sm:text-5xl">{currency.format(outputs.grossBurdenDisplaced)}</p>
              <p className="mt-3 text-sm text-slate-400">
                {outputs.supportDaysDisplaced.toFixed(1)} vessel days · {currency.format(outputs.burdenPerVehicle)} per vehicle-year
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-6 text-slate-500">
            This sensitivity exposes the cost pool affected by distributed sustainment. It is not a savings forecast: replenishment nodes, residual intervention, vehicle capital, energy, maintenance, utilisation, and mission assurance must be included in a programme-specific comparison.
          </p>
        </div>
      </div>
    </div>
  );
}
