# 🎓 Certificados - Imágenes

Agrega las imágenes de tus certificados aquí (capturas de pantalla de tus certificados).

## 📁 Estructura Organizada por Carpetas:

```
/public/certificates/
└── coderfy/
    ├── cert1.jpg    ← Imagen del certificado (completo)
    └── cert2.jpg    ← Imagen del reverso o detalle (opcional)
```

## 📋 Cómo agregar certificados:

### 1️⃣ Toma captura de pantalla de tu certificado
- Abre tu certificado digital de Coderfy
- Toma captura de pantalla (completa)
- Guárdala como **cert1.jpg**

### 2️⃣ (Opcional) Captura adicional
- Si quieres mostrar detalles o el reverso
- Guárdala como **cert2.jpg**

### 3️⃣ Optimiza las imágenes
- Usa TinyPNG, Squoosh o ImageOptim
- Mantén buena calidad para que se lea el texto
- Peso recomendado: < 800KB

### 4️⃣ Coloca en la carpeta
```
/public/certificates/coderfy/
├── cert1.jpg    ← Tu certificado aquí
└── cert2.jpg    ← Opcional: detalle o reverso
```

---

## 🎨 Formato Recomendado:

- **Formato:** JPG o PNG
- **Resolución:** Mínimo 1920x1080 (o la resolución original del PDF)
- **Orientación:** Horizontal (landscape) preferiblemente
- **Peso:** < 800KB por imagen

---

## 💡 Tips:

### Si tienes PDF:
1. Abre el PDF del certificado
2. Toma captura de pantalla completa
3. O convierte PDF a imagen con:
   - Adobe Acrobat
   - Convertidores online (PDF to JPG)
   - Herramientas: `pdftoppm` (Linux)

### Si tienes imagen:
1. Asegúrate que se vea clara
2. Recorta si hay espacios innecesarios
3. Optimiza el peso

### Para agregar más certificados:
Edita `/app/components/Certifications.tsx` y agrega otro objeto al array:
```typescript
{
  title: "Otro Certificado",
  issuer: "Institución",
  date: "2024",
  description: "Descripción...",
  skills: ["Skill1", "Skill2"],
  images: ["/certificates/otro/cert1.jpg"]
}
```

---

## 📐 Ejemplo de Estructura con Múltiples Certificados:

```
/public/certificates/
├── coderfy/
│   ├── cert1.jpg
│   └── cert2.jpg
├── tryhackme/
│   └── cert1.jpg
├── hackthebox/
│   └── cert1.jpg
└── otro-curso/
    ├── cert1.jpg
    └── cert2.jpg
```

---

## 🚀 Después de agregar:

1. Los cambios se verán automáticamente (hot reload)
2. Si no se actualizan, presiona **Ctrl + Shift + R**
3. El carrusel funcionará si tienes más de 1 imagen
4. Los puntos indicadores aparecerán automáticamente

---

## ✨ Características del Carrusel:

- ✅ Flechas ← → para navegar entre imágenes
- ✅ Puntos indicadores en la parte inferior
- ✅ Hover para mostrar controles
- ✅ Layout alternado (izquierda/derecha)
- ✅ Diseño idéntico a la sección de proyectos

