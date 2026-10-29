import type { Metadata } from "next";
import { FileText, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { mockProducts } from "@/data/mock-products";
import { mockServices } from "@/data/mock-services";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Préparez une demande de devis pour un produit informatique ou un service proposé par Vyrox.",
  alternates: { canonical: "/demander-un-devis" },
};

type QuotePageProps = {
  searchParams: Promise<{
    produit?: string | string[];
    service?: string | string[];
  }>;
};

function getWhatsAppHref(concern: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!number) return undefined;

  const message = concern
    ? `Bonjour Vyrox, j’aimerais demander des informations pour : ${concern}.`
    : "Bonjour Vyrox, j’aimerais demander un devis.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const productId = typeof params.produit === "string" ? params.produit : "";
  const serviceSlug = typeof params.service === "string" ? params.service : "";
  const selectedProduct = mockProducts.find(
    (product) => product.id === productId,
  );
  const selectedService = mockServices.find(
    (service) => service.slug === serviceSlug,
  );
  const initialConcern = selectedProduct?.name ?? selectedService?.title ?? "";
  const whatsappHref = getWhatsAppHref(initialConcern);

  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Demande de devis"
        title="Décrivons votre projet."
        description="Partagez les éléments utiles pour préparer un échange au sujet d’un équipement ou d’un service."
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Reveal>
          <div>
            <InquiryForm kind="quote" initialConcern={initialConcern} />
          </div>
          </Reveal>
          <Reveal className="space-y-4" delay={80}>
          <aside className="space-y-4">
            <div className="rounded-card border border-primary/10 p-5 sm:p-6">
              <FileText aria-hidden="true" className="text-accent" size={24} />
              <h2 className="mt-4 font-heading text-lg font-bold text-primary">
                Préparez votre demande
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Pour faciliter le futur échange, indiquez le produit ou service,
                la quantité souhaitée et les contraintes principales de votre
                projet.
              </p>
            </div>
            <div className="rounded-card bg-bg-muted p-5 sm:p-6">
              <h2 className="font-heading text-lg font-bold text-primary">
                L’envoi n’est pas encore configuré
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Aucun champ de ce formulaire n’est envoyé ou enregistré. Le
                canal de traitement sera activé après configuration du service
                côté serveur.
              </p>
              {whatsappHref ? (
                <Button
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="mt-5"
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  Continuer sur WhatsApp
                </Button>
              ) : null}
            </div>
          </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
