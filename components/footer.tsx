import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

const WORDMARK_SRC = "/andrasta-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#04070d]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Image
  src={WORDMARK_SRC}
  alt="Andrasta Marine"
  width={620}
  height={160}
  className="h-auto w-[260px] sm:w-[340px]"
/>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
            Offshore autonomy for persistent maritime awareness. Structured for credible deployment pathways and scalable mission operations.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300 sm:grid-cols-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <Image
            src={MINI_LOGO_SRC}
            alt=""
            width={64}
            height={64}
            className="h-12 w-12 object-contain opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}
