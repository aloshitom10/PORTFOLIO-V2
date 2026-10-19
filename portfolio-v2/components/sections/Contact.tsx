import { ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section className="section-shell portfolio-section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">07 / Contact</p>
        <div>
          <h2 id="contact-heading">Let’s build something.</h2>
          <p className="section-subtitle">Whether you have a project, a role to fill, or just want to talk code, I’m open to connecting.</p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-copy" data-reveal>
          <p>Open to junior full-stack roles, freelance work, and conversations about web development.</p>
          <a className="contact-email" href={`mailto:${site.identity.email}`}>
            {site.identity.email}<ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="contact-links mono">
            <a href={`tel:${site.identity.phone.replaceAll(" ", "")}`}>{site.identity.phone}</a>
            <a href={site.identity.linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={site.identity.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
