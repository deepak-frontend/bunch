import type { Feature, Step } from "./types";

export const workspaceSteps: Step[] = [
  { title: "Create your workspace", description: "Sign up, and your CRM shell is ready immediately. Leads, clients, and pipeline views are already set up, waiting for your data, not a blank screen waiting for you to build it." },
  { title: "Bring in your leads and clients", description: "Import from a spreadsheet, or add contacts one by one. Either way, every conversation and every deal stage lands in a single record, not scattered across old files." },
  { title: "Set up your team and pipeline", description: "Invite your team, assign roles, and shape your pipeline stages to match how you actually sell, not how a template assumes you do." },
  { title: "Start working your deals", description: "Track follow-ups, move deals through stages, and see your entire pipeline on one dashboard, live from day one, not after a setup call." },
];

export const bunzoPage = {
  title: "Bunzo AI Agent",
  description:
    "Every lead, client and order lives in bunch but finding what matters still takes digging. Bunzo AI Agent reads your data live, so you get answers to sales and operations questions the moment you ask, and can act on them instantly.",
  howWeWork: {
    eyebrow: "How we work",
    title: "From empty workspace to running CRM",
    description:
      "No templates to configure, no consultant to book. Here's exactly how your CRM comes together.",
  },
  included: {
    description:
      "No \"available on higher plans.\" No module by module pricing. Everything below is included in every Bunch subscription, for every user, from the first day.",
  },
  testimonials: [
    { quote: "I used to spend my mornings scrolling through leads trying to figure out who needed a follow up. Now I just ask the agent, and it tells me with the follow up already drafted.", person: "Daniel Reyes", role: "Sales Manager, Northfield Traders" },
    { quote: "The AI agent caught a client order that had been sitting untouched for four days. We'd have found out when they called to complain. Instead, we called them first.", person: "Emma Whitfield", role: "Operations Lead, Harlow & Co" },
    { quote: "I run a team of twelve and used to lose an hour a day just checking on what everyone was doing. Now I ask one question every morning and get the whole picture.", person: "Marcus Ferreira", role: "Founder, Ferreira Logistics" },
    { quote: "It's not a chatbot bolted onto a CRM — it actually knows our pipeline. Ask it what's overdue and it answers like someone who's been reading our data all along.", person: "Sophie Lindqvist", role: "VP of Sales, Nordbridge Consulting" },
  ],
  cta: {
    title: "No pitch. Just a working CRM.",
    description: "We'll walk through your modules, your pricing, and how fast your team can be running.",
  },
};

export const pricingPage = {
  title: "Pricing",
  description:
    "Bunch is flat rate CRM software for small business, built on a simple principle: one price, unlimited users, every module included from the first day. There's no implementation project to sit through before you can actually use it, no consultant to book, and no per seat calculation to redo every time you hire someone new. The price you see is the price you pay, whether your team is five people or fifty.",
  included:
    "Bunch gives your team a complete CRM experience without making you choose between plans or pay extra to unlock the tools you actually need. Every Bunch subscription includes all 5 modules, giving you everything from lead and contact management to sales pipelines, customer activities, reporting, automation, and AI-powered insights. Every user gets access from day one, so your team can work from the same system without feature restrictions, complicated upgrades, or module-by-module pricing.",
  banner: { title: "Stop paying per head.", accent: "Start running your business." },
  cta: {
    title: "Let's set up your workspace",
    description:
      "We'll walk through your modules, your pricing, and how fast you can be up and running no sales pitch, just a straight answer.",
  },
};

export const compareHubPage = {
  eyebrow: "Comparison",
  title: "Every module. Every user.",
  accent: "Still one flat price.",
  description:
    "Choosing the right CRM should be about what your business gets, not how many users you can squeeze into a plan. See how Bunch compares with popular CRM software and per-user business tools across pricing, features, AI capabilities, and scalability.",
  criteriaIntro:
    "We compare Bunch with leading CRM platforms using the factors that actually matter when choosing business CRM software. No cherry-picked features or vague claims. Just a clear look at pricing, included features, AI capabilities, and what you get as your team grows.",
  criteria: [
    "Look beyond the starting price. Compare what each CRM actually costs as you add users, expand your team, or need access to more features.",
    "A low starting price means little if essential features cost extra. We compare the modules, sales tools, automation, customer management, and other capabilities included in each plan.",
    "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI and automation to reduce manual work and help teams work more efficiently.",
    "See how easily each CRM handles growing teams, workflows, and users without adding unnecessary complexity or cost.",
  ] as [string, string, string, string],
  sideBySide: {
    eyebrow: "Side-by-side",
    title: "Where Bunch actually pulls ahead",
    description:
      "The same comparison, broken down by competitor, so you can quickly see how Bunch compares with the CRM you're considering.",
    items: [
      {
        name: "Spreadsheets",
        title: "Bunch vs Spreadsheets",
        description:
          "Spreadsheets can help manage basic data, but they quickly become difficult to maintain as your sales team and customer base grow. Bunch brings your sales process into one structured system.",
        points: ["Centralized customer data", "Automated follow-ups", "Easy reporting & insights", "Real-time sales pipeline", "Team collaboration", "Fewer errors & duplicates"],
        verdict: "Stop managing your sales in scattered spreadsheets. Bring everything into one powerful CRM.",
      },
      {
        name: "Bigin",
        title: "Bunch vs Bigin",
        description:
          "Bigin is built around straightforward sales pipeline management. Bunch goes further by bringing CRM, customer management, business workflows, and AI-powered assistance together in one platform.",
        points: ["Flat, unlimited-user pricing", "HRMS + Payroll included", "Biometric attendance included", "AI agent for every user", "Custom branding included", "Orders, not just pipelines"],
        verdict: "Best move if you need more than a sales pipeline.",
      },
      {
        name: "Zoho One",
        title: "Bunch vs Zoho One",
        description:
          "Zoho One uses per-employee pricing, so your software cost increases as your team grows. Bunch keeps it simple with one flat price and unlimited users, giving your entire team access without adding another per-user charge.",
        points: ["One platform, not 45+ apps", "Flat price, not per-employee", "AI agent included by default", "Custom branding included", "HRMS + Payroll, same workspace", "Simpler team onboarding"],
        verdict: "Best move if you don't need every Zoho app, just the ones that run your business.",
      },
      {
        name: "Still deciding?",
        title: "Still deciding?",
        description:
          "Choosing CRM software comes down to more than features on a comparison table. Look at pricing, included modules, AI capabilities, scalability, and how easily your team can actually use the platform.",
        points: ["Simpler setup, no per-user pricing", "Built in AI agent, flat fee model", "Focused CRM, not a bundled suite", "Flat fee pricing, no per seat charges", "AI agent included at every plan", "Setup typically takes under a day"],
        verdict: "Every comparison uses the same feature set and pricing, sourced directly from each provider's public pages.",
      },
    ],
  },
  trust: {
    title: "Why trust this comparison",
    points: [
      "Pricing sourced from public vendor listings, not our guesses",
      "Updated as competitor pricing changes",
      "No cherry-picked features same six criteria for every tool",
      "Full workings shown, nothing hidden",
    ],
  },
  cta: {
    title: "Not sure which one fits your team?",
    description:
      "Tell us your team size and what you're running today, we'll tell you honestly whether switching makes sense.",
  },
};

export const enterprisePage = {
  title: "Bunch Built",
  accent: "Around Your Business",
  description:
    "Every organization works differently. Bunch Enterprise gives you the flexibility, control, and support to configure your CRM around your teams, workflows, and business requirements.",
  pillars: {
    title: "Built for Enterprise. Designed for What's Next.",
    description:
      "Centralize users, roles, permissions, and administrative controls in one place.",
    items: [
      { title: "Built to Scale", description: "Support new teams, users, and business processes as your organization evolves." },
      { title: "Enterprise Control", description: "Centralize users, roles, permissions, and administrative controls in one place." },
      { title: "Workflows That Move", description: "Automate tasks, approvals, and handoffs so work keeps moving across teams." },
      { title: "Visibility at Every Level", description: "Bring activity, performance, and operational data into view so leaders can make better decisions." },
      { title: "AI Across Your Business", description: "Use AI to find information, surface insights, and help teams get more done." },
    ] satisfies Feature[],
  },
  control: {
    title: "More Control. Less Complexity.",
    description:
      "Give your organization the structure and control it needs to operate at scale. Manage teams, permissions, workflows, and business rules from one centralized platform – while giving every team the flexibility to work their way.",
    governTitle: "Govern Every Part of Your Business",
    governDescription:
      "Bring clarity to how your organization operates with defined responsibilities, controlled access, and consistent processes. Give teams room to work while giving leadership the oversight to keep the business on track.",
    points: [
      "Centralized Control for Your Entire Organization",
      "Structured Approvals for Critical Business Decisions",
      "AI assistants for internal business teams",
      "The Right Access for Every Team and Role",
      "Flexible Controls Across Teams and Departments",
      "Cross-system workflow automation",
    ],
  },
  integrations: {
    title: "Bunch That Works With Your Tech Stack",
    description:
      "Your teams already use the tools they need to run the business. Bunch works alongside them instead of creating another isolated system. Connect the applications, data, and services your organization relies on to create a more connected technology environment.",
  },
  automation: {
    title: "Automate the Work That Slows You Down",
    subtitle: "Not every task needs a person behind it.",
    description:
      "From assigning requests and sending notifications to updating records and moving approvals forward, Bunch can automate the repetitive steps that slow your teams down.",
    items: [
      { title: "Automate Routine Tasks", description: "Reduce manual updates, follow-ups, assignments, and repetitive actions." },
      { title: "Keep Work Moving", description: "Automatically route tasks and information to the right person or team." },
      { title: "Standardize Execution", description: "Create repeatable processes that help teams work consistently across the organization." },
      { title: "Reduce Bottlenecks", description: "Replace manual handoffs with automated steps that keep work moving forward." },
    ] satisfies Feature[],
  },
  support: {
    eyebrow: "Dedicated Enterprise Support",
    title: "Support That Goes Beyond Software",
    description:
      "Get the guidance you need before, during, and after implementation. From setup and training to workflow questions, our team is here to help your organization get the most from Bunch.",
    items: [
      { title: "Enterprise onboarding", description: "Half-day workshop. AI basics and prompt fundamentals." },
      { title: "Implementation guidance", description: "Multi-session deep-dive into applied AI for your workflows." },
      { title: "Team training", description: "Multi-session deep-dive into applied AI for your workflows." },
      { title: "Priority assistance", description: "Custom program for large orgs and multi-department rollouts." },
    ] satisfies Feature[],
  },
  comparison: {
    title: "Why Enterprise Teams Choose Bunch",
    rows: [
      ["Setup", "Standard setup", "Customized setup"],
      ["Implementation", "Self-service", "Guided implementation"],
      ["Workflows", "Standard workflows", "Custom workflows"],
      ["User Management", "Basic controls", "Advanced organization controls"],
      ["Integrations", "Standard integrations", "Custom integration options"],
      ["Data Migration", "DIY migration", "Migration assistance"],
      ["Support", "Standard support", "Dedicated Enterprise support"],
      ["Scalability", "Built for general use", "Built around your business"],
      ["Training", "Self-guided", "Team onboarding & training"],
      ["Business Requirements", "Fixed capabilities", "Tailored to your requirements"],
    ] as [string, string, string][],
  },
  deliverables: {
    eyebrow: "Deliverables",
    title: "What's included",
    items: [
      { tag: "01", title: "Discovery & Strategy", description: "Understand your business needs and define the right Bunch setup before implementation.", items: ["Business requirements assessment", "Workflow and process mapping", "Implementation roadmap"] },
      { tag: "02", title: "Configuration & Setup", description: "Configure Bunch around your organization and prepare your platform for a smooth rollout.", items: ["Custom workflows and fields", "Roles, permissions, and business rules", "Platform configuration and testing"] },
      { tag: "03", title: "Team Enablement & Launch", description: "Prepare your teams to adopt Bunch confidently and transition into everyday use.", items: ["User and team onboarding", "Training and enablement", "Launch and adoption support"] },
      { tag: "04", title: "Ongoing Success & Support", description: "Keep your platform performing as your organization grows and your requirements evolve.", items: ["Ongoing technical support", "Platform optimization", "Continuous improvements and guidance"] },
    ],
  },
};

export const aboutPage = {
  title: "About Us",
  description:
    "We build ready-to-use business software CRM, HR, payroll and an AI agent, bundled into one flat-priced platform any team can run from day one.",
  facts: [
    { label: "What we offer", value: "CRM, HR & payroll, AI powered workflows." },
    { label: "How you get started", value: "Self serve subscription no project, no contract" },
    { label: "Origin", value: "Built in India, used anywhere" },
    { label: "How we protect your data", value: "Built in, not bolted on" },
  ],
  mission: {
    title: "Our Mission",
    lead: "We build business software that works the way small teams actually run one flat price, every module included, no complexity to manage.",
    paragraphs: [
      "We believe growing a business shouldn't mean growing your software bill at the same pace. Our goal is to build a platform simple enough to trust from day one, and complete enough that you never outgrow it.",
      "We bridge the gap between what small and mid sized businesses actually need tasks, HR, payroll, sales, and now AI and what most software forces them to piece together from five different tools.",
    ],
    stats: [
      { value: "38%", label: "Average reduction in time spent switching between tools" },
      { value: "95%", label: "Faster lead follow up with the AI agent" },
      { value: "99.8%", label: "Platform uptime" },
    ],
  },
  values: {
    eyebrow: "Our values",
    title: "What makes Bunch different",
    items: [
      { title: "Predictability", description: "We think growing your team shouldn't grow your software bill. One flat price, unlimited users that's not a promotion; it's how we're built." },
      { title: "Completeness", description: "A CRM that only does sales, or an HR tool that ignores payroll, just moves the patchwork problem elsewhere." },
      { title: "Speed to Value", description: "No implementation project, no onboarding call to book. Sign up, add your team, and you're running your business the same day." },
      { title: "Built to Never Be Outgrown", description: "New modules ship free to every plan as they launch. You won't need to migrate to a \"higher tier\"; there isn't one." },
    ] satisfies Feature[],
  },
  stepsTagline: "You run the business. It handles the rest.",
  testimonials: [
    { person: "Hannah", role: "HR Manager, TalentBridge", quote: "Payroll used to involve a lot of manual checking between attendance records and spreadsheets. With Bunch, our attendance and payroll workflows are connected, so the process is much cleaner. Our monthly payroll close is now around 40% faster, and HR spends considerably less time correcting attendance-related information." },
    { person: "Daniel Morgan", role: "Managing Director, Elevate Services | United States", quote: "We didn't need another complicated business platform. We needed something our team would actually use every day. Bunch has helped us bring sales, tasks, client information, and team operations into one system. It has made it much easier for me to see what's happening across the business without chasing updates." },
    { person: "Priya Nair", role: "COO, Nair & Co Accounting", quote: "Our biggest headache wasn't the amount of work it was keeping track of where everything stood. A client would call and we'd sometimes have to check email, WhatsApp, and a spreadsheet before we could answer properly. Bunch has given us one place to look. I can now see the client, related tasks, and follow-ups without asking three different people for an update." },
    { person: "Arjun Mehta", role: "Founder, Meraki Events", quote: "Events are never as simple as they look from the outside. There are vendors to coordinate, client requests coming in, deadlines moving around, and a hundred small tasks that can easily get forgotten. We started using Bunch to bring all of that into one workflow. What I like most is that my team can see what they own and what's coming next without me having to keep checking in with everyone." },
    { person: "Oliver Bennett", role: "Co-Founder, GrowthLane | United Kingdom", quote: "Before Bunch, our client work was spread across our CRM, spreadsheets, project tools and team chats. We moved our leads, clients and project tasks into Bunch, and the difference was immediate. Our team now spends around 4–5 fewer hours each week chasing updates, and I can see what's happening across our projects without asking for separate reports." },
    { person: "Divya Reddy", role: "COO, Reddy Manufacturing", quote: "I wasn't looking for another dashboard. I needed fewer questions coming to my desk. With Bunch, I can check the status of orders and tasks myself instead of waiting for someone to send me an update. Bunzo AI has been particularly useful when I need a quick answer- I can ask the question directly rather than digging through records." },
    { person: "Karan Bhatia", role: "VP Operations, Bhatia Insurance Services", quote: "Our HR team was spending too much time maintaining information in different places. Attendance was one system, employee details another, and payroll involved a lot of checking in between. Bunch has brought those processes much closer together. The monthly payroll routine is easier to manage now, and the team has fewer manual checks to deal with." },
    { person: "Meera Iyer", role: "HR Manager, Iyer Healthcare Group", quote: "What I appreciate about Bunch is that it doesn't require us to constantly think about the software. The team logs in, checks their work, updates what they need to update, and gets on with the day. I can still see what's happening without being involved in every small task. That's probably been the most useful part for us." },
    { person: "Sarah Mitchell", role: "Operations Director, Apex Advisory | UAE", quote: "We initially looked at Bunch because we wanted to reduce the number of tools our team was using. What stood out was that CRM, tasks, HR and payroll could sit under the same platform. We now have 25+ team members working from the same system without having to manage separate software accounts for every function. It has made our day-to-day operations noticeably easier." },
  ],
  getStarted: {
    title: "Let's set up your workspace",
    description:
      "Book a free demo or send us a message. We'll get back to you within one business day.",
    lead: "15 minutes, no pressure just a walkthrough of Bunch and how it fits your team.",
    points: [
      "See all 5 modules live in your industry's context",
      "Get your questions on pricing and setup answered",
      "Walk away with a clear go-live date",
    ],
  },
};

export const caseStudiesPage = {
  title: "Case Studies",
  description:
    "Bunch is flat rate CRM software for small business, built on a simple principle: one price, unlimited users, every module included from the first day. Here's what changes when real teams move their work into one connected platform.",
  summaries: {
    "Sharma & Associates":
      "An accounting firm moved its enquiries, client records, tasks and attendance into one Bunch workspace, so nothing depends on WhatsApp, email or a paper register.",
    "Meraki Events":
      "An event management team added Bunch's AI agent on top of its leads, tasks and client records, so anyone could ask a plain question and get a status answer in seconds.",
    "Aarav Industries":
      "Aarav Industries streamlined payroll operations by connecting biometric attendance directly with Payroll and HRMS in Bunch.",
  } as Record<string, string>,
};

export const blogPage = {
  title: "Blogs",
  description:
    "Exploring the intersection of artificial intelligence, industrial automation, and the future of professional workflows.",
  posts: [
    { slug: "what-is-project-management", tags: ["Guide", "Project Management"], title: "What Is Project Management? Definition, Process, Benefits, and Examples", excerpt: "Project management helps businesses plan, organise, track, and complete projects within defined timelines and budgets. Learn its key stages, benefits, methods, and practical examples." },
    { slug: "what-is-payroll-management-in-hr", tags: ["Guide"], title: "What Is Payroll Management in HR? A Complete Guide", excerpt: "Learn what payroll management in HR means, how the payroll process works, key responsibilities, common mistakes, and how payroll software helps businesses simplify salary processing." },
    { slug: "how-to-create-a-to-do-list", tags: ["Project Management"], title: "How to Create a To-Do List That Actually Works: 7 Practical Steps", excerpt: "A practical, step-by-step approach to building a to-do list your team will actually follow." },
    { slug: "what-is-the-importance-of-resource-planning-in-project-management", tags: ["Project Management"], title: "What Is the Importance of Resource Planning in Project Management?", excerpt: "Resource planning helps project managers allocate people, time, budgets, and tools effectively. Learn its benefits, key steps, challenges, and best practices." },
    { slug: "types-of-project-management-10-methods-explained-with-examples", tags: ["Project Management"], title: "Types of Project Management: 10 Methods Explained with Examples", excerpt: "Project management helps businesses plan tasks, manage resources, track deadlines, and complete work within a defined scope. This guide explains 10 types of project management." },
    { slug: "best-project-management-software-for-small-businesses", tags: ["Comparisons"], title: "Best Project Management Software for Small Businesses: Top Picks", excerpt: "Compare six project management software tools for small businesses. Explore their features, benefits, pricing considerations, and resource planning capabilities to find the right fit." },
    { slug: "best-team-management-software-in-2026", tags: ["Comparisons"], title: "Best Team Management Software in 2026: 6 Options for Remote Teams", excerpt: "Looking for the best team management software in 2026? Explore six popular tools to compare their features, benefits, and capabilities for managing tasks and tracking projects." },
    { slug: "how-to-prioritize-tasks-on-your-to-do-list-8-simple-methods", tags: ["Comparisons"], title: "How to Prioritize Tasks on Your To-Do List: 8 Simple Methods", excerpt: "A long to-do list with no order wastes your day. Learn 8 simple ways to prioritize tasks, including the Eisenhower matrix and MoSCoW." },
    { slug: "15-crm-data-management-best-practices-for-growing-teams", tags: ["Comparisons"], title: "15 CRM Data Management Best Practices for Growing Teams", excerpt: "Duplicate contacts, missing details and old notes can quietly hurt your sales. Learn 15 simple CRM data management best practices to keep records clean." },
    { slug: "best-sales-pipeline-management-software-for-small-businesses-in-2026", tags: ["Comparisons"], title: "Best Sales Pipeline Management Software for Small Businesses in 2026", excerpt: "Compare sales pipeline management tools for small businesses and find the right fit for tracking leads, deals, and follow-ups." },
  ],
};
