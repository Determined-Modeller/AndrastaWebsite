'use client';

import { useState } from 'react';

import {
  logisticsScenarios,
  type LogisticsIcon,
  type LogisticsModel,
  type LogisticsModelKey,
  type LogisticsScenarioKey
} from '@/data/logistics';

const scenarioKeys = Object.keys(logisticsScenarios) as LogisticsScenarioKey[];

function NodeIcon({ icon }: { icon: LogisticsIcon }) {
  const common = 'h-4 w-4';

  if (icon === 'base') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 20V9l8-5 8 5v11M8 20v-6h8v6M2 20h20" />
      </svg>
    );
  }

  if (icon === 'vessel') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 15h18l-3 4H7l-4-4ZM8 15V9h8v6M10 9V6h4v3" />
      </svg>
    );
  }

  if (icon === 'vehicle') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m3 12 6-3 3-5 3 5 6 3-6 3-3 5-3-5-6-3Z" />
      </svg>
    );
  }

  if (icon === 'asset') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 20V8h5v12M14 20V4h5v16M3 20h18M6 11h3M15 8h3M15 12h3" />
      </svg>
    );
  }

  if (icon === 'charge') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m12 2 8 5v10l-8 5-8-5V7l8-5Z" />
        <path d="m13 6-4 7h4l-2 5 5-8h-4l1-4Z" />
      </svg>
    );
  }

  if (icon === 'command') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="2" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 5a7 7 0 1 1-1.5 7.7M7 5v5H2" />
      <path d="M9 14h6M12 11v6" />
    </svg>
  );
}

function MissionBackdrop({ modelKey }: { modelKey: LogisticsModelKey }) {
  const isAndrasta = modelKey === 'andrasta';

  return (
    <svg aria-hidden="true" viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`sea-${modelKey}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={isAndrasta ? '#0b2634' : '#131d29'} />
          <stop offset="1" stopColor="#050a11" />
        </linearGradient>
        <pattern id={`grid-${modelKey}`} width="7" height="7" patternUnits="userSpaceOnUse">
          <path d="M 7 0 L 0 0 0 7" fill="none" stroke={isAndrasta ? '#2dd4bf' : '#64748b'} strokeOpacity="0.09" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100" height="60" fill={`url(#sea-${modelKey})`} />
      <rect width="100" height="60" fill={`url(#grid-${modelKey})`} />
      <path d="M0 0H23C20 7 22 14 18 20C14 27 17 34 11 41C8 45 7 53 9 60H0Z" fill="#17251f" opacity="0.8" />
      <path d="M0 0H23C20 7 22 14 18 20C14 27 17 34 11 41C8 45 7 53 9 60" fill="none" stroke="#94a3b8" strokeOpacity="0.2" strokeWidth="0.55" />
      <path d="M24 7C45 13 63 7 92 12M27 52C46 46 70 52 96 45" fill="none" stroke="#7dd3fc" strokeOpacity="0.08" strokeWidth="0.4" />
      <path d="M59 22C65 17 75 17 82 22L88 37C80 41 69 41 61 36Z" fill="none" stroke="#94a3b8" strokeOpacity="0.12" strokeWidth="0.5" strokeDasharray="1.5 1.8" />
    </svg>
  );
}

function MapPanel({ model, modelKey, scenarioKey }: { model: LogisticsModel; modelKey: LogisticsModelKey; scenarioKey: LogisticsScenarioKey }) {
  const [activeNodeId, setActiveNodeId] = useState(model.primaryNodeId);
  const activeNode = model.nodes.find((node) => node.id === activeNodeId) ?? model.nodes[0];
  const isAndrasta = modelKey === 'andrasta';

  return (
    <article className={`overflow-hidden rounded-2xl border ${isAndrasta ? 'border-cyan-300/30 bg-cyan-950/10' : 'border-slate-700/80 bg-slate-950/45'}`}>
      <header className="flex min-h-[106px] items-start justify-between gap-5 border-b border-slate-700/70 px-5 py-5 sm:px-6">
        <div>
          <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${isAndrasta ? 'text-cyan-200' : 'text-slate-500'}`}>
            {isAndrasta ? 'Replenishable model' : 'Comparator'}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{model.label}</h3>
          <p className="mt-1 max-w-md text-xs leading-5 text-slate-400">{model.strapline}</p>
        </div>
        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${isAndrasta ? 'bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]' : 'bg-slate-500'}`} aria-hidden="true" />
      </header>

      <div className="relative h-[350px] overflow-hidden sm:h-[390px]">
        <MissionBackdrop modelKey={modelKey} />
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {model.routes.map((route, index) => (
            <g key={`${scenarioKey}-${modelKey}-${index}`}>
              <path d={route} fill="none" stroke={isAndrasta ? '#22d3ee' : '#64748b'} strokeOpacity="0.16" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
              <path
                d={route}
                fill="none"
                stroke={isAndrasta ? '#67e8f9' : '#94a3b8'}
                strokeOpacity={isAndrasta ? '0.88' : '0.56'}
                strokeWidth={isAndrasta ? '1.6' : '1.25'}
                vectorEffect="non-scaling-stroke"
                className="logistics-flow"
              />
            </g>
          ))}
        </svg>

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400 backdrop-blur">
          Select a node
        </div>

        {model.nodes.map((node) => {
          const isActive = node.id === activeNode.id;

          return (
            <button
              key={node.id}
              type="button"
              aria-pressed={isActive}
              aria-controls={`${scenarioKey}-${modelKey}-node-detail`}
              onClick={() => setActiveNodeId(node.id)}
              onFocus={() => setActiveNodeId(node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl text-left focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="flex flex-col items-center gap-1.5">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition duration-200 sm:h-11 sm:w-11 ${
                    isActive
                      ? isAndrasta
                        ? 'scale-110 border-cyan-100 bg-cyan-300 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.48)]'
                        : 'scale-110 border-slate-200 bg-slate-200 text-slate-950 shadow-[0_0_22px_rgba(148,163,184,0.35)]'
                      : isAndrasta
                        ? 'border-cyan-300/55 bg-slate-950/85 text-cyan-100 group-hover:border-cyan-100'
                        : 'border-slate-500/70 bg-slate-950/85 text-slate-300 group-hover:border-slate-300'
                  }`}
                >
                  <NodeIcon icon={node.icon} />
                </span>
                <span className={`max-w-[94px] rounded-md bg-slate-950/75 px-1.5 py-1 text-center text-[9px] font-semibold leading-3 backdrop-blur-sm sm:max-w-[112px] sm:text-[10px] ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {node.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div id={`${scenarioKey}-${modelKey}-node-detail`} className="min-h-[144px] border-t border-slate-700/70 bg-slate-950/65 px-5 py-5 sm:px-6" aria-live="polite">
        <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${isAndrasta ? 'text-cyan-200' : 'text-slate-500'}`}>{activeNode.kicker}</p>
        <p className="mt-2 font-semibold text-white">{activeNode.label}</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{activeNode.detail}</p>
      </div>
    </article>
  );
}

export function LogisticsComparator() {
  const [scenarioKey, setScenarioKey] = useState<LogisticsScenarioKey>('civil');
  const scenario = logisticsScenarios[scenarioKey];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[radial-gradient(circle_at_50%_0%,rgba(14,116,144,0.18),rgba(4,7,13,0.98)_45%)] shadow-2xl shadow-cyan-950/20">
      <div className="border-b border-slate-700/70 px-5 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Interactive mission comparator</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{scenario.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{scenario.intro}</p>
          </div>

          <div className="inline-flex w-full rounded-full border border-slate-700/80 bg-slate-950/80 p-1 lg:w-auto" role="group" aria-label="Mission scenario">
            {scenarioKeys.map((key) => {
              const isActive = scenarioKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setScenarioKey(key)}
                  className={`flex-1 rounded-full px-4 py-2.5 text-xs font-semibold transition lg:flex-none ${isActive ? 'bg-cyan-200 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.14)]' : 'text-slate-400 hover:text-white'}`}
                >
                  {logisticsScenarios[key].label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative grid gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:gap-5 lg:p-8">
        <MapPanel key={`${scenarioKey}-conventional`} scenarioKey={scenarioKey} modelKey="conventional" model={scenario.models.conventional} />
        <div className="pointer-events-none absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 rounded-full border border-slate-600/80 bg-[#060b12] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 lg:block">
          Compared with
        </div>
        <MapPanel key={`${scenarioKey}-andrasta`} scenarioKey={scenarioKey} modelKey="andrasta" model={scenario.models.andrasta} />
      </div>

      <div className="border-t border-slate-700/70 bg-slate-950/50 px-5 py-6 sm:px-8">
        <div className="grid gap-3 lg:grid-cols-3">
          {scenario.comparison.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-700/60 bg-slate-950/55 p-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs leading-5">
                <p className="text-slate-500">{item.conventional}</p>
                <span className="text-slate-600" aria-hidden="true">→</span>
                <p className="font-medium text-cyan-100">{item.andrasta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
