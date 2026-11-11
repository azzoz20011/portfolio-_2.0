import { useRef, useState } from 'react'

const S3_CERTIFICATES_URL =
  'https://d2fsgixn06xzyl.cloudfront.net/portfolio/certificates'

const website_log_dashboard = `${S3_CERTIFICATES_URL}/website_log_dashboard.png`
const dashboard_excel = `${S3_CERTIFICATES_URL}/dashboard_excel.png`
const transit_dashboard = `${S3_CERTIFICATES_URL}/transit_dashboard.png`

type Project = {
  id: number
  title: string
  date: string
  description: string
  image: string
  repo: string
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'portfolio log analysis pipeline',
    date: 'november 1, 2026',
    description: `This project demonstrates the implementation of a data pipeline that collects, 
    processes, and analyzes website log data. It utilizes AWS services to ingest log files,
     transform the data, and visualize insights through a dashboard. 
     The pipeline is designed to handle large volumes of log data efficiently,
      providing daily updated analytics and actionable insights for 
      website performance and user behavior.
      `,
    image: website_log_dashboard,
    repo: 'https://github.com/azzoz20011/website_dashboard',
    url: 'https://github.com/azzoz20011/dashboard_Repository',
  },
  {
    id: 2,
    title: 'Data jobs salaries dashboard',
    date: 'november 9, 2026',
    description: `The dashboard try to simplify the status of data jobs around the world`,
    image: dashboard_excel,
    repo: 'https://github.com/azzoz20011/excel_first_pr/tree/main',
    url: 'https://1drv.ms/x/c/96b9c3e9424174f3/IQBhnCaZg0DVTpNvNqeGUoB5AWFEAy6YJR514BziEgaFZlc?e=8qe0Pt',
  },
  {
    id: 3,
    title: 'transit dashboard',
    date: 'november 11, 2026',
    description: `The dashboard try to simplify the status of data jobs around the world`,
    image: transit_dashboard,
    repo: 'https://github.com/azzoz20011/kafka_transit_stream',
    url: 'https://www.azzoz2001.com/transit/',
  },
]

function ProjectSection() {
  const rollerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const scrollProjects = (direction: number) => {
    rollerRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  if (selectedProject) {
    return (
      <section className="project-detail" id="projects">
        <button className="back-button" type="button" onClick={() => setSelectedProject(null)}>
          <span aria-hidden="true">&#8592;</span> Back to projects
        </button>

        <div className="project-detail-layout">
          <div className="project-full-image">
            <img src={selectedProject.image} alt={`${selectedProject.title} project`} />
          </div>
          <div className="project-detail-copy">
            <p className="eyebrow">Project details</p>
            <h2>{selectedProject.title}</h2>
            
            <p>{selectedProject.description}</p>
            <div className="project-detail-actions">
              <a className="primary-link" href={selectedProject.repo.trim()} target="_blank" rel="noreferrer">
                Open repository <span aria-hidden="true">&#8599;</span>
              </a>
              <a className="secondary-link" href={selectedProject.url} target="_blank" rel="noreferrer">
                Open dashboard <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="project-section" id="projects">
      <div className="project-heading">
        <div>
          <h2>Projects</h2>
          <p>A growing collection of projects across data, cloud, and analytics.</p>
        </div>
        <div className="roller-controls">
          <button type="button" onClick={() => scrollProjects(-1)} aria-label="Previous projects" title="Previous projects">&#8592;</button>
          <button type="button" onClick={() => scrollProjects(1)} aria-label="Next projects" title="Next projects">&#8594;</button>
        </div>
      </div>

      <div className="project-roller" ref={rollerRef}>
        {projects.map((project) => (
          <button
            className="project-card"
            type="button"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            aria-label={`Open details for ${project .title}`}
          >
            <span className="project-image">
              <img src={project.image} alt="" />
            </span>
            <span className="project-meta">
              <strong>{project.title}</strong>
              <span>{project.date}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
