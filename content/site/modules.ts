import type { ModulePage } from "./types";

const trial = { label: "Start your free trial", href: "/start-free-trial/" };
const sales = { label: "Talk to Sales", href: "/book-a-discovery-call/" };

export const modules: ModulePage[] = [
  {
    slug: "lead-management",
    name: "Lead Management",
    summary:
      "Capture leads, assign them to the right team member, track follow-ups, and keep your sales pipeline organized.",
    visual: "pipeline",
    seoTitle: "Sales Pipeline & Lead Management Software",
    seoDescription:
      "Capture leads, manage contacts, organize your sales pipeline, schedule follow-ups, and track every sales activity in one CRM.",
    hero: {
      title: "The Sales Pipeline Management Software",
      accent: "Built for How You Actually Sell",
      description:
        "Bunch is CRM software for small business teams that need more than a spreadsheet and less hassle than a bloated enterprise system. Capture leads, manage contacts, organize your sales pipeline, schedule follow-ups, track calls and meetings, and keep every sales activity connected from first contact to conversion.",
      cta: trial,
    },
    why: {
      title: "Why Teams Pick Bunch",
      subtitle: "What Makes Bunch the Right CRM Software for Growing Teams",
      items: [
        { title: "Scales With Your Pipeline", description: "From your first few leads to a busy sales pipeline, Bunch gives your team one connected place to capture, organize, assign, and track opportunities without relying on spreadsheets or scattered conversations." },
        { title: "Access That Matches Your Org Chart", description: "Reps see the leads they are responsible for, managers can view their team's work, and admins have broader visibility based on their permissions. CRM activity stays connected to the appropriate users and records." },
        { title: "A Pipeline Built Around Your Sales Process", description: "Create leads and place them in the first open stage automatically. Configure your stages and their order around the way your team sells, then move leads forward when an explicit stage action happens." },
        { title: "One Dashboard, the Whole Pipeline", description: "See leads by stage, source, type, owner, follow-up, and activity. Keep an eye on what is happening across the pipeline without asking every sales rep for a manual update." },
        { title: "An AI Agent Built Into the Workflow", description: "Bunzo AI gives your team a conversational way to work with CRM data. Ask questions about leads, clients, pipeline activity, and follow-ups, then use the information to decide what needs attention next." },
      ],
    },
    problem: {
      title: "The Problem With Most Sales Lead Tracking Software",
      subtitle: "Where Small Business Lead Management Falls Apart",
      intro: [
        "Most small business sales teams start with a spreadsheet, a shared inbox, and good intentions. It works fine at low volume. Then the leads start coming in faster, and things slip through: a lead nobody followed up on, a call nobody logged, a deal that stayed in the same stage even though the team thought it had moved forward.",
      ],
      closing:
        "Bunch is built to be the sales management software that brings leads, contacts, pipeline stages, activities, and follow-ups into one connected system.",
      pains: [
        "Leads sitting in inboxes and spreadsheets with no clear owner or next step",
        "No single view of where each opportunity actually stands",
        "Follow-ups scheduled separately from pipeline stage tracking",
        "Calls and meetings recorded without a complete activity history",
        "Manual stage updates that are difficult for managers to monitor",
        "No clear view of what needs attention next",
        "Limited visibility into who changed a lead's stage or when",
      ],
    },
    deliverables: {
      title: "What Bunch Helps You Manage",
      subtitle: "Our Deliverables",
      items: [
        {
          tag: "Efficiency",
          title: "Lead Management",
          description: "Capture and organize leads with the information your sales team needs to work them effectively.",
          note: "Create a lead once and Bunch places it into the first open pipeline stage based on your configured stage order.",
          items: ["Lead and contact management", "Multiple contacts per lead", "Lead source and type tracking", "Duplicate detection", "Saved filters and views", "Lead ownership and assignment"],
        },
        {
          tag: "Operations",
          title: "Sales Pipeline Management",
          description: "Use a configurable sales pipeline to organize opportunities from the first open stage through Won or Lost.",
          note: "A lead can remain in its current stage while a follow-up, call, or meeting is scheduled. Pipeline movement happens when an explicit stage action moves the lead, rather than simply because a follow-up was scheduled.",
          items: ["Kanban pipeline", "Configurable sales stages", "Drag-and-drop status updates", "Pipeline filters", "Owner-wise visibility", "Stage order and transition controls"],
        },
        {
          tag: "Future Readiness",
          title: "Sales Activity Tracking",
          description: "Keep calls, meetings, notes, follow-ups, stage changes, and other sales activity connected to the lead.",
          note: "The lead timeline keeps activity connected, while stage history records when a lead enters or exits a stage and who made the change.",
          items: ["Scheduled calls", "Meetings and appointments", "Follow-up scheduling", "Rescheduling history", "Outcome tracking", "Complete activity timeline", "Stage history", "Next-action visibility"],
        },
      ],
    },
    outcomes: {
      title: "The Impact of Connected CRM Workflows",
      subtitle: "What You Can Expect at Scale. No inflated claims, just the numbers the system is built and tested against.",
      stats: [
        { value: "~40%", label: "faster lead response", note: "By automating status updates the moment a call or meeting is booked." },
        { value: "~55%", label: "less manual pipeline work", note: "Through automatic conversion, timeline logging, and duplicate detection." },
      ],
      quote: "When leads, contacts, activities, and pipeline stages work together in one system, sales teams get a clearer view of every opportunity.",
      quoteSource: "Bunch",
      features: [
        { title: "Lead Tracking", description: "Track every lead from creation through the sales pipeline with status, source, type, owner, follow-ups, and activity history." },
        { title: "Contact Management", description: "Manage multiple contacts for each lead while keeping the primary contact clearly identified." },
        { title: "Sales Pipeline", description: "Use a configurable Kanban pipeline to see where leads stand and move them through the appropriate stages." },
        { title: "Calls & Meetings", description: "Schedule calls and meetings against leads and contacts, record outcomes, and maintain the activity history." },
        { title: "Lead Timeline", description: "See calls, meetings, notes, follow-ups, stage changes, and other lead activity in one chronological view." },
        { title: "Sales Reports", description: "Review leads by status, source, type, owner, and date to understand pipeline activity and sales performance." },
      ],
    },
    steps: {
      title: "Get Your Sales Pipeline Running in Four Steps",
      subtitle: "From Signup to a Working CRM, Fast",
      items: [
        { title: "Set up your workspace", description: "Sign up and get your lead management, pipeline, and Kanban views ready to use. Configure your sales stages and their order according to the process your team follows." },
        { title: "Bring in your leads and contacts", description: "Import leads from a spreadsheet or add them individually. Add contacts, sources, types, notes, and ownership so your team has the right information from the beginning.", note: "When a lead is created, Bunch places it into the first open stage based on the configured stage order." },
        { title: "Set up your team and your stages", description: "Invite your sales team, assign roles, and configure your pipeline stages. Set stage targets and controls so your team knows how long a lead should typically remain in each stage.", note: "Stage targets drive the on-track or overdue timer. They do not automatically move a lead to another stage." },
        { title: "Start working your deals", description: "Schedule follow-ups, calls, and meetings, update lead activity, and move leads between stages when the appropriate action happens.", note: "Use the lead timeline and next-action view to see what needs attention, while stage history keeps a record of pipeline movement." },
      ],
    },
    audiences: {
      title: "Built for Sales Teams",
      items: [
        { title: "For Sales Reps", description: "Keep your leads, contacts, follow-ups, calls, meetings, and pipeline updates in one workspace.", items: ["Track your leads", "Manage follow-ups", "Schedule calls and meetings", "Update pipeline stages", "Review lead activity", "See your next actions"] },
        { title: "For Sales Managers", description: "See where leads are, what needs attention, and how the team is progressing through the sales process.", items: ["Review pipeline by owner", "Track stage movement", "Monitor follow-ups and activities", "Track won and lost leads", "Analyse sales activity", "Review stage history"] },
        { title: "For Small Businesses", description: "Bring lead management, contacts, pipeline tracking, activities, follow-ups, and sales history together without building your process around multiple disconnected tools.", items: ["Centralised lead management", "Configurable pipeline tracking", "Connected sales history", "Follow-up management", "Activity timeline"] },
      ],
    },
    panels: [
      {
        title: "Sales Lead Tracking Software That Remembers Every Call",
        subtitle: "Every Sales Activity Tied to the Right Lead and Contact",
        description: "Keep calls, meetings, follow-ups, notes, and outcomes connected to the relevant lead and contact. Your team gets a complete activity history instead of isolated records across different tools.",
        points: ["Schedule and track calls and meetings", "Connect activities to the relevant lead and contact", "Record outcomes and notes", "Maintain activity history", "Track rescheduling and changes", "See the latest activity from the lead timeline"],
      },
      {
        title: "A Clear View of What Happens Next",
        description: "Bunch identifies the next open action from the lead's scheduled calls, meetings, and follow-ups. This gives sales reps a clear next step without changing the pipeline stage automatically.",
        points: [],
      },
    ],
    bunzoPrompts: ["Which leads have overdue follow-ups?", "Show me the leads still sitting in New."],
    faqs: {
      title: "Questions About Bunch CRM",
      items: [
        { question: "What is Bunch CRM and what can I use it for?", answer: "Bunch CRM helps you manage leads, contacts, sales pipeline stages, calls, meetings, and sales activity from one connected workspace. You can track a lead from its first interaction through to conversion into a Client." },
        { question: "Is Bunch a good CRM software for small businesses?", answer: "Bunch brings lead management, sales pipeline tracking, activity management, reporting, and client conversion together in one system, giving small businesses a central place to manage their sales process." },
        { question: "Can I customise my sales pipeline in Bunch?", answer: "Yes. Administrators can configure pipeline statuses, their order, and the transitions allowed between stages. The default pipeline includes New, Contacted, Qualified, Proposal, Negotiation, Won, and Lost." },
        { question: "Can Bunch track leads and sales activities?", answer: "Yes. You can track leads by status, source, type, owner, and date, while also managing calls, appointments, notes, and other activities through the lead timeline." },
        { question: "What happens when a lead is marked as Won?", answer: "Bunch automatically creates a Client in Client Management and carries forward the lead's contacts, calls, appointments, notes, outcomes, and complete activity history. The original lead remains available as a linked, read-only record." },
        { question: "Can I use Bunzo AI with Bunch CRM?", answer: "Yes. Bunzo AI lets you access CRM information and perform CRM actions conversationally. It follows the same role-based access rules as the CRM and records actions in the same audit trail." },
      ],
    },
    cta: {
      title: "No pitch. Just a working CRM.",
      description: "We'll walk through your modules, your pricing, and how fast your team can be running.",
      label: "Book a discovery call",
      href: "/book-a-discovery-call/",
    },
  },
  {
    slug: "client-management",
    name: "Client Management",
    summary:
      "Manage client details, communication history, notes, and related activities without searching across different tools.",
    visual: "timeline",
    seoTitle: "Client Management Software",
    seoDescription:
      "Every won deal becomes a client record with its full history intact: contacts, calls, meetings, and notes on one timeline.",
    hero: {
      title: "Where Every Won Deal",
      accent: "Becomes a Real Relationship",
      description:
        "Bunch Client Management picks up exactly where your sales pipeline leaves off. Every client arrives with their full history intact, so your team never starts a relationship from a blank record.",
      cta: sales,
    },
    why: {
      title: "Why Teams Pick Bunch",
      subtitle: "What Makes Bunch the Right Home for Your Client Data",
      items: [
        { title: "Nothing Gets Lost at Handoff", description: "Every contact, call, meeting, and note from the sales pipeline carries over automatically the moment a lead converts." },
        { title: "Access That Matches Your Org Chart", description: "Account teams see their own clients, managers see their book of business, admins see all, enforced at the system level and logged for at least 12 months." },
        { title: "A Timeline That Never Resets", description: "A client's history starts on day one as a lead and keeps going. Nothing about the relationship starts over at conversion." },
        { title: "One View of Every Account", description: "Status, activity, and ownership, broken down for any period, so managers can see account health without chasing updates." },
        { title: "An AI Agent Built Into the Workflow", description: "Bunzo AI can answer questions about any client and act on them, with the same permissions and audit trail as a person." },
      ],
    },
    problem: {
      title: "The Problem With Most Client Records",
      subtitle: "Where Client Data Falls Apart After the Deal Closes",
      intro: [
        "A lead converts, and too often the relationship starts over in a new tool: a fresh contact card with none of the calls, none of the notes, none of the context that got the deal won in the first place. Account teams end up re-asking questions the client already answered during the sales process.",
      ],
      closing: "Bunch is built so a client record never starts from zero.",
      pains: [
        "Contact and deal history stuck in the CRM, invisible once a lead becomes a client",
        "Account teams re-learning a relationship the sales team already built",
        "No single place to see every interaction with a client, past and present",
        "Manual, error-prone handoffs between sales and account management",
        "No record of who touched a client account, or when",
      ],
    },
    deliverables: {
      title: "Everything You Need to Manage a Client Relationship",
      subtitle: "What Our Client Management Software Actually Does",
      items: [
        { tag: "Relationship", title: "Clients & Contacts", description: "Every client arrives from a Won lead with its contacts already in place, including which one is primary, so there's no re-entry and no guessing.", items: ["Automatic conversion from lead to client on Won", "Configurable field mapping between lead and client data"] },
        { tag: "History", title: "Full Activity Timeline", description: "Every call, meeting, and note from before conversion stays attached to the client, alongside everything that happens after.", items: ["Nothing overwritten, nothing reset at conversion", "A retry-safe conversion record for every client, so nothing is ever duplicated or lost"] },
        { tag: "Intelligence", title: "AI Enablement", description: "Giving account teams AI tools that surface what needs attention instead of making them dig for it.", items: ["Bunzo AI for plain-language questions about any client", "On-demand account activity and status exports"] },
      ],
    },
    outcomes: {
      title: "What You Can Expect at Scale",
      subtitle: "No inflated claims, just what the system is built to deliver.",
      stats: [
        { value: "~35%", label: "faster account handoffs", note: "By carrying contacts and history over automatically instead of manual re-entry." },
        { value: "~50%", label: "less time spent searching for context", note: "Through a single timeline that holds pre- and post-conversion activity together." },
      ],
      quote: "When client information and interactions stay connected, teams can spend less time managing records and more time building stronger client relationships.",
      quoteSource: "Bunch",
      features: [
        { title: "Automatic Client Creation", description: "Won leads become clients with contacts, history, and notes carried over in one atomic step." },
        { title: "Configurable Field Mapping", description: "Decide exactly what data moves from lead to client, and how." },
        { title: "Unified Timeline", description: "Every touchpoint, before and after conversion, in one place." },
        { title: "Retry-Safe Conversion", description: "If anything fails during conversion, nothing changes and an admin is alerted, so no client is ever created twice." },
        { title: "AI-Powered Account Support", description: "Bunzo AI answers questions about any client and can act on them directly." },
        { title: "Role-Based Visibility", description: "Account teams see their own clients, managers see their book, admins see all." },
      ],
    },
    steps: {
      title: "Get a Client Onboarded in Four Steps",
      subtitle: "From Won Deal to Managed Account, Automatically",
      items: [
        { title: "The deal closes", description: "A rep marks the lead Won, and conversion starts immediately, no manual data entry required." },
        { title: "The client record is created", description: "Contacts, calls, meetings, and notes carry over in one atomic step, mapped the way your admin has configured." },
        { title: "The account team takes over", description: "The new client shows up with its full history already attached, ready for the next conversation." },
        { title: "The relationship keeps a single timeline", description: "Everything that happens next lands on the same record as everything that happened before." },
      ],
    },
    audiences: {
      title: "Built for Your Team",
      items: [
        { title: "For Account Managers", description: "Pick up client conversations with the relevant history already available.", items: ["Understand previous interactions", "Access connected client information"] },
        { title: "For Sales Teams", description: "Move smoothly from closing a lead to managing the ongoing relationship.", items: ["Preserve sales history", "Maintain client continuity"] },
        { title: "For Business Owners", description: "Keep client information organised and accessible instead of depending on individual team members.", items: ["Centralise client information", "Maintain relationship history"] },
      ],
    },
    panels: [
      {
        title: "One System for the Whole Client Lifecycle",
        subtitle: "Sales History and Account Management, Connected",
        description: "Capture a lead. Win the deal. Manage the client. Every step lives in the same system, with the same access rules and the same audit trail, whether it's a rep closing a deal or an account manager handling a renewal.",
        points: [
          "Account teams see their own clients, managers see their book of business, admins see all",
          "A full, timestamped timeline on every account. Nothing can be edited away, only corrected, with the original still visible",
          "Anything a person can do by hand, Bunzo AI can do conversationally, with a confirmation step before anything gets written",
        ],
      },
    ],
    faqs: {
      title: "Questions About Client Management",
      items: [
        { question: "What is client management software?", answer: "Client management software helps businesses organise client information, maintain relationship history, and give teams a central place to manage ongoing client relationships." },
        { question: "What can I manage with Bunch Client Management?", answer: "Bunch Client Management is designed to keep client information and relationship context connected, including the information carried forward from the Sales / CRM process." },
        { question: "Does Bunch keep the history when a lead becomes a Client?", answer: "Yes. When a lead is marked Won, Bunch automatically creates a Client and carries forward contacts, calls, appointments, notes, and the complete activity timeline." },
        { question: "Can Bunch be used as client management software for small businesses?", answer: "Yes. Bunch brings client information and sales-to-client continuity into one business management platform, helping small teams keep client information organised as they grow." },
        { question: "Can I track client information and previous interactions?", answer: "Bunch is designed to maintain the information and history carried over from the CRM, so the client relationship can be traced back to its sales journey." },
        { question: "Can I use Bunzo AI with Client Management?", answer: "Bunzo AI sits across the Bunch suite as a conversational layer, allowing users to work with business information through natural-language interactions." },
      ],
    },
    cta: {
      title: "Keep Every Client Relationship Connected",
      description: "Give your team one place to manage client information, preserve relationship history, and continue every conversation with the right context.",
      label: "Start Your Free Trial",
      href: "/start-free-trial/",
    },
  },
  {
    slug: "task-management",
    name: "Task Management",
    summary:
      "Split the work into tasks and sub-tasks, hand out ownership, and watch progress move in real time.",
    visual: "tasks",
    seoTitle: "Task Management Software",
    seoDescription:
      "Create and assign work, track progress, manage checklists, handle blocked tasks, log time, and see what is still not done.",
    hero: {
      title: "Task Management Software",
      accent: "That Actually Tracks the Work",
      description:
        "Bunch is a task management system built for teams that need more than a simple to-do list. Create and assign work, track progress, manage checklists, handle blocked tasks, log time, and see what is still not done, all from one task management system.",
      cta: trial,
    },
    why: {
      title: "Why Teams Pick Bunch",
      subtitle: "What Makes Bunch the Right Task Management Software for Growing Teams",
      items: [
        { title: "Clear Ownership From the Start", description: "Every task has one accountable owner, a due date, and a clear status. Whether it is assigned from Bunch, a project, a client record, or WhatsApp, everyone knows who owns the work and when it is due." },
        { title: "Nothing Gets Lost in the Workflow", description: "Bunch keeps tasks moving through clear statuses: To Do, In Progress, Blocked, Done, and Cancelled. Overdue work is flagged automatically, while blocked tasks stay visible instead of disappearing from the team's view." },
        { title: "See What's Not Done", description: "Individual and team scorecards show Work Not Done (WND) and Work Not Done On Time (WNDOT). Managers can quickly see which tasks are still open, which were completed late, and where work needs attention." },
        { title: "An AI Agent Built Into the Workflow", description: "Bunzo AI can create and update tasks from natural language, suggest the right owner, understand typed or voice input, send reminders, and help teams find what is still not done." },
        { title: "Work From Bunch or WhatsApp", description: "Tasks do not have to start inside the task dashboard. Create tasks, receive assignments, mark work done, ask for more time, and interact with Bunzo through WhatsApp while keeping everything connected to the same task record." },
      ],
    },
    problem: {
      title: "The Problem With Most Task Tracking Software",
      subtitle: "Why Simple To-Do Lists Break Down for Teams",
      intro: [
        "A basic task list can tell you what exists. It does not always tell you what is actually moving, what is blocked, what is overdue, or what your team is consistently failing to finish on time.",
        "Teams end up chasing updates in chat, asking who owns a task, manually checking overdue work, and trying to understand performance from scattered information.",
      ],
      closing: "Bunch is built to be the employee task management system that keeps ownership, deadlines, progress, activity, and accountability in one place.",
      pains: [
        "Tasks without clear ownership or due dates",
        "No visibility into what is still not done",
        "Blocked work gets buried instead of highlighted",
        "Managers spend time chasing status updates",
        "Late work is difficult to identify across the team",
        "Task performance is disconnected from the actual work",
      ],
    },
    deliverables: {
      title: "What Our Task Management System Actually Does",
      subtitle: "What Our Task Management Software Actually Does",
      items: [
        { tag: "Efficiency", title: "Task Creation & Assignment", description: "Create tasks with the context your team needs and assign them to one accountable owner.", items: ["Create tasks from Bunch, projects, client pages, or WhatsApp", "Assign one owner for every task", "Set priorities and due dates", "Add tags, followers, collaborators, and checklists", "Link tasks to a project or keep them standalone", "Use Bunzo AI to create tasks from typed or voice instructions"] },
        { tag: "Operations", title: "Employee Task Tracking", description: "Know what everyone is working on and what still needs to be completed.", items: ["Track To Do, In Progress, Blocked, Done, and Cancelled tasks", "See overdue work automatically", "Track individual and team workloads", "View tasks by owner, project, client, or status", "Mark tasks blocked with a reason", "Request more time before a due date", "Log hours, comments, attachments, and task activity"] },
        { tag: "Future Readiness", title: "Project & Standalone Tasks", description: "Manage project work and independent tasks without forcing everything into the same workflow.", items: ["Project-linked tasks", "Standalone tasks", "Client-linked tasks", "Project progress that updates automatically", "Task history and activity records", "Move standalone work into a project later without losing its history"] },
      ],
    },
    outcomes: {
      title: "Bunch Task Management",
      subtitle: "No inflated claims, just what the system is built and tested against.",
      stats: [
        { value: "~45%", label: "less time spent chasing status", note: "Through a shared dashboard instead of manual check-ins." },
        { value: "~50%", label: "fewer missed recurring tasks", note: "By generating occurrences automatically instead of relying on memory." },
      ],
      quote: "When tasks, deadlines, and team responsibilities are managed in one place, teams spend less time chasing updates and more time getting work done.",
      quoteSource: "Bunch Task Management",
      features: [
        { title: "Task Creation & Assignment", description: "Create a task, assign one owner, set the due date, add priority and context, and connect it to a project, client, or standalone workflow." },
        { title: "AI-Powered Task Creation", description: "Tell Bunzo what needs to happen in plain language or by voice. Bunzo can understand the task, fill in details, suggest an owner, and help create it faster." },
        { title: "Status & Progress Tracking", description: "Move work through To Do, In Progress, Blocked, Done, or Cancelled. Overdue is automatically shown as a flag rather than a separate status." },
        { title: "Checklists & Work Logs", description: "Break work into checklist items, log time, add comments, attach files, and keep the activity history connected to the task." },
        { title: "Blocked Tasks & More Time", description: "If work is stuck, the owner can mark it Blocked with a reason. If more time is needed, they can request a new due date before the deadline." },
        { title: "Scores & Accountability", description: "Every person gets two numbers, weekly and monthly. WND shows Work Not Done. WNDOT shows Work Not Done On Time. Both start at 0% and go negative with each missed task." },
      ],
    },
    steps: {
      title: "Get a Task From Assigned to Done in Four Steps",
      subtitle: "How Work Moves Through Bunch",
      items: [
        { title: "Create the task", description: "Create a task from Bunch, a project, a client page, or WhatsApp. Add the title, owner, due date, priority, tags, checklist, and other relevant details. Bunzo AI can also create the task from typed or voice instructions." },
        { title: "Plan & assign", description: "Choose whether the task belongs to a project or is standalone. Project tasks follow the project's structure and members, while standalone tasks can be assigned independently. Bunzo can suggest an owner based on task tags and previous work." },
        { title: "Work gets done", description: "The owner moves the task to In Progress, works through the checklist, logs time, adds comments or files, and keeps the task updated. If something is blocking progress, the owner can mark it Blocked with a reason." },
        { title: "Mark it done", description: "When the work is finished, the owner marks the task Done. Bunch records whether it was completed on time or late, updates the person's WND and WNDOT, and shows the next task that still needs attention." },
      ],
    },
    audiences: {
      title: "One Task Management System for Every Team",
      subtitle: "Built for Every Team",
      items: [
        { title: "For Employees", subtitle: "Stay on top of daily work", description: "See what you need to complete, what is overdue, and what should happen next without searching through different tools.", items: ["View your tasks and deadlines", "Start work and update task status", "Complete checklists and log time", "Ask for more time when needed", "Mark blocked tasks with a reason", "See your WND and WNDOT"] },
        { title: "For Team Leads", subtitle: "Keep work moving across the team", description: "Get a clear view of open, overdue, blocked, and completed work across your team.", items: ["Monitor workload and overdue tasks", "See blocked work and the reason behind it", "Track WND and WNDOT", "Identify tasks that need attention", "Review individual task activity and progress"] },
        { title: "For Business Owners", subtitle: "Get a clear view of work", description: "Understand whether planned work is actually getting completed and on time.", items: ["View team task performance", "Track weekly and monthly WND and WNDOT", "See overdue and unfinished work", "Review project and standalone tasks", "Use Bunzo to ask what is not done across the business"] },
      ],
    },
    panels: [
      {
        title: "One System for the Whole Task Lifecycle",
        subtitle: "Creation Through Completion, All in One Place",
        description: "Create a task. Assign an owner. Set the due date. Break the work into checklist items. Start the work. Track progress. Handle blockers. Mark it Done. Every step stays connected to the same task record.",
        points: [
          "Users see tasks they created, are assigned to, follow, or are responsible for within their access",
          "Every task maintains an activity history showing what happened and when",
          "Project and standalone tasks follow the same core task workflow",
          "Bunzo AI can create, update, and report on tasks conversationally",
          "WhatsApp actions stay connected to the same task workflow",
          "Completed work is recorded as on time or late",
          "Missed work feeds into WND and WNDOT scoring",
        ],
      },
    ],
    faqs: {
      title: "Questions About Task Management",
      items: [
        { question: "Can I manage tasks through WhatsApp?", answer: "Yes. Bunzo can work through WhatsApp for supported task actions, including creating tasks, receiving assignments, marking tasks done, and requesting more time." },
        { question: "What is task management software?", answer: "Task management software helps businesses create, assign, organize, track, and complete work from one platform. It gives teams visibility into priorities, deadlines, progress, reminders, and collaboration." },
        { question: "Is Bunch a task management software for small businesses?", answer: "Yes. Bunch is designed for startups, small businesses, and growing teams that need one place to manage employee tasks, recurring work, approvals, reminders, and dashboards." },
        { question: "Can I assign tasks to multiple employees?", answer: "Yes. Bunch lets you assign team members, add followers, assign consent persons for verification, and notify everyone involved whenever the task changes." },
        { question: "Does Bunch support recurring tasks and reminders?", answer: "Yes. You can create recurring tasks with daily, weekly, monthly, quarterly, half-monthly, half-yearly, 9-monthly, and yearly schedules. You can also set recurring reminders independently." },
        { question: "Can I track employee tasks and productivity?", answer: "Yes. Bunch includes an employee task management dashboard that shows assigned tasks, overdue work, completion rates, logged hours, and workload across individuals and teams." },
        { question: "Does Bunch include task tracking and time logging?", answer: "Yes. Team members can update task status, log hours spent, add notes, upload files, and maintain a complete work history on every task." },
        { question: "What are WND and WNDOT?", answer: "WND means Work Not Done and measures planned work that remains incomplete. WNDOT means Work Not Done On Time and measures planned work that was not completed by its due time." },
      ],
    },
    cta: {
      title: "Manage Every Task. Every Team. Every Deadline.",
      description: "Bunch brings task creation, assignment, project work, checklists, blockers, reminders, WhatsApp actions, Bunzo AI, and task performance scoring together in one connected task management system.",
      label: "Book a Demo",
      href: "/book-a-discovery-call/",
    },
  },
  {
    slug: "human-resource-management",
    name: "HRMS",
    summary: "Employee records, documents, onboarding and team structure in one place.",
    visual: "people",
    seoTitle: "HR Management Software (HRMS)",
    seoDescription:
      "Employee records, payroll, attendance, recruitment, and assets in one HR workspace with Bunzo AI built in.",
    hero: {
      title: "HR Software Built to Run Your",
      accent: "Whole Team, Not Just Payroll",
      description:
        "Bunch is HR management software that brings employee records, payroll, attendance, recruitment, and assets into one workspace, so your HR team stops jumping between five different tools to answer one question.",
      cta: trial,
    },
    why: {
      title: "Why Teams Pick Bunch",
      subtitle: "What Makes Bunch the Best HR Management Software for Growing Teams",
      items: [
        { title: "One Employee Record, Everywhere", description: "The same employee directory that powers payroll and attendance is what the rest of Bunch draws from for task assignments and approvals." },
        { title: "Access That Matches Your Org Chart", description: "HR sees the full organization, managers see their team, employees see their own record, enforced at the system level and logged for audit." },
        { title: "Payroll That Doesn't Need a Spreadsheet on the Side", description: "Attendance, leave, and employee data feed directly into payroll runs instead of being reconciled by hand every month." },
        { title: "Documents That Don't Live in Email", description: "Offer letters, contracts, ID proofs, and policy acknowledgments, stored against the employee record they belong to." },
        { title: "An AI Agent Built Into the Workflow", description: "Bunzo AI, the same AI HR software layer used across Bunch, can answer HR questions and act on them, with the same permissions and audit trail as a person." },
      ],
    },
    problem: {
      title: "The Problem With Most HR and Payroll Software",
      subtitle: "Where HR Teams Lose Hours Every Month",
      intro: [
        "Most small and mid-sized businesses run HR across a patchwork: a spreadsheet for employee records, a separate tool for attendance, a third for payroll, and a shared drive for documents. Every payroll cycle turns into a reconciliation exercise, and every new hire means re-entering the same information three or four times.",
      ],
      closing: "Bunch is built to be the HR automation software that closes those gaps.",
      pains: [
        "Employee data duplicated across spreadsheets, payroll tools, and email",
        "Attendance tracked separately from the payroll it's supposed to feed",
        "Offer letters, ID proofs, and contracts scattered across shared drives",
        "Manual, error-prone handoff between recruitment and onboarding",
        "No single view of headcount, assets, or leave balances across the org",
      ],
    },
    deliverables: {
      title: "What Our HR and Payroll Software Actually Does",
      subtitle: "Everything You Need to Run HR in One System",
      items: [
        { tag: "Efficiency", title: "Employee Management", description: "A single employee record covering personal details, role, reporting line, and documents, that the rest of the organization can rely on.", items: ["Centralized HR document management for offer letters, contracts, and ID proofs", "One directory that also powers task assignment and approvals across Bunch"] },
        { tag: "Payroll & Attendance", title: "Payroll Management Software", description: "Attendance and leave data feed directly into payroll, so runs aren't rebuilt from scratch every cycle.", items: ["Attendance management tracking clock-ins, leave, and exceptions in one place", "Payroll runs built on the same attendance and employee data, not a separate spreadsheet"] },
        { tag: "Growth", title: "Recruitment & Assets", description: "Bringing hiring and equipment tracking into the same system as the rest of the employee lifecycle.", items: ["Candidate to employee handoff without re-entering the same details twice", "Asset assignment tied to the employee record, from allocation to return"] },
      ],
    },
    outcomes: {
      title: "What You Can Expect at Scale",
      subtitle: "No inflated claims, just what the system is built to deliver.",
      stats: [
        { value: "~40%", label: "less time spent on payroll reconciliation", note: "By pulling attendance and leave data directly into each payroll run." },
        { value: "~50%", label: "faster new-hire onboarding", note: "Through a single employee record instead of re-entry across separate tools." },
      ],
      quote: "When employee data, attendance, payroll, and HR processes work from one system, teams spend less time managing admin and more time managing people.",
      quoteSource: "Bunch HRMS",
      features: [
        { title: "Employee Records", description: "A single source of truth for personal details, role, and reporting line, shared across the organization." },
        { title: "Document Management", description: "Offer letters, contracts, and ID proofs stored against the employee they belong to." },
        { title: "Payroll Runs", description: "Built on live attendance and leave data instead of manual reconciliation." },
        { title: "Attendance Tracking", description: "Clock-ins, leave, and exceptions tracked in one place, feeding straight into payroll." },
        { title: "Recruitment Pipeline", description: "Candidates move into employee records without duplicate data entry." },
        { title: "Asset Management", description: "Equipment assigned, tracked, and reclaimed against the employee record." },
      ],
    },
    steps: {
      title: "Get HR Running in Four Steps",
      subtitle: "From Empty Workspace to a Working HR System",
      items: [
        { title: "Set up your organization", description: "Add departments, roles, and reporting lines, and your employee directory is ready to populate." },
        { title: "Bring in your people", description: "Import employee records from a spreadsheet or add them one by one, with documents attached from day one." },
        { title: "Turn on attendance and payroll", description: "Configure attendance rules and payroll cycles once, and let them draw from the same employee data going forward." },
        { title: "Recruit and onboard from the same system", description: "Move a candidate into a full employee record without starting their file over from scratch." },
      ],
    },
    audiences: {
      title: "HR Software for Every Growing Business",
      items: [
        { title: "For HR Teams", subtitle: "Keep everyday HR work organised", description: "Manage employee records, attendance, recruitment, payroll, and HR information from one workspace.", items: ["Centralise employee information", "Simplify everyday HR work"] },
        { title: "For Managers", subtitle: "Get a clearer view of your team", description: "Access the HR information you need to manage employees and keep important people operations on track.", items: ["Stay updated on employee information", "Keep HR processes connected"] },
        { title: "For Business Owners", subtitle: "Bring people operations together", description: "Get a central view of employee management, attendance, payroll, recruitment, and assets as your business grows.", items: ["Reduce scattered HR processes", "Keep workforce information organised"] },
      ],
    },
    panels: [
      {
        title: "One System for the Whole Employee Lifecycle",
        subtitle: "Recruitment Through Exit, All in One Place",
        description: "Recruit a candidate. Bring them on as an employee. Track their attendance and run their payroll. Manage the assets assigned to them. Every step lives in the same system, with the same access rules and the same audit trail, whether HR is doing it by hand or through Bunzo AI.",
        points: [
          "HR sees the full organization, managers see their team, employees see their own record",
          "A full, timestamped record of changes to employee data. Nothing can be edited away, only corrected, with the original still visible",
          "Anything HR can do by hand, Bunzo AI can do conversationally, with a confirmation step before anything gets written",
        ],
      },
    ],
    faqs: {
      title: "Questions About Bunch HR Software",
      items: [
        { question: "What is HRMS software?", answer: "HRMS software helps businesses manage employee information and core HR processes such as attendance, payroll, recruitment, and other workforce operations from one system." },
        { question: "What can I manage with Bunch HRMS?", answer: "Bunch HRMS brings together employee management, attendance, payroll, recruitment, asset management, and other HR operations in one connected platform." },
        { question: "Is Bunch an HR software for small businesses?", answer: "Yes. Bunch brings core HR and payroll processes together in one system, making it suitable for businesses that want to manage employee information and HR operations from a central platform." },
        { question: "Does Bunch include payroll software?", answer: "Yes. Bunch includes payroll management as part of its HRMS, keeping payroll connected with employee information and other HR processes." },
        { question: "Can Bunch manage employee attendance?", answer: "Yes. Bunch supports employee attendance management and maintains attendance records as part of its HR operations." },
        { question: "Does Bunch include recruitment management?", answer: "Yes. Recruitment is part of the Bunch HRMS, allowing businesses to manage hiring activities alongside their wider HR operations." },
        { question: "Can Bunch manage employee assets?", answer: "Yes. Asset management is included in the HRMS, helping businesses maintain records of assets assigned to employees." },
        { question: "Is Bunch an AI-powered HR software?", answer: "Bunzo AI works as the conversational layer across the Bunch suite, allowing users to interact with supported business operations through natural language." },
      ],
    },
    cta: {
      title: "Make HR Easier to Manage",
      description: "Bring employee management, attendance, payroll, recruitment, and asset management together in one connected HRMS.",
      label: "Talk to Sales",
      href: "/book-a-discovery-call/",
    },
  },
  {
    slug: "project-management",
    name: "Project Management",
    summary:
      "Create reusable project templates and define exactly how your team should execute each type of project.",
    visual: "process",
    seoTitle: "Project Management Software",
    seoDescription:
      "Reusable process templates, step ownership, checklists, and live project progress in one project management system.",
    hero: {
      title: "Project Management Software",
      accent: "That Knows Where Every Hour Goes",
      description:
        "Bunch brings daily scheduling, capacity tracking, and billable-hours reporting into one place, so project management software stops meaning a spreadsheet someone updates once a week and starts meaning a live picture of what your team is actually working on.",
      cta: sales,
    },
    why: {
      title: "Why Teams Pick Bunch",
      subtitle: "What Makes Bunch the Right Project Management Software for Growing Teams",
      items: [
        { title: "Build Your Process Once", description: "Create reusable process templates with ordered steps, durations, roles, checklists, and other step requirements. When a project starts, Bunch creates its own copy of that process so the project can move through the workflow independently." },
        { title: "Every Step Has an Owner", description: "Assign a specific person to each project step based on the role responsible for the work. When the current step is completed, the next assigned person takes over, making accountability clear throughout the project." },
        { title: "One Workspace for the Whole Project", description: "Keep project information, current steps, checklists, remarks, attachments, and activity history together. Everyone involved can see what has been completed and what needs attention next." },
        { title: "Progress That Updates With the Work", description: "As team members complete checklist items and project steps, Bunch updates project progress automatically. Once the final step is completed, the project is marked as completed." },
        { title: "Notifications That Keep People Informed", description: "Project events can trigger notifications through the existing notification system and email. Team members can be notified when a step becomes current, when work is reassigned, when a project changes status, or when deadlines are approaching." },
      ],
    },
    problem: {
      title: "The Problem With Most Project Tracking Tools",
      subtitle: "Where Project Visibility Breaks Down",
      intro: [
        "Most teams start with a project plan and then end up managing the actual work through spreadsheets, WhatsApp messages, meetings, and individual checklists.",
        "As the project moves forward, it becomes difficult to know which step is currently active, who owns it, whether the required work has been completed, and what happened earlier in the process.",
      ],
      closing: "Bunch is built to give teams one structured project workflow from start to completion.",
      pains: [
        "Projects with no clearly defined process",
        "No clear ownership for each stage of the work",
        "Checklists and project requirements tracked separately",
        "Managers relying on messages to know whether a step is complete",
        "No central activity history for project work",
        "Files and remarks scattered across different conversations",
        "Delays discovered only after a step becomes overdue",
      ],
    },
    deliverables: {
      title: "What Bunch Helps You Manage",
      subtitle: "Everything Your Team Needs to Run Projects From Start to Completion",
      items: [
        { tag: "Efficiency", title: "Project Management", description: "Create reusable project templates and define exactly how your team should execute each type of project.", note: "Each process can contain ordered steps, expected duration, responsible roles, task checklists, phases, and other step-level requirements.", items: ["Reusable process templates", "Ordered project steps", "Step durations and due dates", "Roles and responsibilities", "Step checklists", "Project phases", "Step-level requirements"] },
        { tag: "Operations", title: "Step-Based Project Execution", description: "Turn a project template into an active project and work through it one step at a time.", note: "The first step becomes current when the project starts. Once the required work is completed, the next step becomes current with its own due date and assigned person.", items: ["Current and upcoming steps", "Assigned step owners", "Checklist tracking", "Step completion", "Automatic progress updates", "Step reassignment", "Project completion"] },
        { tag: "Future Readiness", title: "Team & Project Visibility", description: "Managers get a clear view of where every project stands and who is responsible for the current work.", note: "The Projects workspace shows project status, progress, current steps, assigned people, overdue work, and completion information in one place.", items: ["Project progress", "Current step visibility", "Assigned team members", "On-track and overdue status", "Project filters", "Activity history", "Project-level reporting"] },
      ],
    },
    outcomes: {
      title: "What You Can Expect at Scale",
      subtitle: "No inflated claims, just what the system is built to deliver.",
      stats: [
        { value: "~45%", label: "less time spent chasing timesheets", note: "By replacing manual updates with a daily schedule managers can see live." },
        { value: "~50%", label: "faster visibility into bench capacity", note: "Through an automatic capacity board instead of asking around the team." },
      ],
      quote: "A manager shouldn't have to ask who's free this week. The board should already show it.",
      quoteSource: "Bunch Project Management",
      features: [
        { title: "Process Templates", description: "Define repeatable project workflows with ordered steps, durations, roles, and checklists." },
        { title: "Step-Based Execution", description: "Move projects through one current step at a time, with the next step becoming active after completion." },
        { title: "Individual Step Ownership", description: "Choose the person responsible for each step from the members of the assigned role." },
        { title: "Checklists & Remarks", description: "Track the work required for a step and capture remarks as part of the project activity." },
        { title: "Files & Attachments", description: "Keep project evidence and required files connected to the relevant project activity and step." },
        { title: "Project Notifications", description: "Keep project owners and team members informed about important project and step events through notifications and email." },
      ],
    },
    steps: {
      title: "Get a Project From Setup to Completion in Four Steps",
      subtitle: "From Process Template to a Completed Project",
      items: [
        { title: "Build your process", description: "Create a reusable process template with the steps your project normally follows. Add durations, roles, checklists, phases, and other requirements for each step." },
        { title: "Start the project", description: "Select the customer and process template, then create the project. Bunch copies the template steps into the new project and makes the first step current." },
        { title: "Work through each step", description: "The assigned person works on the current step, completes the checklist, adds required remarks or files, and marks the step complete when the work is finished." },
        { title: "Move to the next step", description: "Once a step is completed, Bunch activates the next step, assigns the next responsible person, updates project progress, and continues the workflow until the final step is completed." },
      ],
    },
    audiences: {
      title: "One Project Management System for Every Team",
      subtitle: "Built for Different Teams",
      items: [
        { title: "For Team Members", description: "Know exactly which project step belongs to you and what needs to be completed.", items: ["View assigned project steps", "Complete checklist items", "Add remarks and files", "Complete assigned steps", "Receive relevant project notifications"] },
        { title: "For Team Leads", description: "Keep work moving across your team without relying on manual status updates.", items: ["See current project work", "Monitor assigned steps", "Review checklist progress", "Reassign steps when required", "Track overdue work"] },
        { title: "For Project Managers", description: "Get a clear view of projects from the first step to final completion.", items: ["Manage project processes", "Monitor project progress", "See current step ownership", "Review project activity", "Track overdue and completed projects"] },
      ],
    },
    panels: [
      {
        title: "One System for the Whole Project Lifecycle",
        subtitle: "From Process Setup to Project Completion",
        description: "Create your process once, start a project from that template, assign people to each step, and let the project move forward through a structured workflow.",
        points: [
          "Every project gets its own copy of the process, so changes to a template do not change projects that are already running",
          "A project starts with the first step automatically set as current",
          "Each step has its own duration and due date",
          "A specific person can be selected to handle each step",
          "Checklist items can be tracked before a step is completed",
          "Required remarks and attachments can be captured as part of the work",
          "Completing a step activates the next step",
          "Project progress updates as steps are completed",
          "The final completed step closes the project",
        ],
      },
      {
        title: "A Clear Record of What Happened",
        subtitle: "Keep Project Activity in One Place",
        description: "Project activity is organized around the work being completed. Managers can review step activity, remarks, attachments, and project-level updates without searching through separate conversations. Each step shows its status and related activity, making it easier to understand what has already happened and what needs to happen next.",
        points: [
          "Current Step: see which step is currently active and who is responsible for it",
          "Checklist Progress: track the checklist items that need to be completed before the step can be finished",
          "Project Progress: see how far the project has moved through its defined process",
          "Activity History: review remarks, attachments, and project activity organized around the project workflow",
        ],
      },
      {
        title: "Stay Ahead of Project Deadlines",
        subtitle: "Due Dates, Overdue Work, and Notifications",
        description: "Bunch uses each step's due date to show whether work is on track, due today, or overdue. Project notifications can also keep the right people informed as work moves through the process.",
        points: [
          "Notifications when a project starts",
          "Notifications when a step becomes current",
          "Notifications when a step is completed",
          "Notifications when a step is reassigned",
          "Due-soon notifications",
          "Overdue notifications",
          "Project completion notifications",
        ],
      },
    ],
    faqs: {
      title: "Questions About Bunch Project Management",
      items: [
        { question: "What is Bunch project management software?", answer: "Bunch is a project management system that helps businesses define repeatable project processes, assign responsibility for each step, track checklists, manage project activity, and monitor progress from project start to completion." },
        { question: "How do project templates work in Bunch?", answer: "You can create a reusable process template with ordered steps, durations, roles, and checklists. When you start a project, Bunch copies those steps into the project so the project can follow its own workflow." },
        { question: "Can I assign a specific person to each project step?", answer: "Yes. When starting a project, you can select the person responsible for each step from the members of that step's assigned role. If a role has only one member, that person can be selected automatically." },
        { question: "Can project steps be reassigned?", answer: "Yes. A business owner can reassign the current step to another role when required. The new assignment determines who can take responsibility for that step." },
        { question: "Can I add checklists to project steps?", answer: "Yes. Process steps can include task checklists. Team members can mark checklist items as they complete the work, and the step can then be completed once the required checklist work is finished." },
        { question: "Can I add remarks and files to project work?", answer: "Yes. Remarks are captured as part of project activity, and files can be attached to project work. If a step is configured with Attachment Required, the required file must be provided before the step can be completed." },
        { question: "How does Bunch track project progress?", answer: "Bunch tracks the status of each project step as pending, current, or completed. When the current step is completed, the next step becomes current and project progress is recalculated. After the final step is completed, the project is marked as completed." },
        { question: "Does Bunch send project notifications?", answer: "Yes. Project notifications can be sent through the Bunch notification system and email for events such as project starts, step assignments, step changes, completion, reassignment, upcoming deadlines, overdue work, and project completion." },
      ],
    },
    cta: {
      title: "Bring Your Projects, Processes, and People Together",
      description: "Build repeatable project processes, assign clear ownership, track every step, and give your team one place to manage project work from start to completion.",
      label: "Talk to Sales",
      href: "/book-a-discovery-call/",
    },
  },
];

export function getModule(slug: string) {
  return modules.find((item) => item.slug === slug);
}
