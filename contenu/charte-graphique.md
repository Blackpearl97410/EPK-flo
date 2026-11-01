# Charte graphique de travail — BRAIDSPLACE / Living Hair Art

Cette direction est **déduite des documents de contexte**, pas une identité officielle approuvée. Flo valide le nom, le signe, les contenus et les visuels avant publication. Elle s'applique à la maquette React de l'EPK.

## Ce que montrent les sources

- Les dossiers sponsors, Johannesburg et Tanzanie associent une page **ivoire**, des textes **brun profond**, des filets **ocre**, des aplats **terre cuite** et des portraits verticaux. Leur mise en page est éditoriale : marges généreuses, repères numérotés, texte court à côté d'une image forte.
- Le document Cape Town pousse davantage l'affiche : titre condensé, composition asymétrique, photographies en série et mots superposés. Il utilise notamment TAN St Canard, Cochin, Antonio et Poppins. Ce ne sont pas des polices imposées pour le site.
- Les treize photographies sources montrent des coiffures sculpturales, des silhouettes et des fonds naturels ou intérieurs. Le rose vif et le vert acide y apparaissent **dans les œuvres et les vêtements** : ils restent des accents photographiques, sans devenir les couleurs principales de l'interface.
- Le propos commun est **la coiffure comme œuvre vivante, portée par le corps et le mouvement**. L'EPK présente une performance visuelle.

Sources : les quatre PDF de [documents-de-contexte](../documents-de-contexte/README.md) et les photographies de [medias/photos](../medias/photos/README.md). Les PDF sont des éditions de travail. Une affirmation sur les dates, le festival, les chiffres ou les partenariats doit être vérifiée auprès de Flo avant publication.

## Intention

**Une galerie vivante** : l'élégance d'un dossier d'art contemporain et l'énergie d'une affiche de performance. Les pages respirent ; les titres ont une présence sculpturale ; les portraits ont la priorité sur les effets décoratifs. Le mouvement évoque l'apparition d'un tableau sans gêner la lecture.

## Palette web

Ces valeurs sont une interprétation pour écran, proche des teintes observées dans les PDF, **pas des mesures couleur officielles**.

| Rôle | Nom | Valeur | Usage |
| --- | --- | --- | --- |
| Fond principal | Ivoire | #F7F2EB | Pages, espaces de respiration |
| Texte principal et fond sombre | Brun encre | #3A291F | Titres, texte, boutons, sections contrastées |
| Accent terre | Terre cuite | #6E4536 | Cadres de photos, détails secondaires |
| Accent lumineux | Ocre | #B88E53 | Filets, points, petites touches sur fond sombre |
| Fond secondaire | Sable | #E9DDCF | Parcours, cartouches |
| Blanc de soutien | Crème | #FFFDF8 | Surfaces claires et contrastes locaux |

Employer le brun pour les textes sur ivoire. L'ocre sert aux signes et aux filets ; sur fond ivoire, il est trop discret pour un petit texte. Éviter les aplats rose/vert qui concurrenceraient les créations photographiées.

## Typographie

| Rôle | Police | Règle |
| --- | --- | --- |
| Signature et grands titres | **Climate Crisis** | Display principal dans sa forme dense d'origine : axe YEAR fixé à 1979. Les lettres gardent un espacement positif pour préserver la lecture. Titres courts, souvent sur deux lignes ; jamais pour les paragraphes ou les petits menus. |
| Lecture et interface | **Manrope** | Texte courant, navigation, boutons, légendes ; corps 16–18 px, interligne voisin de 1,6. Poids 400 et 700/800 selon la hiérarchie. |
| Éditorial | **Instrument Serif** | Phrase manifeste, sous-titre ou grand chiffre. Rompt la géométrie du display et rappelle la sensibilité du dossier Cape Town. Usage parcimonieux. |

Climate Crisis est une police expressive conçue autour d'un axe temporel lié à la glace arctique. Ici, on utilise **sa silhouette statique** pour sa force plastique ; ne pas animer l'axe YEAR comme une donnée propre à BRAIDSPLACE. Les trois familles sont chargées localement depuis les dépendances du projet, sous licence OFL. Les glyphes français et leurs accents doivent rester lisibles à toutes les tailles.

Échelle indicative : H1 30–100 px selon l'écran, H2 30–64 px, phrase éditoriale 29–65 px, corps 16–18 px, repères 11–12 px. Prévoir un espacement positif autour des lettres de Climate Crisis et vérifier chaque titre sur téléphone : ses formes se touchent vite.

## Composition et images

- Alterner sections ivoire, sable et brun ; grille à deux colonnes sur grand écran, une colonne sur mobile.
- Employer de grands portraits verticaux et des recadrages qui laissent entières les coiffures et les silhouettes. Préserver le cadrage du photographe autant que possible.
- Utiliser de fins filets, des numéros de section et des marges généreuses. Les motifs de tresses ou de courbes restent abstraits et discrets.
- Garder les textes réels en HTML, jamais incorporés dans une photo. Ajouter crédits et textes alternatifs spécifiques quand les photos seront retenues.
- La maquette utilise six **versions web optimisées** des photos sources, ainsi que deux compositions fournies pour la séquence après le film. Les crédits, les personnes représentées et les autorisations restent à confirmer avec Flo avant publication.

## Mouvement et accessibilité

Révéler les blocs au défilement par une courte translation et un fondu. Une entrée suffit ; éviter les boucles permanentes. Respecter la préférence de réduction du mouvement. Contraster les petits textes avec le brun ou l'ivoire, garder les liens visibles au clavier et tester les retours à la ligne de Climate Crisis sur mobile.

## Points à valider avec Flo

1. BRAIDSPLACE et Living Hair Art comme graphies publiques, et l'éventuelle existence d'un logo officiel. La maquette n'ajoute pas de signe décoratif au nom.
2. Palette et trio typographique dans la maquette, après visualisation sur téléphone.
3. Sélection des portraits, crédits, autorisations d'image et versions adaptées au web.
4. Formulations sur la tournée, le festival, les formats et les collaborations ; contact professionnel à afficher.

La maquette reste non indexée et porte la mention « version de travail » jusqu'à ces validations.
