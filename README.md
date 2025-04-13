# 🧑‍💻 Portafolio Personal - SH Portafolio

Este es mi portafolio profesional desarrollado con **Next.js 15** utilizando App Router. Aquí muestro mis proyectos, experiencia, estudios y formas de contacto. Incluye un diseño responsivo, modo oscuro, animaciones modernas y envío de correos a través de un formulario integrado.

## 🚀 Tecnologías utilizadas

- **Next.js 15** – Estructura moderna con App Router
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion** – Animaciones fluidas
- **Lucide React** – Íconos ligeros y modernos
- **Next Themes** – Soporte para modo claro/oscuro
- **TypeScript 5**
- **NodeMailer** – Envío de correos desde el formulario de contacto

---

## 📁 Estructura del Proyecto

```
📦 shportafolio
├── app/                   → App Router (páginas, layout, API)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── send-email/        → Ruta API para envío de correo
│   └── sections/          → Secciones de la landing page
│       ├── Contact.tsx
│       ├── Projects.tsx
│       └── ...
├── components/            → Layout principal
├── ui/                    → Componentes reutilizables
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── ...
├── data/                  → Datos para render dinámico (JSON/TS)
│   ├── projects.ts
│   ├── skills.ts
│   └── ...
├── utils/                 → Utilidades globales
├── hooks/                 → (Reservado para hooks personalizados)
├── public/                → Imágenes, íconos, favicon, etc.
└── styles/                → Estilos globales (Tailwind, CSS)
```

---

## 🧪 Scripts disponibles

```bash
npm run dev     # Inicia el entorno de desarrollo
npm run build   # Compila el proyecto para producción
npm run start   # Inicia el servidor en modo producción
npm run lint    # Corre el linter para revisar buenas prácticas
```

---

## ✨ Funcionalidades

- [x] Diseño responsive para desktop y mobile
- [x] Animaciones con Framer Motion
- [x] Modo oscuro automático o manual
- [x] Datos dinámicos desde archivos `data/*.ts`
- [x] Formulario de contacto funcional usando API `send-email`
- [x] Separación de componentes para escalabilidad

---

## 📬 Configuración de variables de entorno

Crea un archivo `.env.local` y agrega lo siguiente:

```env
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-password-o-app-password
EMAIL_RECEIVER=destino@ejemplo.com
```

## 🛠️ En desarrollo

Este portafolio está en constante mejora. Algunas tareas pendientes:

- [ ] Agregar sección de blog
- [ ] Soporte multi-idioma
- [ ] Test unitarios (Jest + Testing Library)
- [ ] Modo impresión / descarga PDF del CV

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo como base para tu propio portafolio.

---

## 🙋 Sobre mí

Me llamo **Sebastián Huanca** y soy desarrollador web apasionado por construir soluciones prácticas, intuitivas y bien estructuradas. Si te interesa colaborar o tienes alguna consulta, puedes contactarme por el [formulario](https://miportafolio.com/contact) o vía [LinkedIn](#).

---

💡 _"El equilibrio no es algo que encuentras, es algo que creas."_
