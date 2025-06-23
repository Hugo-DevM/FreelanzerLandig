# Freelanzer - Landing Page

Landing page para Freelanzer, la plataforma para freelancers en LATAM.

## 🚀 Características

- **Contador regresivo** hasta el lanzamiento oficial
- **Formulario de registro** con validación en tiempo real
- **Preguntas frecuentes** interactivas
- **Compartir en redes sociales** (WhatsApp, Facebook, Twitter)
- **Diseño responsive** y moderno
- **Tipografía Rubik** para mejor legibilidad

## 🛠️ Tecnologías

- **Astro** - Framework para sitios web estáticos
- **React** - Componentes interactivos
- **Tailwind CSS** - Estilos y diseño
- **Formspree** - Manejo de formularios
- **TypeScript** - Tipado estático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Hugo-DevM/landing-Freelanzer.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🧞 Comandos

| Comando           | Acción                                               |
| :---------------- | :--------------------------------------------------- |
| `npm install`     | Instala las dependencias                             |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build`   | Construye el sitio para producción                   |
| `npm run preview` | Previsualiza la build localmente                     |

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── images/          # Imágenes y logos
├── src/
│   ├── components/      # Componentes React y Astro
│   ├── data/           # Datos JSON (FAQ)
│   ├── layout/         # Layout principal
│   ├── pages/          # Páginas de la aplicación
│   └── styles/         # Estilos globales
└── package.json
```

## 🎨 Componentes Principales

- **HeroSection** - Sección principal con formulario de registro
- **CountdownTimer** - Contador regresivo hasta el lanzamiento
- **FAQSection** - Preguntas frecuentes
- **CopyButton** - Botón para copiar enlace con animaciones
- **EmailRegister** - Formulario de registro con Formspree

## 📧 Configuración de Emails

El proyecto usa Formspree para manejar los formularios. Los usuarios reciben un email de confirmación automático cuando se registran.

## 🚀 Despliegue

El proyecto está configurado para desplegarse en Vercel con `output: "static"`.

## 📄 Licencia

Desarrollado con ❤️ por el equipo de Freelanzer.
