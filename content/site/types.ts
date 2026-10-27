export type Feature = { title: string; description: string };

export type Stat = { value: string; label: string; note: string };

export type Deliverable = {
  tag: string;
  title: string;
  description: string;
  note?: string;
  items: string[];
};

export type Step = { title: string; description: string; note?: string };

export type Audience = {
  title: string;
  subtitle?: string;
  description: string;
  items: string[];
};

export type CaseStudy = {
  category: string;
  company: string;
  metric: string;
  metricLabel: string;
  problem: string;
  approach: string;
  outcome: string;
};

export type Faq = { question: string; answer: string };

export type Panel = {
  title: string;
  subtitle?: string;
  description?: string;
  points: string[];
};

export type Cta = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export type ModuleVisual = "pipeline" | "timeline" | "tasks" | "people" | "process";

export type ModulePage = {
  slug: string;
  name: string;
  summary: string;
  visual: ModuleVisual;
  seoTitle: string;
  seoDescription: string;
  hero: {
    title: string;
    accent: string;
    description: string;
    cta: { label: string; href: string };
  };
  why: { title: string; subtitle: string; items: Feature[] };
  problem: {
    title: string;
    subtitle: string;
    intro: string[];
    closing: string;
    pains: string[];
  };
  deliverables: { title: string; subtitle: string; items: Deliverable[] };
  outcomes: {
    title: string;
    subtitle: string;
    stats: Stat[];
    quote: string;
    quoteSource: string;
    features: Feature[];
  };
  steps: { title: string; subtitle: string; items: Step[] };
  audiences: { title: string; subtitle?: string; items: Audience[] };
  panels: Panel[];
  bunzoPrompts?: string[];
  faqs: { title: string; items: Faq[] };
  cta: Cta;
};

export type IndustryPage = {
  slug: string;
  name: string;
  tag: string;
  seoDescription: string;
  hero: { lines: [string, string]; flow: [string, string]; subtitle: string };
  challenge: {
    title: string;
    intro: string;
    solution: string;
    pains: string[];
  };
  deliverables: Deliverable[];
  caseStudies: { title: string; intro?: string; items: CaseStudy[] };
  outcomes: {
    title: string;
    subtitle: string;
    stats: Stat[];
    quote: string;
    quoteSource: string;
    features: Feature[];
  };
  criteria: [string, string, string, string];
  cta: { title: string; description: string };
};
