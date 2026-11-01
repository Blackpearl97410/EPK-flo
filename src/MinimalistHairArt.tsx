import { motion, useReducedMotion } from "motion/react";

/** Composition adaptée du « Minimalist Hero » de @ravikatiyar162 sur 21st.dev. */
export function MinimalistHairArt() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 };
  const visible = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="minimalist-hair" aria-labelledby="minimalist-hair-title">
      <div className="minimalist-hair-header">
        <a className="minimalist-hair-brand" href="#accueil">BRAIDSPLACE</a>
        <nav className="minimalist-hair-nav" aria-label="Explorer l’EPK">
          <a href="#living-hair-art">LE PROJET</a>
          <a href="#format">LA PERFORMANCE</a>
          <a href="#images">LES IMAGES</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <div className="minimalist-hair-stage">
        <img
          className="minimalist-hair-shape"
          src="/images/live-hair-art-shape.webp"
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <motion.img
          className="minimalist-hair-portrait"
          src="/images/live-hair-art-portrait.webp"
          alt="Portrait noir et blanc d’une personne aux longues tresses, sur une composition brune inclinée."
          loading="lazy"
          decoding="async"
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="minimalist-hair-copy"
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            Une performance visuelle où coiffure artistique, silhouette, mode et mouvement composent des tableaux vivants.
          </p>
          <a href="#living-hair-art">Découvrir le projet <span aria-hidden="true">↗</span></a>
        </motion.div>
        <motion.h2
          className="minimalist-hair-title"
          id="minimalist-hair-title"
          aria-label="LIVE HAIR ART -"
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>LIVE</span>
          <span>HAIR ART -</span>
        </motion.h2>
      </div>

      <div className="minimalist-hair-footer">
        <span>COIFFURE · IMAGE · MOUVEMENT</span>
        <span>BRAIDSPLACE · LA RÉUNION</span>
      </div>
    </section>
  );
}
