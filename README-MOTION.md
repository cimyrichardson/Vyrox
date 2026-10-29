# Animations Vyrox

## Stratégie

- Animations sans dépendance : CSS, `IntersectionObserver`, `matchMedia` et Web Animations API.
- `Reveal` garde les éléments visibles au SSR, puis les masque uniquement après hydratation si le mouvement est autorisé. Les éléments apparaissent une fois à l’entrée dans le viewport.
- `Stagger` définit un délai de 60 ms pour chaque enfant, avec huit délais prédéfinis au maximum.
- `AnimatedText` séquence l’entrée du hero à 0, 80, 160, 240 et 320 ms.
- `PageTransition` fait un fade de 200 ms lors d’un changement de chemin, sans modifier la hauteur du contenu.
- Le hover des cartes et les boutons animent uniquement `transform`. Les micro-interactions durent 150 ms.
- Les tokens Tailwind CSS v4 (durées, easing et keyframes) sont définis via `@theme` dans `src/styles/globals.css`.

## Mouvement réduit

`useReducedMotion` suit le réglage système `prefers-reduced-motion`. En mode réduit, révélations et transitions sont statiques, les déplacements sont supprimés et le contenu reste visible.

## Vérification accessibilité

- Dans Chrome DevTools : **Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`**, puis naviguer entre les pages et vérifier que le contenu reste visible.
- Parcourir chaque page avec `Tab` et `Shift+Tab`; le focus reste visible même sur les éléments en attente de révélation.
- Vérifier que les pages, menus et accordéons restent utilisables sans dépendre des animations.
- Tester sur mobile et avec une connexion lente pour confirmer l’absence de décalage de mise en page.

## Réglages

Les durées (`150/250/400 ms`), l’easing et les images-clés partagées sont centralisés dans `src/lib/motion.ts` et `src/styles/globals.css`.
