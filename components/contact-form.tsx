'use client';
import { FormEvent, useMemo, useState } from 'react';
import { contactDetails } from '@/data/site';

type FormState = { name: string; company: string; email: string; category: string; message: string; website: string };
const initialState: FormState = { name: '', company: '', email: '', category: contactDetails.categories[0], message: '', website: '' };
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = 'Name is required.';
    if (!values.company.trim()) next.company = 'Company is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Valid email required.';
    if (values.message.trim().length < 20) next.message = 'Message must be at least 20 characters.';
    return next;
  }, [values]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (values.website.trim()) return;
    if (Object.keys(errors).length) return setStatus('Please correct the highlighted fields.');

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`[${values.category}] Demonstration mission enquiry`);
      const body = encodeURIComponent(`Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nCategory: ${values.category}\n\n${values.message}`);
      window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
      return setStatus('No submission endpoint is configured. Your mail client will be used to send this enquiry.');
    }

    setLoading(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error();
      setStatus('Enquiry sent successfully.');
      setValues(initialState);
    } catch {
      setStatus('Submission failed. Please email andrastamarine@gmail.com directly.');
    } finally { setLoading(false); }
  };

  return <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-700/70 bg-slate-950/55 p-6">{status && <p className="text-sm text-amber-200">{status}</p>}<input className="hidden" value={values.website} onChange={(e)=>setValues({...values,website:e.target.value})} /><label className="block text-sm">Name<input className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2" value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})} />{errors.name && <span className="text-xs text-amber-200">{errors.name}</span>}</label><label className="block text-sm">Company<input className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2" value={values.company} onChange={(e)=>setValues({...values,company:e.target.value})} />{errors.company && <span className="text-xs text-amber-200">{errors.company}</span>}</label><label className="block text-sm">Email<input className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2" value={values.email} onChange={(e)=>setValues({...values,email:e.target.value})} />{errors.email && <span className="text-xs text-amber-200">{errors.email}</span>}</label><label className="block text-sm">Enquiry category<select className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2" value={values.category} onChange={(e)=>setValues({...values,category:e.target.value})}>{contactDetails.categories.map((c)=><option key={c}>{c}</option>)}</select></label><label className="block text-sm">Message<textarea rows={5} className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2" value={values.message} onChange={(e)=>setValues({...values,message:e.target.value})} />{errors.message && <span className="text-xs text-amber-200">{errors.message}</span>}</label><button disabled={loading} className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950">{loading ? 'Submitting…' : 'Discuss a demonstration mission'}</button></form>;
}
