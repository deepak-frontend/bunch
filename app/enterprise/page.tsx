import type { Metadata } from "next";
import { Check, Plug, ShieldCheck, Workflow } from "lucide-react";
import {
  ButtonLink,
  CaseStudyCards,
  CtaPanel,
  DeliverableColumns,
  FaqSection,
  FeatureBento,
  PageHero,
  SectionHeading,
} from "@/components/site/blocks";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { enterprisePage } from "@/content/site/pages";
import {
  caseStudiesIntro,
  enterpriseFaqs,
  flagshipCaseStudies,
} from "@/content/site/shared";

export const metadata: Metadata = {
  title: "Enterprise",
  description: enterprisePage.description,
  alternates: { canonical: "/enterprise/" },
};

function EnterpriseVisual() {
  const nodes = ["Sales", "HR", "Finance", "Operations", "Support", "Leadership"];
  return (
    <div className="orbit-visual" aria-hidden="true">
      <div className="orbit-core">
        <span className="brand-mark">b</span>
        <b>Enterprise</b>
      </div>
      <div className="orbit-ring">
        {nodes.map((node, index) => (
          <span key={node} style={{ "--i": index } as React.CSSProperties}>
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function EnterpriseRoute() {
  const { control, integrations, automation, support, comparison, deliverables } =
    enterprisePage;
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Bunch Enterprise"
          title={enterprisePage.title}
          accent={enterprisePage.accent}
          description={enterprisePage.description}
          actions={
            <ButtonLink href="/book-a-discovery-call/" large>
              Talk to sales
            </ButtonLink>
          }
          visual={<EnterpriseVisual />}
        />
        <section className="why-section page-shell">
          <SectionHeading eyebrow="Top-tier platform" title={enterprisePage.pillars.title}>
            <p>{enterprisePage.pillars.description}</p>
          </SectionHeading>
          <FeatureBento items={enterprisePage.pillars.items} />
        </section>
        <section className="control-section section-band">
          <div className="page-shell control-layout">
            <Reveal className="control-copy">
              <span className="control-icon">
                <ShieldCheck size={22} />
              </span>
              <h2>{control.title}</h2>
              <p>{control.description}</p>
              <h3>{control.governTitle}</h3>
              <p>{control.governDescription}</p>
              <ButtonLink href="/book-a-discovery-call/" variant="outline">
                Discuss your integration
              </ButtonLink>
            </Reveal>
            <ul className="control-points">
              {control.points.map((point, index) => (
                <li key={point}>
                  <Reveal delay={index * 0.05} y={14}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {point}
                    <Check size={16} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="page-shell split-feature">
          <Reveal className="split-card split-card-dark">
            <Plug size={26} />
            <h2>{integrations.title}</h2>
            <p>{integrations.description}</p>
            <ButtonLink href="/book-a-discovery-call/" variant="accent">
              Discuss your integration
            </ButtonLink>
          </Reveal>
          <Reveal className="split-card" delay={0.1}>
            <Workflow size={26} />
            <h2>{automation.title}</h2>
            <p className="split-sub">{automation.subtitle}</p>
            <p>{automation.description}</p>
            <ol className="mini-list">
              {automation.items.map((item) => (
                <li key={item.title}>
                  <b>{item.title}</b>
                  <span>{item.description}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
        <section className="support-section page-shell">
          <SectionHeading eyebrow={support.eyebrow} title={support.title}>
            <p>{support.description}</p>
          </SectionHeading>
          <div className="support-grid">
            {support.items.map((item, index) => (
              <Reveal delay={index * 0.07} key={item.title}>
                <article className="criteria-card spotlight">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section-band compare-table-section">
          <div className="page-shell">
            <SectionHeading eyebrow="Standard vs Enterprise" title={comparison.title} />
            <Reveal>
              <div className="comparison-scroll" role="region" aria-label="Standard CRM vs Bunch Enterprise" tabIndex={0}>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th scope="col">What you need</th>
                      <th scope="col">Standard CRM</th>
                      <th scope="col">Bunch Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map(([need, standard, enterprise]) => (
                      <tr key={need}>
                        <th scope="row">{need}</th>
                        <td>{standard}</td>
                        <td className="bunch-cell">{enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="deliverables-section page-shell">
          <SectionHeading eyebrow={deliverables.eyebrow} title={deliverables.title} />
          <DeliverableColumns items={deliverables.items} />
        </section>
        <CaseStudyCards
          title="Real businesses, real results"
          intro={caseStudiesIntro}
          items={flagshipCaseStudies}
          band
        />
        <FaqSection eyebrow="Get to know" title="Enterprise, answered" items={enterpriseFaqs} />
        <CtaPanel
          title="No pitch. Just a working CRM."
          description="We'll walk through your modules, your pricing, and how fast your team can be running."
          label="Book a discovery call"
          href="/book-a-discovery-call/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
