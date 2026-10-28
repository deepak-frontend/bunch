import type { SubmissionEmail } from "./email";

type DemoRequest = { name: string; email: string; phone: string };

// WhatsApp links need the number with its country code; a bare 10-digit
// number is treated as Indian (+91).
function whatsappNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}

export function demoRequestEmail(
  { name, email, phone }: DemoRequest,
  { page, submittedAt }: { page: string; submittedAt: Date },
): SubmissionEmail {
  const capitalise = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
  const displayName = name.split(" ").map(capitalise).join(" ");
  const firstName = capitalise(name.split(" ")[0]);
  const telephone = phone.replace(/[^\d+]/g, "");
  const time = submittedAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  return {
    subject: `New discovery call request from ${displayName}`,
    preview: `${displayName} · ${phone} · ${email}`,
    eyebrow: "New discovery call request",
    title: `${displayName} wants to see Bunch`,
    replyTo: email,
    fields: [
      { label: "Name", value: name },
      { label: "Work email", value: email, href: `mailto:${email}` },
      { label: "Phone / WhatsApp", value: phone, href: `tel:${telephone}` },
    ],
    actions: [
      {
        label: `Reply to ${firstName}`,
        href: `mailto:${email}?subject=${encodeURIComponent("Your Bunch discovery call")}`,
        primary: true,
      },
      { label: "Call", href: `tel:${telephone}` },
      { label: "WhatsApp", href: `https://wa.me/${whatsappNumber(phone)}` },
    ],
    meta: [
      { label: "Page", value: page.replace(/^https?:\/\//, ""), href: page },
      { label: "Received", value: `${time} IST` },
    ],
  };
}
