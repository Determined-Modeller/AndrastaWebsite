import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const siteUrl = 'https://andrastamarine.com';

export const metadata: Metadata = {
  title: {
    default: 'Andrasta Marine',
    template: '%s | Andrasta Marine'
  },
  description:
    'Andrasta Marine develops low-noise, hydrogen-powered autonomous vessel systems for offshore inspection, persistent maritime awareness, and continuous evidence collection.',
  openGraph: {
    title: 'Andrasta Marine',
    description:
      'Low-noise, hydrogen-powered autonomous vessel systems for offshore inspection and persistent maritime awareness.',
    url: siteUrl,
    siteName: 'Andrasta Marine',
    type: 'website'
  },
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
