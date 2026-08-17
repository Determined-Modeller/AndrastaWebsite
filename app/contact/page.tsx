import { BaseCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact Andrasta Marine for customer, prime, partner, supplier, and technical enquiries.',
  path: '/contact/'
});

export default function ContactPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Contact"
        headingAs="h1"
        heading="Bring the mission, operating constraint or evidence requirement."
        intro="Current priorities are Manta testing, AndraSound development partnerships, payload integration, independent validation and future distribution routes."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),rgba(4,7,13,0.96)_52%)] p-7 shadow-2xl shadow-cyan-950/20 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Direct email</p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="mt-5 block break-all text-3xl font-semibold tracking-tight text-white transition hover:text-cyan-100 sm:text-4xl"
            >
              {contactDetails.email}
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              A useful first note includes your organisation, the mission or work package, intended operating environment, indicative timing, and any security or disclosure constraints.
            </p>
            <dl className="mt-8 grid gap-4 border-t border-slate-700/70 pt-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Company</dt>
                <dd className="mt-1 text-slate-100">{contactDetails.company}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Based</dt>
                <dd className="mt-1 text-slate-100">{contactDetails.location}</dd>
              </div>
            </dl>
          </div>

          <aside className="rounded-3xl border border-slate-700/70 bg-slate-950/55 p-7 sm:p-9">
            <h2 className="text-xl font-semibold text-white">Agree the disclosure route before the technical detail.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Please do not send classified, export-controlled, customer-confidential, patent-sensitive, or other restricted technical information without first agreeing the correct channel and disclosure basis.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              General enquiries can start by email. A controlled route can then be agreed where the discussion requires it.
            </p>
          </aside>
        </div>
      </SectionWrapper>

      <div className="border-y border-slate-800/80 bg-slate-950/35">
        <SectionWrapper eyebrow="Enquiry routes" heading="Where current conversations are focused.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <BaseCard title="Customers + operators" detail="Mission need, operating constraint, demonstration objective, data requirement, or future procurement route." />
            <BaseCard title="Primes + integrators" detail="Platform, payload, autonomy, command-and-control, work-package, evidence, or supplier-assurance interfaces." />
            <BaseCard title="Test + technology partners" detail="Facilities, propulsion, hydrogen, hydrides, sensing, navigation, marine operations, certification, or trials." />
            <BaseCard title="Suppliers + compliance" detail="Manufacturing, specialist engineering, procurement onboarding, quality, cyber, export, or responsible-business review." />
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
