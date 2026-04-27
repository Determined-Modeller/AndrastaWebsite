import { ReactNode } from "react";

type BaseCardProps = {
  title: string;
  subtitle?: string;
  detail?: string;
  children?: ReactNode;
};

export function BaseCard({ title, subtitle, detail, children }: BaseCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-700/70 bg-slate-950/55 p-6 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-slate-900/70">
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
