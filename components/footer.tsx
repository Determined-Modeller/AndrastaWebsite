import Image from "next/image";
import Link from "next/link";

import { contactDetails, siteConfig } from "@/data/site";

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
            Persistent autonomous subsea systems for civil, security, and defence missions. Vehicle, energy, payload, and logistics developed as one operating architecture.
          </p>

          <a
            href={`mailto:${contactDetails.email}`}
            className="mt-4 inline-block text-sm text-cyan-100 transition hover:text-white"
          >
            {contactDetails.email}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300 sm:grid-cols-3 lg:justify-self-end">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Andrasta Marine. All rights reserved.</p>
          <p>Development-stage systems · Capabilities and availability subject to validation</p>
        </div>
      </div>
    </footer>
  );
}
