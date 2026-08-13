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
    'Andrasta Marine develops persistent autonomous subsea systems for civil, security, and defence missions - integrating vehicle, energy, payload, and logistics.',
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: 'Andrasta Marine',
    description:
      'Persistent autonomous subsea systems for civil, security, and defence missions.',
    url: siteUrl,
    siteName: 'Andrasta Marine',
    type: 'website',
    images: [
      {
        url: '/hero-dual-use.webp',
        width: 1672,
        height: 941,
        alt: 'Andrasta Marine autonomous subsea system'
      }
    ]
  },
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }],
    shortcut: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }],
    apple: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }]
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
