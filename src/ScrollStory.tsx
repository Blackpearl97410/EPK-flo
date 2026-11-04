import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

const messages = [
  <>Welcome to <em>Flow’s artistic world.</em></>,
  <>Living <em>tableaux.</em></>,
  <>A desire to pay tribute and <em>break conventions.</em></>,
  <><em>Live Canvas</em>, a project by BRAIDSPLACE.</>,
];

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? "-100%" : "100%" }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? "100%" : "-100%" }),
};
const still = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [{ active, direction }, setStage] = useState({ active: 0, direction: 1 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(messages.length, Math.floor(progress * (messages.length + 1)));
    setStage((current) => next === current.active ? current : { active: next, direction: next > current.active ? 1 : -1 });
  });

  return (
    <section className="scroll-story" id="accueil" ref={sectionRef} aria-labelledby="story-title">
      <h1 className="sr-only" id="story-title">BRAIDSPLACE — Live Hair Art</h1>
      <ol className="sr-only" aria-label="Introduction">
        <li>BRAIDSPLACE — beyond hairstyling, beyond an exhibition.</li>
        {messages.map((message, index) => <li key={index}>{message}</li>)}
      </ol>
      <div className="scroll-story-stage">
        <AnimatePresence custom={direction} mode="sync" initial={false}>
          {active === 0 ? (
            <motion.div className="video-hero-content scroll-story-content" key="cover" custom={direction} variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
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
            <motion.div className="scroll-story-message" key={active} custom={direction} variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <p className="scroll-story-eyebrow">BRAIDSPLACE / LIVE HAIR ART</p>
              <h2>{messages[active - 1]}</h2>
              <span className="scroll-story-count">0{active + 1} / 0{messages.length + 1}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="scroll-story-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
      </div>
    </section>
  );
}
