import { useRef, useState, type PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollExpandVideo } from "./ScrollExpandVideo";
import { MinimalistHairArt } from "./MinimalistHairArt";
import { StatisticsRunway } from "./StatisticsRunway";
import { AfricaTour } from "./AfricaTour";

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

const photographs = [
  {
    src: "/images/tableau-tresses-graphiques.webp",
    alt: "Model leaning against a railing, with braids sweeping in large curves in front of a light panel.",
  },
  {
    src: "/images/tableau-fleur.webp",
    alt: "Portrait of a model with a voluminous hairstyle, a pink flower and a brightly colored outfit.",
  },
  {
    src: "/images/tableau-portrait-nb-femme.webp",
    alt: "Black-and-white portrait of a model with a voluminous Afro hairstyle in front of a light panel.",
  },
  {
    src: "/images/tableau-portrait-nb-homme.webp",
    alt: "Black-and-white portrait of a model in a white shirt with a sculptural Afro hairstyle.",
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
        Skip to content
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
        <motion.section
          className="film-photo-section"
          id="portrait"
          aria-labelledby="press-kit-title"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="film-photo-copy">
            <p className="film-photo-kicker">E-PRESS KIT</p>
            <h2 id="press-kit-title">Flow</h2>
            <p>
              Welcome to this E-Press Kit, an invitation to enter the world of <strong>Flow</strong>, hair artist and art director, where hairstyling goes beyond its original purpose to become a true form of expression.
            </p>
            <p>
              Through her creations, Flow explores the connections between <strong>art, culture, identity and movement</strong>.
            </p>
            <p>
              A singular world where every creation tells a story, hair becomes an artistic medium, and art is not merely seen, but lived.
            </p>
          </div>
          <div className="film-photo-frame">
            <img
              src="/images/portrait-adriiii.webp"
              alt="Portrait of a person in front of a white panel, with long sculptural braids."
              decoding="async"
            />
          </div>
        </motion.section>
        <MinimalistHairArt />
        <ScrollExpandVideo />
        <section
          className="visuals section-pad shell"
          id="images"
          aria-labelledby="visuals-title"
        >
          <Reveal className="section-heading">
            <h2 id="visuals-title">
              A concept:
              <br />
              <span>bringing things to life</span>
            </h2>
            <p className="kicker gallery-subtitle">GALLERY</p>
          </Reveal>
          <Reveal className="visual-note">
            <div className="gallery-controls" aria-label="Gallery controls">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => moveGallery(-1)}
                disabled={activePhoto === 0}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next photo"
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
              aria-label="Live Hair Art photographs"
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
        <AfricaTour />
        <div className="intro-worknote shell">
          <span>BRAIDSPLACE · RÉUNION ISLAND</span>
        </div>
      </main>
      <footer className="site-footer shell">
        <a className="brand" href="#accueil">
          BRAIDSPLACE
        </a>
        <p>Work in progress · Content and visuals pending Flow’s approval</p>
        <a href="#accueil">Back to top ↑</a>
      </footer>
    </>
  );
}
export default App;
