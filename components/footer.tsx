import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/40">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Offshore autonomy for persistent maritime awareness. Structured for credible deployment pathways and scalable mission operations.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm text-muted sm:grid-cols-3">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-text">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
