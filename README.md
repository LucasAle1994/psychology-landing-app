# 🧠 Psicóloga García - Landing Page Profesional

Una landing page profesional y moderna para una psicóloga clínica en Entre Ríos, Argentina. Construida con **Next.js 14**, **TypeScript**, **Tailwind CSS** y optimizada para **SEO** y **conversión de pacientes**.

🔗 **[Ver Documentación Completa de Deploy](./DEPLOYMENT.md)**

---

## ✨ Características

### 🎯 Conversión & Experiencia
- ✅ **Integración WhatsApp** - Formulario con envío directo
- ✅ **Botón Flotante WhatsApp** - Acceso permanente
- ✅ **Formulario Validado** - Campos requeridos y sanitización
- ✅ **CTA Prominentes** - Múltiples llamadas a acción
- ✅ **Mobile First** - Diseño responsive perfecto
- ✅ **Scroll Suave** - Navegación fluida entre secciones

### 🔍 SEO Profesional
- ✅ **Meta Tags Dinámicos** - Title, description, OG, Twitter
- ✅ **Schema.org JSON-LD** - LocalBusiness, Professional, FAQ
- ✅ **Sitemap & Robots** - Indexación optimizada
- ✅ **Keywords Locales** - Entre Ríos, Argentina
- ✅ **Canonical URLs** - Evitar contenido duplicado
- ✅ **Local Business Schema** - Información de contacto estructurada

### ⚡ Performance
- ✅ **Next/Image Optimization** - Imágenes comprimidas
- ✅ **Code Splitting** - Bundles optimizados
- ✅ **Lazy Loading** - Componentes bajo demanda
- ✅ **Font Optimization** - Google Fonts vía next/font
- ✅ **CSS Minification** - Estilos comprimidos
- ✅ **Gzip Compression** - Activado por defecto

### 🔐 Seguridad
- ✅ **Content Security Policy** - CSP headers configurados
- ✅ **X-Frame-Options** - Protección contra clickjacking
- ✅ **X-XSS-Protection** - Prevención de XSS
- ✅ **Validación de Formularios** - Sanitización de entrada
- ✅ **TypeScript Strict Mode** - Tipado estricto

### ♿ Accesibilidad
- ✅ **WCAG 2.1 Level AA** - Cumple estándares internacionales
- ✅ **Contraste Colores** - Mínimo 4.5:1
- ✅ **Labels de Formularios** - Accesibles
- ✅ **Alt Text en Imágenes** - Descripciones
- ✅ **Navegación Keyboard** - Tab y Enter funcionales

### 📱 PWA Ready
- ✅ **Manifest.json** - Instalable en dispositivos
- ✅ **Meta Tags PWA** - App shortcut
- ✅ **Icons** - favicon y apple-touch-icon

### 🚀 Infraestructura
- ✅ **Next.js 14+** con App Router
- ✅ **TypeScript** para máxima calidad
- ✅ **Tailwind CSS v3** para diseño moderno
- ✅ **ESLint** configurado
- ✅ **Vercel Ready** - Deploy en 1 click

## 🚀 Stack Tecnológico

| Componente | Versión | Propósito |
|---|---|---|
| **Next.js** | 14.0+ | Framework React SSR/SSG |
| **React** | 18.2+ | Biblioteca UI |
| **TypeScript** | 5.0+ | Tipado de JavaScript |
| **Tailwind CSS** | 3.4+ | Estilos utilitarios |
| **ESLint** | 8.0+ | Linting de código |

**Fuentes:** Google Fonts (Inter, Merriweather)  
**Deploy:** Vercel (recomendado) o cualquier host Node.js  
**Validación:** Client-side

## 📁 Estructura del Proyecto

```
proyecto-psico/
├── app/
│   ├── layout.tsx           # Layout principal con metadatos
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── components/
│   ├── Header/              # Navegación header
│   ├── Hero/                # Sección hero con CTA
│   ├── About/               # Sección sobre mí
│   ├── Services/            # Servicios ofrecidos
│   ├── Testimonials/        # Testimonios de pacientes
│   ├── Contact/             # Sección de contacto
│   ├── ContactForm/         # Formulario WhatsApp
│   ├── FloatingWhatsapp/    # Botón flotante WhatsApp
│   └── Footer/              # Footer con links
├── lib/
│   ├── constants.ts         # Constantes (nombre, servicios, etc)
│   ├── seo.ts               # Configuración SEO y schemas
│   └── whatsapp.ts          # Utilidades de WhatsApp
├── public/
│   ├── robots.txt           # SEO
│   ├── sitemap.xml          # Mapa del sitio
│   ├── manifest.json        # PWA manifest
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

### Core Web Vitals
- Objetivo: LCP < 2.5s
- Objetivo: FID < 100ms
- Objetivo: CLS < 0.1

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

## 🌐 Deployment en Vercel

### 1. Preparar Repositorio
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Subir a GitHub
```bash
# Crear repo en GitHub y pushear
git remote add origin https://github.com/usuario/repo.git
git branch -M main
git push -u origin main
```

### 3. Deployar en Vercel
1. Entra a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Selecciona tu repositorio
4. Configura variables de entorno
5. Click en "Deploy"

### 4. Configurar Dominio Personalizado
1. En Vercel, ve a Settings → Domains
2. Agrega tu dominio
3. Sigue instrucciones de DNS

### Variables de Entorno en Vercel
```
NEXT_PUBLIC_WHATSAPP_PHONE=tu_numero
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_SITE_NAME=Tu Nombre
```

## 📊 Monitoreo

### Herramientas Recomendadas
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

### Configurar Analytics
1. Copia el tracking ID de GA4
2. Agregalo al layout.tsx
3. Verifica el tracking

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

## 📝 Checklist de Publicación

Antes de deployar:
- [ ] Cambiar nombre y datos en `lib/constants.ts`
- [ ] Actualizar `.env.local` con datos reales
- [ ] Agregar fotos en `public/assets/`
- [ ] Revisar y actualizar testimonios
- [ ] Probar formulario de contacto
- [ ] Probar botón WhatsApp
- [ ] Revisar SEO con PageSpeed Insights
- [ ] Configurar Google Search Console
- [ ] Configurar Analytics
- [ ] Revisar accesibilidad
- [ ] Hacer pruebas en móvil
- [ ] Revisar en diferentes navegadores

## 📚 Documentación Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Schema.org](https://schema.org/)

## 📄 Licencia

Este proyecto está bajo licencia MIT. Úsalo libremente.

## 🤝 Soporte

Para preguntas o problemas:
1. Revisa la sección Troubleshooting
2. Consulta la documentación oficial
3. Verifica los logs de error

---

**¡Tu landing page está lista para convertir visitantes en pacientes!** 🚀

**Última actualización**: 12 de marzo de 2026
