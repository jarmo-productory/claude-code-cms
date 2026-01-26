#!/usr/bin/env npx tsx
/**
 * SEO Metadata Audit Script
 * Validates meta tags, hreflang, structured data across all pages
 *
 * Usage: npx tsx scripts/audit-seo-metadata.ts
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'

interface AuditResult {
  url: string
  passed: boolean
  checks: {
    title: { present: boolean; value?: string; length?: number }
    description: { present: boolean; value?: string; length?: number }
    canonical: { present: boolean; value?: string }
    ogTitle: { present: boolean; value?: string }
    ogDescription: { present: boolean; value?: string }
    ogImage: { present: boolean; value?: string }
    ogUrl: { present: boolean; value?: string }
    twitterCard: { present: boolean; value?: string }
    hreflangEn: { present: boolean; value?: string }
    hreflangEt: { present: boolean; value?: string }
    hreflangLv: { present: boolean; value?: string }
    hreflangUk: { present: boolean; value?: string }
    hreflangXDefault: { present: boolean; value?: string }
    jsonLd: { present: boolean; types?: string[] }
  }
  errors: string[]
}

const PAGES_TO_AUDIT = [
  // English pages
  '/en/',
  '/en/features/',
  '/en/pricing/',
  '/en/contact/',
  '/en/support/',
  '/en/blog/',
  '/en/insights/',
  // Estonian pages
  '/et/',
  '/et/features/',
  '/et/pricing/',
  '/et/contact/',
  '/et/support/',
  '/et/blog/',
  '/et/insights/',
  // Latvian pages
  '/lv/',
  '/lv/features/',
  '/lv/pricing/',
  // Ukrainian pages
  '/uk/',
  '/uk/features/',
  '/uk/pricing/',
]

async function fetchPage(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`)
  }
  return response.text()
}

function extractMeta(html: string, property: string): string | undefined {
  // Try property attribute (Open Graph)
  let match = html.match(new RegExp(`<meta[^>]*property="${property}"[^>]*content="([^"]*)"`, 'i'))
  if (match) return match[1]

  // Try name attribute
  match = html.match(new RegExp(`<meta[^>]*name="${property}"[^>]*content="([^"]*)"`, 'i'))
  if (match) return match[1]

  // Try content before property/name
  match = html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*property="${property}"`, 'i'))
  if (match) return match[1]

  match = html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*name="${property}"`, 'i'))
  if (match) return match[1]

  return undefined
}

function extractTitle(html: string): string | undefined {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  return match ? match[1] : undefined
}

function extractCanonical(html: string): string | undefined {
  const match = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)
  return match ? match[1] : undefined
}

function extractHreflang(html: string, lang: string): string | undefined {
  const match = html.match(new RegExp(`<link[^>]*hrefLang="${lang}"[^>]*href="([^"]*)"`, 'i'))
  return match ? match[1] : undefined
}

function extractJsonLdTypes(html: string): string[] {
  const types: string[] = []
  const regex = /<script[^>]*type="application\/ld\+json"[^>]*>([^<]*)<\/script>/gi
  let match
  while ((match = regex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1])
      if (data['@type']) {
        types.push(data['@type'])
      }
    } catch {
      // Ignore parse errors
    }
  }
  return types
}

async function auditPage(path: string): Promise<AuditResult> {
  const url = `${BASE_URL}${path}`
  const errors: string[] = []

  try {
    const html = await fetchPage(url)

    const title = extractTitle(html)
    const description = extractMeta(html, 'description')
    const canonical = extractCanonical(html)
    const ogTitle = extractMeta(html, 'og:title')
    const ogDescription = extractMeta(html, 'og:description')
    const ogImage = extractMeta(html, 'og:image')
    const ogUrl = extractMeta(html, 'og:url')
    const twitterCard = extractMeta(html, 'twitter:card')
    const hreflangEn = extractHreflang(html, 'en')
    const hreflangEt = extractHreflang(html, 'et')
    const hreflangLv = extractHreflang(html, 'lv')
    const hreflangUk = extractHreflang(html, 'uk')
    const hreflangXDefault = extractHreflang(html, 'x-default')
    const jsonLdTypes = extractJsonLdTypes(html)

    // Validate
    if (!title) errors.push('Missing title')
    else if (title.length > 70) errors.push(`Title too long (${title.length} chars)`)

    if (!description) errors.push('Missing description')
    else if (description.length > 160)
      errors.push(`Description too long (${description.length} chars)`)

    if (!canonical) errors.push('Missing canonical URL')
    if (!ogTitle) errors.push('Missing og:title')
    if (!ogDescription) errors.push('Missing og:description')
    if (!ogImage) errors.push('Missing og:image')
    if (!ogUrl) errors.push('Missing og:url')
    if (!twitterCard) errors.push('Missing twitter:card')
    if (!hreflangEn) errors.push('Missing hreflang="en"')
    if (!hreflangEt) errors.push('Missing hreflang="et"')
    if (!hreflangLv) errors.push('Missing hreflang="lv"')
    if (!hreflangUk) errors.push('Missing hreflang="uk"')
    if (!hreflangXDefault) errors.push('Missing hreflang="x-default"')

    return {
      url,
      passed: errors.length === 0,
      checks: {
        title: { present: !!title, value: title, length: title?.length },
        description: {
          present: !!description,
          value: description?.substring(0, 50) + '...',
          length: description?.length,
        },
        canonical: { present: !!canonical, value: canonical },
        ogTitle: { present: !!ogTitle, value: ogTitle },
        ogDescription: { present: !!ogDescription, value: ogDescription?.substring(0, 50) + '...' },
        ogImage: { present: !!ogImage, value: ogImage },
        ogUrl: { present: !!ogUrl, value: ogUrl },
        twitterCard: { present: !!twitterCard, value: twitterCard },
        hreflangEn: { present: !!hreflangEn, value: hreflangEn },
        hreflangEt: { present: !!hreflangEt, value: hreflangEt },
        hreflangLv: { present: !!hreflangLv, value: hreflangLv },
        hreflangUk: { present: !!hreflangUk, value: hreflangUk },
        hreflangXDefault: { present: !!hreflangXDefault, value: hreflangXDefault },
        jsonLd: { present: jsonLdTypes.length > 0, types: jsonLdTypes },
      },
      errors,
    }
  } catch (error) {
    return {
      url,
      passed: false,
      checks: {
        title: { present: false },
        description: { present: false },
        canonical: { present: false },
        ogTitle: { present: false },
        ogDescription: { present: false },
        ogImage: { present: false },
        ogUrl: { present: false },
        twitterCard: { present: false },
        hreflangEn: { present: false },
        hreflangEt: { present: false },
        hreflangLv: { present: false },
        hreflangUk: { present: false },
        hreflangXDefault: { present: false },
        jsonLd: { present: false },
      },
      errors: [`Fetch error: ${error}`],
    }
  }
}

function printSummary(results: AuditResult[]): void {
  console.log('\n' + '='.repeat(80))
  console.log('SEO METADATA AUDIT SUMMARY')
  console.log('='.repeat(80))

  const passed = results.filter((r) => r.passed).length
  const failed = results.filter((r) => !r.passed).length
  const total = results.length

  console.log(`\nTotal pages audited: ${total}`)
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)
  console.log(`Score: ${Math.round((passed / total) * 100)}%`)

  // Count individual checks
  const checkStats: Record<string, { present: number; missing: number }> = {}
  const checkKeys = [
    'title',
    'description',
    'canonical',
    'ogTitle',
    'ogDescription',
    'ogImage',
    'ogUrl',
    'twitterCard',
    'hreflangEn',
    'hreflangEt',
    'hreflangLv',
    'hreflangUk',
    'hreflangXDefault',
    'jsonLd',
  ]

  for (const key of checkKeys) {
    checkStats[key] = { present: 0, missing: 0 }
  }

  for (const result of results) {
    for (const key of checkKeys) {
      const check = result.checks[key as keyof typeof result.checks]
      if (check.present) {
        checkStats[key].present++
      } else {
        checkStats[key].missing++
      }
    }
  }

  console.log('\n' + '-'.repeat(80))
  console.log('CHECK RESULTS')
  console.log('-'.repeat(80))

  for (const [key, stats] of Object.entries(checkStats)) {
    const icon = stats.missing === 0 ? '✅' : stats.present === 0 ? '❌' : '⚠️'
    console.log(`${icon} ${key.padEnd(20)} ${stats.present}/${total} present`)
  }

  // Print failed pages
  if (failed > 0) {
    console.log('\n' + '-'.repeat(80))
    console.log('FAILED PAGES')
    console.log('-'.repeat(80))

    for (const result of results.filter((r) => !r.passed)) {
      console.log(`\n❌ ${result.url}`)
      for (const error of result.errors) {
        console.log(`   - ${error}`)
      }
    }
  }

  console.log('\n' + '='.repeat(80))
}

async function main() {
  console.log('SEO Metadata Audit Script')
  console.log(`Base URL: ${BASE_URL}`)
  console.log(`Pages to audit: ${PAGES_TO_AUDIT.length}`)
  console.log('')

  const results: AuditResult[] = []

  for (const path of PAGES_TO_AUDIT) {
    process.stdout.write(`Auditing ${path}... `)
    const result = await auditPage(path)
    console.log(result.passed ? '✅' : `❌ (${result.errors.length} issues)`)
    results.push(result)
  }

  printSummary(results)

  // Exit with error code if any failures
  process.exit(results.some((r) => !r.passed) ? 1 : 0)
}

main()
