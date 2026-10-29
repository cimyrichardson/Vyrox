import type { LucideIcon } from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductAvailability =
  | "in-stock"
  | "on-order"
  | "unavailable"
  | "unconfirmed";

export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  currency: "USD" | "HTG";
  availability: ProductAvailability;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};
