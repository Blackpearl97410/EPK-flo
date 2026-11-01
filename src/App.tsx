import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

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

function App() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className="site-header shell">
        <a
          className="brand"
          href="#accueil"
          aria-label="Braidsplace, retour en haut"
        >
          BRAIDSPLACE
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#projet">Le projet</a>
          <a href="#format">Le format</a>
          <a href="#parcours">Parcours</a>
          <a href="#images">Images</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="contenu">
        <section
          className="hero shell"
          id="accueil"
          aria-labelledby="hero-title"
        >
          <div className="hero-topline">
            <span>EPK / VERSION DE TRAVAIL</span>
            <span>FLORENCE PRÉVOT · LA RÉUNION</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">BRAIDSPLACE PRÉSENTE</p>
              <h1 id="hero-title">
                <motion.span
                  className="title-line"
                  initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  LIVING
                </motion.span>
                <motion.span
                  className="title-line"
                  initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12 }}
                >
                  HAIR ART
                  <span className="title-star" aria-hidden="true">
                    ✳
                  </span>
                </motion.span>
              </h1>
              <p className="hero-deck">
                La coiffure devient une <em>œuvre vivante.</em>
              </p>
              <p className="hero-description">
                Une performance visuelle imaginée par Florence Prévot, où
                coiffure artistique, silhouette, mode et mouvement composent des
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
            <div
              className="hero-frame"
              role="img"
              aria-label="Emplacement d’une photographie à valider avec Flo"
            >
              <div className="frame-weave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="frame-label">
                <span>01 / PORTRAIT</span>
                <span>PHOTO & CRÉDIT À VALIDER</span>
              </div>
              <span className="frame-title" aria-hidden="true">
                ART
                <br />
                IN
                <br />
                MOTION
              </span>
            </div>
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
            <div className="visual-placeholder">
              <span>IMAGE 01</span>
              <strong>
                LA CRÉATION
                <br />
                PREND
                <br />
                FORME
              </strong>
              <span>PORTRAIT À SÉLECTIONNER</span>
            </div>
            <p>
              Les photographies sources sont dans le dépôt. Sélection, crédits,
              autorisations des personnes représentées et versions web restent à
              valider avant leur intégration.
            </p>
          </Reveal>
        </section>
        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-grid">
            <Reveal>
              <p className="kicker">05 / COLLABORER</p>
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
          <span className="brand-mark" aria-hidden="true">
            ✳
          </span>
        </a>
        <p>EPK en préparation · Contenus et visuels à valider avec Flo</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  );
}
export default App;
