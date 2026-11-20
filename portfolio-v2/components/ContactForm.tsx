"use client";

import { type FormEvent, useState } from "react";

import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState<{ gmailUrl: string; mailtoUrl: string } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setDraft(null);
      setStatus("Please complete every field.");
      return;
    }

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    const gmailParams = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: site.identity.email,
      su: subject,
      body,
    });
    const mailtoParams = new URLSearchParams({ subject, body });

    setDraft({
      gmailUrl: `https://mail.google.com/mail/?${gmailParams.toString()}`,
      mailtoUrl: `mailto:${site.identity.email}?${mailtoParams.toString()}`,
    });
    setStatus("Your message is ready. Choose where to open it, then send it from your email app.");
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onChange={() => {
        setDraft(null);
        setStatus("");
      }}
    >
      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Name" />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Your email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="contact-message">What’s on your mind?</label>
        <textarea id="contact-message" name="message" required maxLength={3000} placeholder="A few details about the opportunity or project…" />
      </div>
      <div>
        <button type="submit" className="button button--primary">Prepare email <span aria-hidden="true">↗</span></button>
        <p className="form-hint">This prepares an email draft; it won’t send until you press Send in your email app.</p>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
        {draft && (
          <div className="contact-draft-links">
            <a className="button button--secondary" href={draft.gmailUrl} target="_blank" rel="noreferrer">Open Gmail draft</a>
            <a className="button button--secondary" href={draft.mailtoUrl}>Open email app</a>
          </div>
        )}
      </div>
    </form>
  );
}
