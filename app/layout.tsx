import type { Metadata } from 'next'
import './globals.css'

/* ─── Base URL (required for canonical + og:image absolute URLs) ─────────── */
const BASE_URL = 'https://timbros.it'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: 'timbrOS — Il CRM italiano per agenzie e team di vendita',
  description: 'Pipeline kanban, gestione contatti e task in un unico workspace. CRM italiano GDPR-compliant, multi-workspace, con 2FA nativo. Accesso beta gratuito.',

  keywords: [
    'CRM italiano',
    'CRM per agenzie',
    'gestione pipeline vendite',
    'CRM multi-workspace',
    'CRM kanban',
    'CRM GDPR',
    'software CRM Italia',
    'alternativa HubSpot italiano',
    'gestione contatti aziendali',
    'CRM SaaS italiano',
  ],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: 'timbrOS — Il CRM italiano per agenzie e team di vendita',
    description: 'Pipeline kanban, contatti e task in un unico workspace. GDPR-compliant, multi-workspace, 2FA nativo. Accesso beta gratuito.',
    url: BASE_URL,
    siteName: 'timbrOS',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.png',         // 1200×630 — da creare (vedi nota sotto)
        width: 1200,
        height: 630,
        alt: 'timbrOS — Il CRM italiano per agenzie e team di vendita',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'timbrOS — Il CRM italiano per agenzie e team di vendita',
    description: 'Pipeline, contatti e task. Accesso beta gratuito — nessuna carta.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },

  robots: { index: true, follow: true },
}

/* ─── Schema JSON-LD ─────────────────────────────────────────────────────── */

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'timbrOS',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon-32x32.png`,
  description: 'timbrOS è un CRM SaaS italiano per agenzie, freelance e team di vendita. Offre pipeline kanban, gestione contatti, task e dashboard KPI in un unico workspace multi-tenant.',
  foundingLocation: {
    '@type': 'Place',
    addressCountry: 'IT',
  },
  sameAs: [
    // aggiungi LinkedIn/Twitter di timbrOS quando disponibili
  ],
}

const schemaSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'timbrOS',
  url: BASE_URL,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM Software',
  operatingSystem: 'Web',
  inLanguage: 'it',
  description: 'CRM italiano con pipeline kanban drag & drop, gestione contatti con rating, task assegnabili al team, dashboard KPI automatica e supporto multi-workspace. GDPR-compliant con Row Level Security e 2FA nativo.',
  featureList: [
    'Pipeline kanban drag & drop con 7 template di settore',
    'Gestione contatti con rating a stelle e vista lista/kanban',
    'Task assegnabili ai membri del team',
    'Dashboard KPI automatica con valore pipeline in tempo reale',
    'Multi-workspace: più clienti o progetti isolati in un unico account',
    'GDPR-compliant con Row Level Security Supabase',
    '2FA nativo (TOTP)',
    'Export/import CSV completo',
    'Accesso su invito — beta gratuita senza carta di credito',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Accesso beta gratuito su invito, nessuna carta di credito richiesta.',
  },
  publisher: {
    '@type': 'Organization',
    name: 'timbrOS',
    url: BASE_URL,
  },
}

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'timbrOS',
  url: BASE_URL,
  inLanguage: 'it',
  description: 'Il CRM italiano per agenzie e team di vendita.',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cos\'è timbrOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'timbrOS è un CRM SaaS italiano che unisce pipeline kanban, gestione contatti, task e dashboard KPI in un unico workspace. È progettato per agenzie, freelance e team di vendita che vogliono uno strumento flessibile e GDPR-compliant, senza la complessità di soluzioni enterprise come Salesforce o HubSpot.',
      },
    },
    {
      '@type': 'Question',
      name: 'timbrOS è gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, durante la fase beta l\'accesso a timbrOS è completamente gratuito e non richiede carta di credito. L\'accesso è su invito con valutazione manuale della candidatura.',
      },
    },
    {
      '@type': 'Question',
      name: 'I miei dati sono al sicuro con timbrOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. timbrOS è GDPR-compliant e utilizza Row Level Security (RLS) per isolare i dati tra workspace. Include 2FA nativo (TOTP), non vende dati a terzi e permette l\'esportazione totale dei propri dati in qualsiasi momento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso usare timbrOS per più clienti o progetti diversi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. timbrOS è multi-workspace: puoi gestire più clienti, team o progetti completamente separati da un unico account. I dati di ogni workspace sono isolati e non visibili agli altri.',
      },
    },
    {
      '@type': 'Question',
      name: 'Come faccio a iniziare con timbrOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basta compilare il form di richiesta accesso beta con nome, email professionale e azienda. Il team di timbrOS valuta la candidatura manualmente e risponde entro 24 ore. Nessuna carta di credito richiesta. Dopo l\'approvazione sei operativo in 5 minuti scegliendo il template di pipeline più adatto al tuo settore.',
      },
    },
    {
      '@type': 'Question',
      name: 'In cosa è diverso timbrOS da HubSpot o Salesforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'timbrOS è un CRM italiano pensato per realtà di piccole e medie dimensioni: agenzie, freelance e team di vendita. A differenza di HubSpot o Salesforce, non richiede settimane di configurazione, non ha piani a pagamento con feature bloccate e offre un\'interfaccia semplice e diretta. È ospitato in Europa ed è GDPR-compliant by design.',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSoftwareApplication) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
