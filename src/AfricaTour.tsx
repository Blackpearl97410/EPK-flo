import { motion, useReducedMotion } from "motion/react";

// Cape Town: UNGEGN/SAGNS; Johannesburg: Statistics South Africa;
// Tanzania: Natural Earth country label point. Projected onto africa-tour-map.svg.
const destinations = [
  { place: "Cape Town", date: "Mars 2027", status: "Validé", x: 357.6, y: 679.7 },
  { place: "Johannesburg", date: "Avril 2027", status: "À venir", x: 437.2, y: 611.2 },
  { place: "Tanzanie", date: "Avril 2027", status: "À venir", x: 494.3, y: 432.1 },
] as const;

const route = "M 357.6 679.7 C 388 671, 415 641, 437.2 611.2 C 466 566, 487 496, 494.3 432.1";

export function AfricaTour() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="journey section-pad" id="parcours" aria-labelledby="journey-title">
      <div className="shell">
        <div className="tour-heading">
          <p className="kicker">BRAIDSPLACE / 2027</p>
          <h2 id="journey-title">Africa Tour</h2>
        </div>

        <div className="tour-layout">
          <div className="tour-map-frame">
            <svg
              className="tour-map"
              viewBox="0 0 700 760"
              role="img"
              aria-labelledby="tour-map-title tour-map-description"
            >
              <title id="tour-map-title">Parcours BRAIDSPLACE en Afrique</title>
              <desc id="tour-map-description">
                Un chemin relie Cape Town à Johannesburg, puis à la Tanzanie.
              </desc>
              <image href="/images/africa-tour-map.svg" width="700" height="760" />
              <path className="tour-route-guide" d={route} />
              <motion.path
                className="tour-route-line"
                d={route}
                initial={reduceMotion ? false : { pathLength: 0 }}
                whileInView={reduceMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 2.3, ease: "easeInOut" }}
              />
              {destinations.map((destination, index) => (
                <motion.g
                  key={destination.place}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.8 }}
                >
                  <circle className="tour-map-halo" cx={destination.x} cy={destination.y} r="15" />
                  <circle className="tour-map-dot" cx={destination.x} cy={destination.y} r="6" />
                </motion.g>
              ))}
            </svg>
          </div>

          <ol className="tour-stops" aria-label="Étapes de la tournée">
            {destinations.map((destination, index) => (
              <motion.li
                className="tour-stop"
                key={destination.place}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.18 }}
              >
                <span className="tour-stop-mark" aria-hidden="true" />
                <div>
                  <h3>{destination.place}</h3>
                  <p>{destination.date}</p>
                </div>
                <span className="tour-stop-status">{destination.status}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
