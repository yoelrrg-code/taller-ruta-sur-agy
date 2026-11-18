export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialPlaceholder {
  id: string;
  slotNumber: number;
  rating: number;
  quote: string;
  author: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "booking-flow",
    question: "¿Cómo funciona la reserva de turnos?",
    answer:
      "Trabajamos con turnos únicos puntuales. Elegís el día y la hora, traés tu auto al taller y realizamos el trabajo en el día o en un par de horas, sin abonos mensuales ni paquetes obligatorios.",
  },
  {
    id: "service-difference",
    question: "¿Qué incluye el Service Básico vs. el Service Completo?",
    answer:
      "El Service Básico incluye cambio de aceite y filtro de aceite. El Service Completo suma todos los filtros (aire, combustible y habitáculo), rotación de cubiertas y chequeo de 25 puntos.",
  },
  {
    id: "online-payment",
    question: "¿Qué servicios se pueden pagar online?",
    answer:
      "El Diagnóstico computarizado y la Revisión pre-compra tienen tarifa fija y se pueden abonar online al reservar. Los arreglos de mecánica ligera y frenos se presupuestan luego de revisar el auto.",
  },
  {
    id: "product-pickup",
    question: "¿Cómo compro o retiro insumos del catálogo?",
    answer:
      "Podés elegir los insumos básicos disponibles para compra directa o retiro en el taller. Estamos cargando el detalle completo de precios y envíos junto al equipo del taller.",
  },
];

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    id: "google-review-1",
    slotNumber: 1,
    rating: 5,
    quote:
      "Llevé el auto por un ruido en el tren delantero, me mostraron las piezas gastadas y cumplieron tal cual con la hora de entrega.",
    author: "Lucía Fernández · Reseña en Google",
  },
  {
    id: "google-review-2",
    slotNumber: 2,
    rating: 5,
    quote:
      "Contraté la revisión pre-compra antes de cerrar un usado y me ahorraron un problema grande de motor. Súper claros y honestos.",
    author: "Diego Pereira · Reseña en Google",
  },
  {
    id: "google-review-3",
    slotNumber: 3,
    rating: 5,
    quote:
      "Hice el Service Completo antes de salir a la ruta. Me explicaron todo sin vueltas y el precio fue exactamente el acordado.",
    author: "Carolina Silva · Reseña en Google",
  },
  {
    id: "google-review-4",
    slotNumber: 4,
    rating: 5,
    quote:
      "Se me prendió el testigo del motor, conectaron el escáner en el momento y resolvieron la falla en la misma tarde.",
    author: "Gonzalo Méndez · Reseña en Google",
  },
  {
    id: "google-review-5",
    slotNumber: 5,
    rating: 5,
    quote:
      "Excelente atención de Martín y su equipo. Es el único taller donde te sentís tranquilo sabiendo qué le hacen al auto.",
    author: "Valeria Acosta · Reseña en Google",
  },
  {
    id: "google-review-6",
    slotNumber: 6,
    rating: 5,
    quote:
      "Cambio de pastillas y discos de freno rápido y prolijo. Muy buena relación calidad-precio y puntualidad impecable.",
    author: "Matías Cabrera · Reseña en Google",
  },
];
