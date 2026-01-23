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
export const SITE_URL = process.env.SITE_URL || 'https://example.com'

type Locale = 'et' | 'en'

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

  const canonicalUrl = `${SITE_URL}/${locale}/${path}`
  const alternateUrl = locale === 'et' ? `${SITE_URL}/en/${path}` : `${SITE_URL}/et/${path}`

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        et: `${SITE_URL}/et/${path}`,
        en: `${SITE_URL}/en/${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: locale === 'et' ? 'et_EE' : 'en_US',
      type,
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image] }),
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
  const image = post.ogImage || post.image

  return {
    title: post.seoTitle || post.title,
    description: post.description,
    keywords: post.keywords?.join(', '),
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        et: `${SITE_URL}/et/blog/${post.slug}`,
        en: `${SITE_URL}/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: canonicalUrl,
      locale: locale === 'et' ? 'et_EE' : 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.description,
      ...(image && { images: [image] }),
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date, // TODO: Add dateModified field to BlogPost type if tracking updates
    author: {
      '@type': 'Person',
      name: post.author || 'Your Organization Name', // Customize default author
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Your Organization Name', // REQUIRED: Update with your organization name
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`, // REQUIRED: Update with your logo path
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${locale}/blog/${post.slug}`,
    },
    inLanguage: locale === 'et' ? 'et-EE' : 'en-US',
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
