import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BunzoSection,
  ButtonLink,
  CaseStudyCards,
  ComparisonDeepDive,
  CriteriaGrid,
  CtaPanel,
  DeliverableColumns,
  FaqSection,
  OutcomeBand,
  PageHero,
  PainSection,
  PricingPlans,
  RecognitionGrid,
  SectionHeading,
} from "@/components/site/blocks";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { FlowVisual } from "@/components/site/visuals";
import { getIndustry, industries } from "@/content/site/industries";
import { caseStudiesIntro, generalFaqs } from "@/content/site/shared";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustry(slug);
  if (!page) return {};
  const route = `/industries/${slug}/`;
  const title = `CRM for ${page.name}`;
  return {
    title,
    description: page.seoDescription,
    alternates: { canonical: route },
    openGraph: { title, description: page.seoDescription, url: route },
  };
}

export default async function IndustryRoute({ params }: Props) {
  const { slug } = await params;
  const page = getIndustry(slug);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={page.tag}
          title={page.hero.lines[0]}
          accent={page.hero.lines[1]}
          description={page.hero.subtitle}
          actions={
            <>
              <ButtonLink href="/start-free-trial/" large>
                Start Your Free Trial
              </ButtonLink>
              <ButtonLink href="/book-a-discovery-call/" variant="secondary" large>
                Book an Industry Demo
              </ButtonLink>
            </>
          }
          visual={<FlowVisual from={page.hero.flow[0]} to={page.hero.flow[1]} />}
        />
        <PainSection
          eyebrow="The challenge"
          title={page.challenge.title}
          intro={[page.challenge.intro]}
          closing={page.challenge.solution}
          pains={page.challenge.pains}
        />
        <section className="deliverables-section section-band">
          <div className="page-shell">
            <SectionHeading eyebrow="Our deliverables" title="What we help automate" />
            <DeliverableColumns items={page.deliverables} />
          </div>
        </section>
        <CaseStudyCards
          title={page.caseStudies.title}
          intro={page.caseStudies.intro ?? caseStudiesIntro}
          items={page.caseStudies.items}
        />
        <OutcomeBand {...page.outcomes} />
        <CriteriaGrid descriptions={page.criteria} />
        <ComparisonDeepDive />
        <BunzoSection />
        <RecognitionGrid />
        <PricingPlans />
        <FaqSection eyebrow="Get to know" title="Questions, answered" items={generalFaqs} />
        <CtaPanel
          eyebrow="Connect with an expert"
          title={page.cta.title}
          description={page.cta.description}
          label="Book a discovery call"
          href="/book-a-discovery-call/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
