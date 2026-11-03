# Hébergement de l’EPK sur www.braidsplace.com

## État préparé

Le site React/Vite est prévu pour être publié sur GitHub Pages depuis `main` avec un workflow Actions **manuel** (`.github/workflows/deploy-pages.yml`). La base Vite est `/`, adaptée au domaine personnalisé. Le workflow installe les dépendances avec `npm ci`, compile avec `npm run build`, puis publie `dist/`. Aucun push ne déclenche une publication.

Le 3 novembre 2026, Flo a validé la version actuelle de l’EPK et confirmé les droits de publication des médias et des personnes représentées. La balise `noindex` et la mention de travail ont été retirées de la branche de publication. Le dernier état connu de `www.braidsplace.com` pointait vers `103.169.142.0` et redirigeait vers `braidsplace.com`, qui répondait 404. La configuration DNS doit être vérifiée dans IONOS avant modification. Le domaine racine n’est pas inclus dans cette préparation.

## Mise en ligne, après validation par Flo

1. Faire relire la version finale de l’EPK par Flo. Confirmer les droits et crédits des photos, vidéos, musiques et personnes représentées, ainsi que les chiffres, dates et coordonnées. Retirer la mention de travail et la balise `noindex` uniquement après cette validation.
2. Dans le dépôt GitHub `Blackpearl97410/EPK-flo`, ouvrir **Settings → Pages**. Choisir **GitHub Actions** comme source et enregistrer **www.braidsplace.com** comme domaine personnalisé **avant** toute modification DNS. Un fichier `CNAME` n’est pas nécessaire avec un workflow Actions.
3. Dans la zone DNS du domaine, remplacer l’enregistrement `A` actuel de `www` et sa redirection vers le domaine racine par un enregistrement `CNAME` : `www` → `blackpearl97410.github.io`. Ne pas ajouter `/EPK-flo` à la cible. Ne pas toucher au domaine racine sans décision séparée.
4. Dans **Actions → Deploy EPK to GitHub Pages**, lancer **Run workflow** sur `main`. Vérifier que le build et le déploiement réussissent.
5. Une fois le DNS propagé, vérifier `dig www.braidsplace.com CNAME +short`, `https://www.braidsplace.com/` sur ordinateur et mobile, toutes les images et vidéos, puis activer **Enforce HTTPS** dans Settings → Pages quand le certificat est prêt. Les changements DNS peuvent prendre jusqu’à 24 heures.

Le compte ayant la gestion de la zone DNS et l’accès administrateur à **Settings → Pages** doit réaliser les étapes 2 et 3. Aucun identifiant ni secret n’est requis dans le dépôt.

Références : [déploiement Vite](https://vite.dev/guide/static-deploy.html#github-pages) et [domaine personnalisé GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
