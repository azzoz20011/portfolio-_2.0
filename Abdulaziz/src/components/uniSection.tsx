import { useRef, useState } from 'react'

const S3_CERTIFICATES_URL =
  'https://d2fsgixn06xzyl.cloudfront.net/portfolio/certificates'

const Graduate = `${S3_CERTIFICATES_URL}/Graduate.png`
const Recognition = `${S3_CERTIFICATES_URL}/Recognition.png`

type UniversityCertificate = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
}

const certificates: UniversityCertificate[] = [
  {
    id: 1,
    title: 'Bachelor of Science in Information & Computer Science',
    issuer: 'KFUPM',
    date: 'May 28, 2025',
    description: 'Bachelor of Science in Information & Computer Science, with a concentration in Machine Learning and Artificial Intelligence.',
    image: Graduate,
  },
  {
    id: 2,
    title: 'Certificate of Recognition from the University President',
    issuer: 'KFUPM',
    date: 'May 8, 2025',
    description: 'The president of KFUPM recognized my Team Graduate project as his choice for the best project in the EXPO of Graduation projects.',
    image: Recognition,
  }
]

function UniSection() {
  const rollerRef = useRef<HTMLDivElement>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<UniversityCertificate | null>(null)

  const scrollCertificates = (direction: number) => {
    rollerRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  if (selectedCertificate) {
    return (
      <section className="certificate-detail" id="university">
        <button className="back-button" type="button" onClick={() => setSelectedCertificate(null)}>
          <span aria-hidden="true">&#8592;</span> Back to university certificates
        </button>

        <div className="certificate-detail-layout">
          <div className="certificate-full-image">
            <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
          </div>
          <div className="certificate-detail-copy">
            <p className="eyebrow">University certificate</p>
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
    <section className="certificate-section" id="university">
      <div className="certificate-heading">
        <div>
          <p className="eyebrow">Academic achievements</p>
          <h2>University certificates</h2>
          <p>My degree and other related accomplishments.</p>
        </div>
        <div className="roller-controls">
          <button type="button" onClick={() => scrollCertificates(-1)} aria-label="Previous university certificate" title="Previous university certificate">&#8592;</button>
          <button type="button" onClick={() => scrollCertificates(1)} aria-label="Next university certificate" title="Next university certificate">&#8594;</button>
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

export default UniSection
