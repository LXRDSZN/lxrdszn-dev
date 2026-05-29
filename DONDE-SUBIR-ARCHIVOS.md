# 📂 GUÍA RÁPIDA - Dónde Subir Tus Archivos

## 📸 IMÁGENES DE PROYECTOS

### 🗂️ Cada proyecto tiene su propia carpeta:

#### 1️⃣ Parrot OS + BSPWM
📁 **Carpeta:** `/public/projects/bspwm/`
```
bspwm1.jpg ← Escritorio con BSPWM
bspwm2.jpg ← Terminal con atajos
bspwm3.jpg ← Scripts de automatización
```

#### 2️⃣ Portfolio React Router
📁 **Carpeta:** `/public/projects/portfolio/`
```
portfolio1.jpg ← Vista completa del portafolio
portfolio2.jpg ← Sección de proyectos
portfolio3.jpg ← Sección de skills
```

#### 3️⃣ Security Phish
📁 **Carpeta:** `/public/projects/phish/`
```
phish1.jpg ← Dashboard de monitoreo
phish2.jpg ← Sistema de alertas
```

#### 4️⃣ Sistema de Recursos Humanos
📁 **Carpeta:** `/public/projects/rrhh/`
```
rrhh1.jpg ← Panel principal
rrhh2.jpg ← Gestión de empleados
rrhh3.jpg ← Módulo de reportes
```

#### 5️⃣ ChatBot WhatsApp
📁 **Carpeta:** `/public/projects/chatbot/`
```
chatbot1.jpg ← Interface del bot
chatbot2.jpg ← Conversaciones de ejemplo
```

#### 6️⃣ RubberDucky
📁 **Carpeta:** `/public/projects/ducky/`
```
ducky1.jpg ← Hardware Raspberry Pi Pico
ducky2.jpg ← Código de payload
ducky3.jpg ← Demostración de uso
```

#### 7️⃣ Pentesting Lab
📁 **Carpeta:** `/public/projects/pentest/`
```
pentest1.jpg ← TryHackMe dashboard
pentest2.jpg ← HackTheBox máquinas resueltas
```

---

## 🎓 CERTIFICADOS (IMÁGENES DE CERTIFICADOS)

📁 **Carpeta:** `/public/certificates/coderfy/`

```
cert1.jpg ← Imagen del certificado de Coderfy (captura de pantalla)
cert2.jpg ← Detalle o reverso (opcional)
```

**Importante:** Son IMÁGENES (capturas) de tus certificados, no PDFs.

### ¿Cómo obtener las imágenes?
1. Abre tu certificado digital de Coderfy
2. Toma captura de pantalla completa
3. Optimiza la imagen (TinyPNG)
4. Guárdala como `cert1.jpg`

---

## ✅ CHECKLIST

### Imágenes de Proyectos:
- [ ] `/public/projects/bspwm/` → 3 imágenes
- [ ] `/public/projects/portfolio/` → 3 imágenes
- [ ] `/public/projects/phish/` → 2 imágenes
- [ ] `/public/projects/rrhh/` → 3 imágenes
- [ ] `/public/projects/chatbot/` → 2 imágenes
- [ ] `/public/projects/ducky/` → 3 imágenes
- [ ] `/public/projects/pentest/` → 2 imágenes

**Total:** 18 imágenes

### Certificados (Imágenes):
- [ ] `/public/certificates/coderfy/cert1.jpg` (obligatorio)
- [ ] `/public/certificates/coderfy/cert2.jpg` (opcional)

**Total:** 1-2 imágenes

---

## 🎯 FORMATO RECOMENDADO

### Para Imágenes de Proyectos:
- ✅ Formato: JPG o PNG
- ✅ Resolución: 1920x1080 (16:9)
- ✅ Peso: < 500KB
- ✅ Herramientas: TinyPNG, Squoosh, ImageOptim

### Para Certificados:
- ✅ Formato: JPG o PNG
- ✅ Resolución: Alta (para que se lea el texto)
- ✅ Peso: < 800KB
- ✅ Captura de pantalla del certificado digital

---

## 🚀 DESPUÉS DE SUBIR LOS ARCHIVOS

1. Los cambios se verán automáticamente (hot reload)
2. Si no se actualizan, presiona **Ctrl + Shift + R**
3. Verifica que los nombres de archivo coincidan exactamente
4. Las carpetas ya están creadas, solo agrega los archivos

---

## 📍 UBICACIÓN DEL PROYECTO

```
/home/lxrdszn/Desktop/Projects/lxrdszn-dev/public/
├── certificates/
│   └── coderfy/        ← Imágenes de certificado aquí
│       ├── cert1.jpg
│       └── cert2.jpg
└── projects/           ← Imágenes de proyectos aquí
    ├── bspwm/
    ├── portfolio/
    ├── phish/
    ├── rrhh/
    ├── chatbot/
    ├── ducky/
    └── pentest/
```

---

## 💡 COMANDOS ÚTILES

```bash
# Ver estructura de carpetas
cd /home/lxrdszn/Desktop/Projects/lxrdszn-dev/public
ls -la projects/
ls -la certificates/

# Copiar archivos desde otra ubicación
cp /ruta/origen/imagen.jpg /home/lxrdszn/Desktop/Projects/lxrdszn-dev/public/projects/bspwm/bspwm1.jpg

# Ver qué archivos tienes
find public/projects/ -name "*.jpg"
find public/certificates/ -name "*.jpg"
```

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Los certificados son PDFs o imágenes?**
R: Son IMÁGENES (capturas de pantalla de tus certificados). Toma captura del certificado digital.

**P: ¿Puedo usar PNG en lugar de JPG?**
R: Sí, ambos funcionan. Solo cambia la extensión en el código si usas PNG.

**P: ¿Qué pasa si no tengo todas las imágenes?**
R: Se mostrará el placeholder con el ícono 📷 o 🎓 hasta que las agregues.

**P: ¿Puedo agregar más certificados?**
R: Sí, edita `/app/components/Certifications.tsx` y agrega otro objeto al array.

**P: ¿El certificado tiene carrusel como los proyectos?**
R: Sí, exactamente igual. Si tienes cert1.jpg y cert2.jpg, aparecerán flechas y puntos.

---

**Servidor:** http://localhost:5174/
**Estado:** ✅ Listo para recibir tus archivos
