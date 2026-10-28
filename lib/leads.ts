import { createClient } from "next-sanity";
import { sanityEnv } from "@/sanity/env";

export type LeadInput = {
  formType: "contact" | "demo";
  name: string;
  email: string;
  phone: string;
  company?: string;
  industry?: string;
  teamSize?: string;
  message?: string;
  page: string;
  submittedAt: Date;
};

// Only these fields are stored, so extras such as the honeypot never land in Sanity.
const leadFields = [
  "formType",
  "name",
  "email",
  "phone",
  "company",
  "industry",
  "teamSize",
  "message",
  "page",
] as const;

const token = process.env.SANITY_API_WRITE_TOKEN;

export function isLeadStoreConfigured() {
  return Boolean(sanityEnv.projectId && token);
}

const writeClient = createClient({
  projectId: sanityEnv.projectId || "placeholder",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: false,
  token,
});

// IDs under the "leads." path are never returned to unauthenticated requests,
// so contact details stay private even though the dataset is publicly readable.
export async function saveLead(lead: LeadInput) {
  if (!isLeadStoreConfigured()) return false;
  await writeClient.create({
    _id: `leads.${crypto.randomUUID()}`,
    _type: "lead",
    status: "new",
    ...Object.fromEntries(
      leadFields.flatMap((field) => (lead[field] ? [[field, lead[field]]] : [])),
    ),
    submittedAt: lead.submittedAt.toISOString(),
  });
  return true;
}
