import Link from 'next/link';
import { ReactNode } from 'react';

type BaseCardProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  detail?: string;
  className?: string;
  children?: ReactNode;
};

export function BaseCard({ title, eyebrow, subtitle, detail, className = '', children }: BaseCardProps) {
  return (
    <article className={`group rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-slate-900/70 ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/85">{eyebrow}</p>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>

      {subtitle && (
        <p className="mt-2 text-sm font-medium text-cyan-200/90">{subtitle}</p>
      )}

      {detail && (
        <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
      )}

      {children}
    </article>
  );
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
      {children}
    </span>
  );
}

export function DatasheetLink({ href, product }: { href: string | null; product: string }) {
  if (!href) {
    return (
      <span
        aria-label={`${product} datasheet in preparation`}
        data-datasheet-placeholder={product}
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-600/70 px-4 py-2 text-sm font-medium text-slate-400"
      >
        Datasheet in preparation
        <span aria-hidden="true">↗</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:text-white"
    >
      Download datasheet
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

type SpecItem = { label: string; value: string };

export function SpecCard({ title, items }: { title: string; items: SpecItem[] }) {
  return (
    <article className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6">
      <h4 className="text-base font-semibold text-white">{title}</h4>

      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 border-t border-slate-700/70 pt-3 text-sm sm:flex-row sm:justify-between"
          >
            <dt className="text-slate-400">{item.label}</dt>
            <dd className="text-slate-100">{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
