// Legal pages as published on https://mybunch.ai (last updated 31 July 2026).
// Inline links use [text](href); email addresses and URLs are linked as written.

export type LegalBlock =
  | { type: "p"; text: string; label?: string }
  | { type: "list"; items: { text: string; label?: string }[] }
  | { type: "contact"; name: string; email: string; website: string };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
  subsections?: { heading: string; blocks: LegalBlock[] }[];
};

export type LegalDocument = {
  title: string;
  accent: string;
  description: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
};

const p = (text: string, label?: string): LegalBlock => ({ type: "p", text, label });
const list = (...items: (string | [string, string])[]): LegalBlock => ({
  type: "list",
  items: items.map((item) =>
    Array.isArray(item) ? { label: item[0], text: item[1] } : { text: item },
  ),
});

export const privacyPolicy: LegalDocument = {
  title: "Privacy",
  accent: "policy",
  description:
    "How Bunch collects, uses, discloses, and safeguards your information.",
  updated: "31st July 2026",
  intro: [
    'This Privacy Policy explains how Bunch CRM ("Bunch CRM," "we," "us," or "our") collects, uses, discloses, and safeguards information when you visit our website at https://mybunch.ai (the "Site") or use our customer relationship management software and related services (collectively, the "Service").',
    "By accessing or using the Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use the Service.",
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      blocks: [],
      subsections: [
        {
          heading: "1.1 Information You Provide to Us",
          blocks: [
            list(
              ["Account Information:", "Name, email address, phone number, company name, job title, billing address, and password when you register for an account."],
              ["Payment Information:", "Billing details processed through our third-party payment processor (see Section 5). We do not store full payment card numbers on our own servers."],
              ["Customer Data:", "Any data you or your team upload, input, or store within the Service on behalf of your own customers or contacts (e.g., names, emails, notes, deal history). You are responsible for ensuring you have the right to share this data with us."],
              ["Communications:", "Information you provide when you contact our support team at support@bunchcrm.com, complete forms, or otherwise correspond with us."],
            ),
          ],
        },
        {
          heading: "1.2 Information Collected Automatically",
          blocks: [
            list(
              ["Usage Data:", "Pages visited, features used, click patterns, session duration, and referring/exit URLs."],
              ["Device and Log Data:", "IP address, browser type, operating system, device identifiers, and timestamps."],
              ["Cookies and Similar Technologies:", "See our [Cookie Policy](/cookie-policy/) for details."],
            ),
          ],
        },
        {
          heading: "1.3 Information from Third Parties",
          blocks: [
            p("We may receive information about you from integrated third-party services you choose to connect to Bunch CRM (e.g., email providers, calendar apps, or marketing tools), subject to your permissions with those services."),
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "How We Use Your Information",
      blocks: [
        p("We use the information we collect to:"),
        list(
          "Provide, operate, and maintain the Service.",
          "Create and manage your account and process transactions.",
          "Respond to inquiries, provide customer support, and communicate with you.",
          "Monitor and analyze usage to improve the Service, troubleshoot issues, and develop new features.",
          "Send administrative information, security alerts, and updates about the Service.",
          "Send marketing communications, where permitted, which you may opt out of at any time.",
          "Detect, prevent, and address fraud, abuse, security incidents, and technical issues.",
          "Comply with legal obligations.",
        ),
      ],
    },
    {
      id: "legal-basis",
      heading: "Legal Basis for Processing (EEA/UK Users)",
      blocks: [
        p("If you are located in the European Economic Area or United Kingdom, we process personal data on the following legal bases: performance of a contract, your consent, our legitimate interests (e.g., improving and securing the Service), and compliance with legal obligations."),
      ],
    },
    {
      id: "how-we-share-your-information",
      heading: "How We Share Your Information",
      blocks: [
        p("We do not sell your personal information. We may share information with:"),
        list(
          ["Service Providers:", "Third parties who perform functions on our behalf, such as hosting, payment processing, analytics, customer support tools, and email delivery."],
          ["Google Calendar Data:", "If you connect Google Calendar, Bunch uses Google’s calendar.events permission to: Create, update, and delete Bunch-created events on your primary calendar for tasks, lead follow-ups, meetings, and calls. Read upcoming calendar events to display them in Bunch as meetings. Calendar data is used only to provide these features. We do not sell, share, advertise with, or use it to train AI models. Bunch only modifies events it created. You can disconnect anytime via My Profile → Integrations → Google Calendar → Disconnect, or revoke access through your Google account. Disconnecting immediately deletes our access tokens. Imported meetings remain in Bunch until deleted by your company admin or requested at privacy@mybunch.ai. Bunch’s use and transfer of Google API data complies with the Google API Services User Data Policy, including its Limited Use requirements."],
          ["Business Transfers:", "In connection with a merger, acquisition, financing, or sale of assets."],
          ["Legal Requirements:", "When required by law, subpoena, or other legal process, or to protect the rights, property, or safety of Bunch CRM, our users, or others."],
          ["With Your Consent:", "For any other purpose disclosed to you at the time of collection."],
        ),
      ],
    },
    {
      id: "payment-processing",
      heading: "Payment Processing",
      blocks: [
        p("Payments are handled by a third-party payment processor (e.g., Stripe). We do not store complete payment card details. Please refer to your payment processor's privacy policy for information on how they handle your data."),
      ],
    },
    {
      id: "data-retention",
      heading: "Data Retention",
      blocks: [
        p("We retain personal information for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your data within 30 days, except where retention is required by law."),
      ],
    },
    {
      id: "data-security",
      heading: "Data Security",
      blocks: [
        p("We implement industry-standard technical and organizational measures — including encryption in transit, access controls, and regular monitoring — to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security."),
      ],
    },
    {
      id: "international-data-transfers",
      heading: "International Data Transfers",
      blocks: [
        p("Your information may be transferred to and processed in countries other than your own, which may have different data protection laws. Where required, we implement appropriate safeguards (such as Standard Contractual Clauses) for such transfers."),
      ],
    },
    {
      id: "your-privacy-rights",
      heading: "Your Privacy Rights",
      blocks: [
        p("Depending on your location, you may have the right to:"),
        list(
          "Access, correct, or delete your personal information.",
          "Object to or restrict certain processing.",
          "Request data portability.",
          "Withdraw consent at any time (where processing is based on consent).",
          "Opt out of marketing communications.",
          "Lodge a complaint with a data protection authority.",
        ),
        p("To exercise these rights, contact us at support@mybunch.ai. We will respond within the timeframe required by applicable law."),
        p('You may have additional rights under the California Consumer Privacy Act (CCPA/CPRA), including the right to know, delete, and opt out of the "sale" or "sharing" of personal information (we do not sell personal information).', "California Residents:"),
      ],
    },
    {
      id: "childrens-privacy",
      heading: "Children's Privacy",
      blocks: [
        p("The Service is not directed to individuals under 16, and we do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it."),
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-Party Links and Integrations",
      blocks: [
        p("The Service may contain links to or integrations with third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies."),
      ],
    },
    {
      id: "changes",
      heading: "Changes to This Privacy Policy",
      blocks: [
        p('We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a new "Last updated" date, and, where appropriate, via email.'),
      ],
    },
    {
      id: "using-my-bunch-with-claude",
      heading: "Using My Bunch with Claude",
      blocks: [
        p("When you connect My Bunch to Claude, an AI assistant made by Anthropic, the records Claude asks for are sent to Anthropic to answer your request. This can include lead, customer, task, leave and meeting details. Claude only receives data your role can already see in My Bunch. Payroll, salary and bank data are never shared.", "What we share."),
        p("Data is used only to answer your request in Claude. Anthropic’s handling of it is covered by Anthropic’s privacy policy.", "How it is used."),
        p("My Bunch keeps a log of each request made through Claude, including the user, time and tool used, for 365 days for security and audit. Changes made through Claude are stored like any other change in My Bunch.", "Storage and retention."),
        p("Connecting is optional and needs your consent. You can disconnect from Claude, or revoke access in My Bunch under profile menu → Connected apps, at any time. Your company admin can turn off AI access for any user.", "Your choices."),
        p("You can ask to access, correct or erase your personal data, and to withdraw consent, by writing to support@mybunch.ai.", "Your rights (DPDP Act, 2023)."),
      ],
    },
    {
      id: "contact-us",
      heading: "Contact Us",
      blocks: [
        p("If you have questions about this Privacy Policy or our data practices, contact us at:"),
        { type: "contact", name: "Bunch CRM", email: "support@mybunch.ai", website: "https://mybunch.ai" },
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of",
  accent: "service",
  description:
    "The terms that apply when you use the Bunch website, software, and related services.",
  updated: "31st July 2026",
  intro: [
    'Please read these Terms and Conditions ("Terms") carefully before using the Bunch website at https://mybunch.ai or the Bunch software and related services (collectively, the "Service"), operated by Bunch ("Company," "we," "us," or "our").',
    'By creating an account, accessing, or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization, and "you" refers to that organization.',
  ],
  sections: [
    {
      id: "eligibility",
      heading: "Eligibility",
      blocks: [
        p("You must be at least 18 years old and capable of forming a binding contract to use the Service. By using the Service, you represent that you meet these requirements."),
      ],
    },
    {
      id: "account-registration",
      heading: "Account Registration",
      blocks: [
        p("You must provide accurate, current, and complete information when creating an account and keep it up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately at support@mybunch.ai of any unauthorized use."),
      ],
    },
    {
      id: "subscription-plans-fees-billing",
      heading: "Subscription Plans, Fees, and Billing",
      blocks: [
        list(
          "Certain features of the Service require a paid subscription. Fees, billing cycles, and available plans are described on our [pricing page](/pricing/).",
          "Fees are billed in advance on a recurring basis (monthly or annually) and are non-refundable except as required by law or as expressly stated in these Terms.",
          "We may change our fees upon reasonable notice. Continued use of the Service after a fee change constitutes acceptance of the new fees.",
          "You authorize us (or our payment processor) to charge your chosen payment method for all applicable fees.",
          "Failure to pay may result in suspension or termination of your access to the Service.",
          "A free trial, if offered, will convert to a paid subscription at the end of the trial period unless canceled beforehand.",
        ),
      ],
    },
    {
      id: "license",
      heading: "License to Use the Service",
      blocks: [
        p("Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes."),
        p("You may not:"),
        list(
          "Reverse engineer, decompile, or attempt to extract the source code of the Service.",
          "Resell, sublicense, rent, or lease the Service to third parties.",
          "Use the Service to build a competing product.",
          "Circumvent any security or access restrictions.",
          "Use the Service for any unlawful, harmful, or fraudulent purpose.",
          "Upload malicious code or attempt to disrupt the Service's infrastructure.",
          "Use automated means (bots, scrapers) to access the Service without our written consent.",
        ),
      ],
    },
    {
      id: "customer-data",
      heading: "Customer Data",
      blocks: [
        list(
          ["Ownership:", 'As between you and us, you retain all ownership rights to the data you upload or input into the Service ("Customer Data").'],
          ["License to Us:", "You grant us a limited license to host, store, process, and display Customer Data solely to provide and improve the Service."],
          ["Your Responsibilities:", "You are solely responsible for the accuracy, legality, and appropriateness of Customer Data, and for obtaining any necessary consents from your own customers or contacts before uploading their information."],
          ["Backups:", "While we take reasonable steps to back up data, you are responsible for maintaining your own backups of critical data."],
        ),
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual Property",
      blocks: [
        p("The Service, including its software, design, branding, logos, and content (excluding Customer Data), is owned by Bunch and protected by intellectual property laws. Nothing in these Terms transfers any ownership rights to you."),
      ],
    },
    {
      id: "third-party-integrations",
      heading: "Third-Party Integrations",
      blocks: [
        p("The Service may allow integration with third-party applications. We are not responsible for the availability, content, or practices of third-party services, and your use of them is subject to their own terms and privacy policies."),
      ],
    },
    {
      id: "suspension-termination",
      heading: "Suspension and Termination",
      blocks: [
        p("We may suspend or terminate your access to the Service, with or without notice, if:"),
        list(
          "You breach these Terms.",
          "Your account is delinquent on payment.",
          "We reasonably believe your use poses a security, legal, or reputational risk to us or other users.",
          "Required by law.",
        ),
        p("You may cancel your account at any time through your account settings or by contacting support@bunchcrm.com. Upon termination, your right to use the Service will immediately cease. Certain provisions (e.g., intellectual property, disclaimers, limitation of liability) survive termination."),
      ],
    },
    {
      id: "disclaimers",
      heading: "Disclaimers",
      blocks: [
        p('THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.'),
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of Liability",
      blocks: [
        p("TO THE MAXIMUM EXTENT PERMITTED BY LAW, BUNCH AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM."),
      ],
    },
    {
      id: "indemnification",
      heading: "Indemnification",
      blocks: [
        p("You agree to indemnify and hold harmless Bunch from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Service, your Customer Data, or your violation of these Terms."),
      ],
    },
    {
      id: "changes",
      heading: "Changes to These Terms",
      blocks: [
        p('We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms with a new "Last updated" date and, where appropriate, via email. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.'),
      ],
    },
    {
      id: "general-provisions",
      heading: "General Provisions",
      blocks: [
        list(
          ["Entire Agreement:", "These Terms, along with our [Privacy Policy](/privacy-policy/) and [Cookie Policy](/cookie-policy/), constitute the entire agreement between you and Bunch regarding the Service."],
          ["Severability:", "If any provision is found unenforceable, the remaining provisions will remain in full effect."],
          ["No Waiver:", "Our failure to enforce any right or provision will not be considered a waiver of those rights."],
          ["Assignment:", "You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets."],
        ),
      ],
    },
    {
      id: "contact-us",
      heading: "Contact Us",
      blocks: [
        p("For questions about these Terms, contact us at:"),
        { type: "contact", name: "Bunch", email: "support@mybunch.ai", website: "https://mybunch.ai" },
      ],
    },
  ],
};
