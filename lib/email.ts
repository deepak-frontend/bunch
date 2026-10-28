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

export type EmailField = { label: string; value: string; href?: string };
export type EmailAction = { label: string; href: string; primary?: boolean };

export type SubmissionEmail = {
  subject: string;
  /** Short line shown next to the subject in the inbox list. */
  preview: string;
  eyebrow: string;
  title: string;
  fields: EmailField[];
  actions?: EmailAction[];
  meta?: EmailField[];
  replyTo?: string;
};

// Email clients ignore stylesheets and modern layout, so this is a 600px
// table layout with inline styles and system fonts.
export function renderSubmissionEmail({
  preview,
  eyebrow,
  title,
  fields,
  actions = [],
  meta = [],
}: SubmissionEmail) {
  const font = "font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;";
  const link = (field: EmailField) =>
    field.href
      ? `<a href="${escapeHtml(field.href)}" style="color:#0c0c0e;text-decoration:underline;text-decoration-color:#a7d61a;">${escapeHtml(field.value)}</a>`
      : escapeHtml(field.value);

  const rows = fields
    .map(
      (field, index) => `
        <tr>
          <td style="${font}padding:16px 0;${index ? "border-top:1px solid #ece9df;" : ""}">
            <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#96948c;font-weight:600;">${escapeHtml(field.label)}</div>
            <div style="font-size:17px;line-height:1.4;color:#0c0c0e;font-weight:600;padding-top:4px;word-break:break-word;">${link(field)}</div>
          </td>
        </tr>`,
    )
    .join("");

  const buttons = actions
    .map(
      (action) => `
        <td style="padding:0 8px 8px 0;">
          <a href="${escapeHtml(action.href)}" style="${font}display:inline-block;padding:12px 20px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;${
            action.primary
              ? "background:#0c0c0e;color:#ffffff;border:1px solid #0c0c0e;"
              : "background:#ffffff;color:#0c0c0e;border:1px solid #d9d6cc;"
          }">${escapeHtml(action.label)}</a>
        </td>`,
    )
    .join("");

  const metaRows = meta
    .map(
      (field) =>
        `<span style="white-space:nowrap;">${escapeHtml(field.label)}: <span style="color:#3a3a40;">${link(field)}</span></span>`,
    )
    .join(`<span style="color:#d9d6cc;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>`);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f5f3ec;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f5f3ec;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ec;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
        <tr>
          <td style="padding:0 4px 20px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="width:32px;height:32px;background:#0c0c0e;border-radius:9px;text-align:center;vertical-align:middle;${font}font-size:19px;font-weight:800;color:#d2ff4d;line-height:32px;">b</td>
                <td style="${font}padding-left:10px;font-size:20px;font-weight:800;letter-spacing:-0.5px;color:#0c0c0e;">bunch</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;border:1px solid #e6e2d6;border-radius:24px;overflow:hidden;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#0c0c0e;padding:28px 32px;">
                  <div style="${font}font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:#d2ff4d;font-weight:700;">● ${escapeHtml(eyebrow)}</div>
                  <div style="${font}font-size:26px;line-height:1.2;color:#ffffff;font-weight:700;letter-spacing:-0.5px;padding-top:10px;">${escapeHtml(title)}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 32px 8px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
                </td>
              </tr>
              ${
                buttons
                  ? `<tr><td style="padding:8px 32px 24px;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>${buttons}</tr></table></td></tr>`
                  : ""
              }
              ${
                metaRows
                  ? `<tr><td style="${font}background:#faf9f5;border-top:1px solid #ece9df;padding:16px 32px;font-size:12.5px;line-height:1.8;color:#96948c;">${metaRows}</td></tr>`
                  : ""
              }
            </table>
          </td>
        </tr>
        <tr>
          <td style="${font}padding:20px 4px 0;font-size:12px;line-height:1.6;color:#96948c;text-align:center;">
            Sent automatically by the form on the Bunch website. Reply to this email to answer the person directly.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export async function sendSubmissionEmail(email: SubmissionEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const text = [
    email.title,
    "",
    ...email.fields.map((field) => `${field.label}: ${field.value}`),
    "",
    ...(email.meta ?? []).map((field) => `${field.label}: ${field.value}`),
  ].join("\n");

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
      reply_to: email.replyTo,
      subject: email.subject,
      html: renderSubmissionEmail(email),
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
