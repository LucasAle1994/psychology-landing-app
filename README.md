# 🧠 Psicóloga Ana Luz Querencio - Landing Page

Landing page profesional para psicóloga clínica en Entre Ríos, Argentina. Construcción moderna con enfoque en conversión de pacientes y SEO.

## ✨ Características Principales

- **Integración WhatsApp** - Formulario validado + botón flotante
- **Navegación fluida** - Scroll suave entre secciones
- **Diseño Responsive** - Mobile-first, optimizado para todos los dispositivos
- **SEO Profesional** - Meta tags, schema.org JSON-LD, sitemap
- **Formularios validados** - Sanitización y validación de datos
- **Performance optimizado** - Imágenes comprimidas, lazy loading
- **Accesibilidad** - WCAG 2.1 Level AA

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con SSR
- **TypeScript** - Tipado estricto
- **Tailwind CSS** - Estilos utilitarios
- **React Hooks** - State management
- **Google Fonts** - Tipografía Nunito

## 📦 Instalación

```bash
# Clonar repositorio
git clone <URL>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

## 🎨 Secciones

- **Hero** - CTA para solicitar turno
- **Sobre mí** - Presentación profesional
- **Servicios** - Terapia individual, pareja, psicodiagnóstico
- **Testimonios** - Casos reales de pacientes
- **Contacto** - Formulario WhatsApp, teléfono, email
- **Footer** - Links de redes sociales

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
│   └── assets/              # Imágenes y activos
├── next.config.js           # Configuración Next.js
├── tsconfig.json            # Configuración TypeScript
├── tailwind.config.ts       # Configuración Tailwind
├── postcss.config.mjs       # Configuración PostCSS
├── .eslintrc.json           # ESLint config
└── .prettierrc               # Prettier config
```

## 🛠 Instalación

### Requisitos Previos
- Node.js 18+ instalado
- npm o yarn disponible

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
cd "c:\Lucas\Proyectos 2026\Proyecto Psico Next"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Copia `.env.local.example` a `.env.local`:
```bash
cp .env.local.example .env.local
```

Luego edita `.env.local` con tus datos:
```env
NEXT_PUBLIC_WHATSAPP_PHONE=5493426000000
NEXT_PUBLIC_WHATSAPP_BUSINESS_NAME=Dra. María García
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_SITE_NAME=Mi Landing Psicológica
```

## 🏃 Ejecutar el Proyecto

### Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción
```bash
npm run build
```

### Ejecutar versión de Producción
```bash
npm run start
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## 🎨 Personalización

### Cambiar datos de la psicóloga
Edit `lib/constants.ts`:
```typescript
export const PSYCHOLOGIST = {
  name: 'Tu nombre',
  title: 'Psicóloga Clínica',
  // ... resto de datos
};
```

### Cambiar colores
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2563eb',    // Azul principal
  secondary: '#1e40af',  // Azul oscuro
  // ... más colores
}
```

### Agregar imágenes
1. Coloca imágenes en `public/assets/`
2. Usa `next/image` en los componentes:
```tsx
import Image from 'next/image';
<Image src="/assets/foto.jpg" alt="Descripción" />
```

### Modificar contenido
- Servicios → `lib/constants.ts`
- Testimonios → `lib/constants.ts`
- Keywords SEO → `lib/constants.ts`

## 🔒 Seguridad

### Headers de Seguridad Configurados
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY (Anti-clickjacking)
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Content-Security-Policy: Configurada
- ✅ Referrer-Policy: strict-origin-when-cross-origin

### Validación de Formulario
- Validación client-side de todos los campos
- Regex para validar emails
- Prevención de inyección básica

### Privacidad de Datos
- ✅ NO se guardan datos en servidor
- ✅ Envío directo a WhatsApp del usuario
- ✅ Cumplimiento RGPD
- ✅ Sin tracking invasivo

## 🔍 SEO

### Implementado
- ✅ Metadata completa (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Card
- ✅ Schema.org JSON-LD (LocalBusiness, FAQPage)
- ✅ robots.txt optimizado
- ✅ sitemap.xml dinámico
- ✅ Keywords de Local SEO
- ✅ Canonical URLs

### Palabras Clave Incluidas
- Psicóloga en Entre Ríos
- Terapia psicológica Entre Ríos
- Psicóloga online Argentina
- Terapia cognitivo conductual Entre Ríos
- Y más...

## ⚡ Performance

### Optimizaciones
- ✅ Image optimization con next/image
- ✅ Font optimization con next/font
- ✅ Code splitting automático
- ✅ CSS minification
- ✅ Lazy loading de componentes
- ✅ Optimización de fuentes
- ✅ Compresión GZIP

## ♿ Accesibilidad

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML
- ✅ Labels en formularios
- ✅ Alt text en imágenes
- ✅ Contraste de colores comprobado
- ✅ Navegación por teclado
- ✅ ARIA labels donde necesario

## 📱 WhatsApp Integration

### Cómo Funciona
1. Usuario completa formulario
2. Validación client-side
3. Se genera link de WhatsApp con mensaje pre-relleno
4. Se abre WhatsApp Web/app
5. Usuario puede enviar o modificar mensaje

### Formato del Mensaje
```
Hola, soy {nombre}.
Email: {email}

Me gustaría solicitar información sobre terapia.
Mensaje: {mensaje}
```

### Configuración
- Número de WhatsApp en `.env.local`
- Botón flotante visible después de scroll
- Múltiples CTAs en página

## 📊 Monitoreo

### Herramientas Recomendadas
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

## 🐛 Troubleshooting

### "Módulo no encontrado"
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### "WhatsApp no abre"
- Verifica el número de teléfono en `.env.local`
- Incluye código de país (+54)
- Intenta abrir directamente: `wa.me/5493426000000`

### "Estilos no se aplican"
```bash
npm run build
npm run start
```

### "Error de CORS"
- Ya configurado en headers de next.config.js
- Revisa Content-Security-Policy si personalizas


## 📄 Licencia

Este proyecto está bajo licencia MIT. Úsalo libremente.

---


**Última actualización**: 12 de marzo de 2026
