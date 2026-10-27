import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import {
  ButtonLink,
  PageHero,
  SectionHeading,
  StepsTimeline,
  TestimonialWall,
} from "@/components/site/blocks";
import { CountUp, Reveal } from "@/components/motion/reveal";
import { DemoForm } from "@/components/sections/demo-form";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { aboutPage, workspaceSteps } from "@/content/site/pages";
import { contact } from "@/content/site/shared";

export const metadata: Metadata = {
  title: "About Bunch",
  description: aboutPage.description,
  alternates: { canonical: "/about/" },
};

export default function AboutRoute() {
  const { mission, values, getStarted } = aboutPage;
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Bunch"
          title="About"
          accent="Us"
          description={aboutPage.description}
          centered
        />
        <section className="page-shell facts-grid">
          {aboutPage.facts.map((fact, index) => (
            <Reveal delay={index * 0.06} key={fact.label}>
              <article className="fact-card">
                <span>{fact.label}</span>
                <b>{fact.value}</b>
              </article>
            </Reveal>
          ))}
        </section>
        <section className="mission-section page-shell">
          <Reveal className="mission-copy">
            <p className="eyebrow">{mission.title}</p>
            <h2>{mission.lead}</h2>
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ButtonLink href="/pricing/" variant="outline">
              See the pricing
            </ButtonLink>
          </Reveal>
          <div className="mission-stats">
            {mission.stats.map((stat, index) => (
              <Reveal className="mission-stat" delay={index * 0.1} key={stat.label}>
                <b>
                  <CountUp value={stat.value} />
                </b>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="values-section section-band">
          <div className="page-shell">
            <SectionHeading eyebrow={values.eyebrow} title={values.title} />
            <div className="values-grid">
              {values.items.map((value, index) => (
                <Reveal delay={index * 0.07} key={value.title}>
                  <article className="value-card spotlight">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <StepsTimeline
          title="From empty workspace to running CRM"
          subtitle={`No templates to configure, no consultant to book. ${aboutPage.stepsTagline}`}
          items={workspaceSteps}
        />
        <TestimonialWall
          eyebrow="What clients say"
          title="Teams that run on Bunch"
          items={aboutPage.testimonials}
        />
        <section className="demo-section page-shell" id="book-a-demo">
          <Reveal className="demo-copy">
            <p className="eyebrow">Get started</p>
            <h2>{getStarted.title}</h2>
            <p>{getStarted.description}</p>
            <p>{getStarted.lead}</p>
            <ul className="check-list check-list-lg">
              {getStarted.points.map((point) => (
                <li key={point}>
                  <Check size={14} />
                  {point}
                </li>
              ))}
            </ul>
            <a className="demo-contact-note" href={`tel:${contact.phone}`}>
              <span className="demo-note-icon">
                <Phone size={17} />
              </span>
              <span>Call us at {contact.phone}</span>
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <DemoForm />
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
