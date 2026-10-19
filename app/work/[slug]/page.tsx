import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { workCaseStudies, site } from "@/content/site";

export function generateStaticParams() {
  return [
    { slug: "projectflow" },
    { slug: "notes-management-system" },
    { slug: "kerala-commodity-market" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = workCaseStudies[slug as keyof typeof workCaseStudies];

  if (!study) {
    return { title: "Project not found" };
  }

  return {
    title: `${study.title} — Aloshi Tom Shijo`,
    description: study.overview,
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = workCaseStudies[slug as keyof typeof workCaseStudies];
  const project = site.projects.find((p) => p.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="section-shell project-detail">
      <Link href="/" className="inline-link">← Back to portfolio</Link>
      <header className="project-detail__header">
        <p className="mono">Case study</p>
        <h1>{study.title}</h1>
        <div className="project-detail__actions">
          {project?.github && (
            <a className="button button--secondary button--square" href={project.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {project?.live && (
            <a className="button button--primary button--square" href={project.live} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div className="project-detail__grid">
        <section>
          <h2>Overview</h2>
          <p>{study.overview}</p>
        </section>
        <section>
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </section>
        <section>
          <h2>Approach</h2>
          <p>{study.approach}</p>
        </section>
        <section>
          <h2>Key features</h2>
          <ul>
            {study.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Stack</h2>
          <div className="tags-row">
            {study.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>
        <section>
          <h2>What I learned</h2>
          <p>{study.learning}</p>
        </section>
      </div>
    </main>
  );
}
