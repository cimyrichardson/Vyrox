import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation",
  description:
    "Conditions générales provisoires d’utilisation du site de démonstration Vyrox.",
  alternates: { canonical: "/conditions-generales" },
};

export default function TermsPage() {
  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Informations légales"
        title="Conditions générales d’utilisation."
        description="Règles provisoires d’accès au site, en attente de validation par Vyrox."
      />
      <Reveal>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <p className="rounded-control border border-amber-700/20 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          Brouillon à faire vérifier avant publication. L’identité juridique,
          les coordonnées de l’éditeur et les règles applicables doivent être
          confirmées par Vyrox.
        </p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-text-muted">
          <section aria-labelledby="terms-purpose">
            <h2
              id="terms-purpose"
              className="font-heading text-xl font-bold text-primary"
            >
              Objet du site
            </h2>
            <p className="mt-3">
              Le site présente Vyrox, des exemples de catégories de produits
              informatiques et des domaines de services à titre informatif.
              Cette version ne propose ni panier, ni paiement, ni commande en
              ligne.
            </p>
          </section>
          <section aria-labelledby="terms-demo">
            <h2
              id="terms-demo"
              className="font-heading text-xl font-bold text-primary"
            >
              Informations de démonstration
            </h2>
            <p className="mt-3">
              Les noms de produits, marques, visuels, prix et exemples de
              services présentés peuvent être fictifs ou indicatifs. Ils ne
              confirment ni une disponibilité, ni une offre commerciale, ni
              une caractéristique, ni une garantie. Les disponibilités doivent
              être confirmées auprès de Vyrox.
            </p>
          </section>
          <section aria-labelledby="terms-forms">
            <h2
              id="terms-forms"
              className="font-heading text-xl font-bold text-primary"
            >
              Demandes et contact
            </h2>
            <p className="mt-3">
              Les formulaires de contact et de devis sont actuellement
              désactivés et ne transmettent pas les informations saisies.
              L’ouverture d’un lien vers un service tiers, comme WhatsApp,
              relève des conditions de ce service.
            </p>
          </section>
          <section aria-labelledby="terms-availability">
            <h2
              id="terms-availability"
              className="font-heading text-xl font-bold text-primary"
            >
              Évolution des conditions
            </h2>
            <p className="mt-3">
              Ces conditions devront être adaptées avant la mise en service
              des ventes, paiements, livraisons, comptes ou autres
              fonctionnalités commerciales.
            </p>
          </section>
          <p className="border-t border-primary/10 pt-5 text-xs">
            Version de travail — dernière révision : 29 octobre 2026.
          </p>
        </div>
      </article>
      </Reveal>
    </main>
  );
}
