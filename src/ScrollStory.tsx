import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

const messages = [
  <>Bienvenue dans l’espace artistique de <em>Flow.</em></>,
  <>Les <em>tableaux vivants.</em></>,
  <>Une envie de rendre hommage et de <em>casser les codes.</em></>,
  <>Le projet <em>Live Canvas</em>, signé BRAIDSPLACE.</>,
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(Math.min(messages.length, Math.floor(progress * (messages.length + 1))));
  });

  return (
    <section className="scroll-story" id="accueil" ref={sectionRef} aria-labelledby="story-title">
      <h1 className="sr-only" id="story-title">BRAIDSPLACE — Live Hair Art</h1>
      <ol className="sr-only" aria-label="Introduction">
        <li>BRAIDSPLACE — beyond hairstyling, beyond an exhibition.</li>
        {messages.map((message, index) => <li key={index} lang="fr">{message}</li>)}
      </ol>
      <div className="scroll-story-stage">
        <AnimatePresence mode="wait" initial={false}>
          {active === 0 ? (
            <motion.div className="video-hero-content scroll-story-content" key="cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
              <p className="video-hero-stamp">THIS IS</p>
              <p className="scroll-story-brand">BRAIDSPLACE</p>
              <p className="video-hero-manifesto">
                <span>BEYOND HAIRSTYLING. BEYOND AN EXHIBITION.</span>
                <span>A MEETING OF <mark>ARTISTIC WORLDS.</mark></span>
                <span><mark>A LIVING EXPERIENCE WHERE ART COMES TO LIFE.</mark></span>
                <span>ART THAT IS NOT MERELY SEEN, BUT EXPERIENCED.</span>
              </p>
              <a className="video-hero-link" href="#artiste">LEARN MORE</a>
            </motion.div>
          ) : (
            <motion.div className="scroll-story-message" key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
              <p className="scroll-story-eyebrow">BRAIDSPLACE / LIVE HAIR ART</p>
              <h2 lang="fr">{messages[active - 1]}</h2>
              <span className="scroll-story-count">0{active + 1} / 0{messages.length + 1}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="scroll-story-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
      </div>
    </section>
  );
}
