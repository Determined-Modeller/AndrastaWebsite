import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

const WORDMARK_SRC = '/andrasta-logo.png';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#04070d]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Image src={WORDMARK_SRC} alt="Andrasta Marine" width={620} height={160} className="h-auto w-[250px] sm:w-[320px]" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{siteConfig.companyDescription}</p>
          <p className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} Andrasta Marine · {siteConfig.domain}</p>
        </div>

        <div className="space-y-5 lg:justify-self-end">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">Navigation</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-300">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white">
            Discuss a mission profile
          </Link>
        </div>
      </div>
    </footer>
  );
}
