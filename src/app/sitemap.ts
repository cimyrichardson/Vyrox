import type { MetadataRoute } from "next";
import { mockProducts } from "@/data/mock-products";
import { mockServices } from "@/data/mock-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vyrox.ht";
  const routes = [
    "",
    "/produits",
    "/services",
    "/a-propos",
    "/contact",
    "/demander-un-devis",
    "/faq",
    "/politique-de-confidentialite",
    "/conditions-generales",
    ...mockProducts.map((product) => `/produits/${product.id}`),
    ...mockServices.map((service) => `/services/${service.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
