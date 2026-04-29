import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';
import { ContactForm } from '@/components/contact-form';
export const metadata: Metadata = { title: 'Contact | Andrasta Marine', description: 'Discuss a demonstration mission with Andrasta Marine.' };
export default function ContactPage(){return <SectionWrapper heading="Discuss a demonstration mission" intro="Primary focus: decommissioning environmental survey. Secondary focus: ad hoc hull inspection."><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><aside className="rounded-xl border border-slate-700/70 bg-slate-950/55 p-6"><p className="text-sm text-slate-300">Direct contact email:</p><a href={`mailto:${contactDetails.email}`} className="mt-1 inline-block text-cyan-200 underline">{contactDetails.email}</a><p className="mt-4 text-sm text-slate-300">Enquiry categories:</p><ul className="mt-2 list-disc pl-5 text-sm text-slate-300">{contactDetails.categories.map((c)=><li key={c}>{c}</li>)}</ul></aside><ContactForm /></div></SectionWrapper>}
