import { Metadata } from 'next';
import { PSYCHOLOGIST, SITE_URL, SITE_NAME, SEO_KEYWORDS } from './constants';

export const generateMetadata = (): Metadata => {
  return {
    title: `${PSYCHOLOGIST.name} - ${PSYCHOLOGIST.title} en Entre Ríos | Terapia Psicológica`,
    description:
      'Psicóloga clínica especializada en terapia cognitivo conductual. Ofrezco servicios de terapia individual, de pareja y familiar en Entre Ríos, Argentina. ¡Solicita tu turno hoy!',
    keywords: SEO_KEYWORDS,
    authors: [{ name: PSYCHOLOGIST.name }],
    creator: PSYCHOLOGIST.name,
    publisher: PSYCHOLOGIST.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: 'website',
      url: SITE_URL,
      title: `${PSYCHOLOGIST.name} - ${PSYCHOLOGIST.title}`,
      description:
        'Psicóloga clínica especializada en terapia cognitivo conductual en Entre Ríos, Argentina.',
      siteName: SITE_NAME,
      locale: 'es_AR',
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: PSYCHOLOGIST.name,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${PSYCHOLOGIST.name} - ${PSYCHOLOGIST.title}`,
      description:
        'Psicóloga clínica especializada en terapia cognitivo conductual en Entre Ríos, Argentina.',
      creator: '@psicologagarcia',
      images: [`${SITE_URL}/og-image.jpg`],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
};

// Schema.org JSON-LD para psicóloga local
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: PSYCHOLOGIST.name,
    image: `${SITE_URL}/og-image.jpg`,
    description: PSYCHOLOGIST.bio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Entre Ríos',
      addressCountry: 'AR',
      addressRegion: 'Entre Ríos',
    },
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://wa.me',
    ],
    url: SITE_URL,
    telephone: `+${PSYCHOLOGIST.phone}`,
    priceRange: '$$',
    knows: [
      'Terapia Cognitivo Conductual',
      'Terapia Individual',
      'Terapia de Pareja',
      'Terapia Familiar',
    ],
    serviceArea: {
      '@type': 'City',
      name: 'Entre Ríos',
    },
  };
};

// Schema.org para Professional
export const generateProfessionalSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': SITE_URL,
    name: PSYCHOLOGIST.name,
    description: PSYCHOLOGIST.bio,
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Entre Ríos',
      addressCountry: 'AR',
      addressRegion: 'Entre Ríos',
    },
    url: SITE_URL,
    telephone: `+${PSYCHOLOGIST.phone}`,
  };
};

// Schema.org para FAQPage (si aplica)
export const generateFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo agendar una consulta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes contactarme a través de WhatsApp directamente desde esta web o rellenando el formulario de contacto.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Realizo sesiones online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ofrezco sesiones tanto presenciales como en línea según tus necesidades.',
        },
      },
    ],
  };
};
