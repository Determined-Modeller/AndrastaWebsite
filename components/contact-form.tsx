'use client';
import { FormEvent, useMemo, useState } from 'react';
import { contactDetails } from '@/data/site';

type FormState = { name: string; company: string; email: string; category: string; message: string; website: string };
const initialState: FormState = { name: '', company: '', email: '', category: contactDetails.categories[0], message: '', website: '' };
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
type FormState = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  subject: '',
  message: '',
  website: ''
};

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<FormState>(initialState);
  const [attempted, setAttempted] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState('');

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
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    setStatusMessage('');

    if (values.website.trim()) {
      setSubmissionState('idle');
      setValues(initialState);
      return;
    }

    if (hasErrors) {
      setSubmissionState('error');
      setStatusMessage('Please correct the highlighted fields before submitting.');
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setSubmissionState('error');
      setStatusMessage('Submission endpoint is not configured yet. Please use the mission discussion request fallback below.');
      return;
    }

    setSubmissionState('submitting');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim()
        })
      });

      if (!response.ok) {
        throw new Error('Endpoint returned a non-success response.');
      }

      setSubmissionState('success');
      setStatusMessage('Enquiry submitted successfully. A team member will respond through the configured contact workflow.');
      setValues(initialState);
    } catch {
      setSubmissionState('error');
      setStatusMessage('Submission failed. Please retry later or use the mission discussion fallback.');
    }
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel">
      {statusMessage && (
        <p
          className={`rounded-md px-3 py-2 text-sm ${
            submissionState === 'success'
              ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
              : 'border border-amber-500/40 bg-amber-500/10 text-amber-200'
          }`}
        >
          {statusMessage}
        </p>
      )}

      <label className="sr-only" htmlFor="website">
        Leave this field empty
      </label>
      <input
        id="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => setValues((curr) => ({ ...curr, website: event.target.value }))}
        className="hidden"
        name="website"
      />

      {(
        [
          ['name', 'Name'],
          ['company', 'Company'],
          ['email', 'Email'],
          ['subject', 'Subject']
        ] as const
      ).map(([field, label]) => (
        <label key={field} className="block text-sm text-slate-100">
          {label}
          <input
            value={values[field]}
            onChange={(event) => setValues((curr) => ({ ...curr, [field]: event.target.value }))}
            type={field === 'email' ? 'email' : 'text'}
            className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring"
            aria-invalid={Boolean(attempted && errors[field])}
          />
          {attempted && errors[field] && <span className="mt-1 block text-xs text-amber-200">{errors[field]}</span>}
        </label>
      ))}

      <label className="block text-sm text-slate-100">
        Message
        <textarea
          value={values.message}
          onChange={(event) => setValues((curr) => ({ ...curr, message: event.target.value }))}
          rows={6}
          className="mt-1 w-full rounded-md border border-slate-700 bg-[#04070d] px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300/40 transition focus:ring"
          aria-invalid={Boolean(attempted && errors.message)}
        />
        {attempted && errors.message && <span className="mt-1 block text-xs text-amber-200">{errors.message}</span>}
      </label>

      <button
        type="submit"
        disabled={submissionState === 'submitting'}
        className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submissionState === 'submitting' ? 'Submitting…' : 'Discuss a mission profile'}
      </button>
    </form>
  );
}
