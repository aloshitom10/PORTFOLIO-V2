import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero__title" data-reveal>
        <span>I'm Aloshi</span>
        <span>Tom Shijo<span className="hero__period">.</span></span>
      </h1>
      <div className="hero__bottom" data-reveal>
        <p className="hero__value">
          {site.hero.tagline}
        </p>
      </div>
    </section>
  );
}
