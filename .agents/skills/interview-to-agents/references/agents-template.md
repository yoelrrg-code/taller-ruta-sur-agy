# AGENTS.md - Especificaciones, Diseño y Reglas del Proyecto

> **INSTRUCCIÓN PARA EL AGENTE:** Este documento es la única fuente de verdad para construir este proyecto. Antes de escribir cualquier línea de código, lee todas las secciones, verifica los recursos disponibles en `/public/assets/` y asegúrate de cumplir el 100% de las restricciones aquí definidas.

---

## 1. Contexto General del Cliente y Negocio
- **Nombre del Negocio / Marca:** [Completar]
- **Rubro / Industria:** [Completar]
- **Ubicación / Alcance Geográfico:** [Ej: Local en Montevideo / Nacional / Internacional]
- **Objetivo Principal del Sitio:** [Ej: Captar leads cualificados por WhatsApp / Agendar citas / Vender catálogo]
- **Público Objetivo (Buyer Persona):** [Descripción del cliente ideal, edad, necesidades y dolor principal]
- **Tono de Comunicación (Copywriting):** [Ej: Profesional y cercano / Técnico y autoritativo / Moderno y dinámico / Cálido]
- **Idioma del Contenido:** [Español (ajustar variantes regionales si aplica)]

---

## 2. Sistema de Diseño e Identidad Visual (UI/UX Tokens)

### 2.1 Paleta de Colores (Configurar en `tailwind.config` / Variables CSS)
- **Color Primario (Marca / Botones principales):** `#HEX` — [Descripción, ej: Azul marino profundo]
- **Color Secundario (Acentos / Badges / Highlights):** `#HEX` — [Descripción, ej: Ámbar cálido]
- **Fondo Principal (Background Base):** `#HEX` — [Ej: `#FFFFFF` o `#FAFAFA`]
- **Fondo Alterno (Superficies / Cards / Secciones pares):** `#HEX` — [Ej: `#F1F5F9`]
- **Texto Principal (Títulos y párrafos):** `#HEX` — [Ej: `#1E293B` (Evitar `#000000` puro)]
- **Texto Secundario (Subtítulos / Captions / Muted):** `#HEX` — [Ej: `#64748B`]
- **Modo de Color:** [Solo Light Mode / Solo Dark Mode / Toggle Light-Dark]

### 2.2 Tipografía (Cargar vía `next/font/google` o Google Fonts)
- **Fuente para Títulos (Headings):** `[Nombre, ej: Plus Jakarta Sans]` — Pesos: `600, 700, 800`, letter-spacing ajustado (`tracking-tight`).
- **Fuente para Cuerpo (Body):** `[Nombre, ej: Inter]` — Pesos: `400, 500`, interlineado cómodo (`leading-relaxed`).
- **Jerarquía de Tamaños:** H1 en desktop `text-4xl lg:text-6xl`, H2 `text-3xl lg:text-4xl`, cuerpo base `text-base` (`16px`).

### 2.3 Dirección de Arte y Geometría
- **Estilo Visual General:** [Ej: Minimalista Corporativo / Editorial Elegante / Tecnológico Moderno / Cálido y Artesanal]
- **Radio de Bordes (Border Radius):** [Estricto: `rounded-none` (recto) / `rounded-lg` (sutil) / `rounded-2xl` (suave) / `rounded-full` en botones]
- **Elevación y Sombras:** [Ej: Diseño plano con bordes finos `border-slate-200` / Sombras suaves difusas `shadow-lg shadow-slate-200/50`]
- **Densidad de Espaciado:** [Ej: Amplio y aireado (`py-20 lg:py-28` entre secciones) / Compacto (`py-12`)]
- **Referencias Visuales del Cliente:** [URLs de referencia y qué elemento específico replicar de cada una]

---

## 3. Stack Tecnológico y Arquitectura de Código
- **Framework:** [Ej: Next.js (App Router) / Astro / React + Vite]
- **Estilos:** Tailwind CSS (usar clases utilitarias estándar, evitar archivos CSS custom innecesarios)
- **Iconografía:** Lucide React (`lucide-react`)
- **Idioma del Código:** Inglés estricto (nombres de componentes, variables, props, carpetas y comentarios)
- **Estructura de Carpetas:**
  - `/src/components/ui/` -> Componentes atómicos reutilizables (Botones, Badges, Acordeones)
  - `/src/components/sections/` -> Secciones de la página (Hero, Services, Testimonials, Footer)
  - `/src/data/` -> Archivos estáticos con textos, menús, FAQs y servicios desacoplados de la vista
  - `/public/assets/` -> Imágenes, logos y recursos multimedia optimizados

---

## 4. Reglas y Restricciones Estrictas para el Agente
1. **CERO INVENCIÓN DE DATOS:** **NO** inventar teléfonos, correos, direcciones físicas, precios, estadísticas ni testimonios reales. Si falta algún dato obligatorio, colocar exactamente el marcador `[PENDIENTE_CLIENTE: descripción del dato]`.
2. **PRIORIDAD DE ASSETS LOCALES:** **NO** usar URLs externas de bancos de imágenes (como Unsplash o Pexels) si existe un archivo asignado en la Sección 5.
3. **LIMPIEZA DE DEPENDENCIAS:** **NO** instalar librerías pesadas de UI (Material UI, Bootstrap, Ant Design) ni motores de animación complejos (GSAP, Framer Motion) salvo autorización explícita aquí: `[ANIMACIONES_AVANZADAS: NO]`.
4. **RESPONSIVE & MOBILE-FIRST:** Todo el diseño debe construirse pensando primero en pantallas móviles (`375px`) y escalar limpiamente hasta pantallas grandes (`1440px+`), sin desbordamientos horizontales (`overflow-x-hidden`).
5. **CONVERSIÓN CENTRALIZADA:** Todos los botones de Llamado a la Acción (CTA) principales deben dirigir a: `[URL o Acción, ej: https://wa.me/598XXXXXXXX?text=Hola...]`.
6. **SEO Y SEMÁNTICA:** Usar etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), un único `<h1>` por página, atributos `alt` descriptivos en todas las imágenes y metadatos completos (`title`, `description`, `openGraph`).

---

## 5. Inventario de Recursos Multimedia (`/public/assets/`)
*El agente debe verificar la existencia de estos archivos y asignarlos exactamente donde se indica:*
- `/public/assets/logo.svg` (o `.png`): Logo principal para Navbar y Footer.
- `/public/assets/favicon.ico`: Ícono de pestaña del navegador.
- `/public/assets/hero-main.webp`: Imagen principal de la sección Hero.
- `/public/assets/about.webp`: Fotografía para la sección "Sobre Nosotros".
- `/public/assets/service-1.webp`: [Descripción de uso]
- `/public/assets/service-2.webp`: [Descripción de uso]
- [Agregar aquí el resto de archivos subidos por el cliente]

---

## 6. Arquitectura Detallada por Página y Sección

### 6.1 Elementos Globales (Layout Wrapper)
- **Navbar:** [Sticky top con fondo translúcido `backdrop-blur-md` / Transparente sobre Hero / Flotante]. Altura `h-20`. Contiene: Logo a la izquierda + enlaces de navegación suave en el centro + Botón CTA destacado a la derecha + Menú móvil tipo drawer/hamburguesa.
- **Botón Flotante de WhatsApp:** [SÍ / NO] — Ubicado en esquina inferior derecha (`fixed bottom-6 right-6 z-50`), con tooltip o animación sutil.

### 6.2 Estructura de la Página Principal (`/`)
1. **Hero Section:**
   - **Layout:** [Ej: Split 2 columnas (55% texto izquierda / 45% imagen derecha) O Centrado con imagen de fondo y overlay oscuro].
   - **Contenido:**
     - Badge superior: `[Texto corto de autoridad o categoría]`
     - Título H1: `[Propuesta de valor principal]`
     - Subtítulo: `[Explicación clara del beneficio en 1-2 líneas]`
     - CTA Primario: `[Texto del botón]` -> `[Acción]`
     - CTA Secundario: `[Texto del botón, ej: Ver servicios]` -> `[Ancla #servicios]`
     - Micro-prueba social: `[Ej: "+10 años de experiencia" o calificación con estrellas]`
2. **Franja de Autoridad / Clientes (Opcional):**
   - **Layout:** Fila horizontal centrada con logos en escala de grises (`grayscale opacity-70 hover:opacity-100 transition`).
3. **Propuesta de Valor / Beneficios Clave:**
   - **Layout:** Grid de `[3 o 4]` columnas (`grid-cols-1 md:grid-cols-3 gap-8`).
   - **Diseño de Tarjeta:** Ícono de Lucide en contenedor con fondo suave (`bg-primary/10 text-primary`) + Título H3 + Párrafo breve (máx. 3 líneas).
4. **Catálogo de Servicios / Productos:**
   - **Layout:** [Ej: Grid de tarjetas verticales con imagen superior / Bento Grid / Tabs interactivos].
   - **Detalle de Items:**
     - *Servicio 1:* [Nombre, descripción breve, puntos clave y CTA]
     - *Servicio 2:* [Nombre, descripción breve, puntos clave y CTA]
     - *Servicio 3:* [Nombre, descripción breve, puntos clave y CTA]
5. **Sobre Nosotros / Diferencial Competitivo:**
   - **Layout:** 2 columnas (Imagen a la izquierda con borde redondeado y sombra sutil, texto narrativo y lista con checkmarks a la derecha).
6. **Testimonios / Casos de Éxito:**
   - **Layout:** Grid de 3 columnas. Cada tarjeta incluye: 5 estrellas + Cita textual + Nombre y cargo/empresa del cliente.
7. **Preguntas Frecuentes (FAQ):**
   - **Layout:** Columna única centrada (`max-w-3xl mx-auto`) con componente Acordeón interactivo (solo una pregunta abierta simultáneamente).
   - **Preguntas a incluir:** [Listar las dudas clave extraídas de la reunión]
8. **CTA Final (Cierre de Conversión):**
   - **Layout:** Contenedor destacado (`rounded-3xl`) con fondo en Color Primario, texto en alto contraste y botón de acción grande.
9. **Footer:**
   - **Layout:** 4 columnas en desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12`):
     - Col 1: Logo + breve descripción del negocio.
     - Col 2: Enlaces rápidos de navegación.
     - Col 3: Listado de servicios principales.
     - Col 4: Datos de contacto (teléfono, email, dirección, horarios) e íconos de redes sociales.
   - **Barra inferior:** Copyright con año dinámico y enlaces legales (Política de Privacidad / Términos).

---

## 7. Reglas de Interacción, Rendimiento y Calidad
- **Transiciones:** Usar transiciones nativas de Tailwind (`transition-all duration-300 ease-out`) para estados `hover` y `focus` en botones, enlaces y tarjetas.
- **Navegación:** Activar `scroll-smooth` en el documento para enlaces de ancla internos (`#seccion`). Enlaces externos y de WhatsApp deben incluir `target="_blank" rel="noopener noreferrer"`.
- **Optimización de Imágenes:** Usar el componente de imagen nativo del framework (`next/image` o `<Image />` de Astro) con atributos `width`, `height` y `loading="lazy"` (excepto la imagen del Hero que debe llevar `priority` / `loading="eager"`).
- **Accesibilidad (A11y):** Contraste mínimo AA entre texto y fondo, atributos `aria-label` en botones que solo contengan íconos (como menú móvil y redes sociales) y estados `focus-visible` visibles para navegación por teclado.

---

## 8. Notas Específicas de la Reunión y Requisitos Especiales
- [Pegar aquí cualquier requerimiento técnico adicional: ej. formulario de contacto con envío a email, mapa de Google Maps embebido, integración de calendario, etc.]
