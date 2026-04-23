import { ReactNode } from 'react';

type BaseCardProps = {
  title: string;
  subtitle?: string;
  detail?: string;
  children?: ReactNode;
};

export function BaseCard({ title, subtitle, detail, children }: BaseCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface/75 p-5 shadow-panel">
      <h3 className="text-lg font-medium text-text">{title}</h3>
      {subtitle && <p className="mt-2 text-sm font-medium text-muted">{subtitle}</p>}
      {detail && <p className="mt-3 text-sm leading-7 text-muted">{detail}</p>}
      {children}
    </article>
  );
}

type SpecItem = { label: string; value: string };

export function SpecCard({ title, items }: { title: string; items: SpecItem[] }) {
  return (
    <article className="rounded-xl border border-border bg-bg/70 p-5">
      <h4 className="text-base font-medium text-text">{title}</h4>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 border-t border-border/70 pt-3 text-sm sm:flex-row sm:justify-between">
            <dt className="text-muted">{item.label}</dt>
            <dd className="text-text">{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
