"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { contactIndustries, contactTeamSizes } from "@/lib/contact-options";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      setSubmitted(response.ok && Boolean(result.success));
      setMessage(result.message ?? (response.ok ? "Thanks. We will be in touch." : "Please try again."));
    } catch {
      setMessage("We could not send your message. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={20} />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-grid">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-phone">Phone</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={24} placeholder="e.g. 9876543210" />
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="contact-company">Company name</label>
          <input id="contact-company" name="company" autoComplete="organization" required minLength={2} maxLength={120} placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="contact-industry">Your industry</label>
          <select id="contact-industry" name="industry" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {contactIndustries.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-team">Team size</label>
          <select id="contact-team" name="teamSize" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {contactTeamSizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="contact-form-wide">
          <label htmlFor="contact-message">
            Message <span className="optional-label">Optional</span>
          </label>
          <textarea id="contact-message" name="message" rows={5} maxLength={2000} placeholder="Tell us about what you want to automate..." />
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <small>
        We&apos;ll only use your info to respond to your inquiry. See our{" "}
        <Link href="/privacy-policy/">Privacy Policy</Link>.
      </small>
      <button className="button button-primary button-lg" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send message"}
        <ArrowRight size={16} />
      </button>
      <p className="form-message" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
