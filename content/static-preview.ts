import { homeDefaults } from "@/content/site/home";
import { catchAllRoutes } from "@/lib/site-routes";
import type { SiteSettings } from "@/sanity/queries";

export const useStaticPreview =
  process.env.NODE_ENV === "development" &&
  process.env.BUNCH_CONTENT_MODE !== "sanity";

export const previewSettings: SiteSettings = {
  moduleCount: 5,
  pricing: {
    monthlyAmount: 4900,
    annualAmount: 49980,
    taxRatePercent: 18,
    trialDays: 14,
  },
};

// The homepage preview uses the same defaults Sanity falls back to.
export const previewHome = homeDefaults;

const routeNames: Record<string, string> = {
  "/bunzo/": "Bunzo AI",
  "/modules/lead-management/": "Lead Management",
  "/modules/client-management/": "Client Management",
  "/modules/task-management/": "Task Management",
  "/modules/human-resource-management/": "Human Resource Management",
  "/modules/project-management/": "Project Management",
  "/industries/education-coaching/": "Education & Coaching",
  "/industries/healthcare-clinics/": "Healthcare Clinics",
  "/industries/recruitment-staffing/": "Recruitment & Staffing",
  "/industries/manufacturing/": "Manufacturing",
  "/industries/marketing-it-digital-agencies/": "Marketing, IT & Digital Agencies",
  "/industries/real-estate/": "Real Estate",
  "/industries/insurance-agencies/": "Insurance Agencies",
  "/pricing/": "Pricing",
  "/compare-hub/": "Compare Bunch",
  "/enterprise/": "Enterprise",
  "/about/": "About Bunch",
  "/blogs/": "Bunch Journal",
  "/book-a-discovery-call/": "Book a discovery call",
  "/terms-of-service/": "Terms of Service",
  "/privacy-policy/": "Privacy Policy",
  "/cookie-policy/": "Cookie Policy",
};

export interface StaticPreviewPage {
  title: string;
  description?: string;
  ownerReviewRequired?: boolean;
  reviewNote?: string;
  body?: string;
}

export function getStaticPreviewPage(
  route: string,
): StaticPreviewPage | null {
  const title = routeNames[route];
  if (!title) return null;

  const description =
    route === "/bunzo/"
      ? previewHome.bunzoDescription
      : route === "/pricing/"
        ? "One flat price for unlimited users, with all modules included."
        : route === "/blogs/"
          ? "No articles are published yet. Check back soon."
          : route === "/terms-of-service/" || route === "/privacy-policy/" || route === "/cookie-policy/"
            ? "Approved policy content will be published here."
            : "Bring your team's work together in one connected business workspace.";
  const ownerReviewRequired = route === "/modules/project-management/";
  const reviewNote = ownerReviewRequired
    ? "Description pending owner review. The incorrect attendance copy has been removed."
    : undefined;

  return {
    title,
    description,
    ownerReviewRequired,
    reviewNote,
    body: route === "/pricing/" ? "Rs 4,900/month or Rs 49,980/year, excluding 18% GST. 14-day free trial, no card required." : undefined,
  };
}

export function staticRouteParams() {
  return catchAllRoutes
    .filter((route) => route !== "/")
    .map((route) => ({ slug: route.split("/").filter(Boolean) }));
}
