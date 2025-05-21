<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                        font-size: 14px;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                        background-color: #f5f5f7;
                    }
                    h1 {
                        font-size: 24px;
                        font-weight: bold;
                        margin: 0 0 20px;
                        color: #1d1d1f;
                    }
                    .container {
                        max-width: 900px;
                        margin: 0 auto;
                        background-color: #fff;
                        padding: 30px;
                        border-radius: 12px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th {
                        background-color: #f8f8fa;
                        text-align: left;
                        padding: 12px;
                        font-weight: bold;
                        border-bottom: 1px solid #e6e6e8;
                    }
                    td {
                        padding: 12px;
                        border-bottom: 1px solid #e6e6e8;
                    }
                    tr:hover td {
                        background-color: #f5f5f7;
                    }
                    a {
                        color: #0066cc;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .url {
                        word-break: break-all;
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                    .summary {
                        font-size: 12px;
                        color: #666;
                        background-color: #f8f8fa;
                        padding: 10px;
                        border-radius: 6px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>XML Sitemap</h1>
                        <div class="summary">
                            <p>
                                This is a sitemap for <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:loc"/>
                                <br />
                                Generated on <xsl:value-of select="format-dateTime(current-dateTime(), '[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]')"/>
                            </p>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>URL</th>
                            <th>Last Modified</th>
                            <th>Change Frequency</th>
                            <th>Priority</th>
                        </tr>
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <tr>
                                <td class="url">
                                    <a href="{sitemap:loc}">
                                        <xsl:value-of select="sitemap:loc"/>
                                    </a>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:lastmod"/>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:changefreq"/>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:priority"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>