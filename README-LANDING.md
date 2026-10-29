# Landing page Vyrox

## Contenu de démonstration

- Les sections et composants de la page d’accueil sont dans `src/components/`.
- Les catégories, produits et services de démonstration sont dans `src/data/mock-categories.ts`, `src/data/mock-products.ts` et `src/data/mock-services.ts`.
- Les prix affichés sont indicatifs. Les produits ont tous une disponibilité à confirmer : aucun n’est présenté comme en stock sans confirmation.
- Les illustrations des produits se trouvent dans `public/products/`. Elles sont des visuels temporaires, pas des photos de produits réels.
- Le logo SVG de démonstration se trouve dans `public/vyrox-logo.svg`.
- Inter et Manrope sont auto-hébergées dans `src/app/fonts/` avec leurs licences OFL; elles ne nécessitent pas de connexion à Google Fonts au démarrage ou au build.

## Éléments à remplacer

- Confirmer et remplacer `contact@vyrox.ht`, le numéro de téléphone et l’adresse du pied de page dans `src/components/layout/Footer.tsx`.
- Renseigner les comptes sociaux officiels dans `src/components/layout/Footer.tsx`.
- Remplacer les produits, marques, prix indicatifs, catégories et services dans `src/data/`.
- Remplacer les illustrations SVG par les images officielles lorsqu’elles seront disponibles.
- Définir `NEXT_PUBLIC_SITE_URL` avec l’URL canonique réelle du site; `https://vyrox.ht` est une valeur provisoire.
- Définir `NEXT_PUBLIC_WHATSAPP_NUMBER` au format international sans séparateurs pour afficher le bouton WhatsApp.
- Les pages Contact et Demande de devis contiennent des formulaires d’interface désactivés. Leur transmission côté serveur reste à configurer; ne pas collecter de demandes avant cette étape.
- Les pages À propos, confidentialité et conditions générales contiennent des textes provisoires à valider par Vyrox, notamment les informations institutionnelles et juridiques.

## Pages disponibles

- `/` : accueil.
- `/produits` et `/produits/[slug]` : catalogue filtrable/recherchable et fiches produits.
- `/services` et `/services/[slug]` : services et détails des prestations.
- `/a-propos`, `/contact`, `/demander-un-devis`, `/faq`.
- `/politique-de-confidentialite` et `/conditions-generales`.
- Les formulaires Contact et Devis sont volontairement désactivés jusqu’à l’intégration d’un traitement serveur.
- `/robots.txt` et `/sitemap.xml` pour les moteurs de recherche.

## Décisions de design

- Palette basée sur le bleu nuit et le bleu électrique de Vyrox, avec des fonds neutres et sans dégradés décoratifs.
- Manrope est utilisée pour les titres et Inter pour le texte courant, via `next/font/local` et des fichiers WOFF2 variables auto-hébergés.
- Les contenus de toutes les pages ont une animation d’entrée légère avec un décalage progressif, les cartes et boutons ont un retour visuel au survol, et `prefers-reduced-motion` désactive ces effets.
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
