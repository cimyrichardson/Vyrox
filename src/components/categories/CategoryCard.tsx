import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Category } from "@/types/catalog";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Card className="h-full hover:border-accent/35">
      <Link
        href={`/produits?categorie=${category.slug}`}
        className="group flex h-full flex-col p-5 focus-visible:rounded-card sm:p-6"
      >
        <span className="mb-6 inline-flex size-11 items-center justify-center rounded-control bg-bg-muted text-accent group-hover:bg-accent group-hover:text-white">
          <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
        </span>
        <h3 className="font-heading text-lg font-bold text-primary">
          {category.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-text-muted">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          Voir la catégorie
          <ArrowUpRight
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={16}
          />
        </span>
      </Link>
    </Card>
  );
}
