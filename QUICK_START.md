# � INICIO RÁPIDO - PROYECTO LISTO PARA PRODUCCIÓN

## ¡Bienvenido! Tu landing page está lista 95%

Este proyecto está completamente configurado y listo para producción. Solo necesitas 5 pasos para tenerlo en línea.

---

## 🎯 OBJETIVO EN 15 MINUTOS

1. ✅ Instalar dependencias
2. ✅ Configurar variables de entorno  
3. ✅ Personalizar datos
4. ✅ Probar localmente
5. ✅ Deploy en Vercel

---

## 📦 PASO 1: Instalar Dependencias (2 min)

```bash
# Navega al proyecto
cd "c:\Lucas\Proyectos 2026\Proyecto Psico Next"

# Instalar dependencias
npm install

# Esperado: ✅ added XXX packages
```

---

## ⚙️ PASO 2: Configurar Variables (3 min)

### 2.1 Crear archivo .env.local

```bash
# Verifica que .env.local existe
ls -la .env.local

# Si no existe, ejecuta:
cp .env.local.example .env.local
```

### 2.2 Editar .env.local

Abre el archivo `.env.local` y reemplaza:

```env
# ⚠️ REEMPLAZA ESTOS VALORES OBLIGATORIAMENTE:

NEXT_PUBLIC_WHATSAPP_PHONE=5493426000000
# ↑ Tu número WhatsApp (sin espacios, con código de país)

NEXT_PUBLIC_SITE_URL=http://localhost:3000
# ↑ En desarrollo. En producción: https://tudominio.com
```

---

## 👤 PASO 3: Personalizar Datos (5 min)

### 3.1 Editar datos de profesional

Abre: `lib/constants.ts`

Busca y actualiza:

```typescript
export const PSYCHOLOGIST = {
  name: 'Dra. María García',           // ← TU NOMBRE
  title: 'Psicóloga Clínica',          // ← TU TÍTULO
  bio: 'Especializada en...',          // ← TU BIO
  location: 'Entre Ríos, Argentina',   // ← TU UBICACIÓN
  specialties: [
    'Terapia Cognitivo Conductual',
    'Terapia Individual',
    // ... etc
  ],
};
```

### 3.2 Personalizar servicios (opcional)

En el mismo archivo:

```typescript
export const SERVICES = [
  {
    id: 'individual',
    title: 'Terapia Individual',
    description: 'Descripción del servicio...',
    // ...
  },
  // ... más servicios
];
```

### 3.3 Agregar imágenes (opcional)

1. Crea carpeta si no existe: `public/assets/`
2. Sube tus imágenes:
   - `hero-image.jpg` (1200x600px) - Foto del hero
   - `about-photo.jpg` (700x800px) - Tu foto profesional
   - `og-image.jpg` (1200x630px) - Para redes sociales

---

## 🧪 PASO 4: Probar Localmente (3 min)

### 4.1 Iniciar servidor

```bash
npm run dev
```

Deberías ver:
```
> Local:        http://localhost:3000
> Environments: .env.local
```

### 4.2 Verificar en navegador

1. Abre navegador
2. Ve a `http://localhost:3000`
3. Verifica que todo funciona:
   - ✅ Página carga rápido
   - ✅ Imágenes se ven bien
   - ✅ Scroll suave funciona
   - ✅ Formulario valida campos
   - ✅ Botón WhatsApp flotante aparece

### 4.3 Probar formulario

1. Scroll hasta "Contacto"
2. Completa el formulario
3. Click en "Enviar"
4. ✅ Se abre WhatsApp con mensaje pre-relleno

### 4.4 Detener servidor

```bash
# Presiona Ctrl+C en terminal
```

---

## 🚀 PASO 5: Deploy en Vercel (2 min)

### 5.1 Opción Recomendada: Dashboard Vercel

1. Ir a [vercel.com](https://vercel.com)
2. Sign up con GitHub
3. Click: **Add New** → **Project**
4. Conectar tu repositorio (sigue instrucciones)
5. Listo, ¡Vercel hace deploy automático!

### 5.2 Opción: Vercel CLI

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Tu URL: https://[nombre].vercel.app
```

**✅ ¡TU SITIO ESTÁ EN LÍNEA!**

---

## 📋 CONFIGURACIÓN ADICIONAL IMPORTANTE

Después del primer deploy, hace esto:

### Dominio Personalizado (Opcional but Recommended)

1. En Vercel Dashboard → **Settings** → **Domains**
2. Conectar tu dominio (ej: `psicologagarcia.com`)
3. Actualizar DNS si es dominio existente
4. Esperar propagación (5-48h)

### Google Search Console

1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Verificar propiedad
3. Enviar sitemap: `https://tudominio.com/sitemap.xml`

### Validar Sitio en Producción

```bash
# Ver tu sitio en vivo
vercel list  # Ver todos tus deploys
```

---

## 🔍 VERIFICACIÓN FINAL

| Item | Verificado |
|---|---|
| Dependencias instaladas | ✅ |
| Variables de entorno configuradas | ✅ |
| Datos personalizados | ✅ |
| Funciona localmente | ✅ |
| Deploy en Vercel | ✅ |
| Dominio configurado (opcional) | ⏳ |

---

## 📚 DOCUMENTACIÓN COMPLETA

- 📖 **[README.md](./README.md)** - Documentación principal
- 🚀 **[VERCEL_DEPLOY_GUIDE.md](./VERCEL_DEPLOY_GUIDE.md)** - Guía completa de deployment
- ✅ **[PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)** - Checklist pre-producción
- 📋 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Info de deployment

---

## ❓ PREGUNTAS FRECUENTES

### ¿Es necesario cambiar todas las imágenes?

**No**, puedes mantener los placeholders y cambiarlos después.

### ¿Cuándo debo cambiar el dominio?

En producción, asegúrate de actualizar:
- `NEXT_PUBLIC_SITE_URL` en variables
- URLs en `sitemap.xml`
- URLs en `robots.txt`

### ¿El formulario envía emails?

**No**, envía directamente a WhatsApp. Para emails necesitarías una API backend.

### ¿Es gratis en Vercel?

**Sí**, Vercel ofrece plan gratuito suficiente para landing pages.

### ¿Cómo agrego Google Analytics?

Busca `"gtag"` o `"analytics"` en los componentes para ver dónde agregarlo.

### ¿Puedo usar otro host?

**Sí**, cualquier host compatible con Next.js funciona (AWS, Netlify, Digital Ocean, etc).

---

## 🆘 PROBLEMAS COMUNES

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Cannot find module"
```bash
rm -rf node_modules .next
npm install
```

### "Build fails en Vercel"
```bash
npm run build  # Probar localmente
npm run lint   # Revisar errores
```

---

## 📞 PRÓXIMOS PASOS

1. **Hoy:** Deploy en Vercel ✅
2. **Esta semana:** Configurar dominio personalizado
3. **Este mes:** Validar SEO en Google Search Console
4. **Permanente:** Mantener contenido actualizado

---

## 🎉 ¡FELICIDADES!

Tu landing page profesional está lista. Tienes un proyecto:

✅ Arquitectónicamente sólido  
✅ Optimizado para SEO  
✅ Seguro y accesible  
✅ Performance optimizado  
✅ Listo para producción  

**¡Ahora a convertir más pacientes!** 🚀

---

*Proyecto creado: 12 de marzo de 2026*  
*¿Necesitas ayuda? Consulta la documentación completa arriba.*
```

### 3. Cambiar Servicios y Testimonios

**Archivo**: `lib/constants.ts`

Ve a `SERVICES` y `TESTIMONIALS` para personalizarlos.

## 📁 Estructura Creada

```
✓ Configuración profesional
  ├── package.json
  ├── tsconfig.json
  ├── next.config.js (con Headers de seguridad)
  ├── tailwind.config.ts
  └── .eslintrc.json

✓ Código fuente
  ├── app/
  │   ├── layout.tsx (con SEO y schemas)
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  │   ├── Header/ (navegación)
  │   ├── Hero/ (sección principal)
  │   ├── About/ (sobre mí)
  │   ├── Services/ (servicios)
  │   ├── Testimonials/ (testimonios)
  │   ├── Contact/ (contacto)
  │   ├── ContactForm/ (formulario WhatsApp)
  │   ├── FloatingWhatsapp/ (botón flotante)
  │   └── Footer/ (pie de página)
  └── lib/
      ├── constants.ts (datos dinámicos)
      ├── seo.ts (metadatos y schemas)
      ├── whatsapp.ts (integración WhatsApp)
      └── types.ts (tipos TypeScript)

✓ SEO y Performance
  ├── public/robots.txt
  ├── public/sitemap.xml
  ├── public/manifest.json (PWA)
  └── public/assets/ (para imágenes)

✓ Documentación
  ├── README.md (guía completa)
  ├── CUSTOMIZATION.md (cómo personalizar)
  └── QUICK_START.md (este archivo)
```

## 🎨 Personalización Rápida

### Colores
Edit `tailwind.config.ts` - sección `colors`

### Imágenes Profesionales
1. Coloca en `public/assets/`
2. Importa con `next/image`
3. Ver: `components/Hero/index.tsx`

### Textos
Cada componente en `components/*/index.tsx` tiene el texto que necesitas cambiar.

## 🌐 SEO Incluido

✅ **Metadata completa** - title, description, keywords
✅ **Open Graph** - Para redes sociales
✅ **Schema.org** - Local Business + FAQ
✅ **robots.txt** - Para buscadores
✅ **sitemap.xml** - Mapa del sitio

Actualiza palabras clave en `lib/constants.ts` → `SEO_KEYWORDS`

## 📱 WhatsApp Funcionando

El formulario:
1. ✅ Valida nombre, email, mensaje
2. ✅ Genera link dinámico de WhatsApp
3. ✅ Abre conversación con mensaje pre-rellenado
4. ✅ Botón flotante aparece al hacer scroll

**No guarda datos en servidor** - Todo se envía por WhatsApp directamente.

## 🔒 Seguridad Configurada

✅ Content Security Policy
✅ X-Frame-Options (anti-clickjacking)
✅ X-XSS-Protection
✅ Headers de seguridad adicionales
✅ Validación de formularios

## 🚀 Deploy en Vercel

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
```

### Paso 2: Deploy en Vercel
1. Entra a https://vercel.com
2. Click en "New Project"
3. Selecciona tu repositorio de GitHub
4. Configura variables de entorno:
   - `NEXT_PUBLIC_WHATSAPP_PHONE`: Tu número
   - `NEXT_PUBLIC_SITE_URL`: Tu dominio
5. Click en "Deploy"

### Paso 3: Dominio Propio (Opcional)
1. En Vercel: Settings → Domains
2. Agrega tu dominio
3. Actualiza DNS según instrucciones

## 📊 Próximos Pasos

### Antes de Deployar

- [ ] Cambiar nombre y datos en `lib/constants.ts`
- [ ] Actualizar número WhatsApp en `.env.local`
- [ ] Agregar servicios y testimonios reales
- [ ] Cambiar colores en `tailwind.config.ts` (opcional)
- [ ] Agregar fotos en `public/assets/`
- [ ] Probar formulario en desarrollo
- [ ] Revisar en móvil

### Después de Deployar

- [ ] Configurar Google Search Console
- [ ] Agregar Analytics 4
- [ ] Implementar redirige de emails a WhatsApp
- [ ] Solicitar reviews en Google
- [ ] Optimizar imágenes
- [ ] Monitorear performance

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Ejecutar build
npm start

# Linting
npm run lint
npm run lint:fix

# Audit de seguridad
npm audit

# Ver tamaño de build
npm run build && npm run analyze (con next-bundle-analyzer)
```

## 📞 Soporte Técnico

### Problema: "Módulo no encontrado"
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Problema: "WhatsApp no abre"
- Verifica el número en `.env.local`
- Incluye código de país (+54)
- Intenta: `wa.me/5493426000000`

### Problema: "Estilos no se aplican"
```bash
npm run build
npm run start
```

## 📖 Documentación Completa

- **README.md**: Guía completa y detallada
- **CUSTOMIZATION.md**: Cómo personalizar cada aspecto
- **Componentes**: Cada archivo tiene comentarios explicativos

## 🎯 Objetivo Logrado

Tu landing page está **lista para producción** con:

✨ **Diseño profesional** - Minimalista y calmante
✨ **SEO optimizado** - Para rankear en buscadores
✨ **Conversión** - Botones y formularios claros
✨ **Seguridad** - Headers y validación
✨ **Performance** - Core Web Vitals optimizados
✨ **Accesibilidad** - WCAG 2.1 AA compliant
✨ **Mobile First** - Funciona perfecto en móvil

## 🌟 Ahora Es Tu Turno

1. Personaliza los datos
2. Agrega fotos
3. Prueba en desarrollo
4. Deploya en Vercel
5. ¡Obtén tus primeros pacientes! 🎉

---

¿Necesitas ayuda? Revisa README.md o CUSTOMIZATION.md

**¡Tu landing page está lista! Adelante.** 🚀
