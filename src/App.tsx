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
    src: "/images/tableau-tresses-graphiques.webp",
    alt: "Modèle appuyé à une rambarde, coiffure tressée en grandes courbes devant un panneau clair.",
    label: "01 / Lignes capillaires",
  },
  {
    src: "/images/tableau-fleur.webp",
    alt: "Portrait d'un modèle à la coiffure volumineuse, avec une fleur rose et une tenue aux couleurs vives.",
    label: "02 / Corps et couleur",
  },
  {
    src: "/images/tableau-portrait-nb-femme.webp",
    alt: "Portrait noir et blanc d'un modèle à la coiffure afro volumineuse, devant un panneau clair.",
    label: "03 / Portrait en clair-obscur",
  },
  {
    src: "/images/tableau-portrait-nb-homme.webp",
    alt: "Portrait noir et blanc d'un modèle en chemise blanche, avec une coiffure afro sculpturale.",
    label: "04 / Volume et contraste",
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
            src="/videos/braidsplace-cover.mp4"
            poster="/videos/braidsplace-cover-poster.jpg"
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
              <span>A MEETING OF <mark>ARTISTIC WORLDS.</mark></span>
              <span><mark>A LIVING EXPERIENCE WHERE ART COMES TO LIFE.</mark></span>
              <span>ART THAT IS NOT MERELY SEEN, BUT EXPERIENCED.</span>
            </p>
            <a className="video-hero-link" href="#portrait">LEARN MORE</a>
          </div>
        </section>
        <section className="film-photo-section" id="portrait" aria-label="Portrait de la série Living Hair Art">
          <img
            src="/images/portrait-adriiii.webp"
            alt="Portrait d’une personne devant un panneau blanc, avec de longues tresses sculpturales."
            decoding="async"
          />
        </section>
        <MinimalistHairArt />
        <ScrollExpandVideo />
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
                <a className="button button-primary" href="#images">
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
          className="visuals section-pad shell"
          id="images"
          aria-labelledby="visuals-title"
        >
          <Reveal className="section-heading">
            <p className="kicker">01 / UNIVERS VISUEL</p>
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
              <p className="kicker">02 / COLLABORER</p>
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
