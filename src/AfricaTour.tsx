import { motion, useReducedMotion } from "motion/react";

// Cape Town: UNGEGN/SAGNS; Johannesburg: Statistics South Africa;
// Tanzania: Natural Earth country label point. Réunion: 20°53′ S, 55°31′ E
// (Réunion Tourism). Projected onto africa-tour-map.svg.
const origin = { place: "Réunion Island", x: 666.5, y: 565.5 } as const;

const destinations = [
  { place: "Cape Town", date: "March 2027", status: "Confirmed", x: 357.6, y: 679.7, labelX: 52, labelY: 622, labelWidth: 248, leaderX: 300, leaderY: 679.7 },
  { place: "Johannesburg", date: "April 2027", status: "Upcoming", x: 437.2, y: 611.2, labelX: 462, labelY: 548, labelWidth: 218, leaderX: 462, leaderY: 611.2 },
  { place: "Tanzania", date: "April 2027", status: "Upcoming", x: 494.3, y: 432.1, labelX: 438, labelY: 320, labelWidth: 242, leaderX: 494.3, leaderY: 418 },
] as const;

const route = "M 666.5 565.5 C 620 585, 549 607, 500 625 C 443 651, 401 694, 357.6 679.7 C 388 671, 415 641, 437.2 611.2 C 466 566, 487 496, 494.3 432.1";

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
              <title id="tour-map-title">BRAIDSPLACE tour route across Africa</title>
              <desc id="tour-map-description">
                The route starts on Réunion Island, then connects Cape Town, March 2027, confirmed, to Johannesburg and Tanzania, April 2027, upcoming. No departure date is announced for Réunion Island.
              </desc>
              <image href="/images/africa-tour-map.svg" width="700" height="760" />
              <path
                className="tour-island-shape"
                d="M 662 566 C 664 562, 668 561, 671 564 C 673 567, 670 570, 666 570 C 663 569, 662 568, 662 566 Z"
              />
              <motion.path
                className="tour-route-dots"
                d={route}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />
              <motion.g
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
              >
                <line className="tour-map-leader" x1={origin.x} y1={origin.y} x2={origin.x} y2="650" />
                <circle className="tour-map-origin-ring" cx={origin.x} cy={origin.y} r="15" />
                <rect className="tour-map-label-panel" x="500" y="650" width="180" height="80" rx="4" />
                <text className="tour-map-label-place tour-map-origin-place" x="514" y="679">{origin.place}</text>
                <text className="tour-map-label-date" x="514" y="709">Starting point</text>
              </motion.g>
              {destinations.map((destination, index) => (
                <motion.g
                  key={destination.place}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.8 }}
                >
                  <line
                    className="tour-map-leader"
                    x1={destination.x}
                    y1={destination.y}
                    x2={destination.leaderX}
                    y2={destination.leaderY}
                  />
                  <circle className="tour-map-halo" cx={destination.x} cy={destination.y} r="15" />
                  <circle className="tour-map-dot" cx={destination.x} cy={destination.y} r="6" />
                  <rect
                    className="tour-map-label-panel"
                    x={destination.labelX}
                    y={destination.labelY}
                    width={destination.labelWidth}
                    height="98"
                    rx="4"
                  />
                  <text className="tour-map-label-place" x={destination.labelX + 14} y={destination.labelY + 31}>
                    {destination.place}
                  </text>
                  <text className="tour-map-label-date" x={destination.labelX + 14} y={destination.labelY + 59}>
                    {destination.date}
                  </text>
                  <text className="tour-map-label-status" x={destination.labelX + 14} y={destination.labelY + 84}>
                    {destination.status}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>

          <ol className="tour-stops" aria-label="Tour stops">
            <li className="tour-stop">
              <span className="tour-stop-mark" aria-hidden="true" />
              <div>
                <h3>{origin.place}</h3>
                <p>Starting point</p>
              </div>
            </li>
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
