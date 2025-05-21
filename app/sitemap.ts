import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nayannow.xyz',
      lastModified: new Date(),
    },
  ]
}