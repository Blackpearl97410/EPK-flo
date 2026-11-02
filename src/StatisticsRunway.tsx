import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const frames = [
  {
    src: "/images/statistics-rose.jpg",
    model: "Le modèle en rose ouvre le défilé.",
    label: "Vues cumulées",
    value: "270K+",
  },
  {
    src: "/images/statistics-blanc.jpg",
    model: "Le modèle en blanc prend le premier plan.",
    label: "Record d’interactions",
    value: "7,7K+",
  },
  {
    src: "/images/statistics-jaune.jpg",
    model: "Le modèle en jaune clôt le défilé.",
    label: "Pays touchés",
    value: "Réunion · France · Afrique du Sud · Canada",
  },
] as const;

export function StatisticsRunway() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

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
      <div className="statistics-runway-stage">
        {frames.map((frame, index) => (
          <motion.img
            key={frame.src}
            className="statistics-runway-frame"
            src={frame.src}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            initial={false}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
            aria-hidden={active !== index}
          />
        ))}
        <div className="statistics-runway-mobile-copy" aria-live="polite">
          <strong>STATISTIQUES</strong>
          <p>{frames[active].label}</p>
          <span>{frames[active].value}</span>
        </div>
        <div className="statistics-runway-controls" role="group" aria-label="Faire défiler les statistiques">
          <button
            type="button"
            aria-label="Statistique précédente"
            disabled={active === 0}
            onClick={() => setActive((index) => Math.max(0, index - 1))}
          >
            ←
          </button>
          <span aria-live="polite">{active + 1} / {frames.length}</span>
          <button
            type="button"
            aria-label="Statistique suivante"
            disabled={active === frames.length - 1}
            onClick={() => setActive((index) => Math.min(frames.length - 1, index + 1))}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
