import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'timbrOS — Il CRM che si adatta al tuo lavoro',
  description: 'Pipeline, contatti e task in un unico spazio flessibile. CRM italiano in beta — accesso su invito.',
  openGraph: {
    title: 'timbrOS — Il CRM che si adatta al tuo lavoro',
    description: 'Pipeline, contatti e task in un unico spazio flessibile. CRM italiano in beta.',
    url: 'https://timbros.it',
    siteName: 'timbrOS',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'timbrOS — Il CRM che si adatta al tuo lavoro',
    description: 'Pipeline, contatti e task. Accesso beta disponibile.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
