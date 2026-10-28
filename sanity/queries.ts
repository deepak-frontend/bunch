import type { PortableTextBlock } from "@portabletext/types";
import { sanityClient } from "./client";
import { hasSanityConfig } from "./env";

// Production re-fetches at most every 5 minutes; development always fetches
// fresh so Studio edits appear on the next refresh.
const fetchOptions =
  process.env.NODE_ENV === "development"
    ? ({ cache: "no-store" } as const)
    : { next: { revalidate: 300 } };

export interface SiteSettings {
  moduleCount: number;
  pricing: {
    monthlyAmount: number;
    annualAmount: number;
    taxRatePercent: number;
    trialDays: number;
  };
  contact?: { phone?: string; email?: string };
  socialLinks?: { label: string; url: string }[];
}

// Every field is optional in Sanity; the page merges in defaults from
// content/site/home.ts for anything left empty.
export const homeSectionKeys = [
  "challenge",
  "steps",
  "pricing",
  "modules",
  "bunzo",
  "testimonials",
  "industries",
  "caseStudies",
  "comparison",
  "demo",
  "faq",
  "finalCta",
] as const;
export type HomeSectionKey = (typeof homeSectionKeys)[number];

export interface HomeCard {
  title: string;
  description?: string;
  link?: string;
}

export interface HeroPreview {
  address?: string;
  workspaceLabel?: string;
  navItems?: string[];
  userName?: string;
  userInitials?: string;
  dateLabel?: string;
  todayLabel?: string;
  greeting?: string;
  greetingNote?: string;
  addLabel?: string;
  stats?: { label: string; value: string; note?: string }[];
  activityTitle?: string;
  activityLinkLabel?: string;
  activities?: { name: string; action: string; time?: string }[];
  aiLabel?: string;
  aiMessage?: string;
  aiQuestion?: string;
  aiActionLabel?: string;
  chipTop?: string;
  chipBottom?: string;
}

export interface HomePageContent {
  hiddenSections?: HomeSectionKey[];
  showTicker?: boolean;
  tickerItems?: string[];
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroPrimaryLabel?: string;
  heroPrimaryLink?: string;
  heroSecondaryLabel?: string;
  heroSecondaryLink?: string;
  heroTrustPoints?: string[];
  heroPreview?: HeroPreview;
  heroImage?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    lqip?: string;
  };
  challengeEyebrow?: string;
  challengeTitle?: string;
  challengeDescription?: string;
  challengePoints?: string[];
  stepsEyebrow?: string;
  stepsTitle?: string;
  stepsDescription?: string;
  steps?: { title: string; description: string }[];
  pricingEyebrow?: string;
  pricingTitle?: string;
  pricingDescription?: string;
  monthlyPlanLabel?: string;
  monthlyPlanTitle?: string;
  monthlyPlanDescription?: string;
  monthlyInclusions?: string[];
  annualPlanLabel?: string;
  annualPlanTitle?: string;
  annualPlanDescription?: string;
  annualPopularLabel?: string;
  annualInclusions?: string[];
  pricePeriod?: string;
  monthlyPriceNote?: string;
  annualPriceNote?: string;
  pricingButtonLabel?: string;
  pricingButtonLink?: string;
  trialNotes?: string[];
  modulesEyebrow?: string;
  modulesTitle?: string;
  modulesDescription?: string;
  moduleCards?: HomeCard[];
  bunzoEyebrow?: string;
  bunzoTitle?: string;
  bunzoDescription?: string;
  bunzoButtonLabel?: string;
  bunzoButtonLink?: string;
  bunzoChatName?: string;
  bunzoChatStatus?: string;
  bunzoPrompt?: string;
  bunzoAnswer?: string;
  bunzoAction?: string;
  bunzoInputPlaceholder?: string;
  testimonialsEyebrow?: string;
  testimonialsTitle?: string;
  testimonials?: { quote: string; person: string; role?: string; company?: string }[];
  industriesEyebrow?: string;
  industriesTitle?: string;
  industriesDescription?: string;
  industryCards?: HomeCard[];
  industriesNote?: string;
  caseStudiesEyebrow?: string;
  caseStudiesTitle?: string;
  caseStudiesDescription?: string;
  caseStudyCards?: { company: string; metric: string; summary?: string }[];
  caseStudiesLinkLabel?: string;
  caseStudiesLink?: string;
  comparisonsEyebrow?: string;
  comparisonsTitle?: string;
  comparisonsDescription?: string;
  comparisonHeaders?: {
    feature?: string;
    bunch?: string;
    spreadsheets?: string;
    bigin?: string;
    zohoOne?: string;
  };
  comparisonFootnote?: string;
  comparisonRows?: {
    feature: string;
    bunch: string;
    spreadsheets: string;
    bigin: string;
    zohoOne: string;
  }[];
  demoEyebrow?: string;
  demoTitle?: string;
  demoDescription?: string;
  demoPoints?: string[];
  demoNote?: string;
  demoFormNameLabel?: string;
  demoFormEmailLabel?: string;
  demoFormPhoneLabel?: string;
  demoFormButtonLabel?: string;
  demoFormPrivacyNote?: string;
  faqEyebrow?: string;
  faqTitle?: string;
  faqDescription?: string;
  faqs?: { question: string; answer: string }[];
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButtonLabel?: string;
  finalCtaButtonLink?: string;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
}

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
}

export interface MarketingPageContent {
  title: string;
  description?: string;
  body?: PortableTextBlock[];
  faqs?: FaqItem[];
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
  ownerReviewRequired?: boolean;
}

export interface BlogPostContent {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
}

async function fetchPublished<T>(
  query: string,
  params = {},
): Promise<T | null> {
  if (!hasSanityConfig) return null;
  return sanityClient.fetch<T | null>(query, params, fetchOptions);
}

export async function getSiteSettings() {
  return fetchPublished<SiteSettings>(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{
      moduleCount,
      pricing { monthlyAmount, annualAmount, taxRatePercent, trialDays },
      contact { phone, email },
      socialLinks[] { label, url }
    }`,
  );
}

export async function getHomePage() {
  return fetchPublished<HomePageContent>(
    `*[_type == "homePage" && _id == "homePage"][0]{
      ...,
      "heroImage": heroImage{
        alt,
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        "lqip": asset->metadata.lqip
      },
      "socialImage": socialImage.asset->url
    }`,
  );
}

export async function getMarketingPage(route: string) {
  return fetchPublished<MarketingPageContent>(
    `*[_type in ["genericPage", "modulePage", "industryPage"] && route == $route][0]{
      title, "description": coalesce(description, excerpt), body, ownerReviewRequired,
      "faqs": faqs[]->{_id, question, answer},
      seoTitle, seoDescription,
      "socialImage": socialImage.asset->url
    }`,
    { route },
  );
}

export async function getBlogPosts(tag?: string) {
  const query = tag
    ? `*[_type == "blogPost" && $tag in tags] | order(publishedAt desc){_id, title, "slug": slug.current, publishedAt, excerpt, tags}`
    : `*[_type == "blogPost"] | order(publishedAt desc){_id, title, "slug": slug.current, publishedAt, excerpt, tags}`;
  return fetchPublished<BlogPostContent[]>(query, tag ? { tag } : {});
}

export async function getBlogPost(slug: string) {
  return fetchPublished<BlogPostContent>(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, publishedAt, excerpt, body, tags,
      seoTitle, seoDescription, "socialImage": socialImage.asset->url
    }`,
    { slug },
  );
}

export async function getSitemapContent() {
  if (!hasSanityConfig)
    return { blogRoutes: [] as string[], tags: [] as string[] };

  const [blogRoutes, tags] = await Promise.all([
    sanityClient.fetch<string[]>(
      `*[_type == "blogPost" && defined(slug.current)].slug.current`,
      {},
      fetchOptions,
    ),
    sanityClient.fetch<string[]>(
      `array::unique(*[_type == "blogPost"].tags[])`,
      {},
      fetchOptions,
    ),
  ]);

  return { blogRoutes, tags };
}
