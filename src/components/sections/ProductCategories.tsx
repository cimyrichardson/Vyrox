import { CategoryCard } from "@/components/categories/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mockCategories } from "@/data/mock-categories";

export function ProductCategories() {
  return (
    <section
      id="produits"
      aria-labelledby="categories-title"
      className="bg-bg-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="categories-title"
          eyebrow="Explorer le catalogue"
          title="Tout ce qu’il vous faut, au même endroit."
          description="Parcourez les principales familles de produits et trouvez les équipements adaptés à votre activité."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockCategories.map((category) => (
            <CategoryCard category={category} key={category.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
