import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProductCard } from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockCategories } from "@/data/mock-categories";
import { mockProducts } from "@/data/mock-products";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mockProducts.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find((item) => item.id === slug);

  if (!product) return { title: "Produit introuvable" };

  return {
    title: product.name,
    description: `${product.name} par ${product.brand}. Demandez à Vyrox confirmation des caractéristiques, du prix et de la disponibilité.`,
    alternates: { canonical: `/produits/${product.id}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = mockProducts.find((item) => item.id === slug);
  if (!product) notFound();

  const category = mockCategories.find(
    (item) => item.slug === product.category,
  );
  const relatedProducts = mockProducts.filter(
    (item) => item.id !== product.id && item.category === product.category,
  );
  const price = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Fiche produit"
        title={product.name}
        description={`Référence de démonstration de la marque ${product.brand}. Les informations commerciales et techniques sont à confirmer auprès de Vyrox.`}
        breadcrumbs={[
          { label: "Produits", href: "/produits" },
          { label: product.name },
        ]}
      />
      <section
        aria-label={`Détails de ${product.name}`}
        className="py-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/produits"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Retour au catalogue
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="relative aspect-4/3 overflow-hidden rounded-card border border-primary/10 bg-bg-muted">
              <Image
                src={product.image}
                alt={`Illustration de démonstration : ${product.name}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-8"
                priority
              />
            </Reveal>
            <Reveal className="flex flex-col items-start" delay={80}>
              <p className="text-sm font-bold tracking-wide text-text-muted uppercase">
                {product.brand}
              </p>
              <h2 className="mt-2 font-heading text-2xl leading-tight font-bold text-primary sm:text-3xl">
                {product.name}
              </h2>
              {category ? (
                <Link
                  href={`/produits?categorie=${category.slug}`}
                  className="mt-4 text-sm font-semibold text-accent hover:text-primary"
                >
                  {category.title}
                </Link>
              ) : null}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge variant="neutral">Disponibilité à confirmer</Badge>
                <span className="text-sm text-text-muted">
                  Référence de démonstration
                </span>
              </div>
              <p className="mt-7 font-heading text-2xl font-extrabold text-primary">
                {price}
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Prix indicatif à confirmer avant commande.
              </p>
              <p className="mt-6 max-w-xl leading-7 text-text-muted">
                Cette fiche présente un exemple de produit du catalogue Vyrox.
                Le modèle exact, sa configuration, ses caractéristiques, sa
                garantie et son prix final doivent être confirmés avant tout
                engagement.
              </p>
              <Button
                href={`/demander-un-devis?produit=${encodeURIComponent(product.id)}`}
                size="lg"
                className="mt-7"
              >
                Demander un devis
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <p className="mt-3 text-xs leading-5 text-text-muted">
                Aucun statut de disponibilité n’est affiché comme confirmé.
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="rounded-card border border-primary/10 p-5 sm:p-6">
              <h2 className="font-heading text-lg font-bold text-primary">
                Informations à confirmer
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-text-muted">
                {[
                  "Modèle et référence exacte",
                  "Configuration et caractéristiques techniques",
                  "Prix, devise et disponibilité",
                  "Garantie et modalités de commande",
                ].map((item) => (
                  <li className="flex gap-2" key={item}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
                      size={17}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-card bg-bg-muted p-5 sm:p-6">
              <h2 className="font-heading text-lg font-bold text-primary">
                Besoin d’une autre référence ?
              </h2>
              <p className="mt-3 text-sm leading-6 text-text-muted">
                Décrivez votre besoin à Vyrox pour obtenir des informations
                sur une configuration adaptée.
              </p>
              <Button href="/contact" variant="secondary" className="mt-5">
                Nous contacter
              </Button>
              </div>
            </Reveal>
          </Stagger>
          {relatedProducts.length > 0 ? (
            <Reveal className="mt-16">
              <h2 className="mb-6 font-heading text-2xl font-bold text-primary">
                Autres produits de cette catégorie
              </h2>
              <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <Reveal key={relatedProduct.id}>
                    <ProductCard product={relatedProduct} />
                  </Reveal>
                ))}
              </Stagger>
            </Reveal>
          ) : null}
        </div>
      </section>
    </main>
  );
}
