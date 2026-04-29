import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { siteConfig } from '@/data/site';
export const metadata: Metadata = { title: 'About | Andrasta Marine', description: 'Company purpose and disclosure discipline.' };
export default function AboutPage(){return <><SectionWrapper heading="Company purpose"><p className="text-sm leading-8 text-slate-300">{siteConfig.companyDescription}</p></SectionWrapper><SectionWrapper heading="Vessel OEM model"><p className="text-sm leading-8 text-slate-300">Andrasta Marine integrates COTS and bespoke marine, hydrogen, sensing, and autonomy systems into complete offshore products.</p></SectionWrapper><SectionWrapper heading="Engineering philosophy"><p className="text-sm leading-8 text-slate-300">The programme is built around controlled disclosure, practical offshore logistics, and a validation pathway that releases technical detail progressively.</p></SectionWrapper><SectionWrapper heading="Why hydrogen-hydride replenishment"><p className="text-sm leading-8 text-slate-300">Hydride-focused vessel design, low-pressure storage, and remote replenishment are central to improving endurance, handling, and deployment flexibility.</p></SectionWrapper><SectionWrapper heading="Team credibility"><p className="text-sm leading-8 text-slate-300">Andrasta Marine is being developed by an experienced professional team currently active across the marine, hydrogen, and high-integrity engineering sectors. Public disclosure is being staged deliberately while platform development, partner engagement, and IP protection mature.</p></SectionWrapper><SectionWrapper heading="Partner engagement"><p className="text-sm leading-8 text-slate-300">Current engagement focuses on demonstration missions, payload integration, and technical collaboration aligned to offshore decommissioning and inspection needs.</p></SectionWrapper></>}
import { aboutContent, trustSignals } from '@/data/site';

export const metadata: Metadata = {
  title: 'About | Andrasta Marine',
  description: 'Company purpose, engineering philosophy, and engagement model for Andrasta Marine.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper heading="Company purpose">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">{aboutContent.purpose}</p>
      </SectionWrapper>

      <SectionWrapper heading="Engineering philosophy">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">{aboutContent.engineeringPhilosophy}</p>
      </SectionWrapper>

      <SectionWrapper heading="Why Andrasta Marine exists">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">{aboutContent.whyNow}</p>
      </SectionWrapper>

      <SectionWrapper heading="What is intentionally not being claimed yet">
        <ul className="space-y-3">
          {aboutContent.notYetClaimed.map((item) => (
            <li key={item} className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm leading-7 text-slate-300">{item}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper heading="Near-term engagement model">
        <p className="max-w-4xl text-sm leading-8 text-slate-300">{aboutContent.engagementModel}</p>
      </SectionWrapper>

      <SectionWrapper heading="Team and partners">
        <p className="text-sm leading-8 text-slate-300">{aboutContent.teamPartnersNote}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {trustSignals.slice(0, 2).map((signal) => (
            <article key={signal.title} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4">
              <h3 className="text-sm font-semibold text-white">{signal.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{signal.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
