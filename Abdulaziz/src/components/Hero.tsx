function Hero() {
  return (
    <main id="top" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Data professional</p>
        <h1>Abdulaziz<br />Alamoudi.</h1>
        <p className="summary">
          With a Computer Science degree from KFUPM, I focus on Data Engineering, Cloud Technologies, and Data Analytics. I have hands-on experience building scalable data pipelines, developing cloud-based solutions, and transforming complex data into meaningful insights.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#dashboard">Explore my work <span aria-hidden="true">↘</span></a>
          <a className="secondary-link" href="#certificates">View credentials</a>
        </div>
      </div>
      <div className="portrait-frame">
        <span className="portrait-placeholder" role="img" aria-label="Abdulaziz monogram">
          <span>AA</span><small>Data · Cloud · Design</small>
        </span>
      </div>
    </main>
  )
}

export default Hero
