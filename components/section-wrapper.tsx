import { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, eyebrow, heading, intro, className = '', children }: SectionWrapperProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      {(eyebrow || heading || intro) && (
        <header className="mb-10 max-w-4xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">{eyebrow}</p>
          )}
          {heading && <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>}
          {intro && <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
