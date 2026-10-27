"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function DemoForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/demo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };
    setSubmitting(false);
    setSubmitted(response.ok && Boolean(result.success));
    setMessage(
      result.message ??
        (response.ok ? "Thanks. We will be in touch." : "Please try again."),
    );
  }

  return (
    <form className="demo-form" onSubmit={submit}>
      {submitted ? (
        <div className="form-success" role="status">
          <CheckCircle2 size={20} />
          <span>{message}</span>
        </div>
      ) : (
        <>
          <label htmlFor="demo-name">Your name</label>
          <input
            id="demo-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
          <div className="demo-form-row">
            <div>
              <label htmlFor="demo-email">Work email</label>
              <input
                id="demo-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>
            <div>
              <label htmlFor="demo-phone">Phone / WhatsApp</label>
              <input
                id="demo-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={7}
                maxLength={24}
              />
            </div>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="demo-website">Leave this field empty</label>
            <input
              id="demo-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            className="button button-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Book a discovery call"}
            <ArrowRight size={16} />
          </button>
          <small>
            By submitting, you agree to our{" "}
            <Link href="/privacy-policy/">Privacy Policy</Link>.
          </small>
          <p className="form-message" aria-live="polite">
            {message}
          </p>
        </>
      )}
    </form>
  );
}
