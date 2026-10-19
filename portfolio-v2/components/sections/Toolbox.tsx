import { site } from "@/content/site";

export function Toolbox() {
  return (
    <section className="section-shell portfolio-section" id="skills" aria-labelledby="skills-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">03 / Technical arsenal</p>
        <div>
          <h2 id="skills-heading">Tools for the work.</h2>
          <p className="section-subtitle">Programming, frameworks, design, tools, and computer science foundations.</p>
        </div>
      </div>
      <div className="skills-grid">
        {site.toolbox.groups.map((group) => (
          <section className="skill-group" key={group.title} data-reveal aria-labelledby={`skill-${group.title.replaceAll(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
            <h3 id={`skill-${group.title.replaceAll(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
              <span className="skill-indicator" aria-hidden="true" />
              {group.title}
            </h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-chip" key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
