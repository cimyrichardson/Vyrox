# Landing page Vyrox

## Contenu de démonstration

- Les sections et composants de la page d’accueil sont dans `src/components/`.
- Les catégories, produits et services de démonstration sont dans `src/data/mock-categories.ts`, `src/data/mock-products.ts` et `src/data/mock-services.ts`.
- Les prix affichés sont indicatifs. Les produits ont tous une disponibilité à confirmer : aucun n’est présenté comme en stock sans confirmation.
- Les illustrations des produits se trouvent dans `public/products/`. Elles sont des visuels temporaires, pas des photos de produits réels.
- Le logo SVG de démonstration se trouve dans `public/vyrox-logo.svg`.

## Éléments à remplacer

- Confirmer et remplacer `contact@vyrox.ht`, le numéro de téléphone et l’adresse du pied de page dans `src/components/layout/Footer.tsx`.
- Renseigner les comptes sociaux officiels dans `src/components/layout/Footer.tsx`.
- Remplacer les produits, marques, prix indicatifs, catégories et services dans `src/data/`.
- Remplacer les illustrations SVG par les images officielles lorsqu’elles seront disponibles.
- Définir `NEXT_PUBLIC_SITE_URL` avec l’URL canonique réelle du site; `https://vyrox.ht` est une valeur provisoire.
- Définir `NEXT_PUBLIC_WHATSAPP_NUMBER` au format international sans séparateurs pour afficher le bouton WhatsApp.
- Les liens Produits, Services, politique de confidentialité et conditions générales pointent vers des pages à créer.

## Décisions de design

- Palette basée sur le bleu nuit et le bleu électrique de Vyrox, avec des fonds neutres et sans dégradés décoratifs.
- Manrope est utilisée pour les titres et Inter pour le texte courant, via `next/font/google`.
- Tailwind CSS v4 utilise ici ses tokens CSS `@theme` dans `src/styles/globals.css`; aucun `tailwind.config.ts` n’est nécessaire.
- La page d’accueil est un Server Component; seuls l’en-tête (état de défilement) et le menu mobile sont interactifs.
- L’App Router est utilisé pour la landing page. La route API existante sous `src/pages/api/` est conservée.

## Vérification rapide de l’accessibilité

- Parcourir la page au clavier et vérifier le lien « Aller au contenu principal », l’indicateur de focus et l’ordre de tabulation.
- Ouvrir le menu mobile au clavier, vérifier `aria-expanded`, le piège de focus et sa fermeture avec Échap.
- Vérifier les intitulés des liens, la hiérarchie des titres et les textes alternatifs des images.
- Tester les contrastes et la mise en page à 320, 768, 1024 et 1440 px, avec et sans réduction des animations.

## Commandes

- `npm run typecheck`
- `npm run lint`
- `npm run build`
