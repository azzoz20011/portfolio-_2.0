import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PageEnd from './components/PageEnd'
import CertificateSection from './components/CertificateSection'
import UniSection from './components/uniSection'
import ProjectSection from './components/ProjectSection'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <Hero />
      <div className="sections" aria-label="Portfolio sections">
        <CertificateSection />
        <UniSection />
        <ProjectSection />
      </div>
      <PageEnd />
    </div>
  )
}

export default App
