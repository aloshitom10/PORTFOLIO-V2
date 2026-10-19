import { site } from "@/content/site";

export function Credentials() {
  return (
    <section className="section-shell portfolio-section" id="credentials" aria-labelledby="credentials-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">05 / Certifications</p>
        <div>
          <h2 id="credentials-heading">Learning, made tangible.</h2>
          <p className="section-subtitle">Technical certifications and professional development.</p>
        </div>
      </div>
      <ol className="timeline timeline--credentials">
        {site.credentials.map((credential) => (
          <li className="timeline-item" key={credential.title} data-reveal>
            <div className="timeline-meta">
              <p className="timeline-date">{credential.date}</p>
              <span className="timeline-type">Certification</span>
            </div>
            <div className="timeline-content">
              <h3>{credential.title}</h3>
              <p className="timeline-place">{credential.organization}</p>
              <p className="timeline-description">{credential.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
