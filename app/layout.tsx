import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const siteUrl = 'https://andrastamarine.com';

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Andrasta Marine',
  legalName: 'Andrasta Marine Ltd',
  url: siteUrl,
  logo: `${siteUrl}/andrasta-logo.png`,
  email: 'info@andrastamarine.com',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'UK Companies House',
    value: 'SC887793'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    addressCountry: 'GB'
  },
  founder: {
    '@type': 'Person',
    name: 'Rhodri Hawkins',
    jobTitle: 'Founder and Technical Lead'
  }
};

export const metadata: Metadata = {
  title: {
    default: 'Andrasta Marine',
    template: '%s | Andrasta Marine'
  },
  description:
    'Andrasta Marine develops persistent autonomous subsea systems for civil, security, and defence missions - integrating vehicle, energy, payload, and logistics.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Andrasta Marine',
    description:
      'Persistent autonomous subsea systems for civil, security, and defence missions.',
    url: '/',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
