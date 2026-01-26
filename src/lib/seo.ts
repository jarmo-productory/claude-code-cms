/**
 * SEO Utilities for Next.js
 * Helper functions for generating Next.js Metadata
 *
 * SETUP INSTRUCTIONS:
 * 1. Set SITE_URL environment variable in .env or .env.local
 * 2. Customize locale settings if using different language codes
 * 3. Update Twitter card defaults in generatePageMetadata if needed
 * 4. Modify buildArticleJsonLd publisher info with your organization details
 */

import type { Metadata } from 'next'
import type { BlogPost } from './content'

/**
 * Site URL - override via environment variable
 * Example: SITE_URL=https://yourdomain.com
 */
export const SITE_URL = process.env.SITE_URL || 'https://agrello.io'

export type Locale = 'et' | 'en' | 'lv' | 'uk'

export const SUPPORTED_LOCALES: Locale[] = ['en', 'et', 'lv', 'uk']
export const DEFAULT_LOCALE: Locale = 'en'

// Map locale codes to OpenGraph locale format
export const OG_LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  et: 'et_EE',
  lv: 'lv_LV',
  uk: 'uk_UA',
}

// Map locale codes to language tags for hreflang
export const HREFLANG_MAP: Record<Locale, string> = {
  en: 'en',
  et: 'et',
  lv: 'lv',
  uk: 'uk',
}

/**
 * Generate page metadata with SEO fields
 *
 * @param params - Page metadata parameters
 * @returns Next.js Metadata object
 */
export function generatePageMetadata(params: {
  title: string
  description: string
  locale: Locale
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const { title, description, locale, path = '', keywords, image, type = 'website' } = params

  // Normalize path - remove leading slash if present
  const normalizedPath = path.replace(/^\//, '')
  const canonicalUrl = normalizedPath
    ? `${SITE_URL}/${locale}/${normalizedPath}`
    : `${SITE_URL}/${locale}`

  // Build alternates for all supported locales
  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = normalizedPath ? `${SITE_URL}/${loc}/${normalizedPath}` : `${SITE_URL}/${loc}`
  }
  // Add x-default pointing to English version
  languages['x-default'] = normalizedPath
    ? `${SITE_URL}/${DEFAULT_LOCALE}/${normalizedPath}`
    : `${SITE_URL}/${DEFAULT_LOCALE}`

  // Use default OG image if none provided
  const ogImage = image || `${SITE_URL}/images/og-default.jpg`

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: OG_LOCALE_MAP[locale],
      type,
      siteName: 'Agrello',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Generate blog post metadata
 *
 * @param post - Blog post object
 * @param locale - Current locale
 * @returns Next.js Metadata object optimized for blog posts
 */
export function generateBlogMetadata(post: BlogPost, locale: Locale): Metadata {
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${post.slug}`
  const image = post.ogImage || post.image || `${SITE_URL}/images/og-default.jpg`

  // Build alternates for all supported locales
  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}/blog/${post.slug}`
  }
  languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}/blog/${post.slug}`

  return {
    title: post.seoTitle || post.title,
    description: post.description,
    keywords: post.keywords?.join(', '),
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: canonicalUrl,
      locale: OG_LOCALE_MAP[locale],
      type: 'article',
      siteName: 'Agrello',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.description,
      images: [image],
    },
  }
}

/**
 * Build Article JSON-LD schema for blog posts
 *
 * IMPORTANT: Customize the publisher information with your organization details
 *
 * @param post - Blog post object
 * @param locale - Current locale
 * @returns JSON-LD structured data object
 */
export function buildArticleJsonLd(post: BlogPost, locale: Locale) {
  const languageMap: Record<Locale, string> = {
    en: 'en-US',
    et: 'et-EE',
    lv: 'lv-LV',
    uk: 'uk-UA',
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || `${SITE_URL}/images/og-default.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Agrello Team',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Agrello',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${locale}/blog/${post.slug}`,
    },
    inLanguage: languageMap[locale] || 'en-US',
  }
}

/**
 * Build Organization JSON-LD schema
 * For use on the homepage or root layout
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Agrello',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`,
    },
    description:
      'Secure e-signatures and contract management platform for SMEs. Create, sign, and manage legally-binding agreements.',
    sameAs: [
      'https://www.linkedin.com/company/agrelloapp',
      'https://x.com/agrelloapp',
      'https://www.facebook.com/agrelloapp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@agrello.io',
    },
  }
}

/**
 * Build FAQ JSON-LD schema
 * For use on pages with FAQ sections
 */
export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// ============================================================================
// STATIC PAGE METADATA HELPERS (EXAMPLES)
// ============================================================================

/**
 * Example: Get metadata for homepage
 *
 * CUSTOMIZE THIS with your site's actual content
 */
export function getHomeMetadata(locale: Locale): Metadata {
  const config =
    locale === 'et'
      ? {
          title: 'Pealkiri eesti keeles',
          description: 'Kirjeldus eesti keeles',
          keywords: ['märksõna 1', 'märksõna 2'],
        }
      : {
          title: 'Title in English',
          description: 'Description in English',
          keywords: ['keyword 1', 'keyword 2'],
        }

  return generatePageMetadata({
    ...config,
    locale,
    path: '',
  })
}

/**
 * Example: Get metadata for about page
 *
 * CUSTOMIZE THIS with your site's actual content
 */
export function getAboutMetadata(locale: Locale): Metadata {
  const config =
    locale === 'et'
      ? {
          title: 'Meist',
          description: 'Kes me oleme ja mida me teeme',
          keywords: ['ettevõte', 'meeskond'],
        }
      : {
          title: 'About',
          description: 'Who we are and what we do',
          keywords: ['company', 'team'],
        }

  const path = locale === 'et' ? 'meist' : 'about'
  return generatePageMetadata({
    ...config,
    locale,
    path,
  })
}

/**
 * Example: Get metadata for privacy page
 */
export function getPrivacyMetadata(locale: Locale): Metadata {
  const config =
    locale === 'et'
      ? {
          title: 'Privaatsuspoliitika',
          description: 'Kuidas me kogume, kasutame ja kaitseme teie isikuandmeid',
          keywords: ['privaatsus', 'isikuandmed', 'GDPR'],
        }
      : {
          title: 'Privacy Policy',
          description: 'How we collect, use, and protect your personal data',
          keywords: ['privacy', 'personal data', 'GDPR'],
        }

  const path = locale === 'et' ? 'privaatsus' : 'privacy'
  return generatePageMetadata({
    ...config,
    locale,
    path,
  })
}
