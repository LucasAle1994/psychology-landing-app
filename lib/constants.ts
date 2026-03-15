// Información de la psicóloga
export const PSYCHOLOGIST = {
  name: 'Lic. Ana Luz Querencio',
  title: 'Psicóloga Clínica | Terapia presencial y online',
  specialties: [
    'Terapia Cognitivo Conductual',
    'Terapia Individual',
    'Terapia de Pareja',
    'Terapia Familiar',
  ],
  bio: `Soy Licenciada en Psicología, con un enfoque en la comprensión y el abordaje de los pensamientos, las conductas y las emociones que influyen en la vida cotidiana, con el objetivo de promover mayor bienestar y equilibrio emocional.
  Ofrezco un espacio seguro donde puedas hablar con libertad, comprender lo que te está pasando y encontrar herramientas para sentirte mejor.`,
  location: 'Entre Ríos, Argentina',
  phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '543815404411',
  email: 'analuzquerencio@gmail.com'
};

// Servicios ofrecidos
export const SERVICES = [
  {
    id: 'individual',
    title: 'Terapia individual',
    description:
      'Espacio seguro para adultos, adolescentes y niños que buscan comprensión y cambio personal.',
    image: '/assets/terapia_individual.avif',
  },
  {
    id: 'pareja',
    title: 'Terapia de pareja',
    description:
      'Espacio de acompañamiento para parejas que buscan mejorar la comunicación, resolver conflictos o atravesar momentos de crisis dentro de la relación.',
      image: '/assets/personajes-hombre-mujer-hablan-psicologo-sesion-terapia-familiar_633368-19.avif',
    },
    {
      id: 'psicodagnostico',
      title: 'Psicodiagnóstico',
      description:
      'Proceso de evaluación donde se utilizan entrevistas clínicas y herramientas específicas de evaluación para orientar diagnósticos, tratamientos o intervenciones adecuadas.',
      image: '/assets/istockphoto-1363659665-612x612.jpg',
  },
];

// Testimonios ficticios
export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Carla M.',
    text: 'Gracias a Ana pude atravesar un duelo muy duro. Su calidez humana y profesionalismo me hicieron sentir acompañada desde el primer día.',
  },
  {
    id: 2,
    author: 'Javier P.',
    text: 'Recomiendo sus sesiones online. Me ayudó a reducir mi ansiedad en pocas semanas. ¡Muy recomendable!',
  },
  {
    id: 3,
    author: 'Mariana L.',
    text: 'La terapia de pareja en la que Ana nos acompañó fue transformadora. Logramos mejorar nuestra comunicación y recuperar la conexión que habíamos perdido.',
  },
  {
    id: 4,
    author: 'Diego R.',
    text: 'Profesional altamente calificada. Me ayudó a entender patrones de comportamiento que me limitaban. Los resultados fueron evidentes en poco tiempo.',
  },
  {
    id: 5,
    author: 'Sofía G.',
    text: 'Estoy muy agradecida. A través de las sesiones terapéuticas logré trabajar mi autoestima y hoy me siento mucho mejor conmigo misma.',
  },
];

// Keywords para SEO
export const SEO_KEYWORDS = [
  'psicóloga en Entre Ríos',
  'terapia psicológica Entre Ríos',
  'psicóloga online Argentina',
  'terapia cognitivo conductual Entre Ríos',
  'terapia de pareja Between Ríos',
  'psicólogo clínico Argentina',
  'consulta psicológica online',
  'bienestar emocional',
];

// Redes sociales
export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/psi.querencio/',
  tiktok: 'https://www.tiktok.com/@psi.querencio',
  facebook: 'https://www.facebook.com/Querencioanaluz',
};

// URLs iniciales (actualizar según el dominio)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Psicóloga García - Entre Ríos';
