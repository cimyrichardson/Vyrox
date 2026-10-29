"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/produits" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
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
      className={`site-header sticky top-0 z-40 isolate border-b border-primary/5 bg-white/95 backdrop-blur-sm ${
        isScrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="relative z-10 mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="Vyrox — accueil"
          className="inline-flex rounded-sm"
        >
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-underline text-sm font-semibold text-text-muted hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/demander-un-devis"
            className="ui-button hidden min-h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-semibold text-white hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:inline-flex"
          >
            Demander un devis
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
