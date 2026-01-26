import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://agrello.io'),
  title: {
    default: 'Agrello - E-Signatures & Contract Management',
    template: '%s | Agrello',
  },
  description:
    'Secure e-signatures and contract management platform for SMEs. Create, sign, and manage legally-binding agreements.',
  keywords: ['e-signature', 'contract management', 'digital signing', 'CLM', 'eIDAS'],
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/agrello_fav_icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/images/agrello_fav_icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Agrello',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Agrello - E-Signatures & Contract Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-default.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
