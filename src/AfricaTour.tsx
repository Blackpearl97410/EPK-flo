import { motion, useReducedMotion } from "motion/react";

// Cape Town: UNGEGN/SAGNS; Johannesburg: Statistics South Africa;
// Tanzania: Natural Earth country label point. Réunion: 20°53′ S, 55°31′ E
// (Réunion Tourism). Projected onto africa-tour-map.svg.
const origin = { place: "Réunion Island", x: 666.5, y: 565.5 } as const;

// Réunion coastline: Natural Earth 1:10m admin-1, via GISGP (public domain).
// Normalized to a 100 × 84 inset so the real outline stays legible on the Africa map.
const reunionOutline = "M 86.3 40.1 L 88.3 41.4 L 93.5 43.5 L 95.3 45.2 L 96.0 48.1 L 95.2 50.6 L 94.0 53.1 L 91.6 64.1 L 91.2 67.2 L 91.3 70.0 L 91.1 73.2 L 89.8 75.8 L 86.8 76.9 L 81.6 76.7 L 79.0 77.1 L 74.4 79.5 L 70.9 80.0 L 67.5 79.8 L 65.2 78.9 L 62.7 79.8 L 59.0 79.9 L 55.1 79.6 L 52.1 78.9 L 49.6 77.7 L 45.0 74.5 L 40.6 73.5 L 34.6 71.2 L 32.1 69.7 L 31.0 68.5 L 30.1 67.1 L 29.2 66.1 L 27.6 65.7 L 22.9 65.6 L 22.2 65.2 L 21.1 63.1 L 16.0 57.4 L 14.3 54.5 L 13.6 51.0 L 13.6 48.4 L 13.2 46.1 L 7.1 38.2 L 5.1 35.0 L 4.0 31.9 L 4.0 29.1 L 4.8 26.1 L 6.4 23.7 L 11.3 21.7 L 13.1 19.4 L 13.8 16.7 L 13.1 14.6 L 13.9 13.7 L 14.2 13.0 L 13.9 12.3 L 13.1 11.5 L 15.3 10.5 L 20.2 10.5 L 24.3 7.7 L 30.7 4.3 L 37.7 4.0 L 40.1 4.3 L 44.3 5.8 L 46.2 6.1 L 48.1 5.3 L 50.4 6.0 L 55.6 6.0 L 57.7 6.8 L 59.6 8.0 L 66.2 9.5 L 68.1 10.5 L 69.6 11.7 L 72.7 15.0 L 73.8 17.1 L 74.4 22.0 L 75.2 23.7 L 78.8 27.3 L 79.3 28.4 L 79.5 31.3 L 79.8 32.8 L 80.3 34.0 L 81.2 34.7 L 83.7 35.7 L 84.3 36.5 L 84.5 37.2 L 86.3 40.1 Z";

const destinations = [
  { place: "Cape Town", date: "March 2027", status: "Confirmed", x: 357.6, y: 679.7, labelX: 52, labelY: 622, labelWidth: 248, leaderX: 300, leaderY: 679.7 },
  { place: "Johannesburg", date: "April 2027", status: "Upcoming", x: 437.2, y: 611.2, labelX: 462, labelY: 444, labelWidth: 218, leaderX: 462, leaderY: 542 },
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
                The route starts on Réunion Island, shown at its location east of Madagascar and enlarged in a labelled inset. It then connects Cape Town, March 2027, confirmed, to Johannesburg and Tanzania, April 2027, upcoming. No departure date is announced for Réunion Island.
              </desc>
              <defs>
                <path id="reunion-coastline" d={reunionOutline} />
              </defs>
              <image href="/images/africa-tour-map.svg" width="700" height="760" />
              <use
                className="tour-island-shape"
                href="#reunion-coastline"
                transform="translate(661.5 561.3) scale(.1)"
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
                <rect className="tour-map-label-panel" x="480" y="650" width="200" height="80" rx="4" />
                <use
                  className="tour-island-inset"
                  href="#reunion-coastline"
                  transform="translate(490 663) scale(.5)"
                />
                <text className="tour-map-label-place tour-map-origin-place" x="548" y="679">{origin.place}</text>
                <text className="tour-map-label-date" x="548" y="709">Starting point</text>
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
