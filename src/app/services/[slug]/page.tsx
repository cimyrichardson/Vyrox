import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { mockServices } from "@/data/mock-services";
import { Reveal } from "@/components/motion/Reveal";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mockServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = mockServices.find((item) => item.slug === slug);
  if (!service) return { title: "Service introuvable" };

  return {
    title: service.title,
    description: `${service.description} Contactez Vyrox pour confirmer les modalités.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = mockServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Service Vyrox"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <Reveal>
          <div>
            <Link
              href="/services"
              className="mb-7 inline-flex text-sm font-semibold text-accent hover:text-primary"
            >
              ← Tous les services
            </Link>
            <div className="flex size-14 items-center justify-center rounded-card bg-accent/8 text-accent">
              <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-primary">
              À propos de cet accompagnement
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-text-muted">
              Cette présentation décrit un domaine de service envisagé pour
              Vyrox. Le périmètre, la disponibilité, les délais et les
              conditions de réalisation doivent être discutés et confirmés
              selon votre situation.
            </p>
            <Button
              href={`/demander-un-devis?service=${encodeURIComponent(service.slug)}`}
              className="mt-7"
            >
              Demander un devis
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </div>
          </Reveal>
          <Reveal delay={80}>
          <Card className="h-fit bg-bg-muted p-5 sm:p-7">
            <h2 className="font-heading text-lg font-bold text-primary">
              Pour préparer l’échange
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-text-muted">
              {[
                "Décrivez votre équipement ou votre environnement.",
                "Précisez le résultat que vous souhaitez obtenir.",
                "Indiquez les contraintes de lieu ou de calendrier.",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-accent"
                    size={17}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-primary/10 pt-4 text-xs leading-5 text-text-muted">
              Les informations de cette page sont indicatives et ne constituent
              pas une confirmation de disponibilité.
            </p>
          </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
