# EPK Flo

Dépôt partagé pour construire l'EPK web de Flo. **Choix technique validé : React + Vite + TypeScript + Tailwind CSS**, avec Motion pour les animations. Vite produit une page statique déployable ; aucun serveur applicatif n'est nécessaire.

La page actuelle est une **maquette de travail** pour BRAIDSPLACE / Living Hair Art. Le projet est une performance visuelle ; les contenus, visuels et coordonnées doivent être confirmés par Flo avant publication. Le dépôt GitHub est actuellement public.

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
- `src/ScrollExpandVideo.tsx` : section du film noir et blanc et animation au défilement.
- `src/MinimalistHairArt.tsx` : portrait et présentation « L’ARTISTE » après le film.
- `src/StatisticsRunway.tsx` : section de statistiques en trois tableaux, pilotée par le défilement.
- `src/styles.css` : identité visuelle responsive et Tailwind.
- `src/main.tsx` : montage de l'application React.
- [`contenu/brief.md`](contenu/brief.md) : informations et médias à réunir avec Flo.
- [`contenu/charte-graphique.md`](contenu/charte-graphique.md) : direction visuelle déduite des documents de contexte, palette, typographies et règles d'usage.
- `AGENTS.md` : consignes communes pour les deux Codex.
- [`documents-de-contexte/`](documents-de-contexte/README.md) : PDF transmis pour préparer l’EPK Living Hair Art.
- [`medias/photos/`](medias/photos/README.md) : photos sources proposées pour l’EPK.
- [`medias/compositions/`](medias/compositions/README.md) : PNG transmis pour la composition après le film.
- [`medias/videos-source/`](medias/videos-source/README.md) : vidéos 4K sources conservées localement.
- `public/videos/` : deux exports vidéo 720p et leurs images d’attente.
- `public/images/` : versions web légères des photographies sélectionnées pour la maquette.
- [`contenu/selection-photos.md`](contenu/selection-photos.md) : correspondance entre versions web et originaux.

## Introduction vidéo

La première vue reprend la composition et les phrases du [modèle Canva transmis par Flo](https://canva.link/jttf7nfxgobcc2n). Le titre utilise **Climate Crisis**, la même police que le modèle, déjà chargée localement. Les petits textes du modèle sont en **Neue Montreal** ; la maquette utilise temporairement **Manrope** avec les mêmes tailles, capitales et espacements. Une licence web Neue Montreal et les fichiers correspondants sont nécessaires pour une reproduction typographique exacte de ces petits textes.

La vidéo source de 91 Mo reste locale et ignorée par Git ; seul son export H.264 de 6,4 Mo est suivi dans le dépôt. La vidéo se lance muette en boucle ; l’image d’attente reste visible si la lecture automatique est bloquée ou si la réduction du mouvement est activée. La deuxième vidéo, en noir et blanc, apparaît juste après l’ouverture : son cadre s’agrandit au défilement, puis l’EPK reprend. Elle possède des commandes de lecture et reste fixe quand la réduction du mouvement est activée. Les sources 4K, les droits, les personnes filmées et les crédits restent à confirmer avant une publication publique.

## Motion design et 21st.dev

La section du film reprend le principe visuel de [Scroll media expansion hero de @arunachalam](https://21st.dev/@arunachalam/components/scroll-expansion-hero), publié sous licence MIT : une vidéo initialement étroite s'agrandit au défilement pendant que son titre s'efface. La section suivante adapte la composition et l’apparition du [Minimalist Hero de @ravikatiyar162](https://21st.dev/@ravikatiyar162/components/minimalist-hero) avec le portrait fourni par Flo et une présentation « L’ARTISTE » à droite de l’image. Ces adaptations sont locales, en React et Motion, sans nouvelle dépendance. Les animations respectent la préférence système de réduction du mouvement.

La section « Statistics » utilise trois maquettes fournies dans l'ordre rose → blanc → jaune, superposées sur un plateau fixe. Le défilement contrôle leur fondu ; sur mobile, un rappel textuel des chiffres accompagne l'image. En mode de réduction du mouvement, les trois tableaux sont présentés à la suite. Ces maquettes comportent encore du texte incorporé dans les images : pour la version finale, les chiffres devront être confirmés avec Flo et composés en HTML afin de rester entièrement modifiables et accessibles.

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
