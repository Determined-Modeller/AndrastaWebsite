import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8" aria-label="Primary">
        <Link href="/" className="inline-flex items-center" aria-label="Andrasta Marine home">
          <Image src="/andrasta-logo.svg" alt="Andrasta Marine" width={260} height={64} priority className="h-8 w-auto sm:h-9" />
        </Link>
        <ul className="hidden flex-wrap items-center gap-5 text-sm text-muted lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-text focus-visible:text-text">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-md border border-accent/50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-text transition hover:border-accent hover:bg-accent/10"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
