import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";

export function Work() {
  return (
    <section className="section-shell portfolio-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">04 / Selected works</p>
        <div>
          <h2 id="projects-heading">Things I've built.</h2>
        </div>
      </div>
      <div className="project-grid">
        {site.projects.map((project, index) => (
          <Link href={`/work/${project.slug}`} className="project-item" key={project.slug} data-reveal>
            <p className="project-number mono">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="project-item__title">{project.name}</h3>
            <p className="project-item__desc">{project.summary}</p>
            <ul className="project-item__tags" aria-label={`${project.name} technology stack`}>
              {project.stack.map((tech) => (
                <li className="project-item__tag" key={tech}>{tech}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
      <div className="github-callout">
        <span className="mono">More code and experiments on GitHub</span>
        <a className="button button--secondary button--square" href={site.identity.github} target="_blank" rel="noreferrer">
          GITHUB <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
