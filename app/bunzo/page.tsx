import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Bot } from "lucide-react";
import {
  BunzoSection,
  ButtonLink,
  CtaPanel,
  IncludedModules,
  PageHero,
  StepsTimeline,
  TestimonialWall,
} from "@/components/site/blocks";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { bunzoPage, workspaceSteps } from "@/content/site/pages";

export const metadata: Metadata = {
  title: "Bunzo AI Agent",
  description: bunzoPage.description,
  alternates: { canonical: "/bunzo/" },
};

function BunzoHeroVisual() {
  return (
    <div className="bunzo-hero-visual">
      <Image
        className="bunzo-hero-mascot"
        src="/brand/bunzo/bunzo-pointing.webp"
        alt="Bunzo, the Bunch AI agent"
        width={288}
        height={315}
        priority
      />
      <div className="bunzo-bubble bunzo-bubble-user">Which leads need attention today?</div>
      <div className="bunzo-bubble bunzo-bubble-ai">
        <span className="bunzo-bubble-tag">
          <Bot size={12} /> Bunzo
        </span>
        6 leads have had no follow-up in the last 3 days. 2 are marked high priority.
        <span className="bunzo-bubble-action">
          View those leads <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
}

export default function BunzoRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Meet Bunzo"
          title="Bunzo"
          accent="AI Agent"
          description={bunzoPage.description}
          actions={
            <>
              <ButtonLink href="/start-free-trial/" large>
                Start free trial
              </ButtonLink>
              <ButtonLink href="/book-a-discovery-call/" variant="secondary" large>
                Book a discovery call
              </ButtonLink>
            </>
          }
          visual={<BunzoHeroVisual />}
        />
        <BunzoSection />
        <StepsTimeline
          eyebrow={bunzoPage.howWeWork.eyebrow}
          title={bunzoPage.howWeWork.title}
          subtitle={bunzoPage.howWeWork.description}
          items={workspaceSteps}
        />
        <IncludedModules description={bunzoPage.included.description} />
        <TestimonialWall
          eyebrow="What teams are asking their AI agent"
          title="Straight answers, straight from your data"
          items={bunzoPage.testimonials}
        />
        <CtaPanel
          title={bunzoPage.cta.title}
          description={bunzoPage.cta.description}
          label="Book a discovery call"
          href="/book-a-discovery-call/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
