'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  subject: '',
  message: ''
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = 'Name is required.';
    if (!values.company.trim()) next.company = 'Company is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Provide a valid email address.';
    if (!values.subject.trim()) next.subject = 'Subject is required.';
    if (values.message.trim().length < 20) next.message = 'Message must be at least 20 characters.';
    return next;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    if (hasErrors) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-surface p-6 shadow-panel">
      {submitted && (
        <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
          Enquiry captured (mock submission). TODO: connect to confirmed backend workflow.
        </p>
      )}
      {attempted && hasErrors && (
        <p className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
          Please correct the highlighted fields before submitting.
        </p>
      )}
      {(
        [
          ['name', 'Name'],
          ['company', 'Company'],
          ['email', 'Email'],
          ['subject', 'Subject']
        ] as const
      ).map(([field, label]) => (
        <label key={field} className="block text-sm text-text">
          {label}
          <input
            value={values[field]}
            onChange={(event) => setValues((curr) => ({ ...curr, [field]: event.target.value }))}
            type={field === 'email' ? 'email' : 'text'}
            className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text outline-none ring-accent/40 transition focus:ring"
            aria-invalid={Boolean(attempted && errors[field])}
          />
          {attempted && errors[field] && <span className="mt-1 block text-xs text-amber-200">{errors[field]}</span>}
        </label>
      ))}
      <label className="block text-sm text-text">
        Message
        <textarea
          value={values.message}
          onChange={(event) => setValues((curr) => ({ ...curr, message: event.target.value }))}
          rows={6}
          className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text outline-none ring-accent/40 transition focus:ring"
          aria-invalid={Boolean(attempted && errors.message)}
        />
        {attempted && errors.message && <span className="mt-1 block text-xs text-amber-200">{errors.message}</span>}
      </label>
      <button type="submit" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90">
        Submit Enquiry
      </button>
    </form>
  );
}
