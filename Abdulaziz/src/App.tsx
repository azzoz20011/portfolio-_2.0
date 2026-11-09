import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PageEnd from './components/PageEnd'
import CertificateSection from './components/CertificateSection'
import ProjectSection from './components/ProjectSection'
import PortfolioSection, { type PortfolioSectionContent } from './components/PortfolioSection'

const sections: PortfolioSectionContent[] = [
  {
    id: 'university',
    label: 'Background',
    title: 'University education',
    description: 'My academic foundation and the learning path that shaped my interest in data, technology, and practical problem-solving.',
    details: ['Academic foundation', 'Continuous learning', 'Data-focused development'],
  },
]

function App() {
  return (
    <div className="site-shell">
      <Header />
      <Hero />
      <div className="sections" aria-label="Portfolio sections">
        <CertificateSection />
        {sections.map((section) => (
          <PortfolioSection key={section.id} section={section} />
        ))}
        <ProjectSection />
      </div>
      <PageEnd />
    </div>
  )
}

export default App
