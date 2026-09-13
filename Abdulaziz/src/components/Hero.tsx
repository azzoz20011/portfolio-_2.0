function Hero() {
  return (
    <main id="top" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Personal portfolio</p>
        <h1>Hi, I&apos;m <span>Abdulaziz.</span></h1>
        <p className="summary">
          I am a developer focused on creating thoughtful digital experiences. This portfolio brings
          together my certificates, university background, and selected project work.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#certificates">Explore my work</a>
          <a className="secondary-link" href="#dashboard">View dashboard</a>
        </div>
      </div>
      <div className="portrait-frame">
        <span className="portrait-placeholder" role="img" aria-label="Abdulaziz portrait placeholder">AA</span>
      </div>
    </main>
  )
}

export default Hero
