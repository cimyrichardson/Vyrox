"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { mockCategories } from "@/data/mock-categories";
import { mockProducts } from "@/data/mock-products";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

type ProductCatalogProps = {
  initialCategory: string;
};

type SortOrder = "newest" | "name" | "price-asc" | "price-desc";

function isSortOrder(value: string): value is SortOrder {
  return ["newest", "name", "price-asc", "price-desc"].includes(value);
}

export function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const products = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    const filtered = mockProducts.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${product.name} ${product.brand}`
          .toLocaleLowerCase("fr")
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return filtered.sort((left, right) => {
      switch (sortOrder) {
        case "name":
          return left.name.localeCompare(right.name, "fr");
        case "price-asc":
          return left.price - right.price;
        case "price-desc":
          return right.price - left.price;
        case "newest":
          return right.createdAt.localeCompare(left.createdAt);
      }
    });
  }, [category, query, sortOrder]);

  function updateCategory(value: string) {
    setCategory(value);
    const params = new URLSearchParams(window.location.search);
    if (value === "all") params.delete("categorie");
    else params.set("categorie", value);

    const search = params.toString();
    const basePath = pathname ?? "/produits";
    router.replace(search ? `${basePath}?${search}` : basePath, {
      scroll: false,
    });
  }

  return (
    <div>
      <Reveal className="mb-8 grid gap-4 rounded-card border border-primary/10 bg-white p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-[minmax(16rem,1.4fr)_minmax(12rem,1fr)_minmax(12rem,1fr)]">
        <div>
          <label
            htmlFor="product-search"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Rechercher un produit
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nom ou marque"
            className="min-h-11 w-full rounded-control border border-primary/15 bg-white px-3 text-sm text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Catégorie
          </label>
          <select
            id="product-category"
            value={category}
            onChange={(event) => updateCategory(event.target.value)}
            className="min-h-11 w-full rounded-control border border-primary/15 bg-white px-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="all">Toutes les catégories</option>
            {mockCategories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="product-sort"
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Trier par
          </label>
          <select
            id="product-sort"
            value={sortOrder}
            onChange={(event) => {
              const value = event.target.value;
              if (isSortOrder(value)) setSortOrder(value);
            }}
            className="min-h-11 w-full rounded-control border border-primary/15 bg-white px-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="newest">Ajouts récents</option>
            <option value="name">Nom (A à Z)</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>
      </Reveal>

      <p className="mb-5 text-sm text-text-muted" aria-live="polite">
        {products.length} produit{products.length > 1 ? "s" : ""} affiché
        {products.length > 1 ? "s" : ""} · Références de démonstration
      </p>

      {products.length > 0 ? (
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </Stagger>
      ) : (
        <div
          role="status"
          className="rounded-card border border-dashed border-primary/20 bg-white px-6 py-12 text-center"
        >
          <h2 className="font-heading text-xl font-bold text-primary">
            Aucun produit ne correspond à cette recherche.
          </h2>
          <p className="mt-2 text-sm leading-6 text-text-muted">
            Essayez un autre terme ou choisissez une autre catégorie.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              updateCategory("all");
            }}
            className="mt-5 min-h-11 rounded-control px-4 text-sm font-semibold text-accent hover:bg-bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Effacer les filtres
          </button>
        </div>
      )}
      <p className="mt-8 rounded-control bg-bg-muted p-4 text-sm leading-6 text-text-muted">
        Les références, prix et disponibilités de démonstration doivent être
        confirmés auprès de Vyrox avant toute commande. Aucun produit n’est
        présenté comme disponible sans confirmation.
      </p>
    </div>
  );
}
