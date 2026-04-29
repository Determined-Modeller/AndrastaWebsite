import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: {
    default: 'Andrasta Marine | Persistent offshore autonomy',
    template: '%s'
  },
  description: siteConfig.companyDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Andrasta Marine | Persistent offshore autonomy',
    description: siteConfig.companyDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: ['/hero-vessel.png']
  },
  icons: {
    icon: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }],
    shortcut: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }],
    apple: [{ url: '/AndrastaMinilogo.png', type: 'image/png' }]
  }
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.companyDescription
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
