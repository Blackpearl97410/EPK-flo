import { motion, useReducedMotion } from "motion/react";

/** Composition adaptée du « Minimalist Hero » de @ravikatiyar162 sur 21st.dev. */
export function MinimalistHairArt() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="minimalist-hair" id="artiste" aria-labelledby="minimalist-hair-title">
      <div className="minimalist-hair-header">
        <a className="minimalist-hair-brand" href="#accueil">BRAIDSPLACE</a>
        <nav className="minimalist-hair-nav" aria-label="Explorer l’EPK">
          <a href="#living-hair-art">LE PROJET</a>
          <a href="#format">LA PERFORMANCE</a>
          <a href="#images">LES IMAGES</a>
          <a href="#contact">CONTACT</a>
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
          alt="Portrait noir et blanc d’une personne à la coiffure sculpturale, devant un panneau brun incliné."
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
          <h2 id="minimalist-hair-title">L’ARTISTE</h2>
          <p>
            Originaire de l’île de La Réunion, Floww a ensuite évolué en région parisienne.
          </p>
          <a href="#living-hair-art">Découvrir le projet <span aria-hidden="true">↗</span></a>
        </motion.div>
      </motion.div>

      <div className="minimalist-hair-footer">
        <span>COIFFURE · IMAGE · MOUVEMENT</span>
        <span>BRAIDSPLACE · LA RÉUNION</span>
      </div>
    </section>
  );
}
