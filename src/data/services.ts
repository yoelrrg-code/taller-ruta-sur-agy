export interface SubService {
  id: string;
  name: string;
  summary: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  modality: "Turno presencial" | "Presupuesto en taller";
  onlinePayment: boolean;
  priceLabel: string;
  ctaLabel: string;
  ctaHref: string;
  iconName: "Wrench" | "Disc" | "ScanLine" | "ClipboardCheck";
  subServices?: SubService[];
}

export const servicesList: ServiceItem[] = [
  {
    id: "preventive-maintenance",
    name: "Mantenimiento preventivo",
    description:
      "Cambio de aceite, filtros, revisión de niveles y chequeo general para cuidar el motor antes de salir a la ruta.",
    modality: "Turno presencial",
    onlinePayment: false,
    priceLabel: "Presupuesto según servicio",
    ctaLabel: "Reservar turno presencial",
    ctaHref: "#turnos",
    iconName: "Wrench",
    subServices: [
      {
        id: "service-basic",
        name: "Service Básico",
        summary: "Mantenimiento esencial rápido para el día a día.",
        items: ["Cambio de aceite", "Cambio de filtro de aceite"],
      },
      {
        id: "service-full",
        name: "Service Completo",
        summary: "Revisión integral para viajar tranquilo.",
        items: [
          "Todos los filtros (aceite, aire, combustible y habitáculo)",
          "Rotación de cubiertas",
          "Chequeo general de 25 puntos",
        ],
      },
    ],
  },
  {
    id: "light-mechanics-brakes",
    name: "Mecánica ligera y frenos",
    description:
      "Cambio de pastillas, discos, amortiguadores, tren delantero y embrague. Evaluamos el vehículo antes de pasar presupuesto exacto.",
    modality: "Presupuesto en taller",
    onlinePayment: false,
    priceLabel: "Presupuesto tras revisión",
    ctaLabel: "Consultar por este arreglo",
    ctaHref: "#turnos",
    iconName: "Disc",
  },
  {
    id: "computerized-diagnostics",
    name: "Diagnóstico computarizado",
    description:
      "Conectamos el escáner automotriz para detectar fallas electrónicas, testigos encendidos en el tablero e inyección.",
    modality: "Turno presencial",
    onlinePayment: true,
    priceLabel: "Tarifa fija: $ 1.800",
    ctaLabel: "Pagar y agendar turno",
    ctaHref: "#turnos",
    iconName: "ScanLine",
  },
  {
    id: "pre-purchase-inspection",
    name: "Revisión pre-compra",
    description:
      "Traé el auto usado que querés comprar: lo subimos al elevador, lo escaneamos y te damos un informe honesto de motor, chapa y mecánica.",
    modality: "Turno presencial",
    onlinePayment: true,
    priceLabel: "Tarifa fija: $ 2.900",
    ctaLabel: "Pagar y agendar revisión",
    ctaHref: "#turnos",
    iconName: "ClipboardCheck",
  },
];

export const bookableServices = [
  {
    id: "service-basic",
    label: "Mantenimiento preventivo — Service Básico",
    paymentType: "Pago en taller",
  },
  {
    id: "service-full",
    label: "Mantenimiento preventivo — Service Completo",
    paymentType: "Pago en taller",
  },
  {
    id: "computerized-diagnostics",
    label: "Diagnóstico computarizado",
    paymentType: "Tarifa fija · Pago online disponible",
  },
  {
    id: "pre-purchase-inspection",
    label: "Revisión pre-compra de usado",
    paymentType: "Tarifa fija · Pago online disponible",
  },
  {
    id: "light-mechanics-brakes",
    label: "Mecánica ligera y frenos (evaluación)",
    paymentType: "Presupuesto tras revisión",
  },
] as const;
