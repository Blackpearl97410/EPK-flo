import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Adaptation locale du motif « Scroll media expansion hero » de @arunachalam (21st.dev, MIT). */
export function ScrollExpandVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [narrowScreen, setNarrowScreen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const frameWidth = useTransform(scrollYProgress, [0, 0.72], [narrowScreen ? "62%" : "32%", "100%"]);
  const frameHeight = useTransform(scrollYProgress, [0, 0.72], [narrowScreen ? "48%" : "58%", narrowScreen ? "70%" : "86%"]);
  const frameRadius = useTransform(scrollYProgress, [0, 0.72], ["18px", "0px"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.28, 0.52], [1, 1, 0]);
  const promptOpacity = useTransform(scrollYProgress, [0, 0.18, 0.4], [1, 1, 0]);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    const update = () => setNarrowScreen(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || reduceMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video?.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reduceMotion]);

  return (
    <section className="scroll-video-section" id="film" ref={sectionRef} aria-labelledby="film-title">
      <div className="scroll-video-stage">
        <motion.div
          className="scroll-video-frame"
          style={reduceMotion ? undefined : { width: frameWidth, height: frameHeight, borderRadius: frameRadius }}
        >
          <video
            ref={videoRef}
            src="/videos/braidsplace-couleur.mp4"
            poster="/videos/braidsplace-couleur-poster.jpg"
            preload="metadata"
            playsInline
            muted
            loop
            controls
            aria-label="Film en couleur BRAIDSPLACE : coiffures, modèles et préparation artistique"
          />
        </motion.div>
        <motion.h2
          className="scroll-video-title"
          id="film-title"
          style={reduceMotion ? undefined : { opacity: titleOpacity }}
        >
          <span>Live</span><span>Hair Art</span>
        </motion.h2>
        <motion.p className="scroll-video-prompt" style={reduceMotion ? undefined : { opacity: promptOpacity }}>
          <span>BRAIDSPLACE / FILM</span>
          <span>DÉFILER POUR AGRANDIR ↓</span>
        </motion.p>
      </div>
    </section>
  );
}
