import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Informations provisoires sur la confidentialité et le traitement des données sur le site Vyrox.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="contenu-principal">
      <PageIntro
        eyebrow="Confidentialité"
        title="Politique de confidentialité."
        description="Informations provisoires sur le traitement des données dans cette version du site."
      />
      <Reveal>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <p className="rounded-control border border-amber-700/20 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          Brouillon à faire valider par Vyrox avant publication. L’identité
          juridique du responsable, les durées de conservation, les
          destinataires et les obligations applicables doivent être confirmés.
        </p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-text-muted">
          <section aria-labelledby="privacy-controller">
            <h2
              id="privacy-controller"
              className="font-heading text-xl font-bold text-primary"
            >
              Responsable du traitement
            </h2>
            <p className="mt-3">
              Responsable à identifier : Vyrox. Les coordonnées de contact
              affichées sur le site sont provisoires et doivent être vérifiées.
            </p>
          </section>
          <section aria-labelledby="privacy-forms">
            <h2
              id="privacy-forms"
              className="font-heading text-xl font-bold text-primary"
            >
              Formulaires
            </h2>
            <p className="mt-3">
              Dans la version actuelle, les formulaires Contact et Devis sont
              désactivés. Les champs saisis ne sont ni transmis ni enregistrés
              par ces formulaires.
            </p>
            <p className="mt-3">
              Si vous choisissez d’ouvrir une conversation WhatsApp, le
              message est transmis au service WhatsApp et soumis aux règles de
              confidentialité de ce service. Évitez d’y inclure des
              informations sensibles.
            </p>
          </section>
          <section aria-labelledby="privacy-technical">
            <h2
              id="privacy-technical"
              className="font-heading text-xl font-bold text-primary"
            >
              Fonctionnement technique
            </h2>
            <p className="mt-3">
              Les polices de caractères sont hébergées avec les fichiers du
              site. Aucun outil d’analyse d’audience ou de publicité n’est
              intégré volontairement dans cette version. L’hébergeur peut
              toutefois traiter des journaux techniques selon sa configuration
              et ses propres conditions.
            </p>
          </section>
          <section aria-labelledby="privacy-rights">
            <h2
              id="privacy-rights"
              className="font-heading text-xl font-bold text-primary"
            >
              Vos droits et contact
            </h2>
            <p className="mt-3">
              Les droits applicables, les modalités d’exercice et le contact
              compétent doivent être déterminés selon l’identité juridique de
              l’entreprise et les marchés desservis.
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
