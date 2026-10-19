"use client";

import { FormEvent, useState } from "react";

import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete every field.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    setStatus("Gmail should open with a pre-filled draft. Review it, then send to complete your message.");
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(site.identity.email)}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
