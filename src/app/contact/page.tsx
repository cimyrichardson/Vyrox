import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contacter Vyrox",
  description:
    "Contactez Vyrox pour une question sur les produits informatiques ou les services technologiques proposés.",
  alternates: { canonical: "/contact" },
};

function getWhatsAppHref() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!number) return undefined;

  return `https://wa.me/${number}?text=${encodeURIComponent("Bonjour Vyrox, j’aimerais vous contacter.")}`;
}

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref();

  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Contact"
        title="Parlons de votre besoin."
        description="Une question sur un produit ou un service ? Choisissez un canal de contact ou préparez votre message dans le formulaire."
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
          <aside aria-labelledby="contact-details-title">
            <h2
              id="contact-details-title"
              className="font-heading text-2xl font-bold text-primary"
            >
              Coordonnées
            </h2>
            <p className="mt-3 leading-7 text-text-muted">
              Les informations ci-dessous sont provisoires et doivent être
              confirmées avant la mise en ligne définitive.
            </p>
            <ul className="mt-7 space-y-5">
              <li className="flex gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={19}
                />
                <div>
                  <p className="text-sm font-semibold text-primary">E-mail</p>
                  <a
                    className="mt-1 inline-block text-sm text-text-muted hover:text-accent"
                    href="mailto:contact@vyrox.ht"
                  >
                    contact@vyrox.ht
                  </a>
                  <p className="mt-1 text-xs text-text-muted">
                    Adresse de démonstration à vérifier.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={19}
                />
                <div>
                  <p className="text-sm font-semibold text-primary">Téléphone</p>
                  <p className="mt-1 text-sm text-text-muted">
                    +509 XX XX XX XX — à confirmer
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={19}
                />
                <div>
                  <p className="text-sm font-semibold text-primary">Adresse</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Port-au-Prince, Haïti — à confirmer
                  </p>
                </div>
              </li>
            </ul>
            {whatsappHref ? (
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="mt-8"
                aria-label="Contacter Vyrox sur WhatsApp (nouvel onglet)"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Discuter sur WhatsApp
              </Button>
            ) : null}
          </aside>
          </Reveal>
          <Reveal delay={80}>
          <div>
            <h2 className="mb-5 font-heading text-2xl font-bold text-primary">
              Envoyer un message
            </h2>
            <InquiryForm kind="contact" />
          </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
