'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'

interface Heading {
  id: string
  text: string
}

interface TableOfContentsProps {
  contentHtml: string
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = []
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi
  let match

  while ((match = regex.exec(html)) !== null) {
    const id = match[1]
    const text = match[2].replace(/<[^>]+>/g, '').trim()
    if (id && text) {
      headings.push({ id, text })
    }
  }

  return headings
}

export function TableOfContents({ contentHtml }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const headings = useMemo(() => extractHeadings(contentHtml), [contentHtml])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  if (headings.length < 2) return null

  return (
    <aside className="hidden lg:block w-[220px] flex-shrink-0 self-start sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <nav aria-label="Table of Contents">
        <ul className="space-y-0.5">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block py-2 pl-4 text-sm border-l-2 transition-colors ${
                  activeId === heading.id
                    ? 'border-brand-dark text-brand-dark font-medium'
                    : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
