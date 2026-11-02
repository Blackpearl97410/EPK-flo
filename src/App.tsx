import { useRef, useState, type PropsWithChildren } from "react";
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
    place: "Cape Town",
    note: "Mars 2027",
    status: "Validé",
  },
  {
    place: "Johannesburg",
    note: "Avril 2027",
    status: "À venir",
  },
  {
    place: "Tanzanie",
    note: "Avril 2027",
    status: "À venir",
  },
];

const photographs = [
  {
    src: "/images/tableau-tresses-graphiques.webp",
    alt: "Modèle appuyé à une rambarde, coiffure tressée en grandes courbes devant un panneau clair.",
  },
  {
    src: "/images/tableau-fleur.webp",
    alt: "Portrait d'un modèle à la coiffure volumineuse, avec une fleur rose et une tenue aux couleurs vives.",
  },
  {
    src: "/images/tableau-portrait-nb-femme.webp",
    alt: "Portrait noir et blanc d'un modèle à la coiffure afro volumineuse, devant un panneau clair.",
  },
  {
    src: "/images/tableau-portrait-nb-homme.webp",
    alt: "Portrait noir et blanc d'un modèle en chemise blanche, avec une coiffure afro sculpturale.",
  },
];

function App() {
  const reduceMotion = useReducedMotion();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const moveGallery = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cards = gallery.querySelectorAll<HTMLElement>(".photo-card");
    if (!cards.length) return;
    const next = Math.max(0, Math.min(cards.length - 1, activePhoto + direction));
    gallery.scrollTo({
      left: cards[next].offsetLeft - cards[0].offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActivePhoto(next);
  };

  const updateActivePhoto = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cards = gallery.querySelectorAll<HTMLElement>(".photo-card");
    if (cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const atEnd = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2;
    setActivePhoto(atEnd ? cards.length - 1 : Math.round(gallery.scrollLeft / step));
  };

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
        <section
          className="visuals section-pad shell"
          id="images"
          aria-labelledby="visuals-title"
        >
          <Reveal className="section-heading">
            <h2 id="visuals-title">
              Un concept :
              <br />
              <span>rendre les choses vivante</span>
            </h2>
            <p className="kicker gallery-subtitle">GALLERY</p>
          </Reveal>
          <Reveal className="visual-note">
            <div className="gallery-controls" aria-label="Commandes de la galerie">
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={() => moveGallery(-1)}
                disabled={activePhoto === 0}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={() => moveGallery(1)}
                disabled={activePhoto === photographs.length - 1}
              >
                →
              </button>
            </div>
            <div
              className="photo-grid"
              ref={galleryRef}
              role="region"
              aria-label="Photographies de Living Hair Art"
              tabIndex={0}
              onScroll={updateActivePhoto}
            >
              {photographs.map((photo) => (
                <figure className="photo-card" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </Reveal>
        </section>
        <StatisticsRunway />
        <section
          className="journey section-pad"
          id="parcours"
          aria-labelledby="journey-title"
        >
          <div className="shell">
            <Reveal className="section-heading">
              <p className="kicker">AFRICA TOUR / 2027</p>
              <h2 id="journey-title">
                BRAIDSPLACE<br /><span>Africa Tour</span>
              </h2>
              <p className="section-intro">
                Cape Town en mars, puis Johannesburg et la Tanzanie en avril 2027.
              </p>
            </Reveal>
            <div className="steps">
              {steps.map((step, index) => (
                <Reveal className="step" key={step.place}>
                  <span className="step-index">0{index + 1}</span>
                  <div>
                    <h3>{step.place}</h3>
                    <p>{step.note}</p>
                  </div>
                  <span className="step-status">{step.status}</span>
                </Reveal>
              ))}
            </div>
            <p className="small-note">
              Détails des lieux et accords de production à confirmer avant publication.
            </p>
          </div>
        </section>
        <div className="intro-worknote shell" aria-label="Statut du dossier">
          <span>EPK / VERSION DE TRAVAIL</span>
          <span>BRAIDSPLACE · LA RÉUNION</span>
        </div>
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
