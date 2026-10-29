import {
  Handshake,
  MapPin,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const advantages = [
  {
    title: "Des choix mieux éclairés",
    description:
      "Nous prenons le temps de comprendre vos usages avant de recommander un équipement.",
    icon: SlidersHorizontal,
  },
  {
    title: "Un partenaire de proximité",
    description:
      "Un interlocuteur qui connaît les réalités du marché haïtien et de ses clients.",
    icon: MapPin,
  },
  {
    title: "Un accompagnement clair",
    description:
      "Des explications concrètes pour avancer sans jargon inutile ni promesses vagues.",
    icon: Handshake,
  },
  {
    title: "Une attention à la fiabilité",
    description:
      "Des solutions choisies selon leur adéquation avec vos besoins et votre contexte.",
    icon: ShieldCheck,
  },
];

export function Advantages() {
  return (
    <section
      id="avantages"
      aria-labelledby="advantages-title"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="advantages-title"
            eyebrow="Pourquoi Vyrox"
            title="Un accompagnement qui commence par l’écoute."
            description="Les bons choix technologiques partent de vos objectifs, de vos contraintes et de la façon dont vous travaillez."
          />
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ title, description, icon: Icon }) => (
            <Reveal key={title}>
              <Card className="p-5 sm:p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-control bg-accent/8 text-accent">
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
      </div>
    </section>
  );
}
