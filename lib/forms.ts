import { z } from "zod";

const emailSchema = z.string().trim().email().max(254);
const phoneSchema = z
  .string()
  .trim()
  .min(7)
  .max(24)
  .regex(/^[+()\d\s.-]+$/);

export const demoFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: emailSchema,
  phone: phoneSchema,
  website: z.string().max(0).optional().default(""),
});

export const trialFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
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
  website: z.string().max(0).optional().default(""),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
export type TrialFormData = z.infer<typeof trialFormSchema>;

export function validationMessage(error: z.ZodError) {
  return (
    error.issues[0]?.message ?? "Please check the information and try again."
  );
}
