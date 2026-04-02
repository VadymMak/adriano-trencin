import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://adriano-trencin.vercel.app';
const LOCALES  = routing.locales;

type SitemapEntry = MetadataRoute.Sitemap[number];

function buildAlternates(path: string) {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: SitemapEntry[] = [];
  const now = new Date().toISOString();

  const staticPages = [
    '',
    '/menu',
    '/about',
    '/contact',
    '/blog',
  ];

  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page}`,
      lastModified: now,
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8,
      alternates: { languages: buildAlternates(page) },
    });
  }

  return entries;
}
