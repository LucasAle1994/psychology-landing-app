import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { PSYCHOLOGIST, SITE_URL, SITE_NAME, SEO_KEYWORDS } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: `${PSYCHOLOGIST.name} - Psicóloga Clínica en Entre Ríos`,
  description: 'Psicóloga clínica especializada en terapia cognitivo conductual. Servicios de terapia individual, de pareja y familiar en Entre Ríos, Argentina.',
  keywords: SEO_KEYWORDS,
  authors: [{ name: PSYCHOLOGIST.name }],
  creator: PSYCHOLOGIST.name,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${PSYCHOLOGIST.name} - Psicóloga en Entre Ríos`,
    description: 'Psicóloga clínica especializada en terapia cognitivo conductual',
    siteName: SITE_NAME,
    locale: 'es_AR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="bg-white text-text">
        <Header />
        <main role="main">{children}</main>
        <FloatingWhatsapp />
        <Footer />
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Psychologist",
      name: PSYCHOLOGIST.name,
      url: SITE_URL,
      telephone: PSYCHOLOGIST.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Entre Ríos",
        addressCountry: "AR"
      },
      areaServed: "Entre Ríos, Argentina"
    })
  }}
/>
