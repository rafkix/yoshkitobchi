// app/layout.tsx

import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yoshkitobchi.uz'),

  title: {
    default: 'Yoshkitobchi - O‘zbekiston yoshlarining yozgi online kitobxonlik loyihasi',
    template: '%s | YOSHKITOBCHI',
  },

  description:
    'Yoshlar uchun yozgi online kitobxonlik loyihasi. Kitob o‘qing, testlarda qatnashing va reytingda yuqorilang.',

  keywords: [
    'Yoshkitobchi',
    'kitobxonlik',
    'online test',
    'yoshlar',
    'uzbekistan',
    'reading challenge',
    'kitob',
    'sertifikat',
    'telegram bot',
  ],

  authors: [
    {
      name: 'YOSHKITOBCHI',
    },
  ],

  creator: 'YOSHKITOBCHI',

  publisher: 'YOSHKITOBCHI',

  applicationName: 'YOSHKITOBCHI 2026 YOZ',

  category: 'education',

  openGraph: {
    type: 'website',

    locale: 'uz_UZ',

    url: 'https://yoshkitobchi.uz',

    title: 'YOSHKITOBCHI 2026 YOZ',

    description:
      'Yoshlar uchun yozgi online kitobxonlik loyihasi.',

    siteName: 'YOSHKITOBCHI',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YOSHKITOBCHI 2026 YOZ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'YOSHKITOBCHI 2026 YOZ',

    description:
      'Yoshlar uchun yozgi online kitobxonlik loyihasi.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],

    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`
          ${bebas.variable}
          ${inter.variable}

          bg-white
          text-black
          antialiased
        `}
      >
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}