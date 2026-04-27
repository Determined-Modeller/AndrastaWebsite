import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="inline-flex items-center" aria-label="Andrasta Marine home">
          <Image
            src="/AndrastaMiniLogo.png"
            alt="Andrasta Marine"
            width={260}
            height={64}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-text">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
