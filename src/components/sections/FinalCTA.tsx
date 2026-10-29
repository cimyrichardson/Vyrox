import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
    /\D/g,
    "",
  );
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour Vyrox, j’aimerais discuter d’un projet informatique.")}`
    : undefined;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-primary py-16 text-white md:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold tracking-[0.16em] text-white/65 uppercase">
            Passons à l’étape suivante
          </p>
          <h2
            id="contact-title"
            className="font-heading text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            Un projet informatique ? Parlons-en.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-white/75">
            Décrivez-nous votre besoin. Nous vous aiderons à identifier les
            prochaines étapes.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="mailto:contact@vyrox.ht?subject=Demande%20de%20devis"
            size="lg"
          >
            Demander un devis
            <ArrowRight aria-hidden="true" size={18} />
          </Button>
          <Button href="mailto:contact@vyrox.ht" size="lg" variant="outline">
            Nous contacter
          </Button>
          {whatsappHref ? (
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              aria-label="Discuter sur WhatsApp (nouvel onglet)"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Discuter sur WhatsApp
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
