import type { SubmissionEmail } from "./email";
import type { ContactFormData } from "./forms";

type DemoRequest = { name: string; email: string; phone: string };
type Context = { page: string; submittedAt: Date };

// WhatsApp links need the number with its country code; a bare 10-digit
// number is treated as Indian (+91).
function whatsappNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}

const capitalise = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

// The parts every form email shares: contact fields, reply/call/WhatsApp
// buttons, and the page/time footer.
function personEmail(
  { name, email, phone }: DemoRequest,
  { page, submittedAt }: Context,
) {
  const displayName = name.split(" ").map(capitalise).join(" ");
  const firstName = capitalise(name.split(" ")[0]);
  const telephone = phone.replace(/[^\d+]/g, "");
  const time = submittedAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  return {
    displayName,
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

export function demoRequestEmail(data: DemoRequest, context: Context): SubmissionEmail {
  const { displayName, ...person } = personEmail(data, context);
  return {
    ...person,
    subject: `New discovery call request from ${displayName}`,
    preview: `${displayName} · ${data.phone} · ${data.email}`,
    eyebrow: "New discovery call request",
    title: `${displayName} wants to see Bunch`,
  };
}

export function contactRequestEmail(data: ContactFormData, context: Context): SubmissionEmail {
  const { displayName, fields, ...person } = personEmail(data, context);
  return {
    ...person,
    subject: `New enquiry from ${displayName}, ${data.company}`,
    preview: `${data.company} · ${data.industry} · ${data.teamSize}`,
    eyebrow: "New contact enquiry",
    title: `${displayName} from ${data.company}`,
    fields: [
      ...fields,
      { label: "Company", value: data.company },
      { label: "Industry", value: data.industry },
      { label: "Team size", value: data.teamSize },
      ...(data.message ? [{ label: "Message", value: data.message }] : []),
    ],
  };
}
