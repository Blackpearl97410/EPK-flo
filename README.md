# EPK Flo

Dépôt partagé pour construire l'EPK web de Flo. **Choix technique validé : React + Vite + TypeScript + Tailwind CSS**, avec Motion pour les animations. Vite produit une page statique déployable ; aucun serveur applicatif n'est nécessaire.

La page actuelle est une **maquette de travail** pour BRAIDSPLACE / Living Hair Art. Le projet est une performance visuelle de Florence Prévot ; les contenus, visuels et coordonnées doivent être confirmés par Flo avant publication. Le dépôt GitHub est actuellement public.

## Démarrer

Node.js 20.19+ ou 22.12+ est requis par Vite. Dans le dossier du dépôt :

```bash
npm ci
npm run dev
```

Ouvrir l'adresse locale affichée par Vite. Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

Le dossier `dist/` est généré par le build et ne doit pas être ajouté à Git.

## Organisation

- `index.html` : point d'entrée HTML et métadonnées.
- `src/App.tsx` : sections et textes de l'EPK.
- `src/styles.css` : identité visuelle responsive et Tailwind.
- `src/main.tsx` : montage de l'application React.
- [`contenu/brief.md`](contenu/brief.md) : informations et médias à réunir avec Flo.
- [`contenu/charte-graphique.md`](contenu/charte-graphique.md) : direction visuelle déduite des documents de contexte, palette, typographies et règles d'usage.
- `AGENTS.md` : consignes communes pour les deux Codex.
- [`documents-de-contexte/`](documents-de-contexte/README.md) : PDF transmis pour préparer l’EPK Living Hair Art.
- [`medias/photos/`](medias/photos/README.md) : photos sources proposées pour l’EPK.

## Motion design et 21st.dev

L'objectif est de pouvoir intégrer des composants de 21st.dev, conçus pour React/TypeScript et Tailwind, en sélectionnant ceux qui servent l'EPK. La maquette utilise Motion pour l'entrée du titre et des blocs au défilement. **Aucun composant tiers de 21st.dev n'a encore été installé.** Les animations respectent la préférence système de réduction du mouvement.

## Collaboration à distance

Alexandre et Flo utilisent chacun leur compte GitHub et leur Codex sur ce même dépôt. Chacun part de la dernière version de `main`, travaille sur une branche dédiée et ouvre une pull request. L'autre relit avant fusion ; `main` représente la version commune validée.

```bash
git clone https://github.com/Blackpearl97410/EPK-flo.git
cd EPK-flo
git switch main
git pull
git switch -c feat/nom-de-la-tache
```

La maquette React/Vite est sur `main`. Chaque nouvelle modification part d'une branche dédiée.

Flo valide les contenus et la direction artistique. La personne chargée des mises à jour techniques après publication et l'hébergement restent à définir.

## Avant publication

Remplacer les éléments « à compléter » par des contenus approuvés. Vérifier droits et crédits des médias, liens, contact, mobile et accessibilité. Retirer la balise `noindex` et la mention « version de travail » quand Flo valide la mise en ligne. Ne jamais committer de mot de passe, de clé API ou de média non autorisé à la publication.

## État

- [x] Dépôt partagé initialisé
- [x] Pile React + Vite + TypeScript + Tailwind CSS choisie
- [x] Maquette responsive migrée sur cette pile et fusionnée dans `main`
- [ ] Accès de Flo comme collaboratrice GitHub confirmé
- [ ] Identité, textes, visuels, dates et contact validés avec droits d'utilisation
- [ ] Composants 21st.dev choisis et adaptés si utiles
- [ ] Version personnalisée relue par Flo
- [ ] Hébergement et maintenance décidés, puis publication
