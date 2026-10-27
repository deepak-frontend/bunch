import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CountUp, HeroTitle, Reveal } from "@/components/motion/reveal";
import {
  bunzoAgent,
  bunzoHowItWorks,
  comparisonCriteria,
  comparisonDeepDive,
  includedModules,
  pricing,
  recognition,
} from "@/content/site/shared";
import type {
  Audience,
  CaseStudy,
  Deliverable,
  Faq,
  Feature,
  Panel,
  Stat,
  Step,
} from "@/content/site/types";

const pad = (index: number) => String(index + 1).padStart(2, "0");

export function SectionHeading({
  eyebrow,
  title,
  children,
  centered = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal
      className={`section-heading${centered ? " section-heading-centered" : ""}${light ? " section-heading-light" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <div className="section-description">{children}</div> : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  actions,
  visual,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className="hero-wrap">
      <div className="hero-aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <section
        className={`page-hero page-shell${visual ? "" : " page-hero-solo"}${centered ? " page-hero-centered" : ""}`}
      >
        <div className="hero-copy">
          <p className="eyebrow eyebrow-pill">
            <span className="eyebrow-dot" />
            {eyebrow}
          </p>
          <HeroTitle text={title} accent={accent} />
          <Reveal delay={0.3} y={16}>
            <p className="hero-description">{description}</p>
            {actions ? <div className="hero-actions">{actions}</div> : null}
          </Reveal>
        </div>
        {visual ? (
          <Reveal className="page-hero-visual" delay={0.35} y={40}>
            {visual}
          </Reveal>
        ) : null}
      </section>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  large = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  large?: boolean;
}) {
  return (
    <Link
      className={`button button-${variant}${large ? " button-lg" : ""}`}
      href={href}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function FeatureBento({ items }: { items: Feature[] }) {
  return (
    <div className="feature-bento">
      {items.map((item, index) => (
        <Reveal className="feature-cell" delay={index * 0.06} key={item.title}>
          <article className="feature-card spotlight">
            <span className="feature-index">{pad(index)}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function PainSection({
  eyebrow,
  title,
  intro,
  closing,
  pains,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  closing: string;
  pains: string[];
}) {
  return (
    <section className="pain-section page-shell">
      <div className="pain-copy">
        <SectionHeading eyebrow={eyebrow} title={title}>
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SectionHeading>
        <Reveal className="pain-closing">
          <Sparkles size={18} />
          <p>{closing}</p>
        </Reveal>
      </div>
      <ul className="pain-list">
        {pains.map((pain, index) => (
          <li key={pain}>
            <Reveal delay={index * 0.05} y={14}>
              <span className="pain-icon">
                <X size={14} />
              </span>
              {pain}
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DeliverableColumns({ items }: { items: Deliverable[] }) {
  return (
    <div className="deliverable-grid">
      {items.map((item, index) => (
        <Reveal delay={index * 0.08} key={item.title}>
          <article className="deliverable-card">
            <span className="deliverable-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="check-list">
              {item.items.map((point) => (
                <li key={point}>
                  <Check size={14} />
                  {point}
                </li>
              ))}
            </ul>
            {item.note ? <p className="deliverable-note">{item.note}</p> : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function OutcomeBand({
  eyebrow = "Typical outcomes",
  title,
  subtitle,
  stats,
  quote,
  quoteSource,
  features,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  stats: Stat[];
  quote: string;
  quoteSource: string;
  features: Feature[];
}) {
  return (
    <section className="outcome-band">
      <div className="bunzo-glow" aria-hidden="true" />
      <div className="page-shell outcome-inner">
        <SectionHeading eyebrow={eyebrow} title={title} light>
          <p>{subtitle}</p>
        </SectionHeading>
        <div className="outcome-top">
          {stats.map((stat, index) => (
            <Reveal className="outcome-stat" delay={index * 0.1} key={stat.label}>
              <b>
                <CountUp value={stat.value} />
              </b>
              <span>{stat.label}</span>
              <p>{stat.note}</p>
            </Reveal>
          ))}
          <Reveal className="outcome-quote" delay={0.2}>
            <p>“{quote.replace(/^["“\s]+|["”\s]+$/g, "")}”</p>
            <span>{quoteSource}</span>
          </Reveal>
        </div>
        <div className="outcome-features">
          {features.map((feature, index) => (
            <Reveal delay={index * 0.05} key={feature.title}>
              <article className="outcome-feature">
                <span>{pad(index)}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsTimeline({
  eyebrow = "How we work",
  title,
  subtitle,
  items,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: Step[];
}) {
  return (
    <section className="timeline-section page-shell">
      <SectionHeading eyebrow={eyebrow} title={title}>
        {subtitle ? <p>{subtitle}</p> : null}
      </SectionHeading>
      <ol className="timeline">
        {items.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.1}>
              <span className="timeline-dot">{pad(index)}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.note ? <p className="timeline-note">{step.note}</p> : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AudienceCards({
  eyebrow = "Built for your team",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: Audience[];
}) {
  return (
    <section className="audience-section section-band">
      <div className="page-shell">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="audience-grid">
          {items.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.title}>
              <article className="audience-card spotlight">
                <h3>{item.title}</h3>
                {item.subtitle ? <p className="audience-sub">{item.subtitle}</p> : null}
                <p>{item.description}</p>
                <ul className="check-list">
                  {item.items.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PanelList({ panels }: { panels: Panel[] }) {
  return (
    <section className="panel-section page-shell">
      {panels.map((panel) => (
        <Reveal className="panel-row" key={panel.title}>
          <div className="panel-copy">
            {panel.subtitle ? <p className="eyebrow">{panel.subtitle}</p> : null}
            <h2>{panel.title}</h2>
            {panel.description ? <p>{panel.description}</p> : null}
          </div>
          {panel.points.length ? (
            <ul className="panel-points">
              {panel.points.map((point) => (
                <li key={point}>
                  <span>
                    <Check size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      ))}
    </section>
  );
}

export function CaseStudyCards({
  eyebrow = "Proof & credibility",
  title,
  intro,
  items,
  band = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: CaseStudy[];
  band?: boolean;
}) {
  return (
    <section className={`case-section${band ? " section-band" : ""}`}>
      <div className="page-shell">
        <SectionHeading eyebrow={eyebrow} title={title}>
          {intro ? <p>{intro}</p> : null}
        </SectionHeading>
        <div className="case-grid">
          {items.map((study, index) => (
            <Reveal delay={index * 0.08} key={study.company}>
              <article className="case-card">
                <header>
                  <span className="case-index">{pad(index)}</span>
                  <span className="case-category">{study.category}</span>
                </header>
                <h3>{study.company}</h3>
                <p className="case-metric">
                  <b>
                    <CountUp value={study.metric} />
                  </b>
                  <span>{study.metricLabel}</span>
                </p>
                <dl>
                  <dt>Problem</dt>
                  <dd>{study.problem}</dd>
                  <dt>Approach</dt>
                  <dd>{study.approach}</dd>
                  <dt>Outcome</dt>
                  <dd>{study.outcome}</dd>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="case-more">
          <Link href="/case-studies/">
            View all case studies <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function BunzoSection({ prompts }: { prompts?: string[] }) {
  return (
    <section className="bunzo-feature page-shell">
      <SectionHeading eyebrow={bunzoHowItWorks.eyebrow} title={bunzoHowItWorks.title} />
      <div className="bunzo-feature-grid">
        <Reveal className="bunzo-steps">
          {bunzoHowItWorks.steps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index === 0 && prompts?.length ? (
                  <div className="prompt-chips">
                    {prompts.map((prompt) => (
                      <q key={prompt}>{prompt}</q>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </Reveal>
        <Reveal className="bunzo-card" delay={0.15}>
          <Image
            src="/brand/bunzo/bunzo-pointing.webp"
            alt="Bunzo, the Bunch AI agent"
            width={288}
            height={315}
          />
          <p className="eyebrow">{bunzoHowItWorks.highlight.title}</p>
          <b>
            <CountUp value={bunzoHowItWorks.highlight.value} />
          </b>
          <span>{bunzoHowItWorks.highlight.label}</span>
          <p>{bunzoHowItWorks.highlight.description}</p>
        </Reveal>
      </div>
      <Reveal className="bunzo-agent">
        <Image src="/brand/bunzo/bunzo-head.webp" alt="" width={72} height={72} />
        <div>
          <p className="eyebrow">{bunzoAgent.eyebrow}</p>
          <h3>{bunzoAgent.title}</h3>
          <blockquote>“{bunzoAgent.quote}”</blockquote>
          <p>{bunzoAgent.description}</p>
        </div>
        <ButtonLink href="/bunzo/" variant="accent">
          Explore Bunzo AI agent
        </ButtonLink>
      </Reveal>
    </section>
  );
}

export function FaqSection({
  eyebrow = "FAQ",
  title,
  description = "Everything you need to know about Bunch. Can't find the answer you're looking for? We're here to help.",
  items,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Faq[];
}) {
  return (
    <section className="faq-section section-band">
      <div className="page-shell faq-layout">
        <SectionHeading eyebrow={eyebrow} title={title}>
          <p>{description}</p>
          <p className="faq-cta">
            <Link className="button button-outline" href="/book-a-discovery-call/">
              Talk to Sales <ArrowRight size={16} />
            </Link>
          </p>
        </SectionHeading>
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                {item.question}
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaPanel({
  eyebrow = "Get in touch",
  title,
  description,
  label,
  href,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  label: string;
  href: string;
}) {
  return (
    <section className="final-cta-section page-shell">
      <Reveal className="final-cta-inner">
        <span className="final-cta-mark">
          <Sparkles size={19} />
        </span>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="final-cta-actions">
          <Link className="button button-accent button-lg" href={href}>
            {label}
            <ArrowRight size={16} />
          </Link>
          {href !== "/start-free-trial/" ? (
            <Link className="button button-secondary button-lg" href="/start-free-trial/">
              Start free trial
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}

export function PricingPlans({ heading = true }: { heading?: boolean }) {
  const plans = [
    { ...pricing.monthly, featured: false },
    { ...pricing.yearly, featured: true },
  ];
  return (
    <section className="pricing-section section-band" id="pricing">
      <div className="page-shell">
        {heading ? (
          <SectionHeading eyebrow="Straightforward pricing" title={`${pricing.title} ${pricing.accent}`} centered>
            <p>{pricing.description}</p>
          </SectionHeading>
        ) : null}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.1} key={plan.name}>
              <article
                className={`pricing-plan${plan.featured ? " pricing-plan-featured" : " spotlight"}`}
              >
                {plan.featured ? <span className="plan-ribbon">Best value</span> : null}
                <div className="plan-topline">
                  <span>{plan.featured ? "Yearly" : "Monthly"}</span>
                </div>
                <h3>{plan.name}</h3>
                <p className="plan-price">
                  <span>₹</span>
                  {plan.price}
                  <small>/mo</small>
                </p>
                <p className="tax-note">{plan.note}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  className={`button ${plan.featured ? "button-accent" : "button-outline"}`}
                  href="/start-free-trial/"
                >
                  Start free trial <ArrowRight size={16} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="trial-note">{pricing.footnote}</p>
      </div>
    </section>
  );
}

export function IncludedModules({ description }: { description?: string }) {
  return (
    <section className="modules-section page-shell">
      <SectionHeading eyebrow={includedModules.eyebrow} title={includedModules.title}>
        {description ? <p>{description}</p> : null}
      </SectionHeading>
      <div className="modules-grid">
        {includedModules.items.map((item, index) => (
          <Reveal className="module-cell" delay={index * 0.07} key={item.title}>
            <Link className="module-item spotlight" href={item.href}>
              <span className="module-icon">
                <Plus size={20} />
              </span>
              <span className="module-title">{item.title}</span>
              <span className="module-description">{item.description}</span>
              <ArrowUpRight className="module-arrow" size={17} />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CriteriaGrid({
  intro,
  descriptions,
}: {
  intro?: string;
  descriptions: [string, string, string, string];
}) {
  return (
    <section className="criteria-section page-shell">
      <SectionHeading eyebrow={comparisonCriteria.eyebrow} title={comparisonCriteria.title}>
        {intro ? <p>{intro}</p> : null}
      </SectionHeading>
      <div className="criteria-grid">
        {comparisonCriteria.titles.map((title, index) => (
          <Reveal delay={index * 0.07} key={title}>
            <article className="criteria-card spotlight">
              <span>Criteria {pad(index)}</span>
              <h3>{title}</h3>
              <p>{descriptions[index]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ComparisonDeepDive() {
  return (
    <section className="deepdive-section section-band">
      <div className="page-shell">
        <SectionHeading eyebrow={comparisonDeepDive.eyebrow} title={comparisonDeepDive.title} />
        <div className="deepdive-list">
          {comparisonDeepDive.items.map((item, index) => (
            <Reveal className="deepdive-row" delay={index * 0.05} key={item.title}>
              <span className="deepdive-count">
                {pad(index)}
                <small>/04</small>
              </span>
              <div>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
              </div>
              <div>
                <p>{item.description}</p>
                <Link href={item.link.href}>
                  {item.link.label} <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RecognitionGrid() {
  return (
    <section className="recognition-section page-shell">
      <SectionHeading eyebrow={recognition.eyebrow} title={recognition.title} centered />
      <div className="recognition-grid">
        {recognition.items.map((item, index) => (
          <Reveal delay={index * 0.05} key={item.title}>
            <article className="recognition-card">
              <b>{item.title}</b>
              <p>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TestimonialWall({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { quote: string; person: string; role: string }[];
}) {
  return (
    <section className="testimonials-section page-shell">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="testimonial-masonry">
        {items.map((item, index) => (
          <Reveal delay={(index % 3) * 0.08} key={item.person}>
            <blockquote className="testimonial-item spotlight">
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <span className="testimonial-avatar">{item.person.slice(0, 1)}</span>
                <span>
                  <b>{item.person}</b>
                  <small>{item.role}</small>
                </span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
