# 🚀 Portfolio lxrdszn - Documentación

## ✅ Estado del Proyecto

Tu portafolio está **completamente funcional** con:

### 📋 Secciones Incluidas:
1. **Navigation** - Barra fija con smooth scroll
2. **Hero** - Presentación principal
3. **Skills** - 6 categorías de habilidades técnicas
4. **Projects** - 7 proyectos con carrusel de imágenes
5. **Certifications** - 4 certificaciones con enlaces a PDFs
6. **Footer** - Contacto y redes sociales

---

## 🎯 Proyectos Actuales

### 1. Parrot OS + BSPWM
- Entorno personalizado de desarrollo y pentesting
- Atajos de teclado y scripts de automatización

### 2. Portfolio Web - React Router
- Portafolio profesional con React Router 7
- Carrusel de imágenes y diseño moderno

### 3. Security Phish
- Detección de pesca ilegal
- Monitoreo y alertas en tiempo real

### 4. Sistema de Recursos Humanos
- Gestión completa de empleados
- Control de asistencia y nómina

### 5. ChatBot WhatsApp
- Respuestas automáticas inteligentes
- Integración con APIs

### 6. RubberDucky - Raspberry Pi Pico
- Dispositivo para pentesting
- Ejecución de payloads automatizados

### 7. Pentesting Lab (TryHackMe & HackTheBox)
- Análisis de vulnerabilidades
- Scripts de reconocimiento y explotación

---

## 📸 Estructura de Imágenes (ORGANIZADA POR CARPETAS)

Las imágenes están organizadas en carpetas por proyecto:

```
/public/projects/
├── bspwm/
│   ├── bspwm1.jpg
│   ├── bspwm2.jpg
│   └── bspwm3.jpg
├── portfolio/
│   ├── portfolio1.jpg
│   ├── portfolio2.jpg
│   └── portfolio3.jpg
├── phish/
│   ├── phish1.jpg
│   └── phish2.jpg
├── rrhh/
│   ├── rrhh1.jpg
│   ├── rrhh2.jpg
│   └── rrhh3.jpg
├── chatbot/
│   ├── chatbot1.jpg
│   └── chatbot2.jpg
├── ducky/
│   ├── ducky1.jpg
│   ├── ducky2.jpg
│   └── ducky3.jpg
└── pentest/
    ├── pentest1.jpg
    └── pentest2.jpg
```

**Formato recomendado:**
- Resolución: 1920x1080 (16:9)
- Formato: JPG o PNG
- Peso: < 500KB por imagen

---

## 📜 Certificados

Los certificados van en: `/public/certificates/`

```
/public/certificates/
├── tryhackme.pdf
├── hackthebox.pdf
├── forense.pdf
└── ciberseguridad.pdf
```

**Formato aceptado:** PDF (recomendado) o JPG/PNG

Cada certificación tiene un botón **"📄 Ver Certificado"** que abre el PDF en nueva pestaña.

---

## 🔗 Links a Actualizar

### En `Footer.tsx`:
- GitHub: https://github.com/lxrdszn
- LinkedIn: https://linkedin.com/in/lxrdszn

---

## 🎨 Personalización

### Colores principales:
- Background: `gray-900`, `gray-950`
- Accent: `cyan-400`, `cyan-600`
- Text: `white`, `gray-300`

### Fuentes:
- Inter (Google Fonts)

---

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar en producción
npm start

# Type checking
npm run typecheck
```

---

## 📦 Estructura de Archivos

```
lxrdszn-dev/
├── app/
│   ├── components/
│   │   ├── Certifications.tsx    (✅ Con links a PDFs)
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx          (✅ 7 proyectos)
│   │   └── Skills.tsx
│   ├── routes/
│   │   └── home.tsx
│   ├── app.css
│   └── root.tsx
├── public/
│   ├── certificates/              (✅ NUEVO - PDFs aquí)
│   │   └── README.md
│   └── projects/                  (✅ Organizado por carpetas)
│       ├── bspwm/
│       ├── portfolio/             (✅ NUEVO proyecto)
│       ├── phish/
│       ├── rrhh/
│       ├── chatbot/
│       ├── ducky/
│       ├── pentest/
│       └── README.md
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## ✨ Características Implementadas

✅ Diseño responsive (mobile, tablet, desktop)
✅ Animaciones suaves y hover effects
✅ Carrusel de imágenes con flechas y puntos indicadores
✅ Scroll suave entre secciones
✅ Layout alternado en proyectos (zigzag)
✅ Modo oscuro por defecto
✅ SEO optimizado con meta tags
✅ Performance optimizado con Vite
✅ **7 proyectos** incluido el portafolio React
✅ **Enlaces a certificados PDF/Imagen**
✅ **Imágenes organizadas por carpetas**

---

## 🎯 Próximos Pasos

1. ✏️ Agrega tus capturas de pantalla en las carpetas correspondientes:
   - `/public/projects/bspwm/`
   - `/public/projects/portfolio/`
   - `/public/projects/phish/`
   - etc...

2. 📜 Sube tus certificados en `/public/certificates/`:
   - `tryhackme.pdf`
   - `hackthebox.pdf`
   - `forense.pdf`
   - `ciberseguridad.pdf`

3. 🔗 Actualiza los links de redes sociales en `Footer.tsx`

4. 🚀 Deploy en Vercel, Netlify o tu hosting preferido

---

## 🌐 Deploy

### Vercel (Recomendado):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Sube la carpeta build/
```

---

## 📧 Contacto en el Sitio

El footer incluye:
- Ícono GitHub
- Ícono LinkedIn
- Copyright notice

---

**Servidor corriendo en:** http://localhost:5174/

**Estado:** ✅ Todo funcionando correctamente

## 🆕 Cambios Recientes:

✅ **Eliminado** el apartado "En constante aprendizaje..." con links a TryHackMe/HTB
✅ **Agregado** botón "Ver Certificado" en cada certificación
✅ **Agregado** proyecto "Portfolio Web - React Router"
✅ **Reorganizado** imágenes en carpetas por proyecto
✅ **Creado** carpeta `/public/certificates/` para PDFs

