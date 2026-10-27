import type {
  CollectionItem,
  FaqItem,
  HomePageContent,
  SiteSettings,
} from "@/sanity/queries";

// Homepage copy as published on the live site. It is the Studio's initial
// value for a new Home page document, the seed content, and the fallback for
// any field an editor leaves empty.
// Every field present: what the page renders once Sanity values are merged in.
export type ResolvedHomeContent = Required<
  Omit<HomePageContent, "socialImage" | "heroImage">
> & {
  socialImage?: string;
  heroImage?: HomePageContent["heroImage"];
};

export const homeDefaults: ResolvedHomeContent = {
  hiddenSections: [],
  showTicker: true,
  tickerItems: [],
  heroEyebrow: "Business, in sync",
  heroTitle: "One platform. Your whole business in sync.",
  heroDescription:
    "Sales, tasks, HR, payroll and operations connected with Bunzo AI.",
  heroPrimaryLabel: "Start free trial",
  heroPrimaryLink: "/start-free-trial/",
  heroSecondaryLabel: "See what's included",
  heroSecondaryLink: "#modules",
  heroTrustPoints: [
    "{moduleCount} modules",
    "Unlimited users",
    "₹{monthlyPrice}/month flat",
  ],
  challengeEyebrow: "The Challenge",
  challengeTitle: "Growing shouldn't cost this much?",
  challengeDescription:
    "Most small and medium businesses in India run on a patchwork of tools one for tasks, another for HR, a spreadsheet for leads, WhatsApp for everything else. Each new hire means another login, another subscription, another bill that grows faster than the team does. We built Bunch to break that pattern one flat price, however big your team gets.",
  challengePoints: [
    "You hired 5 more people, and the software bill jumped again.",
    "Your team logs into six different apps just to get through one workday.",
    "You find out an order's stuck only when the client calls to ask.",
    "Payroll and attendance live in separate tools that never sync.",
    "Nobody knows which leads are actually being followed up.",
  ],
  stepsEyebrow: "A simple start",
  stepsTitle: "Sign up. Add your team. You're already running.",
  stepsDescription: "Three steps to get everyone working from one place.",
  steps: [
    { title: "Sign up", description: "Create your workspace and choose its address." },
    { title: "Add your team", description: "Invite everyone who helps your business move." },
    { title: "You're running", description: "Bring daily work together across your business." },
  ],
  pricingEyebrow: "Straightforward pricing",
  pricingTitle: "One flat price. Everything included.",
  pricingDescription:
    "No tiers to climb, no features locked away pay monthly or save on yearly.",
  monthlyPlanLabel: "Monthly",
  monthlyPlanTitle: "Bunch - Monthly",
  monthlyPlanDescription: "Everything your business needs, month to month.",
  monthlyInclusions: ["Unlimited users", "All {moduleCount} modules included", "AI agent included"],
  annualPlanLabel: "Yearly",
  annualPlanTitle: "Bunch - Yearly",
  annualPlanDescription: "A lower monthly equivalent, billed once a year.",
  annualPopularLabel: "Best value",
  annualInclusions: [
    "Unlimited users",
    "All {moduleCount} modules included",
    "Save ₹8,820/year",
    "AI agent included",
    "Priority support",
    "Locked-in rate for 12 months",
  ],
  taxDisclaimer: "excludes {taxRate}% GST",
  pricingButtonLabel: "Start free trial",
  trialNotes: [
    "{trialDays}-day free trial",
    "No card required",
    "Subscribe anytime from billing",
  ],
  modulesEyebrow: "What's included",
  modulesTitle: "{moduleCount} business modules. One Bunch subscription.",
  modulesDescription:
    "Most CRMs hold back their best features for a higher tier, and charge extra the moment you need HR, payroll, or automation on top of basic contact management. Bunch doesn't work that way. Every module ships active for every user on the plan, whether you're a five-person team or a fifty-person one.",
  bunzoEyebrow: "Bunzo AI",
  bunzoTitle: "An agent that understands your business as well as you do",
  bunzoDescription:
    "Bunzo AI gives you a direct way to work with the information already inside your Bunch workspace. Ask questions naturally, get precise answers without navigating through multiple records or reports, and turn the next step into a task.",
  bunzoButtonLabel: "Explore Bunzo AI agent",
  bunzoButtonLink: "/bunzo/",
  bunzoChatName: "Bunzo AI",
  bunzoChatStatus: "Knows your workspace",
  bunzoPrompt: "Which leads need attention today?",
  bunzoAnswer:
    "6 leads have had no follow-up in the last 3 days. 2 are marked high priority.",
  bunzoAction: "View those leads",
  bunzoInputPlaceholder: "Ask about your business...",
  testimonialsEyebrow: "Teams that trust Bunch",
  testimonialsTitle: "What Businesses Say",
  industriesEyebrow: "Industries",
  industriesTitle: "Built for your industry",
  industriesDescription:
    "Every industry has its own way of managing customers, employees, sales, tasks, and daily operations. Bunch brings these essential business functions together in one connected platform, so you can organize your workflows around the way your business actually works.",
  industriesNote:
    "* Every module adapts to your industry's workflow no extra setup required.",
  caseStudiesEyebrow: "Proof & credibility",
  caseStudiesTitle: "Real businesses, real results",
  caseStudiesDescription:
    "Ask us to prove it. Here's what changes when your sales, people, tasks, and daily operations work from one connected platform.",
  caseStudiesLinkLabel: "View all case studies",
  comparisonsEyebrow: "Comparison",
  comparisonsTitle: "How we stack up",
  comparisonsDescription:
    "See how a flat priced platform compares to per user CRM pricing.",
  comparisonHeaders: {
    feature: "Feature",
    bunch: "Bunch",
    spreadsheets: "Spreadsheets",
    bigin: "Bigin (Zoho)",
    zohoOne: "Zoho One",
  },
  comparisonFootnote: "",
  demoEyebrow: "Get started",
  demoTitle: "Let's set up your workspace",
  demoDescription:
    "Book a free demo or send us a message. We'll get back to you within one business day.",
  demoPoints: [
    "See all {moduleCount} modules live in your industry's context",
    "Get your questions on pricing and setup answered",
    "Walk away with a clear go-live date",
  ],
  demoNote:
    "15 minutes, no pressure just a walkthrough of Bunch and how it fits your team.",
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqDescription: "Clear answers, before you get started.",
  finalCtaTitle: "Bring your whole business into sync.",
  finalCtaDescription:
    "Get your team working from one connected workspace, at one flat price.",
  finalCtaButtonLabel: "Start free trial",
  finalCtaButtonLink: "/start-free-trial/",
  seoTitle: "Bunch | One platform for your whole business",
  seoDescription:
    "Bring sales, projects, HR, payroll, and operations together in one business platform with unlimited users and one flat price.",
};

const isBlank = (value: unknown) =>
  value === undefined ||
  value === null ||
  (typeof value === "string" && value.trim() === "") ||
  (Array.isArray(value) && value.length === 0);

// Sanity values win; anything missing or empty falls back to the default.
// `hiddenSections` and `showTicker` are kept as-is so editors can turn things off.
export function mergeHomeContent(content: HomePageContent | null): ResolvedHomeContent {
  const merged: Record<string, unknown> = { ...homeDefaults };
  for (const [key, value] of Object.entries(content ?? {})) {
    if (key.startsWith("_")) continue;
    if (key === "heroImage") {
      // An image field with no uploaded file comes back without a URL.
      if ((value as HomePageContent["heroImage"])?.url) merged[key] = value;
    } else if (key === "comparisonHeaders" && value && typeof value === "object") {
      merged[key] = { ...homeDefaults.comparisonHeaders, ...stripBlank(value as Record<string, unknown>) };
    } else if (key === "hiddenSections" || key === "showTicker" || !isBlank(value)) {
      merged[key] = value;
    }
  }
  return merged as unknown as ResolvedHomeContent;
}

function stripBlank(object: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(object).filter(([, value]) => !isBlank(value)));
}

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

// Replaces {moduleCount}, {monthlyPrice}, {annualPrice}, {annualMonthlyPrice},
// {taxRate} and {trialDays} with values from Site settings, so prices are
// typed once.
export function fillTokens(text: string, settings: SiteSettings) {
  const { monthlyAmount, annualAmount, taxRatePercent, trialDays } = settings.pricing;
  const tokens: Record<string, string> = {
    moduleCount: String(settings.moduleCount),
    monthlyPrice: inr.format(monthlyAmount),
    annualPrice: inr.format(annualAmount),
    annualMonthlyPrice: inr.format(Math.round(annualAmount / 12)),
    taxRate: String(taxRatePercent),
    trialDays: String(trialDays),
  };
  return text.replace(/\{(\w+)\}/g, (match, name: string) => tokens[name] ?? match);
}

const industryExcerpts: Record<string, string> = {
  "/industries/education-coaching/": "Connect student enquiries, admissions, batches, fee follow-ups, attendance, and faculty coordination in one organised workflow.",
  "/industries/healthcare-clinics/": "Connect patient enquiries, appointments, staff tasks, billing follow-ups, and daily clinic operations without relying on separate registers and spreadsheets.",
  "/industries/recruitment-staffing/": "Manage the complete candidate journey, from sourcing and screening to interviews, client submissions, placement, and recruiter follow-ups.",
  "/industries/manufacturing/": "Connect customer orders, production tasks, workforce attendance, payroll, and dispatch updates across your plant and back-office teams.",
  "/industries/marketing-it-digital-agencies/": "Bring leads, proposals, client projects, team tasks, retainers, invoices, and delivery updates into one connected agency workspace.",
  "/industries/real-estate/": "Track every property enquiry from the first conversation through site visits, follow-ups, unit selection, booking, and payment collection.",
  "/industries/insurance-agencies/": "Connect enquiries, quotations, policy servicing, claims-related tasks, client communication, and renewal follow-ups in one visible workflow.",
};

const moduleExcerpts: Record<string, string> = {
  "/modules/lead-management/": "Capture leads, assign them to the right team member, track follow-ups, and keep your sales pipeline organized.",
  "/modules/client-management/": "Manage client details, communication history, notes, and related activities without searching across different tools.",
  "/modules/task-management/": "Split the work into tasks and sub-tasks, hand out ownership, and watch progress move in real time.",
  "/modules/human-resource-management/": "Employee records, documents, onboarding and team structure in one place.",
  "/modules/project-management/": "Create reusable project templates and define exactly how your team should execute each type of project.",
};

const caseStudySummaries: Record<string, string> = {
  "Sharma & Associates": "An accounting firm moved its enquiries, client records, tasks and attendance into one Bunch workspace, so nothing depends on WhatsApp, email or a paper register.",
  "Meraki Events": "An event management team added Bunch's AI agent on top of its leads, tasks and client records, so anyone could ask a plain question and get a status answer in seconds.",
  "Aarav Industries": "Aarav Industries streamlined payroll operations by connecting biometric attendance directly with Payroll and HRMS in Bunch.",
};

export const homeSeedExcerpts = { industryExcerpts, moduleExcerpts, caseStudySummaries };

// Card lists shown until the matching Sanity documents exist.
export const homeModules: CollectionItem[] = [
  ["lead-management", "Lead Management"],
  ["client-management", "Client Management"],
  ["task-management", "Task Management"],
  ["human-resource-management", "Human Resource Management"],
  ["project-management", "Project Management"],
].map(([slug, title], index) => ({
  _id: `module-${slug}`,
  title,
  route: `/modules/${slug}/`,
  order: index + 1,
}));

export const homeIndustries: CollectionItem[] = [
  ["education-coaching", "Education & Coaching"],
  ["healthcare-clinics", "Healthcare Clinics"],
  ["recruitment-staffing", "Recruitment & Staffing"],
  ["manufacturing", "Manufacturing"],
  ["marketing-it-digital-agencies", "Marketing, IT & Digital Agencies"],
  ["real-estate", "Real Estate"],
  ["insurance-agencies", "Insurance Agencies"],
].map(([slug, title], index) => ({
  _id: `industry-${slug}`,
  title,
  route: `/industries/${slug}/`,
  order: index + 1,
}));

export const homeCaseStudies: CollectionItem[] = [
  ["case-sharma-associates", "Sharma & Associates", "63% fewer missed follow-ups"],
  ["case-meraki-events", "Meraki Events", "5.5 hrs saved weekly per coordinator"],
  ["case-aarav-industries", "Aarav Industries", "42% faster payroll close"],
].map(([_id, title, metric], index) => ({ _id, title, metric, order: index + 1 }));

// Homepage collections as published on the live site. Used whenever the
// matching Sanity collection is empty, and as the seed for those documents.

const rows: [string, string, string, string, string][] = [
  ["Pricing model", "Flat pricing with unlimited users", "Usually free or low-cost, depending on the tool and storage plan", "Per user, starting from ₹400/user/month", "₹1,500/employee/month under the all-employee plan"],
  ["Cost for 20 users/year*", "₹49,980", "₹0–₹15,000 approximately, depending on the spreadsheet plan", "Approximately ₹96,000", "Approximately ₹3,60,000"],
  ["Cost when the team doubles to 40", "₹49,980 - unchanged", "Usually unchanged or increases slightly based on storage and licences", "Approximately ₹1,92,000", "Approximately ₹7,20,000"],
  ["Tasks and sub-tasks", "Built in", "Must be created and managed manually", "Basic activities only", "Available through Zoho Projects"],
  ["HRMS and payroll", "Included", "Not available as a structured system; requires manual sheets and formulas", "Not available", "Available through Zoho People and Payroll"],
  ["Biometric attendance", "Included", "Not built in; requires manual entry or a third-party integration", "Not available", "Available through integrations"],
  ["Leads, clients and orders", "All three are built in", "Can be recorded manually, but there is no connected workflow", "Pipelines available, but no order tracking", "Available across separate applications"],
  ["Built-in AI agent", "Included for all users", "No dedicated business AI agent", "Not available", "Zia capabilities vary across applications"],
  ["WhatsApp integration", "Available as a paid add-on", "No native integration; requires third-party tools or manual updates", "Limited integration", "Available through an add-on"],
  ["Automation", "Connected workflows and automated processes", "Requires formulas, scripts or third-party automation tools", "Basic sales automation", "Available, but often spread across different Zoho applications"],
  ["Reporting and visibility", "Centralized, real-time dashboards", "Reports must be created and updated manually", "Sales-focused reports", "Advanced reporting across multiple applications"],
  ["Data consistency", "One connected source of business data", "High risk of duplicate, outdated or incorrect information", "Centralized mainly for sales data", "Data may be distributed across different applications"],
  ["Collaboration and accountability", "Clear ownership, activity tracking and status visibility", "Difficult to track ownership, edits and follow-ups consistently", "Primarily focused on sales-team activities", "Available across multiple applications"],
  ["Custom branding", "Included", "Limited to colours, logos and sheet formatting", "Not available", "Partial or portal-level branding"],
  ["Number of apps/tools to learn", "One unified platform", "Multiple spreadsheets, files and manual trackers", "One application, primarily for CRM", "More than 45 separate applications"],
  ["Best for", "Teams that want tasks, HR, sales, attendance and orders in one flat-priced platform", "Individuals or very small teams managing basic information through simple, manual processes", "Small teams that need a simple sales pipeline", "Larger organizations prepared to license employees across a broad software suite"],
];

export const homeComparisons: CollectionItem[] = rows.map(
  ([feature, bunch, spreadsheets, bigin, zohoOne], index) => ({
    _id: `comparison-${index + 1}`,
    order: index + 1,
    feature,
    bunch,
    spreadsheets,
    bigin,
    zohoOne,
  }),
);

const testimonials: [string, string, string, string][] = [
  ["Hannah", "HR Manager", "TalentBridge", "Payroll used to involve a lot of manual checking between attendance records and spreadsheets. With Bunch, our attendance and payroll workflows are connected, so the process is much cleaner. Our monthly payroll close is now around 40% faster, and HR spends considerably less time correcting attendance-related information."],
  ["Daniel Morgan", "Managing Director", "Elevate Services | United States", "We didn't need another complicated business platform. We needed something our team would actually use every day. Bunch has helped us bring sales, tasks, client information, and team operations into one system. It has made it much easier for me to see what's happening across the business without chasing updates."],
  ["Priya Nair", "COO", "Nair & Co Accounting", "Our biggest headache wasn't the amount of work it was keeping track of where everything stood. A client would call and we'd sometimes have to check email, WhatsApp, and a spreadsheet before we could answer properly. Bunch has given us one place to look. I can now see the client, related tasks, and follow-ups without asking three different people for an update."],
  ["Arjun Mehta", "Founder", "Meraki Events", "Events are never as simple as they look from the outside. There are vendors to coordinate, client requests coming in, deadlines moving around, and a hundred small tasks that can easily get forgotten. We started using Bunch to bring all of that into one workflow. What I like most is that my team can see what they own and what's coming next without me having to keep checking in with everyone."],
  ["Oliver Bennett", "Co-Founder", "GrowthLane | United Kingdom", "Before Bunch, our client work was spread across our CRM, spreadsheets, project tools and team chats. We moved our leads, clients and project tasks into Bunch, and the difference was immediate. Our team now spends around 4–5 fewer hours each week chasing updates, and I can see what's happening across our projects without asking for separate reports."],
  ["Divya Reddy", "COO", "Reddy Manufacturing", "I wasn't looking for another dashboard. I needed fewer questions coming to my desk. With Bunch, I can check the status of orders and tasks myself instead of waiting for someone to send me an update. Bunzo AI has been particularly useful when I need a quick answer- I can ask the question directly rather than digging through records."],
  ["Karan Bhatia", "VP Operations", "Bhatia Insurance Services", "Our HR team was spending too much time maintaining information in different places. Attendance was one system, employee details another, and payroll involved a lot of checking in between. Bunch has brought those processes much closer together. The monthly payroll routine is easier to manage now, and the team has fewer manual checks to deal with."],
  ["Meera Iyer", "HR Manager", "Iyer Healthcare Group", "What I appreciate about Bunch is that it doesn't require us to constantly think about the software. The team logs in, checks their work, updates what they need to update, and gets on with the day. I can still see what's happening without being involved in every small task. That's probably been the most useful part for us."],
  ["Sarah Mitchell", "Operations Director", "Apex Advisory | UAE", "We initially looked at Bunch because we wanted to reduce the number of tools our team was using. What stood out was that CRM, tasks, HR and payroll could sit under the same platform. We now have 25+ team members working from the same system without having to manage separate software accounts for every function. It has made our day-to-day operations noticeably easier."],
];

export const homeTestimonials: CollectionItem[] = testimonials.map(
  ([person, role, company, quote], index) => ({
    _id: `testimonial-${index + 1}`,
    order: index + 1,
    person,
    role,
    company,
    quote,
  }),
);

const faqs: [string, string][] = [
  ["What is Bunch and who is it built for?", "Bunch is an all-in-one business platform for small and growing businesses. It combines CRM, sales, HRMS, task management, payroll, attendance, orders, team communication, and AI in one workspace."],
  ["What can I manage with Bunch?", "You can manage leads, clients, tasks, employees, attendance, payroll, orders, and team activity from one workspace. Bunch also includes dashboards, permissions, multiple task views, and Bunzo AI."],
  ["Is Bunch really unlimited users?", "Yes. Bunch supports unlimited users on its core subscription, so you can add team members without increasing the base price based on user count."],
  ["What is included in the Bunch subscription?", "All 5 core modules are included for every user from day one. This includes CRM, leads, clients, tasks, HRMS, payroll, attendance, orders, live chat, dashboard, AI, and permissions."],
  ["How much does Bunch cost?", "Bunch costs ₹4,900/month, excluding GST, with unlimited users and all 12 core modules included. A yearly plan is also available at ₹49,980/year."],
  ["What does Bunzo AI actually do?", "Bunzo AI works with information in your Bunch workspace, including tasks, leads, clients, and orders. You can ask questions in plain language and get answers or turn the next step into a task."],
  ["Can I migrate my existing leads and client data to Bunch?", "Yes. You can bring existing lead and client information into Bunch when you get started, making it easier to move away from spreadsheets or another CRM."],
  ["What if I need something that isn't included?", "Bunch includes all 5 core modules in the main subscription. Additional requirements can be handled through available add-ons and integrations where applicable."],
];

export const homeFaqs: FaqItem[] = faqs.map(([question, answer], index) => ({
  _id: `faq-home-${index + 1}`,
  question,
  answer,
}));

type HomeCollections = {
  modules: CollectionItem[];
  industries: CollectionItem[];
  caseStudies: CollectionItem[];
  comparisons: CollectionItem[];
  testimonials: CollectionItem[];
  faqs: FaqItem[];
};

export function withHomeFallbacks<T extends HomeCollections>(collections: T): T {
  return {
    ...collections,
    modules: (collections.modules.length ? collections.modules : homeModules).map((item) => ({
      ...item,
      excerpt: item.excerpt || moduleExcerpts[item.route ?? ""] || "",
    })),
    industries: (collections.industries.length ? collections.industries : homeIndustries).map((item) => ({
      ...item,
      excerpt: item.excerpt || industryExcerpts[item.route ?? ""] || "",
    })),
    caseStudies: (collections.caseStudies.length ? collections.caseStudies : homeCaseStudies).map((item) => ({
      ...item,
      summary: item.summary || caseStudySummaries[item.title ?? ""] || "",
    })),
    comparisons: collections.comparisons.length ? collections.comparisons : homeComparisons,
    testimonials: collections.testimonials.length ? collections.testimonials : homeTestimonials,
    faqs: collections.faqs.length ? collections.faqs : homeFaqs,
  };
}
