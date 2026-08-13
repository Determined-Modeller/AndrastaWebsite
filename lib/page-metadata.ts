import type { Metadata } from 'next';

const socialImage = {
  url: '/hero-dual-use.webp',
  width: 1672,
  height: 941,
  alt: 'Andrasta Marine autonomous subsea system'
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | Andrasta Marine`,
      description,
      url: path,
      siteName: 'Andrasta Marine',
      type: 'website',
      images: [socialImage]
    }
  };
}
