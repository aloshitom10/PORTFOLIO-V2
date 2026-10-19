import { site } from "@/content/site";

export function Timeline() {
  const entries = site.timeline.filter((entry) => entry.type === "Internship" || entry.type === "Education");

  return (
    <section className="section-shell portfolio-section" id="experience" aria-labelledby="experience-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">02 / Experience</p>
        <div>
          <h2 id="experience-heading">Experience.</h2>
          <p className="section-subtitle">Professional experience and applied engineering work.</p>
        </div>
      </div>
      <ol className="timeline">
        {entries.map((entry) => (
          <li className="timeline-item" key={`${entry.date}-${entry.title}`} data-reveal>
            <div className="timeline-meta">
              <p className="timeline-date">{entry.date}</p>
              <span className="timeline-type">{entry.type}</span>
            </div>
            <div className="timeline-content">
              <h3>{entry.title}</h3>
              <p className="timeline-place">{entry.company}{entry.location ? ` · ${entry.location}` : ""}</p>
              <p className="timeline-description">{entry.description}</p>
              {entry.type === "Internship" && (
                <ul className="tag-list" aria-label="Internship technologies">
                  {["Python", "Django", "JavaScript", "Bootstrap", "SQLite", "Git"].map((skill) => (
                    <li className="chip" key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
              {entry.type === "Education" && (
                <ul className="tag-list" aria-label="Coursework">
                  {["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"].map((skill) => (
                    <li className="chip" key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
