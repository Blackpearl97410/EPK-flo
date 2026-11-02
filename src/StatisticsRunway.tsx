import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const frames = [
  {
    src: "/images/statistics-rose.jpg",
    model: "The model in pink opens the series.",
    label: "Total views",
    value: "270K+",
    variant: "rose",
  },
  {
    src: "/images/statistics-blanc.jpg",
    model: "The model in white takes center stage.",
    label: "Engagement record",
    value: "7.7K+",
    variant: "blanc",
  },
  {
    src: "/images/statistics-jaune.jpg",
    model: "The model in yellow closes the series.",
    label: "Countries reached",
    value: "Réunion Island · France · South Africa · Canada",
    variant: "jaune",
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
      <h2 className="statistics-heading shell" id="statistics-title">Statistics</h2>
      <ol className="sr-only">
        {frames.map((frame) => (
          <li key={frame.src}>
            {frame.model} {frame.label} : {frame.value}.
          </li>
        ))}
      </ol>
      <div className="statistics-runway-stage">
        {frames.map((frame, index) => (
          <motion.div
            key={frame.src}
            className="statistics-runway-frame"
            initial={false}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
            aria-hidden={active !== index}
          >
            <div className="statistics-runway-artwork">
              <img src={frame.src} alt="" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <div className={`statistics-runway-translation statistics-runway-translation--${frame.variant}`}>
                <span>{frame.label}</span>
                <strong>{frame.value}</strong>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="statistics-runway-mobile-copy" aria-live="polite">
          <strong>STATISTICS</strong>
          <p>{frames[active].label}</p>
          <span>{frames[active].value}</span>
        </div>
        <div className="statistics-runway-controls" role="group" aria-label="Browse statistics">
          <button
            type="button"
            aria-label="Previous statistic"
            disabled={active === 0}
            onClick={() => setActive((index) => Math.max(0, index - 1))}
          >
            ←
          </button>
          <span aria-live="polite">{active + 1} / {frames.length}</span>
          <button
            type="button"
            aria-label="Next statistic"
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
