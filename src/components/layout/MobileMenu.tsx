"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Produits", href: "#produits" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#avantages" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const getFocusableElements = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

    requestAnimationFrame(() => getFocusableElements()[0]?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = getFocusableElements();
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="menu-mobile"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 items-center justify-center rounded-control border border-primary/10 text-primary hover:bg-bg-muted"
      >
        {isOpen ? (
          <X aria-hidden="true" size={21} />
        ) : (
          <Menu aria-hidden="true" size={21} />
        )}
      </button>
      {isOpen ? (
        <div
          id="menu-mobile"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation principale"
          className="absolute top-full right-0 left-0 z-50 border-t border-primary/10 bg-white px-4 py-4 shadow-soft sm:px-6"
        >
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-control px-3 py-3 text-base font-semibold text-primary hover:bg-bg-muted"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex min-h-11 items-center justify-center rounded-control bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-primary"
          >
            Demander un devis
          </a>
        </div>
      ) : null}
    </div>
  );
}
