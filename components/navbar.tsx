import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const WORDMARK_SRC = "/andrasta-logo.png";
const MINI_LOGO_SRC = "/AndrastaMinilogo.png";

export function Navbar() {
  const navItems = siteConfig.nav.filter((item) => item.href !== "/");
  const mobileNavItems = navItems.filter((item) => item.href !== "/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#04070d]/92 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[84px] w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Andrasta Marine home">
          <Image
            src={MINI_LOGO_SRC}
            alt=""
            width={72}
            height={72}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <Image
            src={WORDMARK_SRC}
            alt="Andrasta Marine"
            width={620}
            height={160}
            priority
            className="h-auto w-[230px] sm:w-[330px] lg:w-[400px]"
          />
        </Link>

        <div className="hidden items-center gap-5 text-sm font-medium text-slate-300 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="shrink-0 rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white xl:hidden"
        >
          Contact
        </Link>
      </nav>

      <div className="border-t border-slate-800/70 xl:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-4 overflow-x-auto px-5 py-2 text-xs font-medium text-slate-300 sm:px-8">
          {mobileNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 py-1 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
