import Image from 'next/image';
import Link from 'next/link';
import type { MissionScenario, PayloadFamily, PlatformFormFactor } from '@/data/site';

export function PageHero({ heading, subheading }: { heading: string; subheading: string }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,#12345a_0%,#07111f_38%,#04070d_100%)]">
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{subheading}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950">Discuss a demonstration mission</Link>
            <Link href="/product-lines" className="rounded-full border border-slate-500/70 px-6 py-3 text-sm font-semibold text-slate-100">Explore platform form factors</Link>
          </div>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
          <Image src="/hero-vessel.png" alt="Andrasta Marine hydrogen-powered autonomous vessel concept for offshore survey and inspection missions" fill priority className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export const ProofRibbon = ({ items }: { items: string[] }) => (
  <section className="border-y border-slate-800/80 bg-slate-950/30"><div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 sm:px-8">{items.map((i)=><span key={i} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">{i}</span>)}</div></section>
);

export function PlatformCard({ platform }: { platform: PlatformFormFactor }) { return <article className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5"><h3 className="text-xl text-white">{platform.name}</h3><p className="mt-2 text-sm text-slate-300">{platform.role}</p><p className="mt-3 text-sm text-cyan-200">{platform.statusCopy}</p></article>; }
export function PayloadFamilyCard({ family }: { family: PayloadFamily }) { return <article className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5"><h3 className="text-base text-white">{family.name}</h3><p className="mt-1 text-xs text-cyan-200">{family.category}</p><p className="mt-2 text-sm text-slate-300">{family.summary}</p></article>; }
export function MissionScenarioCard({ scenario }: { scenario: MissionScenario }) { return <article className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5"><h3 className="text-base text-white">{scenario.title}</h3><p className="mt-2 text-sm text-slate-300">{scenario.context}</p></article>; }
