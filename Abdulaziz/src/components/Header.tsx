function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Abdulaziz portfolio home">Abdulaziz <span>Alamoudi</span></a>
      <nav className="nav-links" aria-label="Portfolio navigation">
        <a href="#university">About</a>
        <a href="#certificates">Credentials</a>
        <a href="#dashboard">Projects</a>
        <a className="nav-contact" href="mailto:hello@example.com">Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}

export default Header
