import Link from "next/link";

import { PortfolioEffects } from "@/components/PortfolioEffects";
import { SiteHeader } from "@/components/SiteHeader";
import { Colophon } from "@/components/sections/Colophon";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Hero } from "@/components/sections/Hero";
import { Organisations } from "@/components/sections/Organisations";
import { Timeline } from "@/components/sections/Timeline";
import { Toolbox } from "@/components/sections/Toolbox";
import { Work } from "@/components/sections/Work";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <PortfolioEffects />
      <SiteHeader />
      <main id="main-content">
        <div className="hero-stage">
          <div className="portfolio-shell hero-stage__content">
            <Hero />
          </div>
          <div className="ticker" aria-label="Full Stack Dev — Designer — Digital Creator">
            <div className="ticker__track" aria-hidden="true">
              {Array.from({ length: 2 }, (_, loop) => (
                <div className="ticker__group" key={loop}>
                  {Array.from({ length: 8 }).flatMap((_, repeat) =>
                    ["Full Stack Dev", "—", "Designer", "—", "Digital Creator", "—"].map(
                      (item, index) => <span key={`${repeat}-${index}`}>{item}</span>,
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="portfolio-shell">
          <Colophon />
          <Timeline />
          <Work />
          <Toolbox />
          <Credentials />
          <Organisations />
          <Contact />
        </div>
      </main>
      <footer className="portfolio-shell site-footer">
        <div className="footer-column footer-brand">
          <Link href="#top" className="footer-wordmark" aria-label={`${site.identity.name}, back to top`}>
            ALOSHI<br />TOM SHIJO<span>.</span>
          </Link>
          <p>CSE student at SJCET.</p>
          <p>© 2026 Aloshi Tom Shijo.</p>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href={`mailto:${site.identity.email}`}>{site.identity.email}</a>
        </div>
        <div className="footer-column">
          <h2>Socials</h2>
          <a href={site.identity.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={site.identity.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/RESUME_updated.pdf" target="_blank" rel="noreferrer">Resume ↓</a>
        </div>
        <div className="footer-column">
          <h2>Sitemap</h2>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
