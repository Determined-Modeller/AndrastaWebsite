import { ContactForm } from '@/components/contact-form';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactDetails } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Andrasta Marine for partnership, operational, and technical enquiries.'
};

export default function ContactPage() {
  return (
    <SectionWrapper heading="Contact" intro="Send an enquiry for partner, customer, or technical collaboration discussions.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-xl border border-border bg-surface p-6 shadow-panel">
          <h3 className="text-lg font-medium text-text">Company details</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Company</dt>
              <dd className="text-text">{contactDetails.company}</dd>
            </div>
            <div>
              <dt className="text-muted">Domain</dt>
              <dd className="text-text">{contactDetails.domain}</dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="text-text">{contactDetails.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="text-text">{contactDetails.email}</dd>
            </div>
          </dl>
        </aside>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
