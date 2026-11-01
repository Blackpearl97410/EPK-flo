import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const tracks = [
  ['01', 'Premier titre à sélectionner'],
  ['02', 'Deuxième titre à sélectionner'],
  ['03', 'Troisième titre à sélectionner'],
]

function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Flo, retour en haut">FLO<span className="brand-dot">.</span><span className="brand-sub">EPK</span></a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#apropos">À propos</a>
          <a href="#musique">Musique</a>
          <a href="#visuels">Visuels</a>
          <a href="#scene">Scène</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="contenu">
        <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Dossier artistique · version de travail</p>
            <h1 id="hero-title">
              <motion.span
                className="hero-title-word"
                initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)', y: 24 }}
                animate={{ clipPath: 'inset(0 0 0 0)', y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >FLO</motion.span><span className="hero-period">.</span>
            </h1>
            <p className="hero-lead">Une page pour découvrir l’univers de Flo, écouter sa musique et préparer les prochains échanges professionnels.</p>
            <p className="editor-note">À personnaliser avec sa présentation, ses photos et ses liens validés.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#musique">Découvrir la musique <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Accéder au contact <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Espace réservé au portrait officiel de Flo">
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <motion.div
              className="portrait-card"
              animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [-5, -4, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="portrait-number">01 / Portrait</span>
              <span className="portrait-word" aria-hidden="true">F</span>
              <span className="portrait-caption">Photo officielle<br />à ajouter</span>
            </motion.div>
            <span className="art-caption">VISUEL À VALIDER · FLO</span>
          </div>
          <div className="hero-index" aria-hidden="true">EPK / 001</div>
        </section>

        <div className="section-divider" aria-hidden="true"><span>FLO / EPK</span><span>PRÉSENTATION ARTISTIQUE</span></div>

        <section className="about section-wrap section-pad" id="apropos" aria-labelledby="about-title">
          <Reveal className="section-heading">
            <p className="section-kicker">01 — Son histoire</p>
            <h2 id="about-title">À propos<span className="accent">.</span></h2>
          </Reveal>
          <Reveal className="about-content">
            <p className="large-copy">La biographie de Flo prendra place ici. Elle présentera son parcours, son univers musical et le projet qu’elle souhaite mettre en avant.</p>
            <p>Ce texte doit être rédigé à partir de ses informations, puis relu et validé avec elle. La version courte pourra servir aux programmateurs et aux médias ; une version plus détaillée pourra être ajoutée si nécessaire.</p>
            <span className="status-tag">Biographie à rédiger avec Flo</span>
          </Reveal>
        </section>

        <section className="music section-pad" id="musique" aria-labelledby="music-title">
          <div className="section-wrap">
            <Reveal className="section-heading section-heading-row">
              <div><p className="section-kicker">02 — À écouter</p><h2 id="music-title">La musique<span className="accent">.</span></h2></div>
              <p className="section-aside">Une sélection de titres représentatifs, choisie et ordonnée avec Flo.</p>
            </Reveal>
            <div className="track-list" aria-label="Titres à renseigner">
              {tracks.map(([number, title]) => (
                <Reveal className="track" key={number}>
                  <span className="track-no">{number}</span>
                  <div><h3>{title}</h3><p>Nom, année et lien d’écoute à ajouter</p></div>
                  <span className="track-state">À compléter</span>
                </Reveal>
              ))}
            </div>
            <p className="fine-print">Les boutons d’écoute seront ajoutés lorsque les liens officiels seront fournis.</p>
          </div>
        </section>

        <section className="visuals section-wrap section-pad" id="visuels" aria-labelledby="visuals-title">
          <Reveal className="section-heading section-heading-row">
            <div><p className="section-kicker">03 — À voir</p><h2 id="visuals-title">Images & vidéos<span className="accent">.</span></h2></div>
            <p className="section-aside">Portraits, photos de scène et captations avec crédits et droits vérifiés.</p>
          </Reveal>
          <div className="media-grid">
            <Reveal className="media-card media-card-large"><span>01 / PORTRAIT</span><strong>Photo presse<br />à ajouter</strong><small>Crédit photo à renseigner</small></Reveal>
            <Reveal className="media-card media-card-small"><span>02 / SCÈNE</span><strong>Photo live<br />à ajouter</strong><small>Crédit photo à renseigner</small></Reveal>
            <Reveal className="media-card media-card-small media-card-accent"><span>03 / VIDÉO</span><strong>Clip ou captation<br />à ajouter</strong><small>Lien officiel à renseigner</small></Reveal>
          </div>
        </section>

        <section className="live section-pad" id="scene" aria-labelledby="live-title">
          <div className="section-wrap live-grid">
            <Reveal className="section-heading"><p className="section-kicker">04 — En live</p><h2 id="live-title">Sur scène<span className="accent">.</span></h2></Reveal>
            <Reveal className="live-content">
              <p className="large-copy">Une présentation du projet live de Flo sera ajoutée ici après validation de la formule scénique.</p>
              <dl className="live-facts">
                <div><dt>Format</dt><dd>À confirmer</dd></div>
                <div><dt>Durée du set</dt><dd>À confirmer</dd></div>
                <div><dt>Fiche technique</dt><dd>À fournir si disponible</dd></div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-grid">
            <Reveal><p className="section-kicker">05 — Échanger</p><h2 id="contact-title">Contact<span className="accent">.</span></h2><p>Pour la programmation, la presse et les collaborations.</p></Reveal>
            <Reveal className="contact-card">
              <span className="contact-label">CONTACT PROFESSIONNEL</span>
              <p>Nom et adresse de contact à confirmer avec Flo.</p>
              <span className="status-tag status-tag-light">Coordonnées à valider avant publication</span>
              <div className="social-placeholder">Liens officiels · à ajouter</div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#accueil" aria-label="Flo, retour en haut">FLO<span className="brand-dot">.</span></a>
        <p>EPK en préparation · Contenus à valider avec Flo</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  )
}

export default App
