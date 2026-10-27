import type { Metadata } from "next";
import {
  CaseStudyCards,
  CtaPanel,
  FaqSection,
  PageHero,
} from "@/components/site/blocks";
import { CountUp, Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { caseStudiesPage } from "@/content/site/pages";
import { flagshipCaseStudies, generalFaqs } from "@/content/site/shared";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How accounting, events, and manufacturing teams cut missed follow-ups, status meetings, and payroll time with Bunch.",
  alternates: { canonical: "/case-studies/" },
};

export default function CaseStudiesRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Proof & credibility"
          title="Case"
          accent="Studies"
          description={caseStudiesPage.description}
          centered
        />
        <section className="page-shell story-strip">
          {flagshipCaseStudies.map((study, index) => (
            <Reveal delay={index * 0.08} key={study.company}>
              <article className="story-card">
                <span className="case-category">{study.category}</span>
                <b>
                  <CountUp value={study.metric} />
                </b>
                <span className="story-metric">{study.metricLabel}</span>
                <h2>{study.company}</h2>
                <p>{caseStudiesPage.summaries[study.company]}</p>
              </article>
            </Reveal>
          ))}
        </section>
        <CaseStudyCards
          eyebrow="The full story"
          title="Problem, approach, outcome"
          items={flagshipCaseStudies}
          band
        />
        <FaqSection eyebrow="Get to know" title="Questions, answered" items={generalFaqs} />
        <CtaPanel
          eyebrow="Talk to us"
          title="Stop paying per head. Start running your business."
          description="We'll walk through your modules, your pricing, and how fast you can be up and running no sales pitch, just a straight answer."
          label="Start free trial"
          href="/start-free-trial/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
