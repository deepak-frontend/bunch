import { defineField, defineType } from "sanity";
import { homeDefaults } from "@/content/site/home";

const seoFields = () => [
  defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
  defineField({
    name: "seoDescription",
    title: "SEO description",
    type: "text",
    rows: 3,
  }),
  defineField({
    name: "socialImage",
    title: "Social sharing image",
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
  }),
];

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "moduleCount",
      title: "Included modules",
      description:
        "Single source of truth for the module count across the site.",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: "pricing",
      title: "Pricing (INR, excluding GST)",
      type: "object",
      fields: [
        defineField({
          name: "monthlyAmount",
          title: "Monthly amount",
          type: "number",
          initialValue: 4900,
          validation: (rule) => rule.required().positive(),
        }),
        defineField({
          name: "annualAmount",
          title: "Annual amount",
          type: "number",
          initialValue: 49980,
          validation: (rule) => rule.required().positive(),
        }),
        defineField({
          name: "taxRatePercent",
          title: "GST rate (%)",
          type: "number",
          initialValue: 18,
          validation: (rule) => rule.required().positive(),
        }),
        defineField({
          name: "trialDays",
          title: "Trial duration in days",
          type: "number",
          initialValue: 14,
          validation: (rule) => rule.required().integer().positive(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contact",
      title: "Contact details",
      type: "object",
      fields: [
        defineField({
          name: "phone",
          title: "Phone / WhatsApp",
          type: "string",
        }),
        defineField({ name: "email", title: "Email", type: "string" }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          title: "Social link",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Network" }),
            defineField({ name: "url", type: "url", title: "URL" }),
          ],
        }),
      ],
    }),
  ],
});

const text = (name: string, title: string, group: string, description?: string) =>
  defineField({ name, title, type: "string", group, description });
const longText = (name: string, title: string, group: string, description?: string) =>
  defineField({ name, title, type: "text", rows: 3, group, description });
const list = (name: string, title: string, group: string, description?: string) =>
  defineField({
    name,
    title,
    type: "array",
    group,
    description,
    of: [defineField({ name: "item", type: "string", title: "Item" })],
  });
const link = (name: string, title: string, group: string) =>
  text(name, title, group, "A path such as /pricing/, a section anchor such as #modules, or a full URL.");

const tokenHelp =
  "You can use {moduleCount}, {monthlyPrice}, {annualPrice}, {annualMonthlyPrice}, {taxRate} and {trialDays}; they are filled in from Site settings.";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  initialValue: homeDefaults,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "challenge", title: "Challenge" },
    { name: "steps", title: "Getting started" },
    { name: "pricing", title: "Pricing" },
    { name: "modules", title: "Modules" },
    { name: "bunzo", title: "Bunzo AI" },
    { name: "testimonials", title: "Testimonials" },
    { name: "industries", title: "Industries" },
    { name: "caseStudies", title: "Case studies" },
    { name: "comparison", title: "Comparison" },
    { name: "demo", title: "Demo" },
    { name: "faq", title: "FAQ" },
    { name: "finalCta", title: "Final CTA" },
    { name: "layout", title: "Show / hide" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "hiddenSections",
      title: "Hidden sections",
      description: "Tick a section to hide it from the homepage without deleting its content.",
      type: "array",
      group: "layout",
      of: [{ type: "string" }],
      options: {
        layout: "grid",
        list: [
          { title: "Challenge", value: "challenge" },
          { title: "Getting started", value: "steps" },
          { title: "Pricing", value: "pricing" },
          { title: "Modules", value: "modules" },
          { title: "Bunzo AI", value: "bunzo" },
          { title: "Testimonials", value: "testimonials" },
          { title: "Industries", value: "industries" },
          { title: "Case studies", value: "caseStudies" },
          { title: "Comparison table", value: "comparison" },
          { title: "Demo form", value: "demo" },
          { title: "FAQ", value: "faq" },
          { title: "Final CTA", value: "finalCta" },
        ],
      },
    }),
    defineField({
      name: "showTicker",
      title: "Show scrolling ticker under the hero",
      type: "boolean",
      group: "layout",
    }),
    list("tickerItems", "Ticker items", "layout", "Leave empty to use the module and industry names."),

    text("heroEyebrow", "Eyebrow", "hero"),
    defineField({
      name: "heroTitle",
      title: "Heading",
      description: "The last two words are set in the italic accent style.",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    longText("heroDescription", "Description", "hero"),
    defineField({
      name: "heroImage",
      title: "Hero image",
      description:
        "Shown on the right of the hero in place of the illustrated dashboard. Leave empty to keep the illustration. Best at about 1200 × 900 px (PNG or WebP).",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describe the image for screen readers and search engines.",
          validation: (rule) =>
            rule.custom((alt, context) =>
              (context.parent as { asset?: unknown } | undefined)?.asset && !alt
                ? "Add alt text for the hero image"
                : true,
            ),
        }),
      ],
    }),
    text("heroPrimaryLabel", "Primary button label", "hero"),
    link("heroPrimaryLink", "Primary button link", "hero"),
    text("heroSecondaryLabel", "Secondary button label", "hero"),
    link("heroSecondaryLink", "Secondary button link", "hero"),
    list("heroTrustPoints", "Trust points", "hero", tokenHelp),

    text("challengeEyebrow", "Eyebrow", "challenge"),
    text("challengeTitle", "Heading", "challenge"),
    longText("challengeDescription", "Description", "challenge"),
    defineField({
      name: "challengePoints",
      title: "Challenges",
      type: "array",
      group: "challenge",
      of: [defineField({ name: "challenge", type: "string", title: "Challenge" })],
      validation: (rule) => rule.max(8),
    }),

    text("stepsEyebrow", "Eyebrow", "steps"),
    text("stepsTitle", "Heading", "steps"),
    longText("stepsDescription", "Description", "steps"),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      group: "steps",
      of: [
        defineField({
          name: "step",
          type: "object",
          title: "Step",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", rows: 2, title: "Description" }),
          ],
        }),
      ],
      validation: (rule) => rule.max(3),
    }),

    text("pricingEyebrow", "Eyebrow", "pricing"),
    text("pricingTitle", "Heading", "pricing"),
    longText("pricingDescription", "Description", "pricing"),
    text("monthlyPlanLabel", "Monthly plan: small label", "pricing"),
    text("monthlyPlanTitle", "Monthly plan: name", "pricing"),
    longText("monthlyPlanDescription", "Monthly plan: description", "pricing"),
    list("monthlyInclusions", "Monthly plan: inclusions", "pricing", tokenHelp),
    text("annualPlanLabel", "Annual plan: small label", "pricing"),
    text("annualPlanTitle", "Annual plan: name", "pricing"),
    longText("annualPlanDescription", "Annual plan: description", "pricing"),
    text("annualPopularLabel", "Annual plan: badge", "pricing"),
    list("annualInclusions", "Annual plan: inclusions", "pricing", tokenHelp),
    text("taxDisclaimer", "Tax note", "pricing", tokenHelp),
    text("pricingButtonLabel", "Button label", "pricing"),
    list("trialNotes", "Notes under the plans", "pricing", tokenHelp),

    text("modulesEyebrow", "Eyebrow", "modules"),
    text("modulesTitle", "Heading", "modules", tokenHelp),
    longText("modulesDescription", "Description", "modules", "The module cards come from the Module documents."),

    text("bunzoEyebrow", "Eyebrow", "bunzo"),
    text("bunzoTitle", "Heading", "bunzo"),
    longText("bunzoDescription", "Description", "bunzo"),
    text("bunzoButtonLabel", "Button label", "bunzo"),
    link("bunzoButtonLink", "Button link", "bunzo"),
    text("bunzoChatName", "Chat window: assistant name", "bunzo"),
    text("bunzoChatStatus", "Chat window: status line", "bunzo"),
    text("bunzoPrompt", "Chat window: example question", "bunzo"),
    longText("bunzoAnswer", "Chat window: example answer", "bunzo"),
    text("bunzoAction", "Chat window: answer action", "bunzo"),
    text("bunzoInputPlaceholder", "Chat window: input placeholder", "bunzo"),

    text("testimonialsEyebrow", "Eyebrow", "testimonials"),
    text("testimonialsTitle", "Heading", "testimonials", "Quotes come from the Testimonial documents."),

    text("industriesEyebrow", "Eyebrow", "industries"),
    text("industriesTitle", "Heading", "industries"),
    longText("industriesDescription", "Description", "industries", "Industry cards come from the Industry documents (name and card description)."),
    text("industriesNote", "Note under the cards", "industries"),

    text("caseStudiesEyebrow", "Eyebrow", "caseStudies"),
    text("caseStudiesTitle", "Heading", "caseStudies"),
    longText("caseStudiesDescription", "Description", "caseStudies", "Cards come from the Case study documents."),
    text("caseStudiesLinkLabel", "Link label", "caseStudies"),

    text("comparisonsEyebrow", "Eyebrow", "comparison"),
    text("comparisonsTitle", "Heading", "comparison"),
    text("comparisonsDescription", "Description", "comparison", "Rows come from the Comparison row documents."),
    defineField({
      name: "comparisonHeaders",
      title: "Column headings",
      type: "object",
      group: "comparison",
      fields: [
        defineField({ name: "feature", type: "string", title: "Feature column" }),
        defineField({ name: "bunch", type: "string", title: "Bunch column" }),
        defineField({ name: "spreadsheets", type: "string", title: "Spreadsheets column" }),
        defineField({ name: "bigin", type: "string", title: "Bigin column" }),
        defineField({ name: "zohoOne", type: "string", title: "Zoho One column" }),
      ],
    }),
    text("comparisonFootnote", "Footnote under the table", "comparison"),

    text("demoEyebrow", "Eyebrow", "demo"),
    text("demoTitle", "Heading", "demo"),
    longText("demoDescription", "Description", "demo"),
    list("demoPoints", "Bullet points", "demo", tokenHelp),
    text("demoNote", "Note next to the icon", "demo"),

    text("faqEyebrow", "Eyebrow", "faq"),
    text("faqTitle", "Heading", "faq"),
    text("faqDescription", "Description", "faq", "Questions come from FAQ documents with “Show on home page” ticked."),

    text("finalCtaTitle", "Heading", "finalCta"),
    longText("finalCtaDescription", "Description", "finalCta"),
    text("finalCtaButtonLabel", "Button label", "finalCta"),
    link("finalCtaButtonLink", "Button link", "finalCta"),

    ...seoFields().map((field) => ({ ...field, group: "seo" })),
  ],
});

export const modulePage = defineType({
  name: "modulePage",
  title: "Module",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "route",
      type: "string",
      title: "Preserved route",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Card description",
      rows: 3,
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Page content",
      of: [defineField({ name: "block", type: "block" })],
    }),
    defineField({
      name: "ownerReviewRequired",
      type: "boolean",
      title: "Copy needs owner review",
      initialValue: false,
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
    ...seoFields(),
  ],
});

export const industryPage = defineType({
  name: "industryPage",
  title: "Industry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "route",
      type: "string",
      title: "Preserved route",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Card description",
      rows: 3,
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Page content",
      of: [defineField({ name: "block", type: "block" })],
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
    ...seoFields(),
  ],
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      title: "Quote",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "person", type: "string", title: "Name" }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({ name: "company", type: "string", title: "Company" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
});

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Company",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metric",
      type: "string",
      title: "Headline metric",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "summary", type: "text", title: "Summary", rows: 3 }),
    defineField({ name: "route", type: "string", title: "Route" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      title: "Answer",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "showOnHome",
      type: "boolean",
      title: "Show on home page",
      initialValue: true,
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
});

export const comparisonRow = defineType({
  name: "comparisonRow",
  title: "Comparison row",
  type: "document",
  fields: [
    defineField({
      name: "feature",
      type: "string",
      title: "Feature",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "bunch", type: "string", title: "Bunch" }),
    defineField({
      name: "spreadsheets",
      type: "string",
      title: "Spreadsheets",
    }),
    defineField({ name: "bigin", type: "string", title: "Bigin (Zoho)" }),
    defineField({ name: "zohoOne", type: "string", title: "Zoho One" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
});

export const genericPage = defineType({
  name: "genericPage",
  title: "Marketing page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "route",
      type: "string",
      title: "Preserved route",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Introduction",
      rows: 3,
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Page content",
      of: [defineField({ name: "block", type: "block" })],
    }),
    defineField({
      name: "faqs",
      type: "array",
      title: "Page FAQs",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    ...seoFields(),
  ],
});

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
    }),
    defineField({ name: "excerpt", type: "text", title: "Excerpt", rows: 3 }),
    defineField({
      name: "body",
      type: "array",
      title: "Article",
      of: [defineField({ name: "block", type: "block" })],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [defineField({ name: "tag", type: "string", title: "Tag" })],
    }),
    ...seoFields(),
  ],
});

export const schemaTypes = [
  siteSettings,
  homePage,
  modulePage,
  industryPage,
  testimonial,
  caseStudy,
  faq,
  comparisonRow,
  genericPage,
  blogPost,
];
