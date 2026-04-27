import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="inline-flex items-center font-semibold tracking-tight">
          Andrasta Marine
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <Link href="#capabilities" className="hover:text-text">
            Capabilities
          </Link>
          <Link href="#systems" className="hover:text-text">
            Systems
          </Link>
          <Link href="#contact" className="hover:text-text">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
