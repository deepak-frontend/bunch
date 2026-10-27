import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AudienceCards,
  BunzoSection,
  ButtonLink,
  CaseStudyCards,
  CtaPanel,
  DeliverableColumns,
  FaqSection,
  FeatureBento,
  OutcomeBand,
  PageHero,
  PainSection,
  PanelList,
  SectionHeading,
  StepsTimeline,
} from "@/components/site/blocks";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ModuleVisual } from "@/components/site/visuals";
import { getModule, modules } from "@/content/site/modules";
import { educationCaseStudies } from "@/content/site/shared";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return modules.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getModule(slug);
  if (!page) return {};
  const route = `/modules/${slug}/`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: route },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url: route },
  };
}

export default async function ModuleRoute({ params }: Props) {
  const { slug } = await params;
  const page = getModule(slug);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={`Bunch ${page.name}`}
          title={page.hero.title}
          accent={page.hero.accent}
          description={page.hero.description}
          actions={
            <>
              <ButtonLink href={page.hero.cta.href} large>
                {page.hero.cta.label}
              </ButtonLink>
              <ButtonLink href="/pricing/" variant="secondary" large>
                See pricing
              </ButtonLink>
            </>
          }
          visual={<ModuleVisual variant={page.visual} />}
        />
        <section className="why-section page-shell">
          <SectionHeading eyebrow={page.why.title} title={page.why.subtitle} />
          <FeatureBento items={page.why.items} />
        </section>
        <PainSection
          eyebrow={page.problem.title}
          title={page.problem.subtitle}
          intro={page.problem.intro}
          closing={page.problem.closing}
          pains={page.problem.pains}
        />
        <section className="deliverables-section section-band">
          <div className="page-shell">
            <SectionHeading eyebrow={page.deliverables.subtitle} title={page.deliverables.title} />
            <DeliverableColumns items={page.deliverables.items} />
          </div>
        </section>
        <OutcomeBand {...page.outcomes} />
        <StepsTimeline title={page.steps.title} subtitle={page.steps.subtitle} items={page.steps.items} />
        <AudienceCards
          eyebrow={page.audiences.subtitle}
          title={page.audiences.title}
          items={page.audiences.items}
        />
        <PanelList panels={page.panels} />
        <BunzoSection prompts={page.bunzoPrompts} />
        <CaseStudyCards title="Real businesses, real results" items={educationCaseStudies} band />
        <FaqSection eyebrow="Around your business" title={page.faqs.title} items={page.faqs.items} />
        <CtaPanel
          title={page.cta.title}
          description={page.cta.description}
          label={page.cta.label}
          href={page.cta.href}
        />
      </main>
      <SiteFooter />
    </>
  );
}
