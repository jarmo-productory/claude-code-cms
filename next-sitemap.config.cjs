/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://agrello.io',
  generateRobotsTxt: false, // We manage robots.txt manually
  outDir: 'out',
  exclude: ['/styleguide/*', '/styleguide'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Set priorities based on page type
    let priority = 0.7
    let changefreq = 'weekly'

    if (path.match(/^\/[a-z]{2}\/?$/)) {
      // Homepage
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/blog/') && !path.endsWith('/blog/')) {
      // Blog posts
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.includes('/topics/')) {
      // Topic articles
      priority = 0.8
      changefreq = 'monthly'
    } else if (
      path.includes('/features') ||
      path.includes('/pricing') ||
      path.includes('/contact')
    ) {
      // Key pages
      priority = 0.9
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  // Note: hreflang alternates are handled via Next.js metadata API in page components
  // This keeps sitemap generation simpler and avoids duplicate alternate refs
}
