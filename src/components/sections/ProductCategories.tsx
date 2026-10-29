import { CategoryCard } from "@/components/categories/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mockCategories } from "@/data/mock-categories";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function ProductCategories() {
  return (
    <section
      id="produits"
      aria-labelledby="categories-title"
      className="bg-bg-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="categories-title"
            eyebrow="Explorer le catalogue"
            title="Tout ce qu’il vous faut, au même endroit."
            description="Parcourez les principales familles de produits et trouvez les équipements adaptés à votre activité."
          />
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockCategories.map((category) => (
            <Reveal key={category.slug}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
