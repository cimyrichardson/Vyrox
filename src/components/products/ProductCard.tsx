import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Product, ProductAvailability } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
};

const availability: Record<
  ProductAvailability,
  { label: string; variant: "success" | "warning" | "neutral" }
> = {
  "in-stock": { label: "En stock", variant: "success" },
  "on-order": { label: "Sur commande", variant: "warning" },
  unavailable: { label: "Indisponible", variant: "neutral" },
  unconfirmed: { label: "Disponibilité à confirmer", variant: "neutral" },
};

export function ProductCard({ product }: ProductCardProps) {
  const status = availability[product.availability];
  const price = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-muted">
        <Image
          src={product.image}
          alt={`Illustration de démonstration : ${product.name}`}
          width={640}
          height={480}
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain p-6"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">
              {product.brand}
            </p>
            <h3 className="mt-2 font-heading text-lg leading-snug font-bold text-primary">
              <Link
                href={`/produits/${product.id}`}
                className="rounded-sm hover:text-accent"
              >
                {product.name}
              </Link>
            </h3>
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
        <div className="mt-5">
          <p className="font-heading text-xl font-extrabold text-primary">
            {price}
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Prix indicatif, à confirmer
          </p>
        </div>
        <Button
          href={`/demander-un-devis?produit=${encodeURIComponent(product.id)}`}
          variant="secondary"
          size="sm"
          className="mt-5 w-full"
        >
          Demander un devis
        </Button>
      </div>
    </Card>
  );
}
