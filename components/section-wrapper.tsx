import { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  heading?: string;
  intro?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, heading, intro, children }: SectionWrapperProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
      {(heading || intro) && (
        <header className="mb-8 max-w-3xl">
          {heading && <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{heading}</h2>}
          {intro && <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
