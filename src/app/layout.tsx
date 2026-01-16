import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Agrello - E-Signatures & Contract Management',
    template: '%s | Agrello',
  },
  description: 'Secure e-signatures and contract management platform for SMEs. Create, sign, and manage legally-binding agreements.',
  keywords: ['e-signature', 'contract management', 'digital signing', 'CLM', 'eIDAS'],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
