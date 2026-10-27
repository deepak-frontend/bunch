import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CtaPanel,
  FaqSection,
  IncludedModules,
  PageHero,
  PricingPlans,
} from "@/components/site/blocks";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { pricingPage } from "@/content/site/pages";
import { generalFaqs, pricing } from "@/content/site/shared";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One flat price, unlimited users, every module included: ₹4,900/month or ₹4,165/month billed yearly.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={pricingPage.title}
          title={pricing.title}
          accent={pricing.accent}
          description={pricingPage.description}
          centered
        />
        <PricingPlans heading={false} />
        <IncludedModules description={pricingPage.included} />
        <section className="page-shell">
          <Reveal className="statement-banner">
            <h2>
              {pricingPage.banner.title} <em>{pricingPage.banner.accent}</em>
            </h2>
            <Link className="button button-accent button-lg" href="/start-free-trial/">
              Start free trial <ArrowRight size={16} />
            </Link>
          </Reveal>
        </section>
        <FaqSection eyebrow="Get to know" title="Pricing, answered" items={generalFaqs} />
        <CtaPanel
          eyebrow="Talk to us"
          title={pricingPage.cta.title}
          description={pricingPage.cta.description}
          label="Book a free demo"
          href="/book-a-discovery-call/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
