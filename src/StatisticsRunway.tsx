import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const frames = [
  {
    src: "/images/statistics-rose.webp",
    model: "Le modèle en rose ouvre le défilé.",
    label: "Vues cumulées",
    value: "270K+",
  },
  {
    src: "/images/statistics-blanc.webp",
    model: "Le modèle en blanc prend le premier plan.",
    label: "Record d’interactions",
    value: "7,7K+",
  },
  {
    src: "/images/statistics-jaune.webp",
    model: "Le modèle en jaune clôt le défilé.",
    label: "Pays touchés",
    value: "Réunion · France · Afrique du Sud · Canada",
  },
] as const;

export function StatisticsRunway() {
  const track = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });
  const roseOpacity = useTransform(scrollYProgress, [0, 0.31, 0.39, 1], [1, 1, 0, 0]);
  const blancOpacity = useTransform(
    scrollYProgress,
    [0, 0.31, 0.39, 0.64, 0.72, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const jauneOpacity = useTransform(scrollYProgress, [0, 0.64, 0.72, 1], [0, 0, 1, 1]);
  const opacities = [roseOpacity, blancOpacity, jauneOpacity];

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = progress < 0.35 ? 0 : progress < 0.68 ? 1 : 2;
    setActive((current) => (current === next ? current : next));
  });

  return (
    <section
      className="statistics-runway"
      id="statistiques"
      aria-labelledby="statistics-title"
    >
      <h2 className="statistics-heading shell" id="statistics-title">Statistiques</h2>
      <ol className="sr-only">
        {frames.map((frame) => (
          <li key={frame.src}>
            {frame.model} {frame.label} : {frame.value}.
          </li>
        ))}
      </ol>
      <div className="statistics-runway-track" ref={track}>
        <div className="statistics-runway-stage" aria-hidden="true">
          {frames.map((frame, index) => (
            <motion.img
              key={frame.src}
              className="statistics-runway-frame"
              src={frame.src}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              style={reduceMotion ? undefined : { opacity: opacities[index] }}
            />
          ))}
          {!reduceMotion && (
            <div className="statistics-runway-counter">
              <span>0{active + 1} / 03</span>
              <span>Défiler pour découvrir ↓</span>
            </div>
          )}
          <div className="statistics-runway-mobile-copy">
            <strong>STATISTIQUES</strong>
            <p>{frames[active].label}</p>
            <span>{frames[active].value}</span>
          </div>
        </div>
      </div>
      <p className="statistics-runway-note shell">
        Images et chiffres de la maquette à valider avec Flo avant publication.
      </p>
    </section>
  );
}
