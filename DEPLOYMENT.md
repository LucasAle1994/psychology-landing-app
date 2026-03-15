# 🧠 Landing Page Profesional - Psicóloga Clínica

> **Aplicación Next.js 14 con TypeScript, Tailwind CSS y optimizaciones SEO avanzadas**

## 📋 Índice

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Build y Producción](#build-y-producción)
- [Deployment en Vercel](#deployment-en-vercel)
- [Optimizaciones Implementadas](#optimizaciones-implementadas)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## ✨ Características

✅ **Responsive & Mobile First** - Diseño adaptable a todos los dispositivos  
✅ **Optimizado para SEO** - Meta tags, Schema.org, sitemap.xml, robots.txt  
✅ **Integración WhatsApp** - Formulario con envío directo a WhatsApp  
✅ **Formulario Validado** - Validación de campos con mensajes de error  
✅ **Botón Flotante WhatsApp** - Acceso directo optimizado  
✅ **Performance** - Core Web Vitals optimizados (Next/Image, lazy loading)  
✅ **Seguridad** - Headers de seguridad, CSP, prevención de XSS  
✅ **Accesibilidad** - WCAG 2.1 compliant  
✅ **PWA Ready** - Instalable en navegadores modernos  
✅ **TypeScript** - Tipado estricto para mayor confiabilidad  

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 14+ | Framework React con SSR/SSG |
| **React** | 18+ | Biblioteca UI |
| **TypeScript** | 5.0+ | Tipado de JavaScript |
| **Tailwind CSS** | 3.4+ | Estilos utilitarios |
| **ESLint** | 8+ | Linting de código |

### Dependencias de Desarrollo

```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 📦 Instalación

### Requisitos Previos

- **Node.js** 18.17+ (recomendado 20+)
- **npm** 9+ o **yarn** 4+
- **Git** (para clonar el repositorio)

### Pasos de Instalación

```bash
# 1. Clonar o descargar el proyecto
git clone <repository-url>
cd "Proyecto Psico Next"

# 2. Instalar dependencias
npm install

# 3. Crear archivo de configuración
cp .env.local.example .env.local

# 4. Editar variables de entorno (ver sección Configuración)
# Abre .env.local y reemplaza los valores necesarios
```

---

## ⚙️ Configuración

### Variables de Entorno (.env.local)

Crear archivo `.env.local` en la raíz del proyecto (copiar desde `.env.local.example`):

```env
# WhatsApp Configuration (OBLIGATORIO REEMPLAZAR)
NEXT_PUBLIC_WHATSAPP_PHONE=5493426XX7XXX
NEXT_PUBLIC_WHATSAPP_BUSINESS_NAME=Dra. María García

# Site Configuration (REEMPLAZAR CON DOMINIO REAL)
NEXT_PUBLIC_SITE_URL=https://tusitio.com
NEXT_PUBLIC_SITE_NAME=Psicóloga Clínica
```

### Personalización de Datos

Editar archivo `lib/constants.ts` para personalizar:

```typescript
// Información de la psicóloga
export const PSYCHOLOGIST = {
  name: 'Dra. María García',           // Tu nombre
  title: 'Psicóloga Clínica',          // Tu título
  specialties: [...],                   // Tus especialidades
  bio: '...',                          // Tu biografía
  location: 'Entre Ríos, Argentina',   // Tu ubicación
  phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE,
};

// Servicios ofrecidos
export const SERVICES = [...];

// Testimonios
export const TESTIMONIALS = [...];
```

### Agregar Imágenes

Colocar imágenes en `public/assets/`:

```
public/assets/
├── hero-image.jpg          (1200x600px mínimo)
├── about-photo.jpg         (700x800px mínimo)
└── og-image.jpg            (1200x630px para redes)
```

Luego actualizar referencias en componentes (buscar `/assets/` y reemplazar rutas).

---

## 🚀 Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
```

El servidor estará disponible en: **http://localhost:3000**

### Características del modo desarrollo

- ✅ Hot reload automático
- ✅ Fast refresh en componentes
- ✅ Source maps completos
- ✅ Errores detallados en consola

### Linting

```bash
# Ver errores de linting
npm run lint

# Corregir automáticamente
npm run lint:fix
```

---

## 🏗️ Build y Producción

### Crear build de producción

```bash
npm run build
```

**Output esperado:**
```
✓ Compiled successfully
✓ Minimized CSS
✓ Built in 2.5s
```

### Iniciar servidor de producción

```bash
npm run start
```

Disponible en: **http://localhost:3000** (modo producción)

### Validar build

```bash
# Ver tamaño de bundles
npm run build

# Probar producción localmente
npm run build && npm run start
```

---

## 🚀 Deployment en Vercel

### Opción 1: Deploy desde CLI (Recomendado)

```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Deploy (seguir instrucciones interactivas)
vercel

# Deploy a producción
vercel --prod
```

### Opción 2: Deploy desde Git (Automático)

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar repositorio Git (GitHub/GitLab/Bitbucket)
3. Importar proyecto
4. Vercel detectará `next.config.js` automáticamente
5. Click en "Deploy"

### Opción 3: Deploy Manual (ZIP)

1. Hacer `npm run build` localmente
2. Comprimir el proyecto completo
3. Subir a Vercel (opción manual)

### Configurar Variables de Entorno en Vercel

1. Ir a **Project Settings** → **Environment Variables**
2. Agregar variables:

```
NEXT_PUBLIC_WHATSAPP_PHONE = 5493426XXXXXXX
NEXT_PUBLIC_SITE_URL = https://tupropiodominio.com
NEXT_PUBLIC_SITE_NAME = Nombre Profesional
```

### Post-Deploy

✅ Verificar que funciona en: `https://<nombre>.vercel.app`  
✅ Conectar dominio personalizado (Domains → Add)  
✅ Verificar que WhatsApp funciona desde producción  
✅ Testear SEO con Google Search Console  

---

## 📊 Optimizaciones Implementadas

### Performance

| Optimización | Beneficio |
|---|---|
| **Next/Image** | 70% reducción tamaño imágenes |
| **Lazy Loading** | Carga de componentes bajo demanda |
| **Code Splitting** | Bundles optimizados por ruta |
| **Font Optimization** | Fuentes cargadas vía next/font |
| **CSS Minification** | Estilos comprimidos automáticamente |
| **Compression** | Gzip activado por defecto |

**Objetivo:** Core Web Vitals **PASSED** ✅

### SEO

✅ **Meta Tags Dinámicos**
- Title, description, keywords, Open Graph
- Twitter Card tags
- Canonical URLs

✅ **Schema.org JSON-LD**
- LocalBusiness schema
- Professional schema
- FAQ schema
- Structured data para buscadores

✅ **Sitemaps y Robots**
- sitemap.xml generado
- robots.txt configurado
- Crawl directives optimizadas

✅ **Local SEO**
- Ubicación: Entre Ríos, Argentina
- Keywords locales
- Contact schema

### Seguridad

✅ **Headers de Seguridad:** CSP, X-Frame-Options, X-Content-Type-Options  
✅ **Validación de Formularios:** Prevención de inyecciones  
✅ **Next.js Built-in:** Protección XSS automática  

### Accesibilidad

✅ WCAG 2.1 Level AA  
✅ Contraste de colores > 4.5:1  
✅ Labels en formularios  
✅ Alt text en imágenes  
✅ Navegación por teclado  

---

## 📁 Estructura del Proyecto

```
psico-landing/
├── app/
│   ├── layout.tsx                 # Root layout con metadata
│   ├── page.tsx                   # Home page
│   └── globals.css                # Estilos globales
│
├── components/
│   ├── Hero/                      # Sección hero
│   ├── Header/                    # Navegación
│   ├── About/                     # Sección "Sobre mí"
│   ├── Services/                  # Grid de servicios
│   ├── Testimonials/              # Testimonios
│   ├── Contact/                   # Contacto
│   ├── ContactForm/               # Formulario
│   ├── FloatingWhatsapp/          # Botón flotante
│   └── Footer/                    # Footer
│
├── lib/
│   ├── constants.ts               # Datos profesionales
│   ├── seo.ts                     # Funciones SEO y metadata
│   ├── types.ts                   # TypeScript interfaces
│   └── whatsapp.ts                # Lógica WhatsApp
│
├── public/
│   ├── assets/                    # Imágenes y recursos
│   ├── robots.txt                 # SEO robots directive
│   ├── sitemap.xml                # SEO sitemap
│   └── manifest.json              # PWA manifest
│
├── .vscode/
│   └── settings.json              # Configuración VS Code
│
├── middleware.ts                  # Next.js middleware
├── next.config.js                 # Configuración Next.js
├── tsconfig.json                  # Configuración TypeScript
├── tailwind.config.ts             # Configuración Tailwind
├── postcss.config.mjs             # Configuración PostCSS
├── package.json                   # Dependencias
├── .env.local.example             # Template de variables
└── README.md                      # Este archivo
```

---

## 🔧 Troubleshooting

### "Cannot find module @/*"

```bash
# Limpiar caché y reinstalar
rm -rf node_modules .next
npm install
```

### Puerto 3000 ya en uso

```bash
# Usar puerto alternativo
npm run dev -- -p 3001
```

### Errores de TypeScript

```bash
# Regenerar tipos
npx tsc --noEmit
```

### Vercel deployment falla

```bash
# Verificar build localmente
npm run build

# Ver logs en Vercel dashboard
# Settings → Logs
```

---

## 📞 Contacto & Soporte

**Correo:** contacto@ejemplo.com  
**WhatsApp:** +54-9-3426-000000  
**Ubicación:** Entre Ríos, Argentina

---

## 📄 Licencia

Proyecto personal - Todos los derechos reservados.

---

## ✅ Checklist Pre-Producción

Antes de hacer deploy en producción:

- [ ] Actualizar `PSYCHOLOGIST` en `lib/constants.ts`
- [ ] Configurar número WhatsApp en `.env.local`
- [ ] Agregar dominio personal en `NEXT_PUBLIC_SITE_URL`
- [ ] Subir imágenes profesionales a `public/assets/`
- [ ] Actualizar testimonios con reales o ficticios profesionales
- [ ] Probar formulario de contacto localmente
- [ ] Ejecutar `npm run lint` sin errores
- [ ] Verificar build sin errores: `npm run build`
- [ ] Probar en producción: `npm run start`
- [ ] Registrar en Google Search Console
- [ ] Configurar Google Analytics (opcional)
- [ ] Conectar dominio en Vercel

---

## 🎉 ¡Listo!

El proyecto está completamente configurado y listo para producción. 

**Próximo paso:** Personaliza los datos y ¡deploya! 🚀

---

*Última actualización: 12 de marzo de 2026*
