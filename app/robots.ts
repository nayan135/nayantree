import { MetadataRoute } from 'next'
import { sitemapConfig } from './sitemap-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${sitemapConfig.siteUrl}/sitemap.xml`,
  }
}