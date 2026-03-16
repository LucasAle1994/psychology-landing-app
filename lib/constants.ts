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
  location: 'Libertador San Martín, Entre Ríos, Argentina',
  phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '543815404411',
  email: 'lic.analuzquerencio@gmail.com',
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
    image:
      '/assets/personajes-hombre-mujer-hablan-psicologo-sesion-terapia-familiar_633368-19.avif',
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
    location: 'Paraná, Entre Ríos',
    text: 'Queremos agradecer a todo el equipo interdisciplinario de Psicomunidad y especialmente a Ana Luz por el acompañamiento tan amoroso y profesional que le brindan a nuestra hija. Siempre vuelve contenta, entusiasmada, contándonos todo lo que hizo y lo que pintó en cada encuentro. Verla así nos llena el corazón y nos da muchísima tranquilidad. Como padres, también nos sentimos escuchados y acompañados por parte de Ana Luz, y eso es fundamental para nosotros. Saber que hay contención, sensibilidad y compromiso en cada paso de su proceso nos da una enorme paz, más aún al ver los resultados y como ella disfruta cada espacio. Gracias por cuidar, respetar y potenciar a nuestra hija con tanto amor y dedicación.',
  },
  {
    id: 2,
    author: 'Javier P.',
    location: 'Concordia, Entre Ríos',
    text: 'Gracias Ana. Sin dudas, una de las mejores cosas del 2025 fue encontrar este espacio',
  },
  {
    id: 3,
    author: 'Mariana L.',
    location: 'Gualeguaychú, Entre Ríos',
    text: 'Graciaaas Anaaa por todoooo! Sos lo mas! El próximo años vamos a seguir construyendo 🫶🏼',
  },
  {
    id: 4,
    author: 'Diego R.',
    location: 'Villaguay, Entre Ríos',
    text: 'Profesional altamente calificada. Me ayudó a entender patrones de comportamiento que me limitaban. Los resultados fueron evidentes en poco tiempo.',
  },
  {
    id: 5,
    author: 'Sofía G.',
    location: 'Colón, Entre Ríos',
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

// Motivos más frecuentes de consulta
export const FREQUENT_REASONS = [
  {
    id: 1,
    title: 'Autoestima y amor propio',
    description:
      'Inseguridad y autocrítica excesiva, lo que dificulta aceptarse y valorarse a uno mismo.',
  },
  {
    id: 2,
    title: 'Duelos y pérdidas',
    description:
      'Dificultad para enfrentar la pérdida de seres queridos o adaptarse a cambios significativos en la vida.',
  },
  {
    id: 3,
    title: 'Depresión',
    description:
      'Tristeza profunda, falta de energía y pérdida de interés en actividades que antes disfrutaban.',
  },
  {
    id: 4,
    title: 'Ansiedad',
    description:
      'Sentimientos persistentes de preocupación, tensión o miedo que interfieren con la vida diaria.',
  },
  {
    id: 5,
    title: 'Estrés',
    description:
      'Experiencias dolorosas o traumáticas que continúan afectando el bienestar emocional.',
  },
  {
    id: 6,
    title: 'Problemas en relaciones',
    description:
      'Conflictos interpersonales o patrones de comportamiento que dañan las relaciones con los demás.',
  },
  {
    id: 7,
    title: 'Regulacion emocional',
    description: 'Sensación de estar perdido, falta de motivación o incertidumbre sobre el futuro.',
  },
  {
    id: 8,
    title: 'Perfeccionismo y autoexigencia',
    description: 'Expectativas poco realistas hacia uno mismo que generan frustración y estrés.',
  },
];

// URLs iniciales (actualizar según el dominio)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Psicóloga García - Entre Ríos';
