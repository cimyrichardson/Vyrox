import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses aux questions courantes sur le catalogue, les disponibilités, les services et les demandes de devis Vyrox.",
  alternates: { canonical: "/faq" },
};

const questions = [
  {
    question: "Les produits affichés sont-ils actuellement en stock ?",
    answer:
      "Non. Les articles présentés sont des exemples de catalogue et leurs disponibilités sont à confirmer. Aucun produit n’est annoncé comme en stock sans confirmation.",
  },
  {
    question: "Les prix indiqués sont-ils définitifs ?",
    answer:
      "Non. Les prix affichés sur les produits de démonstration sont indicatifs. La référence, la devise et le prix final doivent être confirmés avant toute commande.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "La page de demande de devis présente les informations qui seront demandées. L’envoi du formulaire n’est pas encore activé; vous pouvez utiliser le canal WhatsApp s’il est disponible sur le site.",
  },
  {
    question: "Quels services informatiques propose Vyrox ?",
    answer:
      "Le site présente des exemples de domaines de service, comme la maintenance, l’assistance et le conseil en équipement. Les prestations réellement proposées et leurs modalités sont à confirmer directement auprès de Vyrox.",
  },
  {
    question: "Vyrox propose-t-il la livraison ou le paiement en ligne ?",
    answer:
      "Les modalités de livraison, les moyens de paiement et les éventuelles conditions commerciales ne sont pas définis dans cette version du site. Ils devront être confirmés avant le lancement d’une offre commerciale.",
  },
  {
    question: "Les formulaires enregistrent-ils les données saisies ?",
    answer:
      "Non. Les formulaires Contact et Devis sont actuellement désactivés et n’envoient ni n’enregistrent les informations saisies.",
  },
];

export default function FAQPage() {
  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Aide"
        title="Questions fréquentes."
        description="Quelques précisions sur les informations et fonctionnalités de démonstration du site."
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Stagger className="divide-y divide-primary/10 border-y border-primary/10">
            {questions.map(({ question, answer }) => (
              <Reveal key={question}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-sm font-heading text-base font-bold text-primary marker:hidden hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-text-muted">
                  {answer}
                </p>
              </details>
              </Reveal>
            ))}
          </Stagger>
          <p className="mt-8 text-sm leading-6 text-text-muted">
            Vous n’avez pas trouvé votre réponse ?{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-primary"
            >
              Contacter Vyrox
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
