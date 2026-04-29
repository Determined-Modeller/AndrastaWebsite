import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';
import { ContactForm } from '@/components/contact-form';
export const metadata: Metadata = { title: 'Contact | Andrasta Marine', description: 'Discuss a demonstration mission with Andrasta Marine.' };
export default function ContactPage(){return <SectionWrapper heading="Discuss a demonstration mission" intro="Primary focus: decommissioning environmental survey. Secondary focus: ad hoc hull inspection."><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><aside className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-6"><p className="text-sm text-slate-300">Direct contact email:</p><a href={`mailto:${contactDetails.email}`} className="mt-1 inline-block text-cyan-200 underline">{contactDetails.email}</a><p className="mt-4 text-sm text-slate-300">Enquiry categories:</p><ul className="mt-2 list-disc pl-5 text-sm text-slate-300">{contactDetails.categories.map((c)=><li key={c}>{c}</li>)}</ul></aside><ContactForm /></div></SectionWrapper>}
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';
import { ContactForm } from '@/components/contact-form';
export const metadata: Metadata = { title: 'Contact | Andrasta Marine', description: 'Discuss a demonstration mission with Andrasta Marine.' };
export default function ContactPage(){return <SectionWrapper heading="Discuss a demonstration mission" intro="Primary focus: decommissioning environmental survey. Secondary focus: ad hoc hull inspection."><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><aside className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-6"><p className="text-sm text-slate-300">Direct contact email:</p><a href={`mailto:${contactDetails.email}`} className="mt-1 inline-block text-cyan-200 underline">{contactDetails.email}</a><p className="mt-4 text-sm text-slate-300">Enquiry categories:</p><ul className="mt-2 list-disc pl-5 text-sm text-slate-300">{contactDetails.categories.map((c)=><li key={c}>{c}</li>)}</ul></aside><ContactForm /></div></SectionWrapper>}
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';

const hasConfirmedEmail = Boolean(contactDetails.confirmedEmail);

export const metadata: Metadata = {
  title: 'Contact | Andrasta Marine',
  description: 'Contact Andrasta Marine to discuss mission profile fit, technical collaboration, and programme engagement.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact | Andrasta Marine', images: ['/hero-vessel.png'] }
};

export default function ContactPage() {
  return (
    <SectionWrapper heading="Contact Andrasta Marine" intro="Use the form for mission-profile and programme discussions. Form submission requires a configured external endpoint.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel">
          <h3 className="text-lg font-medium text-white">Engagement details</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div><dt className="text-slate-400">Company</dt><dd className="text-slate-100">{contactDetails.company}</dd></div>
            <div><dt className="text-slate-400">Domain</dt><dd className="text-slate-100">{contactDetails.domain}</dd></div>
            <div><dt className="text-slate-400">Operating location</dt><dd className="text-slate-100">{contactDetails.location}</dd></div>
            <div><dt className="text-slate-400">Submission endpoint</dt><dd className="text-slate-100">Environment variable: {contactDetails.endpointEnvVar}</dd></div>
          </dl>

          {hasConfirmedEmail ? (
            <p className="mt-4 text-sm text-slate-300">Direct contact: <a className="text-cyan-200 underline" href={`mailto:${contactDetails.confirmedEmail}`}>{contactDetails.confirmedEmail}</a></p>
          ) : (
            <p className="mt-4 text-sm text-slate-300">
              Direct production email is pending confirmation. See TODO tracker for final contact destination.
            </p>
          )}

          <Link href="/product-lines" className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:underline">
            Explore platforms while preparing your enquiry →
          </Link>
        </aside>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
