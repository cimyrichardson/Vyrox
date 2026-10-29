import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Produits", href: "#produits" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#avantages" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 md:pt-16 lg:px-8">
        <div className="grid gap-10 border-b border-primary/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_0.8fr] lg:gap-12">
          <div>
            <a href="#accueil" aria-label="Vyrox — retour à l’accueil">
              <Logo compact />
            </a>
            <p className="mt-5 max-w-xs font-heading text-base font-semibold text-primary">
              La technologie au service de votre réussite.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-text-muted">
              Des produits informatiques et un accompagnement technologique
              adaptés à vos projets.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold text-primary">Navigation</h2>
            <ul className="mt-4 space-y-3">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold text-primary">Coordonnées</h2>
            {/* TODO: remplacer ces coordonnées de démonstration par les contacts vérifiés. */}
            <ul className="mt-4 space-y-4 text-sm text-text-muted">
              <li className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={17}
                />
                <a className="hover:text-accent" href="mailto:contact@vyrox.ht">
                  contact@vyrox.ht
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={17}
                />
                <span>+509 XX XX XX XX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                  size={17}
                />
                <span>Port-au-Prince, Haïti — adresse à confirmer</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold text-primary">Réseaux sociaux</h2>
            <p className="mt-4 text-sm leading-6 text-text-muted">
              Comptes officiels à renseigner.
            </p>
            {/* TODO: remplacer ces icônes par les liens des comptes officiels. */}
            <ul
              className="mt-4 flex items-center gap-3 text-text-muted"
              aria-label="Réseaux sociaux à renseigner"
            >
              <li>
                <Camera aria-hidden="true" size={19} />
                <span className="sr-only">Instagram</span>
              </li>
              <li>
                <UsersRound aria-hidden="true" size={19} />
                <span className="sr-only">Facebook</span>
              </li>
              <li>
                <BriefcaseBusiness aria-hidden="true" size={19} />
                <span className="sr-only">LinkedIn</span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-5 text-text-muted">
              Les produits et disponibilités présentés sont indicatifs.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vyrox. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="/politique-de-confidentialite"
              className="hover:text-accent"
            >
              Politique de confidentialité
            </a>
            <a href="/conditions-generales" className="hover:text-accent">
              Conditions générales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
