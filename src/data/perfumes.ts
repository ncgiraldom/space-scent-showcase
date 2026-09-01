import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export type PerfumeCategory = "Hombre" | "Mujer" | "Unisex";

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  category: PerfumeCategory;
  size: string;
  price: number;
  description: string;
  image: string;
}

// Productos de demostración — reemplazar por el catálogo real.
// Para agregar un perfume, basta con añadir un objeto a esta lista.
export const perfumes: Perfume[] = [
  {
    id: "elegia-nuit",
    name: "Elegía Nuit",
    brand: "Maison Lumière",
    category: "Hombre",
    size: "100 ml",
    price: 389000,
    description: "Notas de bergamota, cuero y madera de cedro. Presencia intensa y nocturna.",
    image: p1,
  },
  {
    id: "roselle-dor",
    name: "Roselle d'Or",
    brand: "Casa Belleza",
    category: "Mujer",
    size: "100 ml",
    price: 342000,
    description: "Rosa fresca, peonía y un fondo suave de vainilla. Femenina y luminosa.",
    image: p2,
  },
  {
    id: "aire-blanco",
    name: "Aire Blanco",
    brand: "Atelier Néroli",
    category: "Unisex",
    size: "100 ml",
    price: 298000,
    description: "Neroli, té blanco y almizcle limpio. Frescura minimalista para todos los días.",
    image: p3,
  },
  {
    id: "ambre-soir",
    name: "Ambre Soir",
    brand: "Casa Belleza",
    category: "Unisex",
    size: "100 ml",
    price: 415000,
    description: "Ámbar cálido, especias y sándalo. Envolvente y sofisticado.",
    image: p4,
  },
];
