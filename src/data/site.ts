export interface NavLink {
  label: string;
  href: string;
}

export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  iconName: "Eye" | "Clock" | "Cpu";
}

export const navigationLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Reseñas", href: "#resenas" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent = {
  badge: "4.9 ★ en Google Maps · Más de 15 años de experiencia",
  title: "Mecánica clara, rápida y sin vueltas para tu auto",
  subtitle:
    "En Taller Mecánico Ruta Sur te mostramos el repuesto viejo, te explicamos qué tiene tu vehículo y cumplimos con el horario de entrega.",
  primaryCta: { label: "Agendá tu turno", href: "#turnos" },
  secondaryCta: { label: "Ver servicios", href: "#servicios" },
  socialProof: "4.9 estrellas en Google Maps (+40 reseñas reales de clientes)",
} as const;

export const authorityItems = [
  { label: "Autos multimarca", detail: "+15 años de experiencia" },
  { label: "Repuesto a la vista", detail: "Transparencia en cada arreglo" },
  { label: "Turnos puntuales", detail: "Entrega en el día o en horas" },
  { label: "4.9 ★ en Google", detail: "40–50 reseñas verificadas" },
] as const;

export const valueProps: ValuePropItem[] = [
  {
    id: "transparency",
    title: "Transparencia total",
    description:
      "Te mostramos el repuesto cambiado y te explicamos cada arreglo sin palabras raras ni presupuestos inflados.",
    iconName: "Eye",
  },
  {
    id: "punctuality",
    title: "Cumplimos el horario",
    description:
      "Trabajamos con turnos únicos puntuales para que tengas tu auto listo en el día o en un par de horas.",
    iconName: "Clock",
  },
  {
    id: "precision",
    title: "Diagnóstico preciso",
    description:
      "Conectamos escáner computarizado y revisamos a fondo antes de cambiar cualquier pieza innecesaria.",
    iconName: "Cpu",
  },
];

export const aboutContent = {
  eyebrow: "Sobre nosotros",
  title: "Terminamos con el misterio de los talleres mecánicos",
  lead: "Soy Martín Rodríguez, fundador de Taller Mecánico Ruta Sur. Llevo más de 15 años metiendo mano en autos multimarca y hace 8 años abrí el taller junto a un equipo fijo de tres mecánicos.",
  body: "Sabemos que llevar el auto al taller suele generar dudas. Por eso trabajamos con una regla simple: si cambiamos una pieza, te mostramos la usada; si encontramos una falla, te la explicamos claro antes de tocar nada.",
  highlights: [
    "Más de 15 años de experiencia en mecánica automotriz multimarca",
    "8 años de trayectoria con Taller Mecánico Ruta Sur",
    "Equipo fijo de 3 mecánicos capacitados",
    "Explicación clara, sin jerga técnica rebuscada y cumpliendo horarios",
  ],
} as const;

export const contactInfo = {
  location: "Av. Italia 4250, Malvín, Montevideo, Uruguay",
  phone: "+598 99 000 000",
  email: "contacto@tallerrutasur.com.uy",
  hours: "Lunes a Viernes 08:30 a 18:00 hs · Sábados 09:00 a 13:00 hs",
  instagramHandle: "@tallerrutasur",
  instagramUrl: "https://instagram.com/tallerrutasur",
  tiktokHandle: "@tallerrutasur",
  whatsappUrl:
    "https://wa.me/59899000000?text=Hola%20Taller%20Ruta%20Sur%2C%20quiero%20hacer%20una%20consulta",
} as const;
