'use client';

import Image from 'next/image';
import { useState } from 'react';

import { missionStories } from '@/data/missions';

export function MissionStorySelector() {
  const [activeId, setActiveId] = useState<(typeof missionStories)[number]['id']>('civil');
  const activeStory = missionStories.find((story) => story.id === activeId) ?? missionStories[0];

  function selectAdjacentStory(direction: -1 | 1) {
    const currentIndex = missionStories.findIndex((story) => story.id === activeStory.id);
    const nextIndex = (currentIndex + direction + missionStories.length) % missionStories.length;
    setActiveId(missionStories[nextIndex].id);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[#06101a]/90 shadow-2xl shadow-cyan-950/15">
      <div className="flex border-b border-slate-700/70 bg-slate-950/55" role="tablist" aria-label="Mission value stories">
        {missionStories.map((story) => {
          const active = story.id === activeStory.id;

          return (
            <button
              key={story.id}
              type="button"
              role="tab"
              id={`mission-tab-${story.id}`}
              aria-selected={active}
              aria-controls={`mission-panel-${story.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveId(story.id)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                  event.preventDefault();
                  selectAdjacentStory(-1);
                }
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                  event.preventDefault();
                  selectAdjacentStory(1);
                }
              }}
              className={`relative flex-1 px-5 py-5 text-left transition sm:px-7 ${active ? 'bg-cyan-950/20 text-white' : 'text-slate-500 hover:bg-slate-900/60 hover:text-slate-200'}`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">{story.tabLabel}</span>
              <span className={`absolute inset-x-0 bottom-0 h-px ${active ? 'bg-cyan-300' : 'bg-transparent'}`} aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <article
        id={`mission-panel-${activeStory.id}`}
        role="tabpanel"
        aria-labelledby={`mission-tab-${activeStory.id}`}
      >
        <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[500px] lg:min-h-full">
            <Image
              key={activeStory.imageUrl}
              src={activeStory.imageUrl}
              alt={activeStory.imageAlt}
              fill
              priority={activeStory.id === 'civil'}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className={`object-cover ${activeStory.imagePosition ?? 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />
            <p className="absolute right-5 top-5 rounded-full border border-slate-400/30 bg-slate-950/45 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-300/70 backdrop-blur-sm">
              Illustrative mission case
            </p>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">{activeStory.market}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{activeStory.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">{activeStory.framing}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-9">
            <div className="grid gap-5 sm:grid-cols-[0.34fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.34fr_1fr]">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-cyan-100">{activeStory.context.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-cyan-200/70">{activeStory.context.label}</p>
              </div>
              <p className="text-sm leading-7 text-slate-400">{activeStory.context.detail}</p>
            </div>

            <div className="mt-7 border-y border-slate-700/70 py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Decision at stake</p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-white">{activeStory.decision.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{activeStory.decision.detail}</p>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Practical barrier</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{activeStory.barrier}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/70 bg-slate-950/30 p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">Andrasta system response</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {activeStory.response.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-5">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200/65">0{index + 1}</p>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>

          {activeStory.principle && (
            <div className="mt-5 rounded-2xl border border-cyan-300/25 bg-cyan-950/15 p-5 sm:p-6">
              <p className="text-sm font-medium leading-7 text-cyan-50">{activeStory.principle}</p>
            </div>
          )}

          <div className="mt-6 grid gap-4 border-t border-slate-700/70 pt-6 sm:grid-cols-[0.24fr_1fr]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/75">Decision value</p>
            <p className="text-lg font-medium leading-8 text-white">{activeStory.value}</p>
          </div>

          {activeStory.sources && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-700/50 pt-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">Public context</p>
              {activeStory.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-500 transition hover:text-cyan-100"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
