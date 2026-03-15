# 🎨 Guía de Customización

Esta guía te ayudará a personalizar cada aspecto de la landing page.

## 1. Cambiar Información de la Psicóloga

**Archivo**: `lib/constants.ts`

```typescript
export const PSYCHOLOGIST = {
  name: 'Tu nombre completo',           // Nombre que aparece en hero
  title: 'Tu especialidad',             // Ej: "Psicóloga Clínica"
  specialties: ['...'],                 // Array de especialidades
  bio: 'Tu biografía aquí...',          // Descripción corta
  location: 'Tu ubicación',             // Ej: "Entre Ríos, Argentina"
  phone: 'Tu número WhatsApp',          // Formato: 5493426000000
};
```

## 2. Cambiar Servicios

**Archivo**: `lib/constants.ts`

```typescript
export const SERVICES = [
  {
    id: 'unique-id',
    title: 'Nombre del Servicio',
    description: 'Descripción detallada',
    icon: '👤',  // Emoji o icono
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // ... más servicios
];
```

## 3. Actualizar Testimonios

**Archivo**: `lib/constants.ts`

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Nombre del cliente',
    text: 'Su testimonial aquí...',
    rating: 5,  // De 1 a 5
    service: 'Nombre del servicio usado',
  },
  // ... más testimonios
];
```

## 4. Personalizar Colores

**Archivo**: `tailwind.config.ts`

```typescript
colors: {
  primary: '#2563eb',      // Color principal (botones, links)
  secondary: '#1e40af',    // Color secundario (hover)
  accent: '#0ea5e9',       // Acentos
  neutral: '#f5f5f5',      // Fondo neutro
  text: '#1f2937',         // Texto principal
  border: '#e5e7eb',       // Bordes
  success: '#10b981',      // Verde (éxito)
  warning: '#f59e0b',      // Naranja (advertencia)
  error: '#ef4444',        // Rojo (error)
}
```

## 5. Agregar Imágenes Profesionales

### Hero Section
**Archivo**: `components/Hero/index.tsx`

Busca el placeholder y reemplaza:
```tsx
{/* Reemplazar esta sección */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/30...">
  {/* Con Image component */}
  <Image
    src="/assets/foto-hero.jpg"
    alt="Dra. María García"
    width={500}
    height={600}
    priority
  />
</div>
```

### About Section
**Archivo**: `components/About/index.tsx`

Igual que arriba, reemplaza el placeholder con:
```tsx
<Image
  src="/assets/foto-profesional.jpg"
  alt="Foto profesional"
  width={400}
  height={500}
  quality={90}
/>
```

### Ubicación de Imágenes
Coloca las imágenes en:
```
public/assets/
├── foto-hero.jpg
├── foto-profesional.jpg
├── og-image.jpg        (1200x630px para redes)
└── ...
```

## 6. Cambiar Tipografía

**Archivo**: `app/layout.tsx`

Las fuentes están importadas de Google Fonts:
```typescript
const inter = Inter({...})        // Fuente sin serifs
const merriweather = Merriweather({...})  // Fuente con serifs
```

Para cambiar:
1. Busca en [Google Fonts](https://fonts.google.com)
2. Copia el import
3. Reemplaza en layout.tsx
4. Actualiza en `tailwind.config.ts` si necesario

## 7. Configurar SEO

**Archivo**: `lib/constants.ts`

```typescript
export const SEO_KEYWORDS = [
  'tus keywords 1',
  'tus keywords 2',
  // ... más keywords
];

export const SITE_NAME = 'Tu nombre profesional';
export const SITE_URL = 'https://tudominio.com';
```

**Archivo**: `lib/seo.ts`

Actualiza medatados, schema.org y títulos:
```typescript
export const generateMetadata = (): Metadata => {
  return {
    title: 'Tu título SEO aquí',
    description: 'Tu descripción SEO aquí...',
    // ...
  };
};
```

## 8. Configurar WhatsApp

**Archivo**: `.env.local`

```env
# Tu número de WhatsApp (sin espacios, con código de país)
NEXT_PUBLIC_WHATSAPP_PHONE=5493426000000

# URL de tu sitio cuando esté deployado
NEXT_PUBLIC_SITE_URL=https://tudominio.com

# Nombre de tu negocio
NEXT_PUBLIC_SITE_NAME=Psicóloga García
```

## 9. Cambiar Colores de Secciones

**Archivo**: Cada componente en `components/*/index.tsx`

```tsx
{/* Hero con gradiente azul */}
<section className="bg-gradient-to-br from-blue-50 via-white to-blue-50">

{/* Services con fondo gris */}
<section className="py-20 bg-neutral">

{/* Contact con fondo blanco */}
<section className="py-20 bg-white">
```

## 10. Personalizar Horarios y Disponibilidad

**Archivo**: `components/Contact/index.tsx`

Busca y actualiza:
```tsx
<p className="text-text/70">
  Lunes a Viernes: 9:00 AM - 7:00 PM
</p>
<p className="text-sm text-text/50">Sábados previa coordinación</p>
```

## 11. Agregar Redes Sociales

**Archivo**: `components/Footer/index.tsx`

Reemplaza URLs en:
```typescript
sameAs: [
  'https://www.facebook.com/tu-pagina',
  'https://www.instagram.com/tu-usuario',
  'https://www.linkedin.com/in/tu-perfil',
],
```

## 12. Cambiar Email de Contacto

**Archivo**: `components/Contact/index.tsx`

```tsx
<a href="mailto:tu@email.com">
  tu@email.com →
</a>
```

**Archivo**: `components/Footer/index.tsx`

```tsx
<a href="mailto:tu@email.com" className="...">
  ✉️ Email
</a>
```

## 13. Personalizar Textos

Cada texto visible está en los componentes. Búscalos y personaliza:

- Hero: `components/Hero/index.tsx`
- About: `components/About/index.tsx`
- Services: `components/Services/index.tsx`
- Testimonials: `components/Testimonials/index.tsx`
- Contact: `components/Contact/index.tsx`

## 14. Agregar Favicon

1. Crea tu favicon:
   - Tamaño: 32x32px
   - Formato: .ico

2. Coloca en:
   - `public/favicon.ico`
   - `public/apple-touch-icon.png` (180x180px)

3. Vercel lo detectará automáticamente

## 15. Cambiar Animaciones

Las animaciones están en `tailwind.config.ts` y `app/globals.css`.

Ejemplos:
```tsx
// Animación de bouncing (botón flotante)
<a className="... animate-bounce">

// Animación de rotating (loading)
<span className="animate-spin">⏳</span>
```

Puedes agregar más en `tailwind.config.ts`:
```typescript
extend: {
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    // ... más animaciones
  },
}
```

## Checklist de Customización

- [ ] Cambié nombre y datos en `lib/constants.ts`
- [ ] Actualicé SEO keywords
- [ ] Agregué fotos profesionales
- [ ] Cambié colores según mi marca
- [ ] Configuré WhatsApp
- [ ] Agregué redes sociales
- [ ] Personalicé testimonios
- [ ] Cambié email de contacto
- [ ] Actualicé horarios
- [ ] Agregué favicon
- [ ] Probé todo en desarrollo
- [ ] Listo para deploy

## Preguntas Frecuentes

### ¿Cómo cambiar el logo?
Agrega un archivo en `public/` y importalo en `Header/index.tsx`:
```tsx
import Image from 'next/image';
<Image src="/logo.png" alt="Logo" width={50} height={50} />
```

### ¿Cómo agregar más secciones?
1. Crea nuevo componente en `components/NewSection/index.tsx`
2. Importalo en `app/page.tsx`
3. Agrégalo al JSX

### ¿Cómo cambiar el idioma?
Edita el `lang="es"` en `app/layout.tsx` al idioma deseado.

### ¿Cómo desactivar animaciones?
En `app/globals.css`, comenta o borra:
```css
@media (prefers-reduced-motion: reduce) { ... }
```

---

**¡Listo! Tu landing page está personalizada y lista para brillar.** ✨
