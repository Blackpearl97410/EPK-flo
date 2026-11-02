import { motion, useReducedMotion } from "motion/react";

/** Composition adaptée du « Minimalist Hero » de @ravikatiyar162 sur 21st.dev. */
export function MinimalistHairArt() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="minimalist-hair" id="artiste" aria-labelledby="minimalist-hair-title">
      <div className="minimalist-hair-header">
        <a className="minimalist-hair-brand" href="#accueil">BRAIDSPLACE</a>
        <nav className="minimalist-hair-nav" aria-label="Explore the E-Press Kit">
          <a href="#images">GALLERY</a>
          <a href="#statistiques">STATISTICS</a>
          <a href="#parcours">AFRICA TOUR</a>
        </nav>
      </div>

      <motion.div
        className="minimalist-hair-stage"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } } }}
      >
        <motion.img
          className="minimalist-hair-portrait"
          src="/images/live-hair-art-portrait.webp"
          alt="Black-and-white portrait of a person with a sculptural hairstyle in front of a tilted brown panel."
          loading="lazy"
          decoding="async"
          variants={{
            hidden: { opacity: 0, y: 70, scale: 0.94 },
            visible: { opacity: 1, y: 0, scale: 1, transition },
          }}
        />
        <motion.div
          className="minimalist-hair-copy"
          variants={{
            hidden: { opacity: 0, x: 35 },
            visible: { opacity: 1, x: 0, transition: { ...transition, duration: 0.75 } },
          }}
        >
          <h2 id="minimalist-hair-title">THE ARTIST</h2>
          <p>
            Originally from Réunion Island, I draw inspiration from my roots, my travels and the cultures around me.
          </p>
          <p>
            Through hair art, I seek to tell stories, bring identities into dialogue and push the boundaries of creation.
          </p>
          <p>
            My wish: to share a living art, free and without borders, that brings people together, conveys meaning and stirs emotion.
          </p>
        </motion.div>
      </motion.div>

      <div className="minimalist-hair-footer">
        <span>BRAIDSPLACE · RÉUNION ISLAND</span>
      </div>
    </section>
  );
}
