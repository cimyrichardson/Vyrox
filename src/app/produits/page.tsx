import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Produits informatiques",
  description:
    "Parcourez les catégories de produits informatiques Vyrox et demandez des renseignements sur les références, prix et disponibilités.",
  alternates: { canonical: "/produits" },
};

type ProductsPageProps = {
  searchParams: Promise<{ categorie?: string | string[] }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const initialCategory =
    typeof params.categorie === "string" ? params.categorie : "all";

  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Catalogue Vyrox"
        title="Des équipements pour vos projets."
        description="Explorez les catégories, recherchez une référence et demandez des précisions. Les prix et disponibilités sont à confirmer avant commande."
      />
      <section
        aria-label="Catalogue de produits"
        className="py-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductCatalog initialCategory={initialCategory} />
        </div>
      </section>
    </main>
  );
}
