import type { CaseStudy, Faq, Feature, Step } from "./types";

export const contact = {
  phone: "8559007400",
  loginUrl: "https://app.mybunch.ai/login",
};

export const socialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/mybunchai" },
  { label: "Instagram", url: "https://www.instagram.com/mybunch.ai" },
  { label: "Facebook", url: "https://www.facebook.com/mybunchai/" },
  { label: "YouTube", url: "https://www.youtube.com/channel/UC4L9mAV0LGUEUBrfGFFZVBg" },
  { label: "X", url: "https://x.com/mybunch_ai" },
];

export const pricing = {
  title: "One flat price.",
  accent: "Everything included.",
  description:
    "No tiers to climb, no features locked away pay monthly or save on yearly.",
  monthly: {
    name: "Bunch - Monthly",
    price: "4,900",
    note: "(excludes 18% GST)",
    items: ["Unlimited users", "All 5 modules included", "AI agent included"],
  },
  yearly: {
    name: "Bunch - Yearly",
    price: "4,165",
    note: "(billed ₹49,980/year · excludes GST)",
    items: [
      "Unlimited users",
      "All 5 modules included",
      "Save ₹8,820/year",
      "AI agent included",
      "Priority support",
      "Locked-in rate for 12 months",
    ],
  },
  footnote:
    "14-day free trial · No card required · Subscribe anytime from billing",
};

export const includedModules = {
  eyebrow: "What's included",
  title: "5 modules. All on by default.",
  items: [
    {
      title: "Lead Management",
      description:
        "Capture leads, assign them to the right team member, track follow-ups, and keep your sales pipeline organized.",
      href: "/modules/lead-management/",
    },
    {
      title: "Client Management",
      description:
        "Manage client details, communication history, notes, and related activities without searching across different tools.",
      href: "/modules/client-management/",
    },
    {
      title: "Task Management",
      description:
        "Split the work into tasks and sub-tasks, hand out ownership, and watch progress move in real time.",
      href: "/modules/task-management/",
    },
    {
      title: "HRMS",
      description:
        "Employee records, documents, onboarding and team structure in one place.",
      href: "/modules/human-resource-management/",
    },
    {
      title: "Project Management",
      description:
        "Create reusable project templates and define exactly how your team should execute each type of project.",
      href: "/modules/project-management/",
    },
  ],
};

export const bunzoHowItWorks = {
  eyebrow: "How the AI agent works",
  title: "From CRM data to decision, in one question",
  steps: [
    {
      title: "Ask a question",
      description:
        "No filters, reports, or complicated searches. Just ask Bunzo what you want to know about your sales, leads, clients, or pipeline.",
    },
    {
      title: "Get an answer",
      description:
        "It reads your live CRM data, connects the relevant information, and gives you a clear answer without making you dig through records.",
    },
    {
      title: "Act instantly",
      description:
        "Know what's happening, spot what needs attention, and make your next decision without jumping between screens.",
    },
  ] satisfies Step[],
  highlight: {
    title: "Less time in the CRM. More time closing.",
    description:
      "Sales and ops teams spend hours a week just searching their own CRM for what's overdue or unattended. The agent surfaces it without being asked.",
    value: "95%",
    label: "faster lead follow-up",
  },
};

export const bunzoAgent = {
  eyebrow: "Bunzo AI",
  title: "An agent that understands your business as well as you do",
  quote: "You shouldn't have to dig for answers. Your business should just tell you.",
  description:
    "Bunzo AI gives you a direct way to work with the information already inside your Bunch workspace. It brings together context from tasks, leads, clients, orders, and team activity, allowing you to ask questions naturally and get precise answers without navigating through multiple records or reports. And when the answer points to a next step, Bunzo AI can turn that insight into a task connecting business intelligence with the work that needs to happen next.",
};

export const generalFaqs: Faq[] = [
  {
    question: "How much does Bunch actually cost?",
    answer:
      "Bunch costs ₹4,900 per month at a flat rate. Your price stays the same whether you have 5 users or 500. There are no per-user charges.",
  },
  {
    question: "Can I cancel my subscription any time?",
    answer:
      "Yes. You can cancel your Bunch subscription at any time without a long-term commitment or complicated cancellation process.",
  },
  {
    question: "Which industries does Bunch work for?",
    answer:
      "Bunch is built for a wide range of industries, including real estate, agencies, consulting, financial services, education, healthcare, IT and software, professional services, and retail. Its flexible CRM workflows can be adapted to different sales and customer management needs.",
  },
  {
    question: "Is there a limit on users or storage?",
    answer:
      "No. Bunch includes unlimited users, so you can add your entire team without increasing your CRM costs as your business grows.",
  },
  {
    question: "Does Bunzo AI understand my business data?",
    answer:
      "Yes. Bunzo AI works with your CRM data to answer questions about leads, customers, deals, and sales activity, helping you find useful information without searching through records manually.",
  },
];

export const enterpriseFaqs: Faq[] = [
  {
    question: "What makes Bunch Enterprise different?",
    answer:
      "Bunch Enterprise is designed for organizations that need more than standard CRM features. You get greater customization, centralized control, implementation support, and a setup tailored to your business.",
  },
  {
    question: "Can Bunch be customized for our organization?",
    answer:
      "Yes. Bunch can be configured around your organization's workflows, teams, roles, fields, and business processes.",
  },
  {
    question: "Can you migrate our existing CRM data?",
    answer:
      "Yes. Our team can help plan and manage the migration of your existing CRM data into Bunch, helping make the transition smoother.",
  },
  {
    question: "Can Bunch integrate with our existing systems?",
    answer:
      "Yes. Bunch can be connected with your existing business systems where supported. For specific integration requirements, our team can discuss the best approach.",
  },
  {
    question: "Can we create custom workflows?",
    answer:
      "Yes. Enterprise customers can discuss workflow requirements and configure Bunch around the processes their teams already follow.",
  },
  {
    question: "Do you provide implementation support?",
    answer:
      "Yes. Our Enterprise team can assist with setup, configuration, data migration, training, and getting your organization ready for launch.",
  },
  {
    question: "Can we manage multiple departments?",
    answer:
      "Yes. Bunch can be structured to support different departments, teams, roles, and access requirements within one organization.",
  },
  {
    question: "Is Enterprise pricing customized?",
    answer:
      "Yes. Enterprise pricing is tailored to your organization's requirements, including customization, integrations, implementation, and other business needs.",
  },
  {
    question: "Can we request specific features or integrations?",
    answer:
      "Yes. If your organization has a specific feature, workflow, or integration requirement, you can discuss it with our Enterprise team to explore the available options.",
  },
];

export const caseStudiesIntro =
  "Ask us to prove it. Here's what changes when your sales, people, tasks, and daily operations work from one connected platform. These case studies show where Bunch has helped businesses reduce manual work, keep teams accountable, respond to customers faster, and get better visibility into what is happening across the business.";

export const flagshipCaseStudies: CaseStudy[] = [
  {
    category: "Accounting",
    company: "Sharma & Associates",
    metric: "63%",
    metricLabel: "fewer missed follow-ups",
    problem:
      "Enquiries lived in WhatsApp, client files in email, and attendance on paper nothing synced, so overdue filings only surfaced when a client called to ask.",
    approach:
      "Moved Leads, Clients and Tasks into one Bunch workspace, with biometric attendance feeding straight into payroll.",
    outcome:
      "Every enquiry becomes a tracked task automatically, filing deadlines sit on a shared calendar, and payroll runs off real attendance data with no month-end reconciliation.",
  },
  {
    category: "Event Management",
    company: "Meraki Events",
    metric: "5.5 hrs",
    metricLabel: "saved weekly per coordinator",
    problem:
      "Coordinators burned hours each week compiling status updates who's assigned to which vendor, what's overdue across scattered spreadsheets and chat threads.",
    approach:
      "Layered Bunch's AI Agent on top of the Leads, Tasks and Clients modules the team already used, so anyone could just ask a plain question.",
    outcome:
      "Weekly status meetings dropped from three to one, new leads get an auto created follow up task, and the AI agent flags vendor payments before they're overdue.",
  },
  {
    category: "Manufacturing",
    company: "Aarav Industries",
    metric: "42%",
    metricLabel: "faster payroll close",
    problem:
      "HR manually re typed biometric logs into a separate payroll sheet each month for 200+ shift workers, delaying and error prone salary runs.",
    approach:
      "Connected Biometric Attendance directly to Payroll and HRMS, so clock ins across all three shifts sync with zero manual entry.",
    outcome:
      "Payroll closes 42% faster every month, shift attendance disputes dropped sharply, and HR now spends that time on hiring instead of data entry.",
  },
];

export const educationCaseStudies: CaseStudy[] = [
  {
    category: "Coaching",
    company: "Elevate Test Prep",
    metric: "58%",
    metricLabel: "fewer dropped enquiries",
    problem:
      "Enquiries lived in Instagram DMs, calls, and a front-desk register, nothing synced, so leads only got followed up if a counselor happened to remember.",
    approach:
      "Moved Leads and Tasks into one Bunch workspace, with follow-up tasks auto-assigned to counselors the moment an enquiry came in.",
    outcome:
      "Every enquiry becomes a tracked task automatically, conversion is visible on one dashboard, and no lead sits untouched.",
  },
  {
    category: "Language Academy",
    company: "Vantage Language Studio",
    metric: "6 hrs",
    metricLabel: "saved weekly per coordinator",
    problem:
      "Admin staff manually tracked due fees across batches in Excel, chasing parents individually every month.",
    approach:
      "Connected batch enrollment directly to automated fee reminders and payment tracking inside Bunch.",
    outcome:
      "Late payments dropped, staff stopped manual follow-ups, and fee status is visible per student in real time.",
  },
  {
    category: "Skill Development",
    company: "Northbridge Skills Academy",
    metric: "35%",
    metricLabel: "faster batch scheduling",
    problem:
      "Faculty scheduling across overlapping batches was done manually on a whiteboard, causing frequent double-bookings.",
    approach:
      "Centralized batch, faculty, and attendance data in the Task Management and HRMS modules.",
    outcome:
      "Scheduling conflicts dropped sharply, and admin time shifted from firefighting to planning new batches.",
  },
];

export const comparisonCriteria = {
  eyebrow: "How we compared",
  title: "Same standards, every tool",
  titles: [
    "Pricing at scale",
    "What's actually included",
    "AI and branding",
    "Number of apps to run it",
  ],
  lastDescription:
    "See how easily each CRM handles growing teams, workflows, and users without adding unnecessary complexity or cost.",
};

export const comparisonDeepDive = {
  eyebrow: "The comparison",
  title: "Four things that decide which CRM actually fits",
  items: [
    {
      label: "Pricing at scale",
      title: "Pricing that doesn't grow with your headcount",
      description:
        "Bunch costs ₹4,900/month on the monthly plan or ₹4,165/month when billed annually at ₹49,980/year, excluding GST. Your price stays the same whether you have 5 users or 500. Unlike per-user CRM software, Bunch gives your entire team access without increasing your CRM costs every time you add a new member.",
      link: { label: "See full pricing breakdown", href: "/pricing/" },
    },
    {
      label: "What's included",
      title: "HR, payroll and attendance or just a sales pipeline?",
      description:
        "Platforms like Bigin, Kylas, and Zoho One offer strong CRM capabilities, but important tools and modules can vary by plan or require additional costs. Bunch includes all 12 CRM modules in one subscription, covering leads, contacts, customers, sales pipelines, activities, follow-ups, reporting, and more. Everything stays connected in one workspace, without separate module upgrades or add-on costs.",
      link: { label: "See what's included", href: "/pricing/" },
    },
    {
      label: "AI agent & branding",
      title: "Built-in AI, not a bolt-on",
      description:
        "Bunzo AI Agent brings intelligence directly into your Bunch. It works with your live CRM data to help you find information about leads, customers, deals, and sales activity using simple questions. With AI-powered CRM assistance built into the platform, your team can spend less time searching through records and more time acting on useful insights.",
      link: { label: "See Bunzo AI Agent", href: "/bunzo/" },
    },
    {
      label: "Apps to learn",
      title: "One login instead of a stitched-together suite",
      description:
        "Managing your business across multiple disconnected tools can make customer data harder to track and sales workflows harder to manage. Bunch brings your CRM activities into one central workspace, giving your team a simpler way to manage leads, customers, deals, and everyday sales operations as your business grows.",
      link: { label: "Book a Discovery Call", href: "/book-a-discovery-call/" },
    },
  ],
};

export const recognition = {
  eyebrow: "Software discovery & review platforms",
  title: "Recognized by the platforms that matter",
  items: [
    {
      title: "G2",
      description:
        "MyBunch is listed and reviewed on G2, the world's largest software marketplace, where verified users rate us on ease of use, support, and value for money.",
    },
    {
      title: "Capterra",
      description:
        "We're listed on Capterra, helping businesses compare features and pricing with confidence through verified user reviews.",
    },
    {
      title: "TrustRadius",
      description:
        "MyBunch is featured on TrustRadius, giving buyers in-depth, verified insights from real users evaluating CRM and business software.",
    },
    {
      title: "Product Hunt",
      description:
        "We launched on Product Hunt, reaching a community of early adopters, makers, and founders looking for new tools to run their business.",
    },
    {
      title: "SaaSHub",
      description:
        "MyBunch is listed on SaaSHub, making it easy for teams to discover and compare us against other CRM and business management tools.",
    },
    {
      title: "SaaSworthy",
      description:
        "We're featured on SaaSworthy, where SaaS products are ranked and reviewed across categories to help teams make informed software decisions.",
    },
  ] satisfies Feature[],
};
