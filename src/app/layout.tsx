import type { Metadata } from 'next'
import { Space_Grotesk, Sofia_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sofia',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Claude Code CMS - Next.js Starter',
    template: '%s | Claude Code CMS',
  },
  description: 'A modern Next.js 15 starter with Tailwind CSS v4, markdown blog, and component library',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'CMS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et" className={`${spaceGrotesk.variable} ${sofiaSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
