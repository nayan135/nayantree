import { sitemapConfig } from '@/app/sitemap-config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { siteUrl, alternativeSiteUrl, lastmod, changefreq, priority } = sitemapConfig
  
  // Create XML string with XSL stylesheet reference
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    
  </url>
  <url>
    <loc>${alternativeSiteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

export const runtime = 'edge'