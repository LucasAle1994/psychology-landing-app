# 📋 CHECKLIST PRE-PRODUCCIÓN

Completa este checklist antes de hacer deploy a producción.

## ✅ Configuración de Datos

- [ ] **Personalizar datos de psicóloga** 
  - Editar `lib/constants.ts`
  - Cambiar: nombre, especialidades, bio, ubicación
  
- [ ] **Configurar número WhatsApp**
  - Editar: `NEXT_PUBLIC_WHATSAPP_PHONE` en `.env.local`
  - Formato: 549XXXXXXXXX (código país + número sin espacios)
  
- [ ] **Actualizar email de contacto**
  - Buscar "contacto@ejemplo.com" en todo el proyecto
  - Reemplazar con tu email real
  
- [ ] **Cambiar URL del sitio**
  - Editar: `NEXT_PUBLIC_SITE_URL` en `.env.local`
  - Usar: `https://tudominio.com`

## 🎨 Contenido Visual

- [ ] **Agregar foto profesional (Hero)**
  - Colocar en: `public/assets/hero-image.jpg`
  - Dimensiones: 1200x600px mínimo
  - Debe ser profesional y calmante
  
- [ ] **Agregar foto personal (About)**
  - Colocar en: `public/assets/about-photo.jpg`
  - Dimensiones: 700x800px
  - Foto de busto profesional
  
- [ ] **Agregar Open Graph image**
  - Colocar en: `public/assets/og-image.jpg`
  - Dimensiones: 1200x630px
  - Se mostrará en redes sociales
  
- [ ] **Agregar/personalizar favicon**
  - Colocar en: `public/favicon.ico`
  - Tamaño: 32x32px recomendado
  
- [ ] **Actualizar testimonio
  - Editar `lib/constants.ts` → `TESTIMONIALS`
  - Usar testimonio real o mantener los ficticios

## 📝 Contenido de Texto

- [ ] **Personalizar Hero CTA**
  - Cambiar descripción si es necesario
  - Verificar que "Solicitar turno" es el texto correcto
  
- [ ] **Revisar especialidades**
  - `lib/constants.ts` → `PSYCHOLOGIST.specialties`
  - Coincidir con tus servicios reales
  
- [ ] **Personalizar descripción de servicios**
  - `lib/constants.ts` → `SERVICES`
  - Cambiar descripciones si es necesario
  
- [ ] **SEO Keywords**
  - `lib/constants.ts` → `SEO_KEYWORDS`
  - Agregar palabras clave locales relevantes

## 🔍 SEO

- [ ] **Verificar meta tags**
  - Title: "Psicóloga [Nombre] - Terapia en Entre Ríos"
  - Description: < 160 caracteres
  - Keywords: relacionadas a terapia + región
  
- [ ] **Actualizar robots.txt**
  - Verificar que sitemap.xml sea accesible
  - Revisa: `public/robots.txt`
  
- [ ] **Actualizar sitemap.xml**
  - Reemplazar URLs de ejemplo con tu dominio
  - Archivo: `public/sitemap.xml`
  
- [ ] **Registrar en Google Search Console**
  - https://search.google.com/search-console
  - Subir sitemap manualmente
  - Verificar propiedad del dominio
  
- [ ] **Datos estructurados (Schema.org)**
  - ✅ LocalBusiness schema configurado
  - ✅ Professional schema configurado
  - ✅ FAQ schema configurado
  - Verificar con: https://schema.org/validator/

## 🔐 Seguridad

- [ ] **Variables de entorno seguros**
  - NO incluir secrets en código
  - Usar `.env.local` solamente en desarrollo
  - En Vercel: usar dashboard
  
- [ ] **Validación de formularios**
  - ✅ Validación client-side implementada
  - ✅ Sanitización de entrada implementada
  - ✅ CSRF tokens (si aplica)
  
- [ ] **Headers de seguridad**
  - ✅ CSP configurado en next.config.js
  - ✅ X-Frame-Options: DENY
  - ✅ X-XSS-Protection activado
  
- [ ] **SSL/HTTPS**
  - Vercel proporciona certificado gratis
  - Dominio personalizado: automático o manual

## ⚡ Performance

- [ ] **Ejecutar lighthouse audit**
  - Chrome DevTools → Lighthouse
  - Objetivo: >90 en todas categorías
  - Verifiamente en dispositivo móvil
  
- [ ] **Verificar Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
  - Herramienta: Google PageSpeed Insights
  
- [ ] **Revisar tamaño de bundle**
  - `npm run build` y revisar output
  - Objetivo: bundle principal < 200KB gzip
  
- [ ] **Optimizar imágenes**
  - Comprimir antes de subir
  - Usar formatos: WEBP, JPEG, PNG
  - Herramientas: TinyPNG, ImageOptim, etc.

## 📱 Funcionalidad

- [ ] **Probar en dispositivos reales**
  - iPhone (Safari)
  - Android (Chrome)
  - Escritorio (Chrome, Firefox, Safari, Edge)
  
- [ ] **Formulario de contacto**
  - Validación funciona correctamente
  - WhatsApp se abre con mensaje pre-relleno
  - Botón flotante aparece al scroll
  
- [ ] **Navegación**
  - Todos los enlaces funcionan
  - Scroll suave configurado
  - Menú responsivo en móvil
  
- [ ] **Imágenes**
  - Se cargan correctamente
  - Alt text presente
  - Responsive en todos los tamaños

## 🌐 Deployment

- [ ] **Crear repositorio Git**
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  ```
  
- [ ] **Conectar con GitHub**
  - Crear reporte públicamente
  - Push a GitHub
  
- [ ] **Deploy en Vercel**
  - Crear cuenta en vercel.com
  - Conectar repositorio
  - Click en Deploy
  
- [ ] **Configurar variables en Vercel**
  - Settings → Environment Variables
  - Agregar mismo .env.local
  
- [ ] **Configurar dominio personalizado**
  - Vercel Domains → Add Domain
  - Seguir instrucciones de DNS
  - Esperar propagación (5-48h)

## 📊 Post-Deploy

- [ ] **Verificar sitio en producción**
  - Abrir en navegador
  - Revisar todos los elementos
  - Probar formulario
  
- [ ] **Registrar en Google Search Console**
  - https://search.google.com/search-console
  - Agregar propiedad
  - Enviar sitemap
  
- [ ] **Configurar Google Analytics (opcional)**
  - Crear cuenta en analytics.google.com
  - Agregar código de seguimiento
  - Verificar eventos de conversión
  
- [ ] **Configurar alertas DNS (opcional)**
  - Monitorizar de debe funcionar correctamente
  - Recibir notificaciones de cambios

## 📞 Mantenimiento

- [ ] **Revisar regularmente**
  - Mensualmente: checking de links rotos
  - Trimestral: review de SEO
  - Anual: audit de seguridad
  
- [ ] **Mantener contenido fresco**
  - Agregar testimonios nuevos
  - Actualizar horarios si cambian
  - Revisar información de contacto
  
- [ ] **Backup del código**
  - GitHub sirve como backup
  - Commits regulares
  - Releases/tags para versiones

---

## 📝 RESUMEN FINAL ANTES DE DEPLOY

| Aspecto | Completado | Verificado |
|---|---|---|
| Configuración | ☐ | ☐ |
| Contenido | ☐ | ☐ |
| Imágenes | ☐ | ☐ |
| SEO | ☐ | ☐ |
| Seguridad | ☐ | ☐ |
| Performance | ☐ | ☐ |
| Funcionalidad | ☐ | ☐ |
| Deployment | ☐ | ☐ |

**¿Todos los ítems están completados?** 

- **SÍ** → Proceder a deploy ✅
- **NO** → Completar ítems faltantes ⚠️

---

*Última actualización: 12 de marzo de 2026*
