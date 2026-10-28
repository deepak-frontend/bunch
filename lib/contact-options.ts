// Dropdown options for the contact form, shared by the form (client) and
// its validation (server). Kept free of imports so the browser bundle stays small.
export const contactIndustries = [
  "Construction & Real Estate",
  "Manufacturing",
  "Wealth Management",
  "Insurance",
  "Accounting & Finance",
  "Event Management",
  "Healthcare & Clinics",
  "Other / Multiple",
] as const;

export const contactTeamSizes = [
  "1–10 people",
  "11–50 people",
  "51–200 people",
] as const;
