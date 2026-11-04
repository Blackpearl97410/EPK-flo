import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { MinimalistHairArt } from "./MinimalistHairArt";
import { AfricaTour } from "./AfricaTour";
import { ExploreMore } from "./ExploreMore";

const messages = [
  <>Welcome to <em>Flow’s artistic world.</em></>,
  <>Living <em>tableaux.</em></>,
  <>A desire to pay tribute and <em>break conventions.</em></>,
  <><em>Live Canvas</em>, a project by BRAIDSPLACE.</>,
];

const slide = {
  enter: { opacity: 0, x: "-100%" },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};
const still = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };
const artistStage = messages.length + 1;
const tourStage = artistStage + 1;
const exploreStage = tourStage + 1;
const stageCount = exploreStage + 1;
const anchorStages = { artiste: artistStage, parcours: tourStage, annexes: exploreStage } as const;

function stageFromHash() {
  return anchorStages[window.location.hash.slice(1) as keyof typeof anchorStages] ?? 0;
}

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const initialStage = useRef(stageFromHash()).current;
  const deepLinkPending = useRef(initialStage !== 0);
  const [active, setActive] = useState(initialStage);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (deepLinkPending.current) return;
    setActive(Math.max(0, Math.min(exploreStage, Math.floor(progress * stageCount))));
  });

  useEffect(() => {
    if (!deepLinkPending.current) return;
    const frame = requestAnimationFrame(() => {
      deepLinkPending.current = false;
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
      setActive(stageFromHash());
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="scroll-story" id="accueil" ref={sectionRef} aria-labelledby="story-title">
      <h1 className="sr-only" id="story-title">BRAIDSPLACE — Live Hair Art</h1>
      <ol className="sr-only" aria-label="Introduction">
        <li>BRAIDSPLACE — beyond hairstyling, beyond an exhibition.</li>
        {messages.map((message, index) => <li key={index}>{message}</li>)}
      </ol>
      <span className="scroll-story-artist-anchor" id="artiste" tabIndex={-1} aria-label="The Artist" />
      <span className="scroll-story-tour-anchor" id="parcours" tabIndex={-1} aria-label="Africa Tour" />
      <span className="scroll-story-explore-anchor" id="annexes" tabIndex={-1} aria-label="Explore more" />
      <div className="scroll-story-stage">
        <AnimatePresence mode="sync" initial={initialStage !== 0}>
          {active === 0 ? (
            <motion.div className="video-hero-content scroll-story-content" key="cover" variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
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
          ) : active === artistStage ? (
            <motion.div className="scroll-story-chapter" key="artist" variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <MinimalistHairArt immersive pinned />
            </motion.div>
          ) : active === tourStage ? (
            <motion.div className="scroll-story-chapter" key="tour" variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <AfricaTour pinned />
            </motion.div>
          ) : active === exploreStage ? (
            <motion.div className="scroll-story-chapter" key="explore" variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <ExploreMore />
            </motion.div>
          ) : (
            <motion.div className="scroll-story-message" key={active} variants={reduceMotion ? still : slide} initial="enter" animate="center" exit="exit" transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <p className="scroll-story-eyebrow">BRAIDSPLACE / LIVE HAIR ART</p>
              <h2>{messages[active - 1]}</h2>
              <span className="scroll-story-count">0{active + 1} / 0{messages.length + 1}</span>
            </motion.div>
          )}
        </AnimatePresence>
        {active < artistStage && <div className="scroll-story-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span>↓</span></div>}
      </div>
    </section>
  );
}
