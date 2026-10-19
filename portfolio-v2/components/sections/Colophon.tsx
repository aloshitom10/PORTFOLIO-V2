import { site } from "@/content/site";

export function Colophon() {
  return (
    <section className="section-shell portfolio-section" id="about" aria-labelledby="about-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">01 / About</p>
        <div>
          <h2 id="about-heading">Driven by logic.<br />Built for impact.</h2>
          <p className="section-subtitle">Theory matters most when it turns into working software.</p>
        </div>
      </div>
      <div className="about-grid" data-reveal>
        <div className="about-copy">
          {site.about.story.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <aside className="about-aside">
        </aside>
      </div>
    </section>
  );
}
