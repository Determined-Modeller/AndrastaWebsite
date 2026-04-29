import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import type { FaqItem, MissionUseCase, Platform, PlatformSpec, TrustSignal } from '@/data/site';

const HERO_VESSEL_SRC = '/hero-vessel.png';

export function PageHero({
  eyebrow,
  heading,
  subheading,
  children
}: {
  eyebrow?: string;
  heading: string;
  subheading: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,#12345a_0%,#07111f_38%,#04070d_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
        <div>
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{eyebrow}</p>}
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{subheading}</p>
          {children}
        </div>
        <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[520px]">
          <Image
            src={HERO_VESSEL_SRC}
            alt="Andrasta Marine hydrogen-electric autonomous vessel concept in offshore operating waters"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-center drop-shadow-[0_28px_90px_rgba(34,211,238,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}

export function ProofRibbon({ items }: { items: string[] }) {
  return (
    <section className="border-y border-slate-800/80 bg-slate-950/30">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 px-5 py-5 sm:px-8">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel">
      <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
      <p className="mt-2 text-sm font-medium text-cyan-200">{platform.scale}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{platform.summary}</p>
      <p className="mt-4 text-sm leading-7 text-slate-300"><span className="font-semibold text-slate-100">Role:</span> {platform.intendedRole}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-300">
        {platform.missionFits.map((fit) => (
          <li key={fit}>{fit}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-400">{platform.publicationStatus}</p>
    </article>
  );
}

export function MissionCard({ mission }: { mission: MissionUseCase }) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel">
      <h3 className="text-lg font-semibold text-white">{mission.title}</h3>
      <p className="mt-2 text-sm text-cyan-200">{mission.framing}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{mission.operationalProblem}</p>
      <p className="mt-3 text-sm leading-7 text-slate-400"><span className="text-slate-300">Likely benefit:</span> {mission.likelyBenefit}</p>
    </article>
  );
}

export function SpecStatusTable({
  confirmed,
  pending,
  title
}: {
  title: string;
  confirmed: PlatformSpec[];
  pending: PlatformSpec[];
}) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">Confirmed / publishable</h4>
          <dl className="mt-2 space-y-2">
            {confirmed.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 rounded-md border border-emerald-500/25 bg-emerald-500/5 px-3 py-2 text-sm sm:flex-row sm:justify-between">
                <dt className="text-slate-300">{item.label}</dt>
                <dd className="text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">Pending publication</h4>
          <dl className="mt-2 space-y-2">
            {pending.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 rounded-md border border-amber-500/25 bg-amber-500/5 px-3 py-2 text-sm sm:flex-row sm:justify-between">
                <dt className="text-slate-300">{item.label}</dt>
                <dd className="text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-white">{item.question}</summary>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function TrustSignals({ items }: { items: TrustSignal[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((signal) => (
        <article key={signal.title} className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-5">
          <h3 className="text-base font-semibold text-white">{signal.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{signal.detail}</p>
        </article>
      ))}
    </div>
  );
}

export function PrimaryCtas() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link href="/product-lines" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
        Explore platforms
      </Link>
      <Link href="/contact" className="rounded-full border border-slate-500/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-white">
        Discuss a mission profile
      </Link>
    </div>
  );
}
