// Sends transactional email through Resend's HTTP API (https://resend.com).
// Without a verified domain, Resend only delivers to the address the Resend
// account was created with, from onboarding@resend.dev.

const DEFAULT_TO = "deepak.lnwebwork@gmail.com";
const DEFAULT_FROM = "Bunch website <onboarding@resend.dev>";

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function sendSubmissionEmail({
  subject,
  fields,
  replyTo,
}: {
  subject: string;
  fields: [label: string, value: string][];
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#64636b;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:8px 0;color:#0c0c0e;font-weight:600">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5"><p style="margin:0 0 16px">${escapeHtml(subject)}</p><table style="border-collapse:collapse">${rows}</table></div>`;
  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_EMAIL_FROM || DEFAULT_FROM,
      to: (process.env.CONTACT_EMAIL_TO || DEFAULT_TO)
        .split(",")
        .map((address) => address.trim())
        .filter(Boolean),
      reply_to: replyTo,
      subject,
      html,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Resend rejected the email", response.status, await response.text());
  }
  return response.ok;
}
