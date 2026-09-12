export type PortfolioSectionContent = {
  action?: { href: string; label: string }
  description: string
  details: string[]
  id: string
  label: string
  title: string
}

type PortfolioSectionProps = { section: PortfolioSectionContent }

function PortfolioSection({ section }: PortfolioSectionProps) {
  return (
    <section className="portfolio-section" id={section.id}>
      <div className="section-copy">
        <p className="eyebrow">{section.label}</p>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        {section.action ? (
          <a className="section-link" href={section.action.href}>
            {section.action.label}<span aria-hidden="true">&#8599;</span>
          </a>
        ) : null}
      </div>
      <ul className="detail-list">
        {section.details.map((detail, index) => (
          <li key={detail}>
            <span>{String(index + 1).padStart(2, '0')}</span>{detail}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PortfolioSection
