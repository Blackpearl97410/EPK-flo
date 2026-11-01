# Consignes pour Codex — EPK Flo

- Ce dépôt est la source commune de l'EPK. **Pile choisie : React + Vite + TypeScript + Tailwind CSS**, avec Motion pour les animations. Ne pas revenir à une page HTML autonome sans décision explicite.
- Avant de travailler, lire `README.md` et `contenu/brief.md`, récupérer la dernière version de `main` et travailler sur une branche par tâche. Proposer les changements par pull request.
- Pour l'interface Living Hair Art, lire `contenu/charte-graphique.md` et les sources de `documents-de-contexte/`. Climate Crisis est le display principal, Manrope sert à la lecture et Instrument Serif aux accents éditoriaux ; la direction reste à valider par Flo.
- Les composants de 21st.dev peuvent être ajoutés un par un en adaptant leur code au site. Garder la provenance et les dépendances documentées ; éviter d'installer une bibliothèque entière pour un effet isolé.
- Conserver une structure sémantique, une mise en page responsive, des liens accessibles et la préférence `prefers-reduced-motion`. Les animations ne doivent pas empêcher l'accès au contenu.
- Ne pas inventer de biographie, de parcours, de chiffres, de citations, de liens ou d'autorisations d'utilisation. Marquer les informations absentes « à valider ».
- Ne pas publier de coordonnées personnelles, de photos ou d'enregistrements sans validation de Flo et vérification des droits.
- Garder les textes et crédits modifiables dans le dépôt. Ne retirer la mention « version de travail » et la balise `noindex` qu'au moment de publier la version validée.
