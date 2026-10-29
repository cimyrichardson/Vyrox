import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mockProducts } from "@/data/mock-products";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function PopularProducts() {
  return (
    <section
      id="produits-populaires"
      aria-labelledby="popular-products-title"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="popular-products-title"
            eyebrow="Une sélection pour commencer"
            title="Produits populaires"
            description="Quelques exemples d’équipements que nous pouvons vous aider à choisir. Les références, prix et disponibilités sont à confirmer."
            action={
              <Button
                href="/produits"
                variant="ghost"
                className="w-fit px-0 text-accent"
              >
                Voir tout le catalogue
                <ArrowRight aria-hidden="true" size={17} />
              </Button>
            }
          />
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
