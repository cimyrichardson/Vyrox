import type { Product } from "@/types/catalog";

export const mockProducts: Product[] = [
  {
    id: "portable-professionnel-14",
    name: "Ordinateur portable professionnel 14″",
    brand: "Lenovo",
    image: "/products/laptop.svg",
    price: 849,
    currency: "USD",
    availability: "unconfirmed",
  },
  {
    id: "ordinateur-de-bureau",
    name: "Ordinateur de bureau polyvalent",
    brand: "Dell",
    image: "/products/desktop.svg",
    price: 729,
    currency: "USD",
    availability: "unconfirmed",
  },
  {
    id: "routeur-wi-fi",
    name: "Routeur Wi-Fi double bande",
    brand: "TP-Link",
    image: "/products/router.svg",
    price: 89,
    currency: "USD",
    availability: "unconfirmed",
  },
  {
    id: "stockage-ssd",
    name: "SSD externe 1 To",
    brand: "Samsung",
    image: "/products/storage.svg",
    price: 119,
    currency: "USD",
    availability: "unconfirmed",
  },
];
