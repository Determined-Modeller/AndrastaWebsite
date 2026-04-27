import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const WORDMARK_SRC = "/andrasta-logo.png";
const MINI_LOGO_SRC = "/AndrastaMinilogo.png";

export function Navbar() {
  const navItems = siteConfig.nav.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-[#06101d]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[84px] w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center gap-4" aria-label="Andrasta Marine home">
  <Image
    src={MINI_LOGO_SRC}
    alt=""
    width={72}
    height={72}
    priority
    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
  />

  <Image
    src={WORDMARK_SRC}
    alt="Andrasta Marine"
    width={620}
    height={160}
    priority
    className="h-auto w-[260px] sm:w-[360px] lg:w-[440px]"
  />
</Link>

        <div className="hidden items-center gap-5 text-sm font-medium text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
