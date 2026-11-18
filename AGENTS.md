# AGENTS.md - Especificaciones, Diseño y Reglas del Proyecto

> **INSTRUCCIÓN PARA EL AGENTE:** Este documento es la única fuente de verdad para construir este proyecto. Antes de escribir cualquier línea de código, lee todas las secciones, verifica los recursos disponibles en `/public/assets/` y asegúrate de cumplir el 100% de las restricciones aquí definidas.

---

## 1. Contexto General del Cliente y Negocio
- **Nombre del Negocio / Marca:** Taller Mecánico Ruta Sur (también referido como Taller Ruta Sur)
- **Rubro / Industria:** Mecánica automotriz multimarca, mantenimiento integral, diagnóstico computarizado, revisión pre-compra y venta de insumos básicos
- **Ubicación / Alcance Geográfico:** Uruguay — Montevideo, Bella Italia, Genova 3535
- **Objetivo Principal del Sitio:** Reservar turnos únicos presenciales en el taller (Mantenimiento preventivo, Diagnóstico computarizado y Revisión pre-compra), cobrar online servicios de tarifa fija (Diagnóstico computarizado y Revisión pre-compra) y vender/reservar para retiro un catálogo inicial de 15 a 20 insumos automotrices.
- **Público Objetivo (Buyer Persona):** Hombres y mujeres de entre 28 y 55 años que usan el auto todos los días para ir a trabajar o llevar a sus hijos, con poco conocimiento técnico de mecánica, que buscan un taller de confianza, transparente, que cumpla horarios y no cobre de más ni invente fallas.
- **Tono de Comunicación (Copywriting):** Profesional, claro y directo, cercano sin caer en informalidad excesiva ni jerga técnica rebuscada; mostrar honestidad (enseñar el repuesto viejo y explicar sin vueltas).
- **Idioma del Contenido:** Español LATAM (Uruguay, voseo cercano: "traé tu auto", "agendá tu turno", nada de "usted").

---

## 2. Sistema de Diseño e Identidad Visual (UI/UX Tokens)

### 2.1 Paleta de Colores (Configurar en `tailwind.config` / Variables CSS)
- **Color Primario (Marca / Botones principales):** `#DC2626` — Rojo automotriz intenso, alineado con el logo existente del taller 
- **Color Secundario (Acentos / Badges / Highlights):** `#374151` — Gris oscuro técnico/metálico, alineado con el logo existente (`#1F2937` / `#374151`)
- **Fondo Principal (Background Base):** `#F8FAFC` — Blanco roto técnico limpio para transmitir transparencia y orden
- **Fondo Alterno (Superficies / Cards / Secciones pares):** `#F1F5F9` — Gris muy claro para separar bloques y tarjetas
- **Texto Principal (Títulos y párrafos):** `#111827` — Gris carbón oscuro (evitar `#000000` puro)
- **Texto Secundario (Subtítulos / Captions / Muted):** `#4B5563` — Gris medio legible para descripciones y etiquetas
- **Modo de Color:** Light and Dark Mode

### 2.2 Tipografía (Cargar vía `next/font/google` o Google Fonts)
- **Fuente para Títulos (Headings):** `Plus Jakarta Sans` — Pesos: `600, 700, 800`, letter-spacing ajustado (`tracking-tight`).
- **Fuente para Cuerpo (Body):** `Inter` — Pesos: `400, 500`, interlineado cómodo (`leading-relaxed`).
- **Jerarquía de Tamaños:** H1 en desktop `text-4xl lg:text-6xl`, H2 `text-3xl lg:text-4xl`, cuerpo base `text-base` (`16px`).

### 2.3 Dirección de Arte y Geometría
- **Estilo Visual General:** Técnico Moderno, limpio y transparente (contraste claro, foco en claridad, confianza y rapidez).
- **Radio de Bordes (Border Radius):** `rounded-xl` en tarjetas y contenedores, `rounded-lg` en botones e inputs.
- **Elevación y Sombras:** Superficies limpias con borde fino `border-slate-200` y sombra sutil `shadow-sm` en tarjetas interactivas.
- **Densidad de Espaciado:** Amplio y aireado (`py-16 lg:py-24` entre secciones) para lectura rápida.
- **Referencias Visuales del Cliente:** https://www.marcelotrevino.com/

---

## 3. Stack Tecnológico y Arquitectura de Código
- **Framework:** Next.js (App Router + Turbopack, TypeScript)
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
1. **LIMPIEZA DE DEPENDENCIAS:** **NO** instalar librerías pesadas de UI (Material UI, Bootstrap, Ant Design) ni motores de animación complejos (GSAP, Framer Motion) salvo autorización explícita aquí: `[ANIMACIONES_AVANZADAS: Motion]`.
2. **RESPONSIVE & MOBILE-FIRST:** Todo el diseño debe construirse pensando primero en pantallas móviles (`375px`) y escalar limpiamente hasta pantallas grandes (`1440px+`), sin desbordamientos horizontales (`overflow-x-hidden`).
3. **CONVERSIÓN CENTRALIZADA:** Todos los botones de Llamado a la Acción (CTA) principales deben dirigir a: la sección/flujo de reserva de turno (`#turnos`) o al WhatsApp del taller +59892686840 según corresponda al servicio.
4. **SEO Y SEMÁNTICA:** Usar etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), un único `<h1>` por página, atributos `alt` descriptivos en todas las imágenes y metadatos completos (`title`, `description`, `openGraph`).

---

## 5. Inventario de Recursos Multimedia (`/public/assets/`)
*El agente debe verificar la existencia de estos archivos y asignarlos exactamente donde se indica:*
*(Nota: la carpeta `/public/assets/` aún no existe en el repositorio; crearla al recibir los archivos del cliente).*
- `/public/assets/logo.svg` (o `.png`): Logo principal del taller (pistón + "Taller Mecánico Ruta Sur" en rojo y gris oscuro), genera un logo de acuerdo al contenido
- `/public/assets/favicon.ico`: Ícono de pestaña del navegador, genera uno de acuerdo al contenido
- `/public/assets/hero-main.webp`: Imagen principal de la sección Hero (taller en actividad / elevador / diagnóstico), genera uno de acuerdo al contenido
- `/public/assets/about.webp`: Fotografía de Martín Rodríguez y el equipo de 3 mecánicos en el taller, genera uno de acuerdo al contenido
- `/public/assets/service-1.webp`: Mantenimiento preventivo, genera uno de acuerdo al contenido
- `/public/assets/service-2.webp`: Mecánica ligera y frenos, genera uno de acuerdo al contenido
- `/public/assets/service-3.webp`: Diagnóstico computarizado con escáner, genera uno de acuerdo al contenido
- `/public/assets/service-4.webp`: Revisión pre-compra en elevador, genera uno de acuerdo al contenido

---

## 6. Arquitectura Detallada por Página y Sección

### 6.1 Elementos Globales (Layout Wrapper)
- **Navbar:** Sticky top con fondo claro translúcido (`bg-white/90 backdrop-blur-md border-b border-slate-200`). Altura `h-20`. Contiene: Logo a la izquierda + enlaces de navegación suave en el centro (`Servicios`, `Productos`, `Nosotros`, `Reseñas`, `FAQ`) + Botón CTA destacado a la derecha (`Agendá tu turno`) + Menú móvil tipo drawer/hamburguesa.
- **Botón Flotante de WhatsApp:** SÍ — Ubicado en esquina inferior derecha (`fixed bottom-6 right-6 z-50`), vinculado a +59892686840`.

### 6.2 Estructura de la Página Principal (`/`)
1. **Hero Section:**
   - **Layout:** Split 2 columnas (55% texto izquierda / 45% imagen derecha).
   - **Contenido:**
     - Badge superior: `4.9 ★ en Google Maps · Más de 15 años de experiencia`
     - Título H1: `Mecánica clara, rápida y sin vueltas para tu auto`
     - Subtítulo: `En Taller Mecánico Ruta Sur te mostramos el repuesto viejo, te explicamos qué tiene tu vehículo y cumplimos con el horario de entrega.`
     - CTA Primario: `Agendá tu turno` -> `#turnos` (flujo de turno único presencial)
     - CTA Secundario: `Ver servicios` -> `#servicios`
     - Micro-prueba social: `4.9 estrellas en Google Maps (+40 reseñas reales de clientes)`
2. **Franja de Autoridad / Diferenciales Rápidos:**
   - **Layout:** Fila horizontal de 3-4 ítems clave (`Multimarca`, `Repuesto a la vista`, `Turnos puntuales`, `4.9 ★ en Google`).
3. **Propuesta de Valor / Beneficios Clave:**
   - **Layout:** Grid de 3 columnas (`grid-cols-1 md:grid-cols-3 gap-8`).
   - **Diseño de Tarjeta:** Ícono de Lucide en contenedor con fondo suave (`bg-red-600/10 text-red-600`) + Título H3 + Párrafo breve (máx. 3 líneas):
     - *Transparencia total:* Te mostramos el repuesto cambiado y te explicamos cada arreglo sin palabras raras.
     - *Cumplimos el horario:* Turnos únicos puntuales para que tengas tu auto en el día o en un par de horas.
     - *Diagnóstico preciso:* Escáner computarizado y revisión completa antes de cambiar cualquier pieza.
   - **Detalle de Servicios:**
     - *Servicio 1 — Mantenimiento preventivo:* Cambio de aceite, filtros, revisión de niveles y chequeo general antes de salir a la ruta. Incluye 2 subservicios seleccionables: **Service Básico** (aceite y filtro de aceite) y **Service Completo** (filtros de aire, combustible, habitáculo, rotación de cubiertas y chequeo de 25 puntos). CTA: `Reservar turno presencial`.
     - *Servicio 2 — Mecánica ligera y frenos:* Cambio de pastillas, discos, amortiguadores, tren delantero y embrague. Presupuesto tras revisión presencial (sin cobro online). CTA: `Consultar por este arreglo`.
     - *Servicio 3 — Diagnóstico computarizado:* Conexión de escáner para detectar fallas electrónicas, testigos prendidos en el tablero e inyección. Tarifa fija `[PENDIENTE_CLIENTE: precio del diagnóstico computarizado]`. CTA: `Pagar y agendar turno`.
     - *Servicio 4 — Revisión pre-compra:* Subimos al elevador el auto que querés comprar, lo escaneamos y te damos un informe honesto de motor, chapa y mecánica. Tarifa fija `[PENDIENTE_CLIENTE: precio de la revisión pre-compra]`. CTA: `Pagar y agendar revisión`.
4. **Sobre Nosotros / Diferencial Competitivo:**
   - **Layout:** 2 columnas (Imagen a la izquierda con borde redondeado y sombra sutil, texto narrativo y lista con checkmarks a la derecha).
   - **Contenido:** Presentación de **Martín Rodríguez**, fundador de Taller Mecánico Ruta Sur (más de 15 años de experiencia en autos multimarca, 8 años con el taller abierto), hablando en primera persona del plural junto a su equipo fijo de 3 mecánicos.
6. **Testimonios / Casos de Éxito:**
   - **Layout:** Grid de 3 columnas (mostrando 5 o 6 reseñas reales de Google Maps). Cada tarjeta incluye: 5 estrellas + Cita textual + Nombre del cliente.
   - **Contenido:** `[PENDIENTE_CLIENTE: texto exacto y nombres de las 5 o 6 reseñas seleccionadas de Google Maps (actualmente 4.9 estrellas en 40-50 reseñas)]`.
7. **Preguntas Frecuentes (FAQ):**
   - **Layout:** Columna única centrada (`max-w-3xl mx-auto`) con componente Acordeón interactivo (solo una pregunta abierta simultáneamente).
   - **Preguntas a incluir:**
     - *¿Cómo funciona la reserva de turnos?* (Turnos únicos puntuales; elegís día y hora, traés el auto y el trabajo se realiza en el día o en un par de horas, sin abonos mensuales).
     - *¿Qué incluye el Service Básico vs. el Service Completo?* (Básico: aceite y filtro de aceite. Completo: todos los filtros —aire, combustible, habitáculo—, rotación de cubiertas y chequeo de 25 puntos).
     - *¿Qué servicios se pueden pagar online?* (Diagnóstico computarizado y Revisión pre-compra tienen tarifa fija; los arreglos de mecánica ligera se presupuestan luego de revisar el vehículo).
     - *¿Cómo compro o retiro insumos del catálogo?* (Compra directa o retiro en el taller — completar detalle de entrega cuando el cliente defina).
8. **CTA Final (Cierre de Conversión):**
   - **Layout:** Contenedor destacado (`rounded-3xl`) con fondo en Color Primario (`#DC2626`), texto en alto contraste blanco y botón de acción grande (`Agendá tu turno ahora`).
9. **Footer:**
   - **Layout:** 4 columnas en desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12`):
     - Col 1: Logo + breve descripción de Taller Mecánico Ruta Sur.
     - Col 2: Enlaces rápidos de navegación (`Servicios`, `Productos`, `Nosotros`, `Reseñas`, `FAQ`).
     - Col 3: Listado de los 4 servicios principales.
     - Col 4: Datos de contacto (+59892686840, yoelkys.rrg@gmail.com, Genova 3525, Montevideo, Uruguay y Lunes a Viernes de 9am a 6pm, Sabado 9am a 2pm) e íconos de redes sociales: Instagram `@tallerrutasur`.
   - **Barra inferior:** Copyright con año dinámico y enlaces legales (Política de Privacidad / Términos).

---

## 7. Reglas de Interacción, Rendimiento y Calidad
- **Transiciones:** Usar transiciones nativas de Tailwind (`transition-all duration-300 ease-out`) para estados `hover` y `focus` en botones, enlaces y tarjetas.
- **Navegación:** Activar `scroll-smooth` en el documento para enlaces de ancla internos (`#seccion`). Enlaces externos y de WhatsApp deben incluir `target="_blank" rel="noopener noreferrer"`.
- **Optimización de Imágenes:** Usar el componente de imagen nativo del framework (`next/image` o `<Image />` de Astro) con atributos `width`, `height` y `loading="lazy"` (excepto la imagen del Hero que debe llevar `priority` / `loading="eager"`).
- **Accesibilidad (A11y):** Contraste mínimo AA entre texto y fondo, atributos `aria-label` en botones que solo contengan íconos (como menú móvil y redes sociales) y estados `focus-visible` visibles para navegación por teclado.

---

## 8. Notas Específicas de la Reunión y Requisitos Especiales
- **Agenda de turnos:** Turnos únicos puntuales asociados a la agenda del taller para citas presenciales (Mantenimiento preventivo, Diagnóstico computarizado y Revisión pre-compra) `Herramienta interna personalizada`.
- **Redes sociales activas:** Integrar enlaces y/o embeds o referencias a Instagram (`@tallerrutasur`) y TikTok (videos de antes/después, piezas gastadas y consejos rápidos).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
