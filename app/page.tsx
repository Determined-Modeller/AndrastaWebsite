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
}
