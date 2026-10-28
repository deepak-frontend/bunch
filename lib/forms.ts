import { z } from "zod";
import { contactIndustries, contactTeamSizes } from "./contact-options";

const emailSchema = z
  .string()
  .trim()
  .email({ error: "Please enter a valid email address." })
  .max(254, { error: "Please enter a shorter email address." });
const phoneSchema = z
  .string()
  .trim()
  .min(7, { error: "Please enter a valid phone number." })
  .max(24, { error: "Please enter a valid phone number." })
  .regex(/^[+()\d\s.-]+$/, { error: "Please enter a valid phone number." });
const nameSchema = z
  .string()
  .trim()
  .min(2, { error: "Please enter your name." })
  .max(100, { error: "Please enter a shorter name." });
// Hidden from people; anything typed here marks the request as a bot. It must
// pass validation so the route can quietly accept and discard it.
const honeypotSchema = z.string().max(500).optional().default("");

export const demoFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  website: honeypotSchema,
});

export const trialFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  companyName: z.string().trim().min(2).max(120),
  subdomain: z
    .string()
    .trim()
    .min(3)
    .max(40)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  referralCode: z.string().trim().max(64).optional().default(""),
  termsAccepted: z.literal(true),
  privacyAccepted: z.literal(true),
  website: honeypotSchema,
});

export const contactFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  company: z
    .string()
    .trim()
    .min(2, { error: "Please enter your company name." })
    .max(120, { error: "Please enter a shorter company name." }),
  industry: z.enum(contactIndustries, { error: "Please choose your industry." }),
  teamSize: z.enum(contactTeamSizes, { error: "Please choose your team size." }),
  message: z
    .string()
    .trim()
    .max(2000, { error: "Please keep your message under 2,000 characters." })
    .optional()
    .default(""),
  website: honeypotSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type DemoFormData = z.infer<typeof demoFormSchema>;
export type TrialFormData = z.infer<typeof trialFormSchema>;

export function validationMessage(error: z.ZodError) {
  return (
    error.issues[0]?.message ?? "Please check the information and try again."
  );
}
