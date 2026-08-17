import type { MetadataRoute } from 'next';

const siteUrl = 'https://andrastamarine.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '/', changeFrequency: 'monthly', priority: 1 },
    { path: '/technology/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/product-lines/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/case-studies/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/responsibility/', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/investors/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/mission-2028/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact/', changeFrequency: 'yearly', priority: 0.7 }
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority
  }));
}
