import { site } from "@/content/site";

export function Organisations() {
  const entries = site.timeline.filter(
    (entry) => entry.type === "Leadership" || entry.type === "Editorial" || entry.type === "Design",
  );

  return (
    <section className="section-shell portfolio-section" id="organisations" aria-labelledby="organisations-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">06 / Organisations</p>
        <div>
          <h2 id="organisations-heading">Beyond the classroom.</h2>
        </div>
      </div>
      <ol className="timeline timeline--organisations">
        {entries.map((entry) => (
          <li className="timeline-item" key={entry.title} data-reveal>
            <div className="timeline-meta">
              <p className="timeline-date">{entry.date}</p>
              <span className="timeline-type">{entry.type}</span>
            </div>
            <div className="timeline-content">
              <h3>{entry.title}, {entry.company}</h3>
              <p className="timeline-place">{entry.company}{entry.location ? ` · ${entry.location}` : ""}</p>
              <p className="timeline-description">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
