"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Produits", href: "#produits" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#avantages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 8);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-primary/5 bg-white/95 backdrop-blur-sm transition-shadow duration-200 ${
        isScrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#accueil"
          aria-label="Vyrox — accueil"
          className="inline-flex rounded-sm"
        >
          <Logo />
        </a>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-semibold text-text-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:inline-flex"
          >
            Demander un devis
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
