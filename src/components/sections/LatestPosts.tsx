'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  imageSrc: string
  author: {
    name: string
    avatarSrc: string // path to image
    date: string
    readTime: string
  }
  href: string
}

interface LatestPostsProps {
  overline?: string
  headline?: string
  description?: string
  viewAllText?: string
  viewAllHref?: string
  posts?: BlogPost[]
}

export function LatestPosts({
  overline = "OUR BLOG",
  headline = "Latest blog posts",
  description = "Tool and strategies modern teams need to help their companies grow.",
  viewAllText = "View all posts",
  viewAllHref = "/blog",
  posts
}: LatestPostsProps) {

  const defaultPosts: BlogPost[] = [
    {
      id: '1',
      title: "The Future of Office Work: Four Predictions for 2026",
      excerpt: "The end of a year invites reflection, and perhaps a little prophecy. For office work, this is particularly fraught territory. The past few years have delivered more upheaval than the preceding decade.",
      imageSrc: "/images/features/automation.webp", // Placeholder
      href: "/blog/future-of-office-work",
      author: {
        name: "Jarmo Tuisk",
        avatarSrc: "/images/hero/hero-woman.avif", // Placeholder
        date: "December 19, 2025",
        readTime: "5 min read"
      }
    },
    {
      id: '2',
      title: "SME Digital Transformation: Practical Steps for European SMEs in 2025",
      excerpt: "Small and mid-sized enterprises (SMEs) across Europe are at the heart of the economy, yet many still lag in digitalization. As we approach 2026, the pressure to digitize is growing.",
      imageSrc: "/images/sections/macbook-screenshot.webp", // Placeholder
      href: "/blog/sme-digital-transformation",
      author: {
        name: "Jarmo Tuisk",
        avatarSrc: "/images/hero/hero-woman.avif", // Placeholder
        date: "November 27, 2025",
        readTime: "5 min read"
      }
    },
    {
      id: '3',
      title: "Overview of Agrello's E-Signature Coverage",
      excerpt: "Agrello provides a range of e-signing options that allow users to sign documents securely and in compliance with regional requirements. The platform supports several signature levels.",
      imageSrc: "/images/sections/customers-cloud.webp", // Placeholder
      href: "/blog/esignature-coverage",
      author: {
        name: "Jarmo Tuisk",
        avatarSrc: "/images/hero/hero-woman.avif", // Placeholder
        date: "November 14, 2025",
        readTime: "5 min read"
      }
    }
  ]

  const activePosts = posts || defaultPosts

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
              {overline}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              {headline}
            </h2>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
          <Button variant="outline" as="a" href={viewAllHref} className="hidden md:inline-flex shrink-0">
            {viewAllText}
          </Button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {activePosts.map((post) => (
            <Link key={post.id} href={post.href} className="group block cursor-pointer h-full flex flex-col">
              {/* Image Card */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100 border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-primary" />
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src={post.author.avatarSrc}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 leading-none mb-1">
                      {post.author.name}
                    </p>
                    <p className="text-gray-500 leading-none">
                      {post.author.date} • {post.author.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 md:hidden">
          <Button variant="outline" as="a" href={viewAllHref} className="w-full">
            {viewAllText}
          </Button>
        </div>
      </div>
    </section>
  )
}
