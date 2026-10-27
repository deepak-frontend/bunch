import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  ButtonLink,
  ComparisonDeepDive,
  CriteriaGrid,
  CtaPanel,
  PageHero,
  SectionHeading,
} from "@/components/site/blocks";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { compareHubPage } from "@/content/site/pages";

export const metadata: Metadata = {
  title: "Compare Bunch",
  description: compareHubPage.description,
  alternates: { canonical: "/compare-hub/" },
};

export default function CompareHubRoute() {
  const { sideBySide, trust } = compareHubPage;
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={compareHubPage.eyebrow}
          title={compareHubPage.title}
          accent={compareHubPage.accent}
          description={compareHubPage.description}
          centered
          actions={
            <>
              <ButtonLink href="/start-free-trial/" large>
                Start free trial
              </ButtonLink>
              <ButtonLink href="#side-by-side" variant="secondary" large>
                See the full comparison
              </ButtonLink>
            </>
          }
        />
        <CriteriaGrid intro={compareHubPage.criteriaIntro} descriptions={compareHubPage.criteria} />
        <ComparisonDeepDive />
        <section className="versus-section page-shell" id="side-by-side">
          <SectionHeading eyebrow={sideBySide.eyebrow} title={sideBySide.title}>
            <p>{sideBySide.description}</p>
          </SectionHeading>
          <div className="versus-grid">
            {sideBySide.items.map((item, index) => (
              <Reveal delay={index * 0.07} key={item.title}>
                <article className={`versus-card${index === 3 ? " versus-card-dark" : ""}`}>
                  <span className="versus-label">
                    {String(index + 1).padStart(2, "0")} · {item.name}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="check-list">
                    {item.points.map((point) => (
                      <li key={point}>
                        <Check size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="versus-verdict">{item.verdict}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="trust-strip">
            <h3>{trust.title}</h3>
            <ul>
              {trust.points.map((point) => (
                <li key={point}>
                  <Check size={14} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
        <CtaPanel
          eyebrow="Connect with an expert"
          title={compareHubPage.cta.title}
          description={compareHubPage.cta.description}
          label="Book a Discovery Call"
          href="/book-a-discovery-call/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
