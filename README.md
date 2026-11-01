# EPK Flo

Dépôt partagé pour construire l'EPK HTML de Flo. La page actuelle est une **maquette de travail** : les textes, les liens, les visuels et les coordonnées doivent être validés avec Flo avant publication.

## Ouvrir la page

Ouvrir `index.html` dans un navigateur. Pour un aperçu local avec un serveur :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`. Le site est statique : HTML, CSS et un petit script JavaScript, sans installation ni compte requis. Les contenus restent visibles si JavaScript est désactivé. Aucun hébergement public n'est configuré.

## Fichiers

- `index.html` : structure et textes de la page.
- `styles.css` : mise en page, couleurs, adaptation mobile et animations.
- `motion.js` : apparition des sections au défilement, sans dépendance.
- [`contenu/brief.md`](contenu/brief.md) : informations et médias à réunir avec Flo.
- `AGENTS.md` : consignes communes pour les deux Codex.

## Collaboration à distance

Alexandre et Flo utilisent chacun leur propre compte GitHub et leur propre Codex, reliés à ce dépôt. Chacun part de la dernière version de `main`, travaille sur une branche dédiée et ouvre une pull request. L'autre relit, puis la branche est fusionnée dans `main`. Cette branche représente la version commune validée.

Pour cloner le projet :

```bash
git clone https://github.com/Blackpearl97410/EPK-flo.git
cd EPK-flo
```

Pour commencer une modification locale :

```bash
git switch main
git pull
git switch -c feat/nom-de-la-tache
```

Ne pas déposer de mot de passe, de clé API ou de contenu non autorisé à la publication. Le dépôt GitHub est actuellement public, même si la page n'est pas encore hébergée.

## Motion design

La direction s'inspire du rythme de présentation des composants animés de 21st.dev : révélation du titre, entrées au défilement et micro-interactions. Aucun composant 21st.dev n'est installé : leur catalogue est conçu pour React/TypeScript et Tailwind, tandis que ce projet reste en HTML/CSS/JavaScript natif. Les animations sont décoratives et respectent la préférence système « réduire les animations ».

## Avant publication

Remplacer tous les éléments « à compléter » ou « à valider » par les contenus approuvés. Vérifier les crédits et droits des photos et des médias, les liens, l'affichage mobile et les coordonnées. Retirer la balise `noindex` et la mention « version de travail » lorsque Flo valide la mise en ligne.

## État

- [x] Dépôt partagé initialisé
- [x] Format HTML choisi
- [x] Première structure responsive proposée sur une branche de travail
- [ ] Accès de Flo comme collaboratrice GitHub confirmé
- [ ] Identité, biographie, musique, visuels et contact fournis avec droits d'utilisation
- [ ] Maquette personnalisée et relue par Flo
- [ ] Version finale publiée
