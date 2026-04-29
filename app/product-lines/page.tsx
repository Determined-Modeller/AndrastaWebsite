import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';
import { formFactors } from '@/data/site';
export const metadata: Metadata = { title: 'Platforms | Andrasta Marine', description: 'Platform form factors and public status.' };
export default function ProductLinesPage(){return <><SectionWrapper heading="Platform Form Factors" intro="AndraMini and Andra40 are vessel form factors. AndraBeam, AndraField, AndraRise, and AndraKeep are mission payload families.">{formFactors.map((f)=><article key={f.name} className="mb-4 rounded-xl border border-slate-700/70 bg-slate-950/55 p-5"><h3 className="text-xl text-white">{f.name}</h3><p className="mt-2 text-sm text-slate-300">{f.summary}</p><p className="mt-2 text-sm text-cyan-200">{f.statusCopy}</p></article>)}</SectionWrapper><SectionWrapper heading="Comparison"><div className="overflow-x-auto rounded-xl border border-slate-700/70"><table className="w-full min-w-[760px] text-sm"><tbody>{[['Form factor',formFactors[0].name,formFactors[1].name],['Intended role',formFactors[0].role,formFactors[1].role],['First mission fit',formFactors[0].missionFit[0],formFactors[1].missionFit[0]],['Replenishment philosophy',formFactors[0].replenishmentConcept,formFactors[1].replenishmentConcept],['Payload compatibility',formFactors[0].payloadCompatibility.join(', '),formFactors[1].payloadCompatibility.join(', ')],['Current public status',formFactors[0].statusCopy,formFactors[1].statusCopy],['Commercial pathway','Demonstration partners sought','Under development']].map((r)=><tr key={r[0]} className="border-t border-slate-700/70"><td className="px-3 py-2 text-slate-200">{r[0]}</td><td className="px-3 py-2 text-slate-300">{r[1]}</td><td className="px-3 py-2 text-slate-300">{r[2]}</td></tr>)}</tbody></table></div><Link href="/contact" className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950">Request a platform brief</Link></SectionWrapper></>}
import { PlatformCard, SpecStatusTable } from '@/components/site-sections';
import { platforms } from '@/data/site';

export const metadata: Metadata = {
  title: 'Platforms | Andrasta Marine',
  description: 'AndraMini and Andra40 platform pathways with confirmed and publication-pending specification status.',
  alternates: { canonical: '/product-lines' },
  openGraph: { title: 'Platforms | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function ProductLinesPage() {
  return (
    <>
      <SectionWrapper heading="Platform lines" intro="AndraMini and Andra40 are presented as platform pathways with explicit separation between confirmed information and pending publication details.">
        <div className="space-y-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <PlatformCard platform={platform} />
                <article className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-5">
                  <h3 className="text-base font-semibold text-white">Deployment and payload compatibility</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {platform.deploymentNotes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {platform.payloadCompatibility.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <SpecStatusTable title={`${platform.name} specification status`} confirmed={platform.confirmedSpecs} pending={platform.pendingSpecs} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper heading="Platform comparison" intro="High-level comparison for programme and mission fit conversations.">
        <div className="overflow-x-auto rounded-2xl border border-slate-700/70">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead className="bg-slate-900/80 text-left text-slate-200">
              <tr>
                <th className="px-4 py-3">Attribute</th>
                <th className="px-4 py-3">AndraMini</th>
                <th className="px-4 py-3">Andra40</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Scale</td><td className="px-4 py-3">Approx. 1 m³ class</td><td className="px-4 py-3">40 ft ISO-container-scale architecture</td></tr>
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Intended operating role</td><td className="px-4 py-3">Focused, lower-footprint offshore tasking</td><td className="px-4 py-3">Broader-area persistent offshore tasking</td></tr>
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Mission emphasis</td><td className="px-4 py-3">Inspection and targeted sensing</td><td className="px-4 py-3">Coverage continuity and multi-payload missions</td></tr>
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Payload flexibility</td><td className="px-4 py-3">AndraBeam/AndraField compatible pathway</td><td className="px-4 py-3">AndraBeam/AndraField/AndraRise pathways</td></tr>
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Deployment footprint</td><td className="px-4 py-3">Compact logistics pathway</td><td className="px-4 py-3">Container-scale logistics pathway</td></tr>
              <tr className="border-t border-slate-700/70"><td className="px-4 py-3">Current publication status</td><td className="px-4 py-3">Quantitative performance pending</td><td className="px-4 py-3">Quantitative performance pending</td></tr>
            </tbody>
          </table>
        </div>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
          Request a platform brief
        </Link>
      </SectionWrapper>
    </>
  );
}
