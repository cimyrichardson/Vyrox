import type { Metadata } from "next";
import {
  Compass,
  Handshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "À propos de Vyrox",
  description:
    "Découvrez l’approche de Vyrox, partenaire technologique pour les particuliers et les organisations en Haïti et à l’international.",
  alternates: { canonical: "/a-propos" },
};

const principles = [
  {
    title: "Écouter avant de recommander",
    description:
      "Comprendre le contexte, les usages et les contraintes avant d’envisager une solution.",
    icon: Handshake,
  },
  {
    title: "Rester concret",
    description:
      "Présenter clairement les options et les points à vérifier, sans promesse qui ne peut être confirmée.",
    icon: Lightbulb,
  },
  {
    title: "Tenir compte du contexte",
    description:
      "Prendre en considération les réalités des clients en Haïti et leurs besoins professionnels ou personnels.",
    icon: MapPin,
  },
  {
    title: "Chercher des solutions adaptées",
    description:
      "Orienter les choix vers des équipements et services cohérents avec les objectifs du projet.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="À propos"
        title="La technologie, pensée autour de vos projets."
        description="Vyrox se positionne comme un partenaire technologique en Haïti et à l’international, autour des équipements informatiques et des services numériques."
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                Notre démarche
              </p>
              <h2 className="mt-3 font-heading text-2xl leading-tight font-bold text-primary sm:text-3xl">
                Des choix technologiques éclairés commencent par le dialogue.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-text-muted">
              <p>
                Vyrox accompagne les particuliers et les organisations qui
                recherchent des équipements informatiques ou un appui
                technologique. Chaque demande mérite d’être comprise dans son
                contexte avant de proposer une piste.
              </p>
              <p>
                Notre objectif est de rendre les échanges autour de la
                technologie plus clairs : expliquer les options, préciser ce
                qui reste à confirmer et aider chacun à avancer selon ses
                priorités.
              </p>
              <p className="rounded-control border border-amber-700/20 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                L’histoire, la mission officielle, les valeurs et les
                engagements institutionnels de Vyrox restent à valider par
                l’entreprise avant publication définitive.
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, description, icon: Icon }) => (
              <Reveal key={title}>
                <Card className="p-5 sm:p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-control bg-bg-muted text-accent">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </Stagger>
          <Reveal className="mt-12 rounded-card bg-primary p-6 text-white sm:p-8">
            <Compass aria-hidden="true" className="text-white/75" size={26} />
            <h2 className="mt-4 font-heading text-xl font-bold sm:text-2xl">
              Une technologie au service de votre réussite.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              C’est le fil conducteur de Vyrox : faire de la technologie un
              moyen de soutenir des objectifs réels, plutôt qu’une fin en soi.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
