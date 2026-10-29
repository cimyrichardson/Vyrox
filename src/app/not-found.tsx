import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <main id="contenu-principal">
      <Reveal className="mx-auto flex min-h-[55vh] max-w-7xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-bold tracking-[0.16em] text-accent uppercase">
        Erreur 404
      </p>
      <h1 className="mt-3 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
        Cette page est introuvable.
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-text-muted">
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-control bg-accent px-5 text-sm font-semibold text-white hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft aria-hidden="true" size={17} />
        Retour à l’accueil
      </Link>
      </Reveal>
    </main>
  );
}
