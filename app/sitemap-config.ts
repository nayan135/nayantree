/**
 * Configuration for the sitemap
 * This is used by both the sitemap.ts and the custom server route
 */

export const sitemapConfig = {
  siteUrl: 'https://nayannow.xyz',
  alternativeSiteUrl: 'https://www.nayannow.xyz',
  lastmod: new Date().toISOString(),
  changefreq: 'daily',
  priority: 1.0,
}