import { MetadataRoute } from 'next'
import { sitemapConfig } from './sitemap-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${sitemapConfig.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${sitemapConfig.alternativeSiteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    }
  ]
}