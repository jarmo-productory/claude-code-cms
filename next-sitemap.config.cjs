/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/styleguide/*'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Default transformation
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => {
    const result = []

    // Add language alternates for key pages
    const pages = ['/', '/blog/']
    const locales = ['et', 'en']

    for (const page of pages) {
      for (const locale of locales) {
        result.push({
          loc: `/${locale}${page}`,
          changefreq: 'weekly',
          priority: page === '/' ? 1.0 : 0.8,
          alternateRefs: locales.map(l => ({
            href: `${config.siteUrl}/${l}${page}`,
            hreflang: l,
          })),
        })
      }
    }

    return result
  },
}
