export const marketingRoutes = [
  "/",
  "/bunzo/",
  "/modules/lead-management/",
  "/modules/client-management/",
  "/modules/task-management/",
  "/modules/human-resource-management/",
  "/modules/project-management/",
  "/industries/education-coaching/",
  "/industries/healthcare-clinics/",
  "/industries/recruitment-staffing/",
  "/industries/manufacturing/",
  "/industries/marketing-it-digital-agencies/",
  "/industries/real-estate/",
  "/industries/insurance-agencies/",
  "/pricing/",
  "/compare-hub/",
  "/enterprise/",
  "/about/",
  "/case-studies/",
  "/blogs/",
  "/book-a-discovery-call/",
  "/terms-of-service/",
  "/privacy-policy/",
  "/cookie-policy/",
] as const;

// Routes rendered by their own page files rather than the [...slug] catch-all.
const dedicatedPrefixes = [
  "/",
  "/bunzo/",
  "/modules/",
  "/industries/",
  "/pricing/",
  "/compare-hub/",
  "/enterprise/",
  "/about/",
  "/case-studies/",
  "/blogs/",
  "/book-a-discovery-call/",
  "/start-free-trial/",
];

export function isDedicatedRoute(route: string) {
  return dedicatedPrefixes.some((prefix) =>
    prefix === "/" || prefix === "/blogs/" ? route === prefix : route.startsWith(prefix),
  );
}

export const catchAllRoutes = marketingRoutes.filter(
  (route) => !isDedicatedRoute(route),
);

export function canonicalPath(slugs: string[]) {
  return `/${slugs.join("/")}/`;
}
