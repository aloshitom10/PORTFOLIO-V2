import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero__title">
        <span data-reveal>I'm Aloshi</span>
        <span data-reveal data-reveal-delay="1">Tom Shijo<span className="hero__period">.</span></span>
      </h1>
      <div className="hero__bottom" data-reveal data-reveal-delay="2">
        <p className="hero__value">
          {site.hero.tagline}
        </p>
      </div>
    </section>
  );
}
