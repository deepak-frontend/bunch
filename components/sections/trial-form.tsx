"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function makeSubdomain(companyName: string) {
  return companyName
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

export function TrialForm() {
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [subdomainEdited, setSubdomainEdited] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateCompany(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setCompanyName(value);
    if (!subdomainEdited) setSubdomain(makeSubdomain(value));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string | boolean> = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        String(value),
      ]),
    );
    payload.companyName = companyName;
    payload.subdomain = subdomain;
    payload.termsAccepted = formData.get("termsAccepted") === "on";
    payload.privacyAccepted = formData.get("privacyAccepted") === "on";
    const response = await fetch("/api/trial", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };
    setSubmitting(false);
    setSubmitted(response.ok && Boolean(result.success));
    setMessage(
      result.message ??
        (response.ok ? "Your request was received." : "Please try again."),
    );
  }

  return (
    <form className="trial-form" onSubmit={submit}>
      {submitted ? (
        <div className="form-success" role="status">
          <CheckCircle2 size={20} />
          <span>{message}</span>
        </div>
      ) : (
        <>
          <div className="trial-form-grid">
            <div>
              <label htmlFor="trial-name">Your name</label>
              <input
                id="trial-name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="trial-email">Work email</label>
              <input
                id="trial-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>
            <div>
              <label htmlFor="trial-phone">Phone / WhatsApp</label>
              <input
                id="trial-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={7}
                maxLength={24}
              />
            </div>
            <div>
              <label htmlFor="trial-company">Company name</label>
              <input
                id="trial-company"
                name="companyName"
                value={companyName}
                onChange={updateCompany}
                autoComplete="organization"
                required
                minLength={2}
                maxLength={120}
              />
            </div>
          </div>
          <label htmlFor="trial-subdomain">Workspace address</label>
          <div className="subdomain-field">
            <input
              id="trial-subdomain"
              name="subdomain"
              value={subdomain}
              onChange={(event) => {
                setSubdomainEdited(true);
                setSubdomain(makeSubdomain(event.currentTarget.value));
              }}
              required
              minLength={3}
              maxLength={40}
              pattern="[a-z0-9]+(-[a-z0-9]+)*"
              autoCapitalize="none"
              autoCorrect="off"
            />
            <span>.mybunch.ai</span>
          </div>
          <label htmlFor="trial-referral">
            Referral code <span className="optional-label">Optional</span>
          </label>
          <input id="trial-referral" name="referralCode" maxLength={64} />
          <div className="trial-consents">
            <label>
              <input name="termsAccepted" type="checkbox" required />
              <span>
                I agree to the{" "}
                <Link href="/terms-of-service/">Terms of Service</Link>.
              </span>
            </label>
            <label>
              <input name="privacyAccepted" type="checkbox" required />
              <span>
                I have read the{" "}
                <Link href="/privacy-policy/">Privacy Policy</Link>.
              </span>
            </label>
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="trial-website">Leave this field empty</label>
            <input
              id="trial-website"
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
            {submitting ? "Creating your request..." : "Start free trial"}
            <ArrowRight size={16} />
          </button>
          <p className="form-message" aria-live="polite">
            {message}
          </p>
        </>
      )}
    </form>
  );
}
