import { defineField, defineType } from "sanity";
import { contactIndustries, contactTeamSizes } from "@/lib/contact-options";

export const leadStatuses = [
  { title: "New", value: "new" },
  { title: "Contacted", value: "contacted" },
  { title: "Qualified", value: "qualified" },
  { title: "Won", value: "won" },
  { title: "Not a fit", value: "closed" },
];

const formLabels: Record<string, string> = {
  contact: "Contact us",
  demo: "Discovery call",
};

// Submitted details are written by the website and kept read-only; the team
// only works the status and notes.
const submitted = { readOnly: true, group: "submission" } as const;

export const lead = defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  groups: [
    { name: "submission", title: "Submission", default: true },
    { name: "followUp", title: "Follow-up" },
  ],
  fields: [
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      group: ["submission", "followUp"],
      options: { list: leadStatuses, layout: "radio", direction: "horizontal" },
      initialValue: "new",
    }),
    defineField({
      name: "notes",
      type: "text",
      title: "Internal notes",
      rows: 4,
      group: ["submission", "followUp"],
    }),
    defineField({
      name: "formType",
      type: "string",
      title: "Form",
      options: { list: Object.entries(formLabels).map(([value, title]) => ({ title, value })) },
      ...submitted,
    }),
    defineField({ name: "name", type: "string", title: "Name", ...submitted }),
    defineField({ name: "email", type: "string", title: "Email", ...submitted }),
    defineField({ name: "phone", type: "string", title: "Phone", ...submitted }),
    defineField({ name: "company", type: "string", title: "Company", ...submitted }),
    defineField({
      name: "industry",
      type: "string",
      title: "Industry",
      options: { list: [...contactIndustries] },
      ...submitted,
    }),
    defineField({
      name: "teamSize",
      type: "string",
      title: "Team size",
      options: { list: [...contactTeamSizes] },
      ...submitted,
    }),
    defineField({ name: "message", type: "text", title: "Message", rows: 5, ...submitted }),
    defineField({ name: "page", type: "string", title: "Submitted from", ...submitted }),
    defineField({ name: "submittedAt", type: "datetime", title: "Submitted at", ...submitted }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      company: "company",
      formType: "formType",
      status: "status",
      submittedAt: "submittedAt",
    },
    prepare({ name, company, formType, status, submittedAt }) {
      const date = submittedAt
        ? new Date(submittedAt).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Kolkata",
          })
        : "";
      const statusTitle =
        leadStatuses.find((item) => item.value === status)?.title ?? "New";
      return {
        title: company ? `${name} · ${company}` : name,
        subtitle: [formLabels[formType] ?? formType, statusTitle, date]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
