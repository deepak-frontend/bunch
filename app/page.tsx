import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomePage } from "@/components/sections/home-page";
import { mergeHomeContent, withHomeFallbacks } from "@/content/site/home";
import { hasSanityConfig } from "@/sanity/env";
import { previewCollections, previewSettings } from "@/content/static-preview";

// The homepage reads Sanity whenever a project is configured, in development
// too, so Studio edits show up locally. BUNCH_CONTENT_MODE=static opts out.
const useBuiltInContent =
  !hasSanityConfig || process.env.BUNCH_CONTENT_MODE === "static";

const emptyCollections = {
  modules: [],
  industries: [],
  testimonials: [],
  caseStudies: [],
  comparisons: [],
  faqs: [],
};

export async function generateMetadata(): Promise<Metadata> {
  const content = useBuiltInContent
    ? mergeHomeContent(null)
    : mergeHomeContent(await (await import("@/sanity/queries")).getHomePage());
  const { seoTitle: title, seoDescription: description } = content;
  const image = content.socialImage ?? "/brand/og-default.svg";

  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, url: "/", images: [image] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Home() {
  if (useBuiltInContent && hasSanityConfig) {
    return (
      <HomePage
        content={mergeHomeContent(null)}
        settings={previewSettings}
        collections={withHomeFallbacks(previewCollections)}
      />
    );
  }

  if (!hasSanityConfig) {
    return (
      <main className="setup-state">
        <Link className="site-logo" href="/">
          <span className="brand-mark">b</span>
          <span>bunch</span>
        </Link>
        <div>
          <p className="eyebrow">CONTENT SETUP</p>
          <h1>Connect your Bunch content.</h1>
          <p>
            Add a Sanity project ID to <code>.env.local</code>, then publish the
            Site settings and Home page documents in Studio.
          </p>
          <Link className="button button-primary" href="/studio/">
            Open Sanity Studio <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const { getHomeCollections, getHomePage, getSiteSettings } = await import(
    "@/sanity/queries"
  );
  const [content, settings, collections] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
    getHomeCollections(),
  ]);

  // Missing documents or empty fields fall back to the built-in live-site
  // copy, so the page never renders blank while editors fill in Studio.
  return (
    <HomePage
      content={mergeHomeContent(content)}
      settings={settings?.pricing ? settings : previewSettings}
      collections={withHomeFallbacks(collections ?? emptyCollections)}
    />
  );
}
