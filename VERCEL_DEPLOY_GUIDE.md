# 🚀 GUÍA DEFINITIVA DE DEPLOYMENT EN VERCEL

Esta es la guía completa y definitiva para llevar tu landing page a producción en Vercel.

---

## 📋 TABLA DE CONTENIDOS

1. [Preparación Local](#1-preparación-local)
2. [Crear Repositorio Git](#2-crear-repositorio-git)
3. [Subir a GitHub](#3-subir-a-github)
4. [Deploy en Vercel](#4-deploy-en-vercel)
5. [Configurar Dominio](#5-configurar-dominio-personalizado)
6. [Verificar SEO](#6-verificar-seo)
7. [Monitorización](#7-monitorización)

---

## 1. Preparación Local

### Paso 1.1: Completar Checklist Pre-Producción

Antes de hacer deploy, asegúrate de completar: [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

### Paso 1.2: Verificar Build Local

```bash
# Eliminar build anterior
rm -rf .next

# Crear build de producción
npm run build

# Verificar que no haya errores
# Output esperado: ✓ Compiled successfully
```

### Paso 1.3: Probar Build en Local

```bash
# Ejecutar servidor de producción
npm run start

# Abrir http://localhost:3000
# Verificar que todo funciona correctamente
```

### Paso 1.4: Verificar Linting

```bash
npm run lint

# Si hay errores:
npm run lint:fix
```

---

## 2. Crear Repositorio Git

### Paso 2.1: Inicializar Git

```bash
# Desde el directorio del proyecto
cd "c:\Lucas\Proyectos 2026\Proyecto Psico Next"

# Inicializar repositorio
git init

# Ver archivos para ignorar (ya debe estar .gitignore)
cat .gitignore
```

### Paso 2.2: Agregar Archivos

```bash
# Agregar todos los archivos
git add .

# Verificar que se agregaron correctamente
git status
```

### Paso 2.3: Primer Commit

```bash
# Crear primer commit
git commit -m "Initial commit: Landing page psicóloga"

# Verificar que funcionó
git log
```

---

## 3. Subir a GitHub

### Paso 3.1: Crear Repositorio en GitHub

1. Ir a [github.com](https://github.com/)
2. Click en **New repository**
3. Completar:
   - **Repository name:** `psico-landing` (o tu preferencia)
   - **Description:** "Landing page profesional para psicóloga"
   - **Visibility:** Public (necesario para Vercel free tier)
4. Click en **Create repository**

### Paso 3.2: Conectar Repositorio Local con GitHub

```bash
# Copiar URL del repositorio (desde GitHub)
# Formato: https://github.com/TU_USUARIO/psico-landing.git

# Agregar remote
git remote add origin https://github.com/TU_USUARIO/psico-landing.git

# Cambiar rama a main
git branch -M main

# Push al repositorio
git push -u origin main
```

### Paso 3.3: Verificar en GitHub

1. Ir a tu repositorio en GitHub
2. Verificar que los archivos estén presentes
3. Revisar que `.env.local` NO esté incluido (debe estar en .gitignore)

**✅ Listo: Código en GitHub**

---

## 4. Deploy en Vercel

### Opción A: Deploy desde Dashboard (Recomendado para Principiantes)

#### Paso 4A.1: Crear Cuenta Vercel

1. Ir a [vercel.com](https://vercel.com/)
2. Click en **Sign Up**
3. Elegir "Continue with GitHub"
4. Autorizar acceso a GitHub
5. Completar perfil

#### Paso 4A.2: Importar Proyecto

1. Click en **Add New...** → **Project**
2. Click en **Import Git Repository**
3. Pegar URL: `https://github.com/TU_USUARIO/psico-landing`
4. Click en **Import**

#### Paso 4A.3: Configurar Variables de Entorno

1. En la página de configuración, ir a **Environment Variables**
2. Agregar variables:

```
NEXT_PUBLIC_WHATSAPP_PHONE = 5493426XXXXXXX
NEXT_PUBLIC_SITE_URL = https://psico-landing.vercel.app
NEXT_PUBLIC_SITE_NAME = Psicóloga Clínica
NEXT_PUBLIC_WHATSAPP_BUSINESS_NAME = Dra. María García
```

3. Click en **Deploy**

#### Paso 4A.4: Esperar Deploy

- Vercel ejecutará automáticamente: `npm install` y `npm run build`
- Verás progreso en vivo
- Cuando termine: ✅ **Deployed Successfully**

**✅ Tu sitio está disponible en:** `https://psico-landing.vercel.app`

---

### Opción B: Deploy desde CLI (Para Desarrolladores)

#### Paso 4B.1: Instalar Vercel CLI

```bash
npm i -g vercel
```

#### Paso 4B.2: Autenticarse

```bash
vercel login
# Elegir: GitHub
# Autorizar cuando se abra el navegador
```

#### Paso 4B.3: Deploy a Preview

```bash
# Deploy a URL de preview
vercel

# Seguir instrucciones interactivas
# Proyecto: Crear nuevo
# Nombre: psico-landing
```

#### Paso 4B.4: Deploy a Producción

```bash
# Deploy a ambiente de producción
vercel --prod

# Verificar resultado
# URL final: https://psico-landing.vercel.app
```

---

## 5. Configurar Dominio Personalizado

### Opción A: Comprar Dominio en Vercel

#### Paso 5A.1: Acceder a Domains

1. Dashboard Vercel → **Settings** → **Domains**
2. Click en **Add Domain**
3. Ingresar nombre del dominio (ej: `psicologagarcia.com`)
4. Click en **Add**

#### Paso 5A.2: Compra de Dominio

1. Vercel te preguntará si deseas comprar
2. Click en **Purchase** si deseas
3. Completar información de pago

#### Paso 5A.3: Verificación Automática

- Vercel configure automáticamente los DNS
- Propagación: 5-48 horas
- Tu sitio estará disponible en el nuevo dominio

### Opción B: Usar Dominio Existente

#### Paso 5B.1: Verificar Dominio

1. Dashboard Vercel → **Settings** → **Domains**
2. Click en **Add Domain**
3. Ingresar tu dominio existente
4. Vercel mostrará NS records

#### Paso 5B.2: Actualizar DNS (en tu proveedor)

1. Ir a panel de control de tu proveedor de dominio
2. Encontrar sección de "DNS" o "Nameservers"
3. Reemplazar nameservers actuales con los de Vercel
4. Guardar cambios

**Ejemplo (puede variar):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### Paso 5B.3: Esperar Propagación

```bash
# Verificar propagación de DNS
nslookup tudominio.com

# O usar: https://www.whatsmydns.net/
```

Esto puede tardar de 5 minutos a 48 horas.

---

## 6. Verificar SEO

### Paso 6.1: Google Search Console

1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Click en **Add Property**
3. Ingresar tu URL: `https://tudominio.com`
4. Verificar propiedad (cualquier método)
5. Esperar a que Google indexe

### Paso 6.2: Enviar Sitemap

1. En Google Search Console
2. **Sitemaps** (lado izquierdo)
3. Ingresar: `https://tudominio.com/sitemap.xml`
4. Click en **Submit**

### Paso 6.3: Solicitar Indexación

1. En Google Search Console
2. **URL Inspection**
3. Ingresar URL principal
4. Click en **Request Indexing**

### Paso 6.4: Verificar en PageSpeed

1. Ir a [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Ingresar tu URL
3. Revisar Core Web Vitals
4. Objetivo: > 90 en todas categorías

---

## 7. Monitorización

### Paso 7.1: Configurar Alertas (Vercel)

1. Dashboard → **Settings** → **Alerts**
2. Crear alertas para:
   - Deploy failures
   - High error rates
   - Performance degradation

### Paso 7.2: Monitoreo Manual

Revisar regularmente:

```bash
# Ver últimos deploys
vercel list

# Ver logs de build
vercel logs --follow
```

### Paso 7.3: Verificación Regular

**Mensualmente:**
- [ ] Verificar que sitio funciona
- [ ] Probar formulario WhatsApp
- [ ] Revisar enlaces rotos
- [ ] Verificar imágenes cargan correctamente

**Cada 3 meses:**
- [ ] Hacer audit SEO
- [ ] Revisar Core Web Vitals
- [ ] Actualizar testimonios
- [ ] Verificar información de contacto

---

## ✅ CHECKLIST POST-DEPLOY

- [ ] Sitio accessible en `https://tudominio.com`
- [ ] Formulario de contacto funciona
- [ ] Botón WhatsApp flotante visible
- [ ] Imágenes cargan correctamente
- [ ] Scroll suave funciona
- [ ] Mobile responsive se ve bien
- [ ] Google Search Console registrado
- [ ] Sitemap indexado

---

## 🆘 TROUBLESHOOTING

### "Build failed" en Vercel

```bash
# Verificar build localmente
npm run build

# Si hay errores, revisar:
1. Variables de entorno faltantes
2. Errores TypeScript
3. Dependencias no instaladas
```

### Dominio no funciona

```bash
# Verificar DNS puede propagar
nslookup tudominio.com

# Si sigue fallando después de 48h:
1. Revisar nameservers en Vercel
2. Revisar configuración en proveedor dominio
3. Contactar soporte Vercel
```

### Formulario WhatsApp no abre

```bash
# Verificar variable de entorno
echo $NEXT_PUBLIC_WHATSAPP_PHONE

# Si está vacío:
1. Agregar a .env.local localmente
2. Agregar a Vercel Environment Variables
3. Hacer nuevo deploy
```

---

## 📞 RECURSOS ÚTILES

- **Docs Vercel:** https://vercel.com/docs
- **Docs Next.js:** https://nextjs.org/docs
- **Google Search Console:** https://search.google.com/search-console
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Schema Validator:** https://schema.org/validator/

---

## 🎉 FELICIDADES

¡Tu landing page está en produción! 

**Próximos pasos:**
1. Monitorizar performance
2. Recolectar feedback de pacientes
3. Iterar y mejorar basado en datos
4. Considerar agregar Analytics

---

*Guía actualizada: 12 de marzo de 2026*
