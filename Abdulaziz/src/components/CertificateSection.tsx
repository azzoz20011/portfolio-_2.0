import { useRef, useState } from 'react'

const S3_CERTIFICATES_URL =
  'https://d2fsgixn06xzyl.cloudfront.net/portfolio/certificates'

const awsCloudPractitioner = `${S3_CERTIFICATES_URL}/aws-cloud-practitioner.png`
const cdmp = `${S3_CERTIFICATES_URL}/cdmp.png`
const dataEngineeringAws = `${S3_CERTIFICATES_URL}/data-engineering-aws.png`
const programmingDataScience = `${S3_CERTIFICATES_URL}/programming-data-science.png`
const Power_BI_Fundamentals = `${S3_CERTIFICATES_URL}/Power_BI_Fundamentals.png`
const Unilever_Supply_Chain_Data = `${S3_CERTIFICATES_URL}/Unilever_Supply_Chain_Data.png`
const dataStreaming = `${S3_CERTIFICATES_URL}/data-streaming.png`
type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'August 19, 2026',
    description: 'A foundational AWS certification covering cloud concepts, core services, security, architecture, pricing, and support.',
    image: awsCloudPractitioner,
  },
  {
    id: 2,
    title: 'Certified Data Management Professional',
    issuer: 'DAMA International',
    date: 'January 13, 2026',
    description: 'Professional recognition of knowledge and practice across core data management disciplines.',
    image: cdmp,
  },
  {
    id: 3,
    title: 'Data Engineering with AWS',
    issuer: 'Udacity',
    date: 'July 30, 2026',
    description: 'Training focused on building scalable data pipelines and applying data engineering practices with AWS services.',
    image: dataEngineeringAws,
  },
  {
    id: 4,
    title: 'Data Streaming',
    issuer: 'Udacity',
    date: 'August 1, 2026',
    description: 'Training in streaming data systems, event processing, and the design of real-time data pipelines.',
    image: dataStreaming,
  },
  {
    id: 5,
    title: 'Programming for Data Science with Python',
    issuer: 'Udacity',
    date: 'April 5, 2026',
    description: 'Practical programming for data analysis using Python and the tools commonly used in data science workflows.',
    image: programmingDataScience,
  },
  {
    id: 6,
    title: 'Power BI Fundamentals',
    issuer: 'DataCamp',
    date: 'October 25, 2026',
    description: 'Fundamentals of Power BI for data visualization and business intelligence.',
    image: Power_BI_Fundamentals,
  },
  {
    id: 7,
    title: 'Unilever Supply Chain Data Analyst',
    issuer: 'Coursera',
    date: 'October 26, 2026',
    description: `learn in-demand skills like data analysis, demand forecasting, and
      cost analysis  with strong problem solving, time management, and
      organizational skills. You will learn the foundational skills employers
      seek for entry level supply chain analysts roles and get hands-on
      experience cleaning, filtering, sorting, and presenting data.
      `,
    image: Unilever_Supply_Chain_Data,
  }
]

function CertificateSection() {
  const rollerRef = useRef<HTMLDivElement>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const scrollCertificates = (direction: number) => {
    rollerRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  if (selectedCertificate) {
    return (
      <section className="certificate-detail" id="certificates">
        <button className="back-button" type="button" onClick={() => setSelectedCertificate(null)}>
          <span aria-hidden="true">&#8592;</span> Back to certificates
        </button>

        <div className="certificate-detail-layout">
          <div className="certificate-full-image">
            <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
          </div>
          <div className="certificate-detail-copy">
            <p className="eyebrow">Certificate details</p>
            <h2>{selectedCertificate.title}</h2>
            <dl>
              <div><dt>Issued by</dt><dd>{selectedCertificate.issuer}</dd></div>
              <div><dt>Completed</dt><dd>{selectedCertificate.date}</dd></div>
            </dl>
            <p>{selectedCertificate.description}</p>
            <a className="primary-link" href={selectedCertificate.image} target="_blank" rel="noreferrer">
              Open full image <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="certificate-section" id="certificates">
      <div className="certificate-heading">
        <div>
          <p className="eyebrow">Selected learning</p>
          <h2>Professional credentials</h2>
          <p>A growing collection of certifications across data, cloud, and analytics.</p>
        </div>
        <div className="roller-controls">
          <button type="button" onClick={() => scrollCertificates(-1)} aria-label="Previous certificates" title="Previous certificates">&#8592;</button>
          <button type="button" onClick={() => scrollCertificates(1)} aria-label="Next certificates" title="Next certificates">&#8594;</button>
        </div>
      </div>

      <div className="certificate-roller" ref={rollerRef}>
        {certificates.map((certificate) => (
          <button
            className="certificate-card"
            type="button"
            key={certificate.id}
            onClick={() => setSelectedCertificate(certificate)}
            aria-label={`Open details for ${certificate.title}`}
          >
            <span className="certificate-image">
              <img src={certificate.image} alt="" />
              <span className="open-certificate" aria-hidden="true">&#8599;</span>
            </span>
            <span className="certificate-meta">
              <strong>{certificate.title}</strong>
              <span>{certificate.issuer} · {certificate.date}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CertificateSection
