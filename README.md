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

## 🎨 Secciones

- **Hero** - CTA para solicitar turno
- **Sobre mí** - Presentación profesional
- **Servicios** - Terapia individual, pareja, psicodiagnóstico
- **Testimonios** - Casos reales de pacientes
- **Contacto** - Formulario WhatsApp, teléfono, email
- **Footer** - Links de redes sociales

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**

│└── assets/              # Imágenes y activos

├── next.config.js           # Configuración Next.js

├── tsconfig.json            # Configuración TypeScript

├── tailwind.config.ts       # Configuración Tailwind

├── postcss.config.mjs       # Configuración PostCSS

├── .eslintrc.json           # ESLint config

└── .prettierrc               # Prettier config

```

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


## 📄 Licencia

Este proyecto está bajo licencia MIT. Úsalo libremente.

---


**Última actualización**: 12 de marzo de 2026
