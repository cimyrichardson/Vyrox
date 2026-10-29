import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { mockServices } from "@/data/mock-services";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Services informatiques",
  description:
    "Découvrez les services informatiques de Vyrox : maintenance, dépannage, réseaux, assistance et conseil en équipement.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Services informatiques"
        title="Un accompagnement adapté à vos usages."
        description="Découvrez les domaines d’accompagnement proposés à titre indicatif. Les modalités et disponibilités de chaque service sont à confirmer avec Vyrox."
      />
      <section aria-label="Liste des services" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockServices.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex flex-col gap-5 rounded-card bg-primary p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-heading text-xl font-bold sm:text-2xl">
                Vous avez un besoin spécifique ?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Décrivez votre contexte afin que Vyrox puisse étudier votre
                demande.
              </p>
            </div>
            <Button href="/demander-un-devis" className="w-fit">
              Demander un devis
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
