import type { IndustryPage } from "./types";
import { educationCaseStudies } from "./shared";

const defaultCta = {
  title: "Let's review your workflows",
  description:
    "Let's map your workflows and identify where AI agents can drive the most significant impact for your business.",
};

export const industries: IndustryPage[] = [
  {
    slug: "education-coaching",
    name: "Education & Coaching",
    tag: "Bunch CRM for Education & Coaching",
    seoDescription:
      "Enquiry-to-admission workflows, batches, fees, and attendance for institutes in one flat-priced CRM.",
    hero: {
      lines: ["Every enquiry followed up.", "Every fee collected on time."],
      flow: ["Enquiry", "Admission"],
      subtitle:
        "The enquiry-to-admission workflows Bunch connects for your institute.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Education and coaching businesses run on enquiries and trust, but most institutes still manage both across disconnected tools — a WhatsApp inbox for leads, an Excel sheet for batches, and attendance on paper. It holds together at low volume, but during admission season, that fragmentation starts costing real enrollments.",
      solution:
        "We replace scattered spreadsheets and chat threads with one connected system built around how institutes actually run admissions, batches, and fees.",
      pains: [
        "Enquiries scattered across WhatsApp, calls, and walk-ins",
        "No visibility into enquiry-to-admission conversion",
        "Manual batch scheduling and faculty allocation",
        "Fee reminders sent late or missed entirely",
        "Attendance on paper, disconnected from parent updates",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Admissions & Enquiries",
        description:
          "Turning every enquiry into a tracked lead with a clear owner and next action, instead of a message that sits unanswered.",
        items: [
          "Automated enquiry-to-admission pipeline",
          "Counselor follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Batches & Fees",
        description:
          "Running batch scheduling, faculty allocation, and fee collection without spreadsheets or manual reconciliation.",
        items: [
          "Batch and faculty scheduling",
          "Automated fee reminders and tracking",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving academic and admin staff AI tools that cut down repetitive coordination work.",
        items: [
          "Copilot for counselor follow-ups",
          "On-demand attendance and progress reports",
        ],
      },
    ],
    caseStudies: { title: "Real businesses, real results", items: educationCaseStudies },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~50%",
          label: "faster admissions",
          note: "Through automated enquiry-to-admission follow-up workflows.",
        },
        {
          value: "~60%",
          label: "less manual work",
          note: "Achieved in fee tracking and reminder processes per term.",
        },
      ],
      quote:
        "Institutes that connect enquiry, admissions, and fee data into one system convert more of the leads they already have, without adding headcount",
      quoteSource: "Bunch Education Outlook 2026",
      features: [
        { title: "Enquiry & Admission Automation", description: "Route every enquiry to a counselor instantly and track it through to admission." },
        { title: "Batch & Faculty Scheduling", description: "Plan batches and allocate faculty with automatic conflict alerts." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which leads or fees need attention today." },
        { title: "Fee Collection Workflows", description: "Automated reminders and real-time payment status tracking, per student and batch." },
        { title: "Attendance & Progress Tracking", description: "Centralized attendance data feeding directly into parent updates and reporting." },
        { title: "Parent & Student Communication", description: "Automated updates on admissions, fees, and attendance, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add counselors, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, admissions tools, fee automation, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual follow-up and help staff work more efficiently.",
      "See how easily each CRM handles growing batches, enquiries, and staff without adding unnecessary complexity or cost.",
    ],
    cta: {
      title: "Let's review your workflows",
      description:
        "Let's map your enquiry, admissions, fee workflows and identify where AI agents can drive the most impact for your institute.",
    },
  },
  {
    slug: "healthcare-clinics",
    name: "Healthcare Clinics",
    tag: "Bunch CRM for Small Healthcare Clinics",
    seoDescription:
      "Enquiry-to-appointment workflows, scheduling, and billing for small clinics in one flat-priced CRM.",
    hero: {
      lines: ["Every patient followed up.", "Every appointment on schedule."],
      flow: ["Enquiry", "Appointment"],
      subtitle:
        "The enquiry-to-appointment workflows Bunch connects for your clinic.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Small clinics run on trust and timely care, but most still manage patient enquiries, appointments, and billing across disconnected tools: a phone register for calls, a diary for appointments, and receipts written by hand. It holds together on a quiet day, but when patient count rises, that fragmentation shows up as missed calls, double booked slots, and delayed follow ups.",
      solution:
        "We replace scattered registers and phone diaries with one connected system built around how clinics actually manage patients, appointments, and billing.",
      pains: [
        "Patient enquiries scattered across calls, walk-ins, and WhatsApp",
        "No visibility into enquiry-to-appointment conversion",
        "Manual appointment scheduling and doctor allocation",
        "Billing and follow-ups tracked on paper or in separate apps",
        "Patient records disconnected from appointment history",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Patient Enquiries & Appointments",
        description:
          "Turning every enquiry into a scheduled appointment with a clear owner and follow-up, instead of a call that goes unanswered.",
        items: [
          "Automated enquiry-to-appointment pipeline",
          "Front-desk follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Scheduling & Billing",
        description:
          "Running day-to-day clinic operations, appointment scheduling, doctor allocation, and billing, without registers or manual reconciliation.",
        items: [
          "Doctor and slot scheduling",
          "Automated billing and payment tracking",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving front-desk and clinical staff AI tools that cut down repetitive coordination work.",
        items: [
          "Copilot for patient follow-ups",
          "On-demand patient history and visit summaries",
        ],
      },
    ],
    caseStudies: {
      title: "Real businesses, real results",
      items: [
        {
          category: "Dental Clinic",
          company: "Smile Care Dental",
          metric: "52%",
          metricLabel: "fewer missed follow-ups",
          problem:
            "Patient enquiries came through phone calls, walk-ins, and Google listings, nothing synced, so follow-up calls for pending treatments were often missed.",
          approach:
            "Moved Leads and Tasks into one Bunch workspace, with follow-up tasks auto-assigned to front-desk staff the moment an enquiry came in.",
          outcome:
            "Every enquiry becomes a tracked task automatically, appointment conversion is visible on one dashboard, and no follow-up call is missed.",
        },
        {
          category: "Physiotherapy Clinic",
          company: "Vitality Physio Center",
          metric: "5 hrs",
          metricLabel: "saved weekly per front-desk staff",
          problem:
            "Front-desk staff manually tracked pending payments across patients in a register, calling patients individually for dues each week.",
          approach:
            "Connected appointment records directly to automated billing reminders and payment tracking inside Bunch.",
          outcome:
            "Late payments dropped, staff stopped manual follow-up calls, and payment status is visible per patient in real time.",
        },
        {
          category: "Multi-Specialty Clinic",
          company: "Harbor View Clinic",
          metric: "40%",
          metricLabel: "faster appointment scheduling",
          problem:
            "Doctor scheduling across multiple specialties was managed on a shared diary, causing frequent double bookings and long patient wait times.",
          approach:
            "Centralized doctor schedules, appointment slots, and patient records in the Task Management and CRM modules.",
          outcome:
            "Scheduling conflicts dropped sharply, and front-desk time shifted from resolving clashes to improving patient experience.",
        },
      ],
    },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~50%",
          label: "faster patient scheduling",
          note: "Through automated enquiry-to-appointment follow-up workflows.",
        },
        {
          value: "~65%",
          label: "less manual work",
          note: "Achieved in billing and payment reminder processes per month.",
        },
      ],
      quote:
        "Clinics that connect patient enquiries, appointments, and billing into one system see more patients return for follow-up care, without adding front-desk headcount.",
      quoteSource: "Bunch Healthcare Outlook 2026",
      features: [
        { title: "Patient Enquiry & Appointment Automation", description: "Route every enquiry to front-desk staff instantly and track it through to appointment." },
        { title: "Doctor & Slot Scheduling", description: "Plan appointments and allocate doctors with automatic conflict alerts." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which patients or bills need attention today." },
        { title: "Billing & Payment Workflows", description: "Automated reminders and real-time payment status tracking, per patient." },
        { title: "Patient Records & Visit History", description: "Centralized patient data feeding directly into appointment and treatment tracking." },
        { title: "Patient Communication", description: "Automated updates on appointments, billing, and follow-ups, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add doctors, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, appointment tools, billing automation, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual follow-up and help front-desk staff work more efficiently.",
      "See how easily each CRM handles growing patient volume, appointments, and staff without adding unnecessary complexity or cost.",
    ],
    cta: defaultCta,
  },
  {
    slug: "recruitment-staffing",
    name: "Recruitment & Staffing",
    tag: "Bunch CRM for Recruitment & Staffing",
    seoDescription:
      "Candidate-to-placement workflows, job orders, and recruiter follow-ups in one flat-priced CRM.",
    hero: {
      lines: ["Every candidate followed up.", "Every placement closed faster."],
      flow: ["Candidate", "Placement"],
      subtitle:
        "The candidate-to-placement workflows Bunch connects for your agency.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Staffing agencies run on speed and follow-through, but most recruiters still manage candidates and client requirements across disconnected tools: resumes in email, client requirements in spreadsheets, and follow-ups tracked in memory. It holds together with a small pipeline, but when job orders pile up, that fragmentation shows up as missed candidates and slow client turnaround.",
      solution:
        "We replace scattered spreadsheets and inboxes with one connected system built around how agencies actually source, screen, and place candidates.",
      pains: [
        "Candidate resumes scattered across email, WhatsApp, and job boards",
        "No visibility into candidate-to-placement conversion",
        "Manual tracking of client job orders and requirements",
        "Follow-ups with candidates and clients done from memory",
        "No centralized view of recruiter performance or pipeline",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Candidate Sourcing & Screening",
        description:
          "Turning every application into a tracked candidate with a clear stage and next action, instead of a resume sitting in an inbox.",
        items: [
          "Automated candidate-to-placement pipeline",
          "Recruiter follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Job Orders & Client Coordination",
        description:
          "Running client job orders, candidate submissions, and interview scheduling without spreadsheets or scattered emails.",
        items: [
          "Job order and requirement tracking",
          "Automated interview scheduling and status updates",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving recruiters AI tools that cut down repetitive sourcing and coordination work.",
        items: [
          "Copilot for recruiter follow-ups",
          "On-demand pipeline and placement reports",
        ],
      },
    ],
    caseStudies: {
      title: "Real businesses, real results",
      items: [
        {
          category: "IT Staffing",
          company: "Nexus Tech Staffing",
          metric: "45%",
          metricLabel: "faster candidate submissions",
          problem:
            "Candidate resumes and client requirements lived across email threads and spreadsheets, so recruiters often submitted duplicate or outdated profiles.",
          approach:
            "Moved candidates and job orders into one Bunch workspace, with automated stage tracking from sourcing to submission.",
          outcome:
            "Every candidate is tracked through one pipeline, recruiters see live job order status, and duplicate submissions have stopped.",
        },
        {
          category: "General Staffing",
          company: "Crestline Workforce Solutions",
          metric: "7 hrs",
          metricLabel: "saved weekly per recruiter",
          problem:
            "Recruiters manually followed up with hundreds of candidates each week, often losing track of who had already been contacted.",
          approach:
            "Connected candidate records to automated follow-up reminders and task assignment inside Bunch.",
          outcome:
            "Follow-up consistency improved sharply, and recruiters spent more time on interviews instead of manual tracking.",
        },
        {
          category: "Healthcare Staffing",
          company: "Meridian Healthcare Staffing",
          metric: "38%",
          metricLabel: "faster time-to-fill",
          problem:
            "Client job orders and candidate availability were tracked in separate spreadsheets, causing delays in matching candidates to open roles.",
          approach:
            "Centralized job orders, candidate pipelines, and client communication in the Lead Management and Task modules.",
          outcome:
            "Time-to-fill dropped noticeably, and coordinators redirected saved time toward sourcing more candidates.",
        },
      ],
    },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~45%",
          label: "faster candidate-to-placement turnaround",
          note: "Through automated pipeline tracking and follow-up workflows.",
        },
        {
          value: "~60%",
          label: "less manual work",
          note: "Achieved in candidate follow-up and job order tracking processes.",
        },
      ],
      quote:
        "Agencies that connect candidates, job orders, and client communication into one system fill roles faster, without adding recruiter headcount.",
      quoteSource: "Bunch Staffing Outlook 2026",
      features: [
        { title: "Candidate Pipeline Automation", description: "Track every candidate from sourcing to placement, with stage visibility." },
        { title: "Job Order & Requirement Tracking", description: "Manage client job orders and requirements without spreadsheets." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which candidates or clients need attention today." },
        { title: "Interview Scheduling Workflows", description: "Automated scheduling and status updates for candidates and clients." },
        { title: "Recruiter Performance Tracking", description: "Centralized visibility into recruiter pipelines and placement metrics." },
        { title: "Candidate & Client Communication", description: "Automated updates on submissions, interviews, and placements, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add recruiters, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, candidate tools, job order tracking, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual follow-up and help recruiters work more efficiently.",
      "See how easily each CRM handles growing candidate volume, job orders, and recruiters without adding unnecessary complexity or cost.",
    ],
    cta: defaultCta,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tag: "Bunch CRM for Manufacturing",
    seoDescription:
      "Order-to-dispatch workflows, shift scheduling, and biometric attendance synced to payroll in one flat-priced platform.",
    hero: {
      lines: ["Every order tracked.", "Every shift accounted for."],
      flow: ["Order", "Dispatch"],
      subtitle: "The order-to-dispatch workflows Bunch connects for your plant.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Manufacturing businesses run on tight coordination between sales, shop floor, and back office, but most still manage orders, production, and attendance across disconnected tools: order details in email, production status on a whiteboard, and biometric attendance re-typed into payroll by hand. It holds together at low volume, but when order count rises, that fragmentation shows up as delayed dispatches and payroll errors.",
      solution:
        "We replace scattered spreadsheets and manual entry with one connected system built around how manufacturers actually manage orders, production, and their workforce.",
      pains: [
        "Orders scattered across email, calls, and paper records",
        "No visibility into order status from confirmation to dispatch",
        "Manual production and shift scheduling",
        "Biometric attendance re-typed into payroll by hand",
        "Delayed reporting on production and workforce data",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Orders & Dispatch",
        description:
          "Turning every order into a tracked record with a clear status, instead of a detail buried in email.",
        items: ["Automated order-to-dispatch pipeline", "Production status tracking"],
      },
      {
        tag: "Operations",
        title: "Attendance & Payroll",
        description:
          "Running shop floor attendance and payroll without manual re-entry or spreadsheet reconciliation.",
        items: [
          "Biometric attendance synced to payroll",
          "Shift scheduling and workforce tracking",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving plant managers and admin staff AI tools that cut down repetitive coordination work.",
        items: [
          "Copilot for order and production status",
          "On-demand workforce and output reports",
        ],
      },
    ],
    caseStudies: {
      title: "Real businesses, real results",
      items: [
        {
          category: "Auto Components",
          company: "Vantage Auto Components",
          metric: "38%",
          metricLabel: "faster payroll close",
          problem:
            "Shift attendance across three production lines was tracked on paper and manually entered into payroll each month, causing frequent salary discrepancies for 150+ workers.",
          approach:
            "Connected biometric attendance directly to Payroll and HRMS, syncing clock-ins across all shifts with zero manual entry.",
          outcome:
            "Payroll now closes without manual reconciliation, salary disputes dropped sharply, and HR redirected the saved time toward hiring.",
        },
        {
          category: "Packaging",
          company: "Sterling Packaging Co",
          metric: "33%",
          metricLabel: "fewer delayed dispatches",
          problem:
            "Order status lived in the sales team's inbox, so production and dispatch teams had no shared view of what was confirmed or due.",
          approach:
            "Moved order intake, production status, and dispatch tracking into one Bunch workspace, visible across sales and shop floor.",
          outcome:
            "Order status is now visible in real time from confirmation to dispatch, and delayed shipments dropped noticeably.",
        },
        {
          category: "Textile",
          company: "Ashoka Textile Mills",
          metric: "30%",
          metricLabel: "fewer understaffed shifts",
          problem:
            "Shift scheduling across multiple production lines was managed on paper, leading to understaffed shifts and last-minute scrambling.",
          approach:
            "Centralized shift planning, attendance, and workforce data in the HRMS and Task Management modules.",
          outcome:
            "Shift coverage improved sharply, and plant supervisors shifted from firefighting gaps to planning ahead.",
        },
      ],
    },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~40%",
          label: "faster order-to-dispatch turnaround",
          note: "Through automated order and production status tracking.",
        },
        {
          value: "~55%",
          label: "less manual work",
          note: "Achieved in attendance and payroll processing per month.",
        },
      ],
      quote:
        "Manufacturers that connect orders, production, and workforce data into one system dispatch faster and close payroll with fewer errors, without adding back-office headcount.",
      quoteSource: "Bunch Manufacturing Outlook 2026",
      features: [
        { title: "Order & Dispatch Automation", description: "Track every order from confirmation to dispatch, with status visible to all teams." },
        { title: "Production & Shift Scheduling", description: "Plan shifts and production runs with fewer manual conflicts." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which orders or shifts need attention today." },
        { title: "Attendance & Payroll Workflows", description: "Biometric attendance synced directly to payroll, with zero manual re-entry." },
        { title: "Workforce & Output Reporting", description: "Centralized data feeding directly into production and payroll reports." },
        { title: "Client & Team Communication", description: "Automated updates on order status and dispatch, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add shift workers, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, order tracking, payroll automation, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual work and help teams operate more efficiently.",
      "See how easily each CRM handles growing order volume, shift workers, and production data without adding unnecessary complexity or cost.",
    ],
    cta: defaultCta,
  },
  {
    slug: "marketing-it-digital-agencies",
    name: "Marketing, IT & Digital Agencies",
    tag: "Bunch CRM for Marketing, IT & Digital Agencies",
    seoDescription:
      "Lead-to-delivery workflows, projects, and retainer billing for agencies in one flat-priced CRM.",
    hero: {
      lines: ["Every client followed up.", "Every project delivered on time."],
      flow: ["Lead", "Delivery"],
      subtitle: "The lead-to-delivery workflows Bunch connects for your agency.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Agencies run on client trust and delivery speed, but most still manage leads, projects, and billing across disconnected tools — a Gmail inbox for enquiries, a Slack channel for project updates, and a spreadsheet for retainer billing. It holds together with two or three clients, but as the roster grows, that fragmentation starts costing pitches, deadlines, and renewals.",
      solution:
        "We replace scattered inboxes and status threads with one connected system built around how agencies actually win clients, run projects, and get paid on time.",
      pains: [
        "Leads scattered across email, DMs, and referral calls",
        "No visibility into proposal-to-client conversion",
        "Project status tracked across Slack, spreadsheets, and inboxes",
        "Retainer invoicing and renewal follow-ups missed",
        "No centralized view of team capacity across projects",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Client Leads & Proposals",
        description:
          "Turning every enquiry into a tracked lead with a clear owner and next action, instead of a proposal that sits unanswered.",
        items: [
          "Automated lead-to-client pipeline",
          "Account manager follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Projects & Retainers",
        description:
          "Running project delivery, campaign timelines, and retainer billing without spreadsheets or scattered status threads.",
        items: [
          "Project and campaign timeline tracking",
          "Automated invoicing and retainer reminders",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving account managers and delivery teams AI tools that cut down repetitive coordination work.",
        items: [
          "Copilot for client follow-ups",
          "On-demand project status and utilization reports",
        ],
      },
    ],
    caseStudies: {
      title: "Real businesses, real results",
      items: [
        {
          category: "Digital Marketing",
          company: "Northlight Digital Marketing",
          metric: "47%",
          metricLabel: "faster proposal turnaround",
          problem:
            "Leads came through website forms, Instagram DMs, and referrals — nothing synced, so proposals went out late or got duplicated across account managers.",
          approach:
            "Moved leads and tasks into one Bunch workspace, with proposal follow-up tasks auto-assigned to account managers the moment a lead came in.",
          outcome:
            "Every lead becomes a tracked task automatically, proposal status is visible on one dashboard, and no enquiry goes unanswered.",
        },
        {
          category: "IT & Software",
          company: "Cobalt Software Solutions",
          metric: "8 hrs",
          metricLabel: "saved weekly per account manager",
          problem:
            "Project status lived across Slack threads and a shared spreadsheet, so account managers often gave clients outdated updates on sprint progress.",
          approach:
            "Connected project timelines directly to client communication and automated status updates inside Bunch.",
          outcome:
            "Clients get accurate status without manual chasing, and delivery teams stopped duplicating the same update across three different tools.",
        },
        {
          category: "Creative & Branding",
          company: "Foundry Creative Studio",
          metric: "34%",
          metricLabel: "fewer late invoices",
          problem:
            "Retainer invoicing was tracked manually across clients in a spreadsheet, causing late billing and missed renewal conversations.",
          approach:
            "Centralized client contracts, retainer billing, and renewal reminders in the CRM and Task Management modules.",
          outcome:
            "Billing cycles closed on time, and account managers redirected saved time toward client strategy work instead of chasing invoices.",
        },
      ],
    },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~45%",
          label: "faster lead-to-client conversion",
          note: "Through automated proposal follow-up workflows.",
        },
        {
          value: "~55%",
          label: "less manual work",
          note: "Achieved in project status updates and billing per month.",
        },
      ],
      quote:
        "Agencies that connect leads, projects, and billing into one system deliver faster and retain more clients, without adding account management headcount.",
      quoteSource: "Bunch Agency Outlook 2026",
      features: [
        { title: "Lead & Proposal Automation", description: "Route every enquiry to an account manager instantly and track it through to signed client." },
        { title: "Project & Campaign Scheduling", description: "Plan timelines and allocate delivery teams with automatic conflict alerts." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which leads or invoices need attention today." },
        { title: "Retainer & Invoicing Workflows", description: "Automated reminders and real-time billing status tracking, per client." },
        { title: "Client & Project Records", description: "Centralized data feeding directly into delivery timelines and reporting." },
        { title: "Client Communication", description: "Automated updates on proposals, project status, and billing, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add account managers, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, proposal tools, billing automation, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual follow-up and help account managers work more efficiently.",
      "See how easily each CRM handles growing client volume, projects, and staff without adding unnecessary complexity or cost.",
    ],
    cta: defaultCta,
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tag: "Bunch CRM for Real Estate",
    seoDescription:
      "Enquiry-to-booking workflows, site visits, inventory, and installment tracking in one flat-priced CRM.",
    hero: {
      lines: ["Every lead followed up.", "Every booking closed faster."],
      flow: ["Enquiry", "Booking"],
      subtitle:
        "The enquiry-to-booking workflows Bunch connects for your real estate business.",
    },
    challenge: {
      title: "Where teams get stuck",
      intro:
        "Real estate businesses run on trust and timing, but most still manage leads, site visits, and payments across disconnected tools — a WhatsApp inbox for enquiries, a spreadsheet for inventory, and payment schedules tracked by hand. It holds together with a handful of active listings, but as inventory and lead volume grow, that fragmentation starts costing real bookings.",
      solution:
        "We replace scattered spreadsheets and chat threads with one connected system built around how real estate teams actually manage leads, site visits, and payments.",
      pains: [
        "Leads scattered across property portals, calls, and WhatsApp",
        "No visibility into enquiry-to-booking conversion",
        "Manual site visit scheduling and follow-ups",
        "Payment and installment reminders sent late or missed",
        "No centralized view of unit and inventory availability",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Leads & Site Visits",
        description:
          "Turning every enquiry into a tracked lead with a clear owner and next action, instead of a message that goes cold.",
        items: [
          "Automated enquiry-to-booking pipeline",
          "Sales executive follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Inventory & Payments",
        description:
          "Running site visit scheduling, inventory tracking, and payment collection without spreadsheets or manual reconciliation.",
        items: [
          "Unit and inventory availability tracking",
          "Automated payment reminders and installment tracking",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI Enablement",
        description:
          "Giving sales and admin staff AI tools that cut down repetitive coordination work.",
        items: [
          "Copilot for buyer follow-ups",
          "On-demand inventory and payment status reports",
        ],
      },
    ],
    caseStudies: {
      title: "Real businesses, real results",
      items: [
        {
          category: "Residential",
          company: "Meridian Homes",
          metric: "50%",
          metricLabel: "fewer missed follow-ups",
          problem:
            "Leads came through property portals, walk-ins, and referrals — nothing synced, so site visit follow-ups were often missed or delayed by days.",
          approach:
            "Moved leads and tasks into one Bunch workspace, with follow-up tasks auto-assigned to sales executives the moment an enquiry came in.",
          outcome:
            "Every enquiry becomes a tracked task automatically, booking conversion is visible on one dashboard, and no lead goes cold.",
        },
        {
          category: "Commercial",
          company: "Highstreet Commercial Properties",
          metric: "6 hrs",
          metricLabel: "saved weekly per sales coordinator",
          problem:
            "The sales team manually tracked installment payments across buyers in a spreadsheet, chasing clients individually every month.",
          approach:
            "Connected booking records directly to automated payment reminders and installment tracking inside Bunch.",
          outcome:
            "Late payments dropped, staff stopped manual follow-up calls, and payment status is visible per buyer in real time.",
        },
        {
          category: "Brokerage",
          company: "Cornerstone Realty Partners",
          metric: "37%",
          metricLabel: "faster site visit scheduling",
          problem:
            "Site visit scheduling across multiple projects was managed on a shared register, causing double bookings and confused buyers.",
          approach:
            "Centralized site visit scheduling, inventory, and lead data in the Lead Management and Task modules.",
          outcome:
            "Scheduling conflicts dropped sharply, and sales time shifted from firefighting clashes to closing deals.",
        },
      ],
    },
    outcomes: {
      title: "The Impact of Automation",
      subtitle:
        "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
      stats: [
        {
          value: "~48%",
          label: "faster lead-to-booking conversion",
          note: "Through automated enquiry-to-booking follow-up workflows.",
        },
        {
          value: "~58%",
          label: "less manual work",
          note: "Achieved in payment tracking and reminder processes per month.",
        },
      ],
      quote:
        "Real estate businesses that connect leads, site visits, and payments into one system close more bookings from the leads they already have, without adding headcount.",
      quoteSource: "Bunch Real Estate Outlook 2026",
      features: [
        { title: "Enquiry & Booking Automation", description: "Route every enquiry to a sales executive instantly and track it through to booking." },
        { title: "Site Visit & Inventory Scheduling", description: "Plan site visits and manage unit availability with automatic conflict alerts." },
        { title: "AI-Powered Follow-Up Support", description: "Natural-language agents that surface which leads or payments need attention today." },
        { title: "Payment & Installment Workflows", description: "Automated reminders and real-time payment status tracking, per buyer." },
        { title: "Inventory & Booking Records", description: "Centralized unit and booking data feeding directly into sales reporting." },
        { title: "Buyer Communication", description: "Automated updates on site visits, bookings, and payments, without manual messaging." },
      ],
    },
    criteria: [
      "Look beyond the starting price. Compare what each CRM actually costs as you add sales executives, staff, or need access to more features.",
      "A low starting price means little if essential features cost extra. We compare the modules, site visit tools, payment automation, and other capabilities included in each plan.",
      "Is AI genuinely part of the CRM or simply an optional add-on? We look at how each platform uses AI to reduce manual follow-up and help sales teams work more efficiently.",
      "See how easily each CRM handles growing lead volume, inventory, and sales staff without adding unnecessary complexity or cost.",
    ],
    cta: defaultCta,
  },
  {
    slug: "insurance-agencies",
    name: "Insurance Agencies",
    tag: "Bunch CRM for Insurance Agencies",
    seoDescription:
      "Enquiry-to-renewal workflows, quotations, policy servicing, and renewals for insurance agencies in one flat-priced CRM.",
    hero: {
      lines: ["Every lead followed up.", "Every renewal on time."],
      flow: ["Enquiry", "Renewal"],
      subtitle: "The enquiry-to-renewal workflows Bunch connects for your agency.",
    },
    challenge: {
      title: "Where insurance teams get stuck",
      intro:
        "Insurance agencies grow through trust, timely advice, and consistent follow-through. Yet enquiries often arrive through calls, WhatsApp, email, website forms, referrals, and walk-ins, while quotation notes, policy details, renewal dates, documents, and client conversations sit in different places. The team stays busy, but managers still cannot see which opportunity needs attention, which policy is waiting on action, or which client is approaching renewal.",
      solution:
        "Bunch replaces scattered registers, spreadsheets, chat threads, and personal reminders with one connected workspace built around how insurance agencies actually manage prospects, clients, policies, service requests, renewals, and team responsibilities.",
      pains: [
        "Enquiries scattered across calls, WhatsApp, email, website forms, referrals, and walk-ins",
        "No shared view of quotation, proposal, policy, endorsement, and renewal status",
        "Follow-ups and renewal reminders depend on individual diaries or memory",
        "Client documents and conversation history are difficult to find when another team member steps in",
        "Claims and service requests are coordinated through disconnected messages, with limited ownership visibility",
      ],
    },
    deliverables: [
      {
        tag: "Efficiency",
        title: "Leads & Quotations",
        description:
          "Turn every enquiry into a tracked opportunity with a clear owner, current stage, next action, and complete interaction history.",
        items: [
          "Multi-channel enquiry capture and assignment",
          "Quotation-stage tracking and follow-up reminders",
        ],
      },
      {
        tag: "Operations",
        title: "Policies, Renewals & Service",
        description:
          "Coordinate policy servicing, renewal activity, endorsements, claims-related tasks, and client communication without relying on disconnected trackers.",
        items: [
          "Policy and renewal task workflows",
          "Service-request and claims follow-up coordination",
        ],
      },
      {
        tag: "Future Readiness",
        title: "AI-Enabled Agency Operations",
        description:
          "Give agents, relationship managers, and operations teams an AI assistant that surfaces priorities and turns business context into action.",
        items: [
          "Daily follow-up and renewal prioritisation",
          "On-demand answers from connected agency activity",
        ],
      },
    ],
    caseStudies: {
      title: "Practical insurance workflows, clearly explained",
      intro:
        "Ask us to show the workflow, not just the feature list. The examples below demonstrate how Bunch can connect lead management, task ownership, client activity, policy servicing, renewal planning, and day-to-day coordination inside an insurance agency. They are illustrative operating scenarios.",
      items: [
        {
          category: "Retail Insurance Agency",
          company: "New Enquiry Follow-Up",
          metric: "100%",
          metricLabel: "of captured enquiries routed to a named owner",
          problem:
            "New enquiries arrive through website forms, calls, WhatsApp, referrals, and branch walk-ins. Details are copied into separate registers, so response time depends on who sees the message first.",
          approach:
            "Capture each enquiry in the Lead Management module, tag it by insurance category and source, assign it automatically, and create the next follow-up task with a due date.",
          outcome:
            "Every captured enquiry appears in a shared pipeline with an owner, stage, activity history, and next action. Managers can identify untouched or overdue opportunities without asking for manual updates.",
        },
        {
          category: "Life & Health Brokerage",
          company: "Policy Renewal Management",
          metric: "1",
          metricLabel: "shared renewal queue for the agency",
          problem:
            "Renewal dates sit across policy files and spreadsheets. Relationship managers build their own reminder lists, creating uneven follow-up and limited visibility for supervisors.",
          approach:
            "Record renewal dates against the client or policy record, create time-based tasks before expiry, and organise the renewal pipeline by owner, product, stage, and urgency.",
          outcome:
            "The team works from one prioritised renewal queue. Upcoming, contacted, documentation-pending, quoted, renewed, and lost cases remain visible from the same workspace.",
        },
        {
          category: "Commercial Lines Agency",
          company: "Claims & Service Coordination",
          metric: "1",
          metricLabel: "connected activity trail per client request",
          problem:
            "Claim notifications, endorsements, certificates, and document requests are handled through email and chat. When ownership changes or a client calls again, the latest position is hard to reconstruct.",
          approach:
            "Create a service or claim-related task, assign responsibility, record notes and supporting details, add deadlines, and keep linked activities visible against the client account.",
          outcome:
            "Agents and managers can see what was requested, who owns the next action, what is overdue, and what has already been communicated, without searching across personal inboxes.",
        },
      ],
    },
    outcomes: {
      title: "The impact of connected insurance workflows",
      subtitle:
        "Clear ownership, timely reminders, and one operational view help an agency respond faster and keep revenue-protecting work visible.",
      stats: [
        {
          value: "~100%",
          label: "of recorded renewals scheduled",
          note: "Every policy renewal entered with complete data can generate a planned sequence of owner-assigned tasks before expiry.",
        },
        {
          value: "~1",
          label: "connected client history",
          note: "Leads, calls, notes, tasks, policy-related activity, renewals, and service follow-ups remain visible to authorised team members.",
        },
      ],
      quote:
        "When an insurance agency connects enquiries, client activity, policies, renewals, and team tasks in one system, it can protect more opportunities through consistent follow-through rather than additional manual coordination.",
      quoteSource: "Insurance Workflow Perspective",
      features: [
        { title: "Enquiry Capture & Routing", description: "Bring enquiries from approved sources into one pipeline, assign an owner, record the source, and set the next action so new opportunities do not remain unworked." },
        { title: "Quotation & Proposal Tracking", description: "Track every opportunity from requirement gathering and quotation preparation through proposal sharing, negotiation, payment follow-up, and closure." },
        { title: "Policy & Renewal Workflows", description: "Record key dates, create pre-renewal tasks, organise cases by stage, and give managers a live view of upcoming and overdue renewal activity." },
        { title: "Claims & Service Follow-Up", description: "Assign claim-related and policy-service requests, capture notes, set deadlines, and keep the next action visible until the request is completed." },
        { title: "Client Activity History", description: "Keep calls, meetings, notes, documents, tasks, and relationship history connected so another authorised team member can continue the conversation with context." },
        { title: "AI-Powered Daily Priorities", description: "Ask Bunzo which leads, quotations, renewals, claims-related tasks, or client commitments need attention, then create or assign the required task." },
      ],
    },
    criteria: [
      "Compare the real cost as agents, relationship managers, operations staff, supervisors, and branch users are added, not only the entry-level subscription price.",
      "Check whether lead management, customer records, tasks, team activity, HR functions, reporting, automation, and AI require separate plans or add-ons.",
      "Evaluate whether AI can work with live business context to answer questions and drive action, rather than appearing only as a separate writing assistant.",
      "Assess whether the agency can coordinate customer-facing and internal work in one connected workspace or must maintain several disconnected systems.",
    ],
    cta: defaultCta,
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}
