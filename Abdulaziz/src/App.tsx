import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PageEnd from './components/PageEnd'
import PortfolioSection, { type PortfolioSectionContent } from './components/PortfolioSection'

const sections: PortfolioSectionContent[] = [
  {
    id: 'certificates',
    label: 'Certificates',
    title: 'Professional certificates',
    description: 'A selection of the certificates I have earned and the skills each one represents.',
    details: ['Certificate name', 'Issuing organization', 'Completion year'],
  },
  {
    id: 'university',
    label: 'Education',
    title: 'University education',
    description: 'My academic background and the foundation that shaped my professional direction.',
    details: ['University name', 'Degree or major', 'Graduation year'],
  },
  {
    id: 'dashboard',
    label: 'Featured project',
    title: 'Dashboard I worked on',
    description: 'A practical dashboard project where I helped turn data and user needs into a clear interface.',
    details: ['Dashboard name', 'Technologies used', 'My contribution'],
    action: { href: '#', label: 'Open dashboard' },
  },
]

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="sections" aria-label="Portfolio sections">
        {sections.map((section) => (
          <PortfolioSection key={section.id} section={section} />
        ))}
      </div>
      <PageEnd />
    </>
  )
}

export default App
