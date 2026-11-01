import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollExpandVideo } from "./ScrollExpandVideo";
import { MinimalistHairArt } from "./MinimalistHairArt";
import { StatisticsRunway } from "./StatisticsRunway";

function Reveal({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    city: "Cape Town",
    note: "Invitation mentionnée dans le dossier de travail du festival · mars 2027",
    status: "Point d’ancrage",
  },
  {
    city: "Johannesburg",
    note: "Présentation et collaborations locales envisagées · avril 2027",
    status: "À confirmer",
  },
  {
    city: "Tanzanie",
    note: "Échange créatif et accueil envisagés · avril 2027",
    status: "À confirmer",
  },
];

const photographs = [
  {
    src: "/images/tableau-rose.webp",
    alt: "Modèle en tenue rose portant une coiffure sculpturale devant un panneau clair, dans un jardin.",
    label: "01 / Formes en mouvement",
  },
  {
    src: "/images/tableau-fleur.webp",
    alt: "Portrait d'un modèle à la coiffure volumineuse, avec une fleur rose et une tenue aux couleurs vives.",
    label: "02 / Corps et couleur",
  },
  {
    src: "/images/tableau-jaune.webp",
    alt: "Modèle en tenue jaune dans un intérieur sombre, devant une photographie de coiffure graphique.",
    label: "03 / Silhouette",
  },
  {
    src: "/images/tableau-tresses.webp",
    alt: "Modèle en blanc avec une longue coiffure tressée, photographié en extérieur.",
    label: "04 / Matière vivante",
  },
];

function App() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <main id="contenu">
        <section
          className="video-hero"
          id="accueil"
          aria-labelledby="hero-title"
        >
          <video
            className="video-hero-media"
            src="/videos/braidsplace-ocean.mp4"
            poster="/videos/braidsplace-ocean-poster.jpg"
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="video-hero-content">
            <p className="video-hero-stamp">THIS IS</p>
            <h1 id="hero-title">BRAIDSPLACE</h1>
            <p className="video-hero-manifesto">
              <span>BEYOND HAIRSTYLING. BEYOND AN EXHIBITION.</span>
              <span>A MEETING OF ARTISTIC WORLDS.</span>
              <span>A LIVING EXPERIENCE WHERE ART COMES TO LIFE.</span>
              <span>ART THAT IS NOT MERELY SEEN, BUT EXPERIENCED.</span>
            </p>
            <a className="video-hero-link" href="#film">LEARN MORE</a>
          </div>
        </section>
        <ScrollExpandVideo />
        <MinimalistHairArt />
        <div className="intro-worknote shell" aria-label="Statut du dossier">
          <span>EPK / VERSION DE TRAVAIL</span>
          <span>BRAIDSPLACE · LA RÉUNION</span>
        </div>
        <section
          className="photo-intro shell"
          id="living-hair-art"
          aria-labelledby="living-hair-art-title"
        >
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">BRAIDSPLACE PRÉSENTE</p>
              <h2 className="photo-intro-title" id="living-hair-art-title">
                <span className="title-line">LIVING</span>
                <span className="title-line">HAIR ART</span>
              </h2>
              <p className="hero-deck">
                La coiffure devient une <em>œuvre vivante.</em>
              </p>
              <p className="hero-description">
                Une performance visuelle de BRAIDSPLACE, où coiffure
                artistique, silhouette, mode et mouvement composent des
                tableaux vivants.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projet">
                  Découvrir le projet <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#contact">
                  Prendre contact <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <figure className="hero-frame">
              <img
                src="/images/hero-sculpture.webp"
                alt="Portrait d'un modèle portant une coiffure sculpturale aux formes organiques, dans la végétation."
                decoding="async"
              />
              <figcaption>01 / LIVING HAIR ART</figcaption>
            </figure>
          </div>
          <div className="hero-bottomline">
            <span>COIFFURE · IMAGE · MOUVEMENT</span>
            <span>DÉFILER POUR EXPLORER ↓</span>
          </div>
        </section>
        <section
          className="manifesto"
          id="projet"
          aria-labelledby="project-title"
        >
          <div className="shell manifesto-grid">
            <Reveal>
              <p className="kicker">01 / L’INTENTION</p>
              <h2 id="project-title">
                Une œuvre
                <br />
                en <span>mouvement.</span>
              </h2>
            </Reveal>
            <Reveal className="manifesto-copy">
              <p className="editorial">
                Une œuvre qui quitte l’image pour prendre vie sur scène.
              </p>
              <p>
                Living Hair Art associe coiffure artistique, mode, image et
                mouvement. Chaque création capillaire se révèle à travers le
                corps et la silhouette d’un modèle, dans une succession de
                tableaux vivants.
              </p>
              <p className="small-note">
                Texte adapté des dossiers de contexte ; formulation finale à
                valider avec Flo.
              </p>
            </Reveal>
          </div>
        </section>
        <section
          className="format section-pad shell"
          id="format"
          aria-labelledby="format-title"
        >
          <Reveal className="section-heading">
            <p className="kicker">02 / LA PERFORMANCE</p>
            <h2 id="format-title">
              La scène
              <br />
              comme toile<span className="dot">.</span>
            </h2>
          </Reveal>
          <div className="format-grid">
            <Reveal className="format-number">
              <strong>
                20<span>min</span>
              </strong>
              <p>Durée approximative de la performance</p>
            </Reveal>
            <Reveal className="format-number">
              <strong>7–10</strong>
              <p>Modèles selon le lieu et les moyens</p>
            </Reveal>
            <Reveal className="format-description">
              <p>
                Un format de scène qui peut être présenté seul ou, selon
                l’espace disponible, accompagné d’une sélection de
                photographies. Le dispositif précis et les besoins techniques
                seront définis avec le lieu d’accueil.
              </p>
              <span>FORMAT DE TRAVAIL / À CONFIRMER</span>
            </Reveal>
          </div>
        </section>
        <section
          className="journey section-pad"
          id="parcours"
          aria-labelledby="journey-title"
        >
          <div className="shell">
            <Reveal className="section-heading">
              <p className="kicker">03 / HORIZON 2027</p>
              <h2 id="journey-title">
                Africa Tour<span className="dot">.</span>
              </h2>
              <p className="section-intro">
                De La Réunion vers des scènes et des rencontres créatives en
                Afrique du Sud et en Tanzanie.
              </p>
            </Reveal>
            <div className="steps">
              {steps.map((step, index) => (
                <Reveal className="step" key={step.city}>
                  <span className="step-index">0{index + 1}</span>
                  <div>
                    <h3>{step.city}</h3>
                    <p>{step.note}</p>
                  </div>
                  <span className="step-status">{step.status}</span>
                </Reveal>
              ))}
            </div>
            <p className="small-note">
              Les étapes, dates et accords de production seront vérifiés avant
              publication de l’EPK.
            </p>
          </div>
        </section>
        <section
          className="visuals section-pad shell"
          id="images"
          aria-labelledby="visuals-title"
        >
          <Reveal className="section-heading">
            <p className="kicker">04 / UNIVERS VISUEL</p>
            <h2 id="visuals-title">
              Des tableaux
              <br />
              <span>vivants.</span>
            </h2>
          </Reveal>
          <Reveal className="visual-note">
            <div className="photo-grid">
              {photographs.map((photo) => (
                <figure className="photo-card" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  <figcaption>{photo.label}</figcaption>
                </figure>
              ))}
            </div>
            <p>
              Sélection de travail issue des photographies fournies pour
              l’EPK. Crédits et autorisations d’image à confirmer avant
              publication.
            </p>
          </Reveal>
        </section>
        <StatisticsRunway />
        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-grid">
            <Reveal>
              <p className="kicker">06 / COLLABORER</p>
              <h2 id="contact-title">
                Créons
                <br />
                <span>ensemble.</span>
              </h2>
            </Reveal>
            <Reveal className="contact-copy">
              <p>
                Pour les lieux, partenaires et collaborations artistiques autour
                de Living Hair Art.
              </p>
              <div className="contact-rule" />
              <span>CONTACT PROFESSIONNEL ET LIENS À VALIDER AVEC FLO</span>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="brand" href="#accueil">
          BRAIDSPLACE
        </a>
        <p>EPK en préparation · Contenus et visuels à valider avec Flo</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  );
}
export default App;
