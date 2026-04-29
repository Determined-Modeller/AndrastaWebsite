import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { MissionScenarioCard, PageHero, PayloadFamilyCard, PlatformCard, ProofRibbon } from '@/components/site-sections';
import { formFactors, missionScenarios, payloadFamilies, siteConfig, valueRibbon } from '@/data/site';
import { CtaBlock } from '@/components/cta-block';

export const metadata: Metadata = { title: 'Andrasta Marine | Persistent offshore autonomy', description: siteConfig.companyDescription };

export default function HomePage() {
  return (<>
    <PageHero heading={siteConfig.brandLine} subheading={siteConfig.heroExplainer} />
    <ProofRibbon items={valueRibbon} />
    <SectionWrapper heading="What Andrasta Marine builds"><p className="text-sm leading-8 text-slate-300">{siteConfig.companyDescription}</p></SectionWrapper>
    <SectionWrapper heading="The operational problem"><p className="text-sm leading-8 text-slate-300">Offshore survey and inspection are often constrained by support-vessel dependence, battery mass/logistics at larger form factors, limited time-on-task, and replenishment friction.</p></SectionWrapper>
    <SectionWrapper heading="The Andrasta approach"><p className="text-sm leading-8 text-slate-300">Andrasta Marine addresses these constraints through hydride-focused hydrogen-electric vessel design, remote refuelling and replenishment pathways, waypoint missions, and modular payload families.</p></SectionWrapper>
    <SectionWrapper heading="Platform form factors"><div className="grid gap-4 md:grid-cols-2">{formFactors.map((p)=><PlatformCard key={p.name} platform={p} />)}</div></SectionWrapper>
    <SectionWrapper heading="Payload and mission families"><div className="grid gap-4 md:grid-cols-2">{payloadFamilies.map((f)=><PayloadFamilyCard key={f.name} family={f} />)}</div></SectionWrapper>
    <SectionWrapper heading="First market focus" intro="Primary: decommissioning environmental survey. Secondary: ad hoc hull inspection."><div className="grid gap-4 md:grid-cols-3">{missionScenarios.map((m)=><MissionScenarioCard key={m.slug} scenario={m} />)}</div></SectionWrapper>
    <SectionWrapper heading="Team credibility"><p className="text-sm leading-8 text-slate-300">Andrasta Marine is being developed by an experienced professional team currently active across the marine, hydrogen, and high-integrity engineering sectors. Public disclosure is being staged deliberately while platform development, partner engagement, and IP protection mature.</p></SectionWrapper>
    <CtaBlock />
  </>);
import Link from 'next/link';
import { CtaBlock } from '@/components/cta-block';
import { SectionWrapper } from '@/components/section-wrapper';
import { Faq, MissionCard, PageHero, PlatformCard, PrimaryCtas, ProofRibbon, TrustSignals } from '@/components/site-sections';
import { faqs, missionUseCases, payloadFamilies, platforms, siteConfig, technologyThemes, trustSignals } from '@/data/site';

export const metadata: Metadata = {
  title: 'Andrasta Marine | Persistent offshore autonomy',
  description: siteConfig.companyDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Andrasta Marine | Persistent offshore autonomy',
    description: siteConfig.companyDescription,
    images: ['/hero-vessel.png']
  }
};

export default function HomePage() {
  return (
    <>
      <PageHero eyebrow="Andrasta Marine" heading={siteConfig.heroHeadline} subheading={siteConfig.heroSubhead}>
        <PrimaryCtas />
      </PageHero>

      <ProofRibbon items={siteConfig.valueTags} />

      <SectionWrapper
        heading="What Andrasta Marine builds"
        intro="Andrasta Marine builds autonomous hydrogen-electric marine platform systems and payload pathways intended for offshore missions where continuity of sensing and operational restraint are important."
      >
        <p className="max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
          The programme combines autonomy, hydrogen-electric power architecture, modular payload families, and practical deployment pathways to support emissions enforcement, inspection, and awareness applications with lower disturbance profiles.
        </p>
      </SectionWrapper>

      <SectionWrapper heading="Platform overview" intro="Current public platform pathways include AndraMini and Andra40.">
        <div className="grid gap-4 md:grid-cols-2">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
        <Link href="/product-lines" className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:underline">
          Explore platforms →
        </Link>
      </SectionWrapper>

      <SectionWrapper heading="Mission use cases" intro="Application frames are presented as mission scenarios rather than completed customer deployments.">
        <div className="grid gap-4 md:grid-cols-3">
          {missionUseCases.map((mission) => (
            <MissionCard key={mission.slug} mission={mission} />
          ))}
        </div>
        <Link href="/case-studies" className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:underline">
          Review mission scenarios →
        </Link>
      </SectionWrapper>

      <SectionWrapper heading="Technology architecture" intro="A layered architecture approach: autonomy, power, payloads, and deployment pathways.">
        <div className="grid gap-4 md:grid-cols-2">
          {technologyThemes.map((theme) => (
            <article key={theme.title} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-5">
              <h3 className="text-base font-semibold text-white">{theme.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{theme.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {payloadFamilies.map((family) => (
            <article key={family.name} className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-4">
              <h4 className="text-sm font-semibold text-white">{family.name}</h4>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-amber-200">{family.status}</p>
              <p className="mt-2 text-sm text-slate-300">{family.role}</p>
            </article>
          ))}
        </div>
        <Link href="/technology" className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:underline">
          Explore technology architecture →
        </Link>
      </SectionWrapper>

      <SectionWrapper heading="Built for technical conversations" intro="Conservative trust signals and publishable-claims discipline.">
        <TrustSignals items={trustSignals} />
      </SectionWrapper>

      <SectionWrapper heading="Frequently asked questions">
        <Faq items={faqs.slice(0, 4)} />
      </SectionWrapper>

      <CtaBlock />
    </>
  );
}
