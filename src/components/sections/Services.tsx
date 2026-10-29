import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mockServices } from "@/data/mock-services";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-bg-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Accompagnement informatique"
            title="Des services pensés pour votre quotidien."
            description="Du conseil à l’assistance, nous vous aidons à faire avancer vos projets informatiques."
            action={
              <Button href="#contact" variant="secondary" className="w-fit">
                Demander un devis
                <ArrowRight aria-hidden="true" size={17} />
              </Button>
            }
          />
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockServices.map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
