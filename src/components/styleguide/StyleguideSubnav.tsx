'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'header', label: 'Header' },
  { id: 'hero', label: 'Hero' },
  { id: 'footer', label: 'Footer' },
  { id: 'container-widths', label: 'Containers' },
  { id: 'grid-systems', label: 'Grids' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'breakpoints', label: 'Breakpoints' },
  { id: 'page-shell', label: 'Page Shell' },
]

export function StyleguideSubnav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Simple logic to highlight active section
      let currentSection = ''
      let minDistance = Infinity

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Offset for the sticky header height (approx 120px)
          const distance = Math.abs(rect.top - 180)
          if (distance < minDistance) {
            minDistance = distance
            currentSection = section.id
          }
        }
      }
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="w-full bg-gray-50 border-t border-gray-200 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-1 py-2 min-w-max">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                activeSection === section.id
                  ? 'bg-white text-brand-primary shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault()
                // Offset scroll by header height (~130px)
                const element = document.getElementById(section.id)
                if (element) {
                  const headerOffset = 180
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  })
                }
                setActiveSection(section.id)
              }}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
