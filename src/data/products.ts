export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  priceLabel: string;
  deliveryMode: string;
  imageSrc: string;
}

export const featuredProducts: ProductItem[] = [
  {
    id: "oil-10w40",
    name: "Bidón de aceite sintético 10W-40",
    category: "Lubricantes",
    description:
      "Aceite sintético de alto rendimiento para protección diaria del motor en ciudad y ruta.",
    priceLabel: "$ 1.650",
    deliveryMode: "Compra directa o retiro en taller",
    imageSrc: "/assets/products/oil-10w40.jpg",
  },
  {
    id: "wiper-blades",
    name: "Escobillas limpiaparabrisas",
    category: "Visibilidad",
    description:
      "Escobillas de barrido limpio y silencioso para lluvia intensa. Consultá medida para tu modelo.",
    priceLabel: "$ 890",
    deliveryMode: "Compra directa o retiro en taller",
    imageSrc: "/assets/products/wiper-blades.jpg",
  },
  {
    id: "led-headlight-kits",
    name: "Kits de lámparas LED para ópticas",
    category: "Iluminación",
    description:
      "Mayor alcance y claridad nocturna con bajo consumo eléctrico para tu vehículo.",
    priceLabel: "$ 2.150",
    deliveryMode: "Compra directa o retiro en taller",
    imageSrc: "/assets/products/led-headlight-kits.jpg",
  },
];

export const catalogMetadata = {
  initialSizeNote: "Catálogo inicial de 15 a 20 insumos básicos automotrices.",
  pendingNote:
    "Stock permanente para retiro en el taller o compra directa junto con tu turno.",
} as const;
