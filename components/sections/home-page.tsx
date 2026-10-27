import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardCheck,
  ContactRound,
  GraduationCap,
  HeartPulse,
  Layers3,
  ListTodo,
  Network,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type {
  CollectionItem,
  FaqItem,
  HomeSectionKey,
  SiteSettings,
} from "@/sanity/queries";
import { fillTokens, type ResolvedHomeContent } from "@/content/site/home";
import { DemoForm } from "@/components/sections/demo-form";
import { HeroEntrance } from "@/components/sections/hero-entrance";
import { HeroTitle, Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type HomeCollections = {
  modules: CollectionItem[];
  industries: CollectionItem[];
  testimonials: CollectionItem[];
  caseStudies: CollectionItem[];
  comparisons: CollectionItem[];
  faqs: FaqItem[];
};

type Props = {
  content: ResolvedHomeContent;
  settings: SiteSettings;
  collections: HomeCollections;
};

const moduleIcons = [
  ContactRound,
  UsersRound,
  ListTodo,
  ClipboardCheck,
  Workflow,
];
const industryIcons = [
  GraduationCap,
  HeartPulse,
  UsersRound,
  Layers3,
  BriefcaseBusiness,
  Network,
  ContactRound,
];
const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

function Heading({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <Reveal
      className={`section-heading${centered ? " section-heading-centered" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-description">{children}</div> : null}
    </Reveal>
  );
}

function ProductPreview() {
  return (
    <div className="preview-stage">
      <div
        className="product-preview"
        aria-label="Bunch business workspace preview"
      >
        <div className="preview-window-bar">
          <span className="preview-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>workspace.bunch.app</span>
          <span className="preview-window-avatar">A</span>
        </div>
        <div className="preview-layout">
          <aside className="preview-sidebar" aria-hidden="true">
            <div className="preview-brand">
              <span className="brand-mark">b</span>
              <b>bunch</b>
            </div>
            <div className="preview-workspace">
              <span className="workspace-dot" />
              Your workspace <ChevronDown size={12} />
            </div>
            <div className="preview-nav-item preview-nav-active">
              <Layers3 size={14} />
              Overview
            </div>
            <div className="preview-nav-item">
              <ContactRound size={14} />
              Leads
            </div>
            <div className="preview-nav-item">
              <ListTodo size={14} />
              Tasks
            </div>
            <div className="preview-nav-item">
              <UsersRound size={14} />
              Team
            </div>
            <div className="preview-nav-item">
              <BriefcaseBusiness size={14} />
              Projects
            </div>
            <div className="preview-sidebar-bottom">
              <span className="preview-avatar">AS</span>Admin user
            </div>
          </aside>
          <div className="preview-main">
            <div className="preview-topline">
              <span>MONDAY, 26 OCTOBER</span>
              <span className="preview-today">Today</span>
            </div>
            <div className="preview-greeting">
              <div>
                <b>Good morning, Anika</b>
                <span>Here is what is happening across your business.</span>
              </div>
              <span className="preview-add">+ Add new</span>
            </div>
            <div className="preview-stat-grid">
              <div className="preview-stat">
                <span>Open leads</span>
                <b>128</b>
                <small>↗ 12% this month</small>
                <svg viewBox="0 0 80 20" aria-hidden="true">
                  <path d="M0 16 L12 13 L24 15 L36 9 L48 11 L60 5 L80 2" />
                </svg>
              </div>
              <div className="preview-stat">
                <span>Tasks in progress</span>
                <b>34</b>
                <small>8 due today</small>
                <span className="preview-bar">
                  <i style={{ width: "64%" }} />
                </span>
              </div>
              <div className="preview-stat">
                <span>Team present</span>
                <b>
                  42 <i>/ 46</i>
                </b>
                <small>Updated just now</small>
                <span className="preview-bar">
                  <i style={{ width: "91%" }} />
                </span>
              </div>
            </div>
            <div className="preview-lower-grid">
              <div className="preview-panel">
                <div className="preview-panel-heading">
                  <b>Team activity</b>
                  <span>See all</span>
                </div>
                <div className="preview-activity">
                  <i className="activity-purple" />
                  <span>
                    <b>Priya</b> moved a lead to proposal
                  </span>
                  <small>10:42</small>
                </div>
                <div className="preview-activity">
                  <i className="activity-orange" />
                  <span>
                    <b>Rahul</b> completed a project task
                  </span>
                  <small>10:18</small>
                </div>
                <div className="preview-activity">
                  <i className="activity-green" />
                  <span>
                    <b>Meera</b> checked in for the day
                  </span>
                  <small>09:06</small>
                </div>
              </div>
              <div className="preview-ai">
                <span className="ai-orbit">
                  <Sparkles size={15} />
                </span>
                <small>BUNZO AI</small>
                <b>Your team has 6 follow-ups due today.</b>
                <span>Want me to create a task list?</span>
                <span className="preview-ai-action">
                  Create tasks <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-chip float-chip-top" aria-hidden="true">
        <span className="float-chip-icon">
          <Check size={13} />
        </span>
        Payroll synced
      </div>
      <div className="float-chip float-chip-bottom" aria-hidden="true">
        <span className="float-chip-icon float-chip-icon-ember">
          <Sparkles size={13} />
        </span>
        6 follow-ups queued
      </div>
    </div>
  );
}

function ActionLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  // In-page anchors and external URLs use a plain <a>; site paths use Link.
  if (href.startsWith("#") || /^https?:/.test(href)) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function HomePage({ content, settings, collections }: Props) {
  const t = (text: string) => fillTokens(text, settings);
  const visible = (section: HomeSectionKey) =>
    !content.hiddenSections?.includes(section);
  const annual = settings.pricing.annualAmount;
  const annualMonthly = Math.round(annual / 12);
  const taxNote = t(content.taxDisclaimer);
  const tickerSource = content.tickerItems.length
    ? content.tickerItems
    : [
        ...collections.modules.map((item) => item.title),
        "Bunzo AI",
        ...collections.industries.map((item) => item.title),
      ].filter((item): item is string => Boolean(item));
  // The track scrolls by half its width, so each half must be wider than the
  // screen; repeat short lists until there are enough items.
  const tickerItems = tickerSource.length
    ? Array.from({ length: Math.ceil(12 / tickerSource.length) }, () => tickerSource).flat()
    : [];
  const headers = content.comparisonHeaders;
  const plans = [
    {
      key: "monthly",
      featured: false,
      label: content.monthlyPlanLabel,
      title: content.monthlyPlanTitle,
      description: content.monthlyPlanDescription,
      price: settings.pricing.monthlyAmount,
      note: `Billed monthly, ${taxNote}`,
      inclusions: content.monthlyInclusions,
    },
    {
      key: "annual",
      featured: true,
      label: content.annualPlanLabel,
      title: content.annualPlanTitle,
      description: content.annualPlanDescription,
      price: annualMonthly,
      note: `₹${inr.format(annual)} billed yearly, ${taxNote}`,
      inclusions: content.annualInclusions,
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <div className="hero-wrap">
          <div className="hero-aurora" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <section className="hero-section page-shell">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-pill">
                <span className="eyebrow-dot" />
                {content.heroEyebrow}
              </p>
              <HeroTitle text={content.heroTitle} />
              <Reveal delay={0.35} y={16}>
                <p className="hero-description">{content.heroDescription}</p>
                <div className="hero-actions">
                  <ActionLink
                    className="button button-primary button-lg"
                    href={content.heroPrimaryLink}
                  >
                    {content.heroPrimaryLabel}
                    <ArrowRight size={17} />
                  </ActionLink>
                  <ActionLink
                    className="button button-secondary button-lg"
                    href={content.heroSecondaryLink}
                  >
                    {content.heroSecondaryLabel}
                    <ArrowUpRight size={16} />
                  </ActionLink>
                </div>
                <div className="trust-line">
                  {content.heroTrustPoints.map((point) => (
                    <span key={point}>
                      <Check size={14} />
                      {t(point)}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <HeroEntrance>
              {content.heroImage?.url ? (
                <div className="preview-stage">
                  <Image
                    className="hero-image"
                    src={content.heroImage.url}
                    alt={content.heroImage.alt ?? ""}
                    width={content.heroImage.width ?? 1200}
                    height={content.heroImage.height ?? 900}
                    sizes="(max-width: 960px) 100vw, 600px"
                    placeholder={content.heroImage.lqip ? "blur" : "empty"}
                    blurDataURL={content.heroImage.lqip}
                    priority
                  />
                </div>
              ) : (
                <ProductPreview />
              )}
            </HeroEntrance>
          </section>
        </div>
        {content.showTicker !== false && tickerItems.length ? (
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  <Sparkles size={14} />
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {visible("challenge") ? (
          <section className="challenge-section" id="why-bunch">
            <div className="page-shell challenge-layout">
              <Heading eyebrow={content.challengeEyebrow} title={content.challengeTitle}>
                <p>{content.challengeDescription}</p>
              </Heading>
              <ol className="challenge-list">
                {content.challengePoints.map((point, index) => (
                  <li key={point}>
                    <Reveal delay={index * 0.06} y={18}>
                      <span className="challenge-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{point}</p>
                      <ArrowUpRight size={18} />
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}
        {visible("steps") ? (
          <section className="steps-section page-shell" id="how-it-works">
            <Heading eyebrow={content.stepsEyebrow} title={content.stepsTitle}>
              <p>{content.stepsDescription}</p>
            </Heading>
            <div className="steps-grid">
              {content.steps.map((step, index) => (
                <Reveal delay={index * 0.1} key={step.title}>
                  <article className="step-item spotlight">
                    <span className="step-number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
        {visible("pricing") ? (
          <section className="pricing-section section-band" id="pricing">
            <div className="page-shell">
              <Heading eyebrow={content.pricingEyebrow} title={content.pricingTitle} centered>
                <p>{content.pricingDescription}</p>
              </Heading>
              <div className="pricing-grid">
                {plans.map((plan, index) => (
                  <Reveal delay={index * 0.1} key={plan.key}>
                    <article
                      className={`pricing-plan${plan.featured ? " pricing-plan-featured" : " spotlight"}`}
                    >
                      {plan.featured && content.annualPopularLabel ? (
                        <span className="plan-ribbon">{content.annualPopularLabel}</span>
                      ) : null}
                      <div className="plan-topline">
                        <span>{plan.label}</span>
                        <span className="plan-icon">
                          {plan.featured ? <Sparkles size={16} /> : <Layers3 size={16} />}
                        </span>
                      </div>
                      <h3>{plan.title}</h3>
                      <p className="plan-caption">{plan.description}</p>
                      <p className="plan-price">
                        <span>₹</span> {inr.format(plan.price)}
                        <small>/month</small>
                      </p>
                      <p className="tax-note">{plan.note}</p>
                      <ul>
                        {plan.inclusions.map((item) => (
                          <li key={item}>
                            <Check size={15} />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                      <Link
                        className={`button ${plan.featured ? "button-accent" : "button-outline"}`}
                        href="/start-free-trial/"
                      >
                        {content.pricingButtonLabel} <ArrowRight size={16} />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
              <p className="trial-note">
                {content.trialNotes.map((note, index) => (
                  <Fragment key={note}>
                    {index > 0 ? <span /> : null}
                    {t(note)}
                  </Fragment>
                ))}
              </p>
            </div>
          </section>
        ) : null}
        {visible("modules") ? (
          <section className="modules-section page-shell" id="modules">
            <Heading eyebrow={content.modulesEyebrow} title={t(content.modulesTitle)}>
              <p>{content.modulesDescription}</p>
            </Heading>
            <div className="modules-grid">
              {collections.modules
                .slice(0, settings.moduleCount)
                .map((module, index) => {
                  const Icon = moduleIcons[index % moduleIcons.length];
                  return (
                    <Reveal className="module-cell" delay={index * 0.07} key={module._id}>
                      <Link className="module-item spotlight" href={module.route ?? "/modules/"}>
                        <span className="module-icon">
                          <Icon size={20} />
                        </span>
                        <span className="module-title">{module.title}</span>
                        {module.ownerReviewRequired && !module.excerpt ? (
                          <span className="content-review">Description pending review</span>
                        ) : (
                          <span className="module-description">{module.excerpt}</span>
                        )}
                        <ArrowUpRight className="module-arrow" size={17} />
                      </Link>
                    </Reveal>
                  );
                })}
            </div>
          </section>
        ) : null}
        {visible("bunzo") ? (
          <section className="bunzo-section" id="bunzo">
            <div className="bunzo-glow" aria-hidden="true" />
            <div className="page-shell bunzo-layout">
              <Reveal className="bunzo-copy">
                <p className="eyebrow eyebrow-light">
                  <Sparkles size={14} />
                  {content.bunzoEyebrow}
                </p>
                <h2>{content.bunzoTitle}</h2>
                <p>{content.bunzoDescription}</p>
                <ActionLink className="button button-accent" href={content.bunzoButtonLink}>
                  {content.bunzoButtonLabel} <ArrowRight size={16} />
                </ActionLink>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bunzo-conversation" aria-label={`Example ${content.bunzoChatName} conversation`}>
                  <div className="conversation-header">
                    <span className="bunzo-avatar">
                      <Bot size={18} />
                    </span>
                    <span>
                      <b>{content.bunzoChatName}</b>
                      <small>{content.bunzoChatStatus}</small>
                    </span>
                    <span className="online-dot" />
                  </div>
                  <div className="conversation-message user-message">{content.bunzoPrompt}</div>
                  <div className="conversation-message ai-message">
                    <span className="typing-dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <p>{content.bunzoAnswer}</p>
                    <span>
                      {content.bunzoAction} <ArrowRight size={13} />
                    </span>
                  </div>
                  <div className="conversation-input">
                    <span>{content.bunzoInputPlaceholder}</span>
                    <span className="send-button">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ) : null}
        {visible("testimonials") && collections.testimonials.length ? (
          <section className="testimonials-section page-shell">
            <Heading eyebrow={content.testimonialsEyebrow} title={content.testimonialsTitle} />
            <div className="testimonials-grid">
              {collections.testimonials.map((item, index) => (
                <Reveal delay={(index % 3) * 0.08} key={item._id}>
                  <blockquote className="testimonial-item spotlight">
                    <span className="quote-mark">“</span>
                    <p>{item.quote}</p>
                    <footer>
                      <span className="testimonial-avatar">{item.person?.slice(0, 1)}</span>
                      <span>
                        <b>{item.person}</b>
                        <small>
                          {item.role}
                          {item.company ? `, ${item.company}` : ""}
                        </small>
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
        {visible("industries") ? (
          <section className="industries-section section-band" id="industries">
            <div className="page-shell">
              <Heading eyebrow={content.industriesEyebrow} title={content.industriesTitle}>
                <p>{content.industriesDescription}</p>
              </Heading>
              <div className="industry-cards">
                {collections.industries.map((industry, index) => {
                  const Icon = industryIcons[index % industryIcons.length];
                  return (
                    <Reveal delay={(index % 4) * 0.06} key={industry._id}>
                      <Link className="industry-card spotlight" href={industry.route ?? "/industries/"}>
                        <span className="industry-icon">
                          <Icon size={18} />
                        </span>
                        <b>{industry.title}</b>
                        {industry.excerpt ? <span>{industry.excerpt}</span> : null}
                        <ArrowUpRight className="industry-card-arrow" size={16} />
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
              {content.industriesNote ? <p className="section-note">{content.industriesNote}</p> : null}
            </div>
          </section>
        ) : null}
        {visible("caseStudies") && collections.caseStudies.length ? (
          <section className="case-studies-section page-shell">
            <Heading eyebrow={content.caseStudiesEyebrow} title={content.caseStudiesTitle}>
              <p>{content.caseStudiesDescription}</p>
            </Heading>
            <div className="case-studies-grid">
              {collections.caseStudies.slice(0, 3).map((study, index) => (
                <Reveal delay={index * 0.08} key={study._id}>
                  <article className="case-study-item spotlight">
                    <span className="case-study-company">{study.title}</span>
                    <b>{study.metric}</b>
                    {study.summary ? <p>{study.summary}</p> : null}
                  </article>
                </Reveal>
              ))}
            </div>
            {content.caseStudiesLinkLabel ? (
              <Reveal className="case-more">
                <Link href="/case-studies/">
                  {content.caseStudiesLinkLabel} <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            ) : null}
          </section>
        ) : null}
        {visible("comparison") && collections.comparisons.length ? (
          <section className="comparison-section section-band" id="compare">
            <div className="page-shell">
              <Heading eyebrow={content.comparisonsEyebrow} title={content.comparisonsTitle}>
                <p>{content.comparisonsDescription}</p>
              </Heading>
              <Reveal>
                <div
                  className="comparison-scroll"
                  role="region"
                  aria-label={content.comparisonsTitle}
                  tabIndex={0}
                >
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th scope="col">{headers.feature}</th>
                        <th scope="col">{headers.bunch}</th>
                        <th scope="col">{headers.spreadsheets}</th>
                        <th scope="col">{headers.bigin}</th>
                        <th scope="col">{headers.zohoOne}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collections.comparisons.map((row) => (
                        <tr key={row._id}>
                          <th scope="row">{row.feature}</th>
                          <td className="bunch-cell">{row.bunch}</td>
                          <td>{row.spreadsheets}</td>
                          <td>{row.bigin}</td>
                          <td>{row.zohoOne}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              {content.comparisonFootnote ? (
                <p className="section-note">{content.comparisonFootnote}</p>
              ) : null}
            </div>
          </section>
        ) : null}
        {visible("demo") ? (
          <section className="demo-section page-shell" id="book-a-demo">
            <Reveal className="demo-copy">
              <p className="eyebrow">{content.demoEyebrow}</p>
              <h2>{content.demoTitle}</h2>
              <p>{content.demoDescription}</p>
              {content.demoPoints.length ? (
                <ul className="check-list check-list-lg">
                  {content.demoPoints.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      {t(point)}
                    </li>
                  ))}
                </ul>
              ) : null}
              {content.demoNote ? (
                <div className="demo-contact-note">
                  <span className="demo-note-icon">
                    <Bot size={17} />
                  </span>
                  <span>{content.demoNote}</span>
                </div>
              ) : null}
            </Reveal>
            <Reveal delay={0.12}>
              <DemoForm />
            </Reveal>
          </section>
        ) : null}
        {visible("faq") && collections.faqs.length ? (
          <section className="faq-section section-band" id="faq">
            <div className="page-shell faq-layout">
              <Heading eyebrow={content.faqEyebrow} title={content.faqTitle}>
                <p>{content.faqDescription}</p>
              </Heading>
              <div className="faq-list">
                {collections.faqs.map((item: FaqItem) => (
                  <details className="faq-item" key={item._id}>
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
        ) : null}
        {visible("finalCta") ? (
          <section className="final-cta-section page-shell">
            <Reveal className="final-cta-inner">
              <span className="final-cta-mark">
                <Sparkles size={19} />
              </span>
              <h2>{content.finalCtaTitle}</h2>
              <p>{content.finalCtaDescription}</p>
              <ActionLink className="button button-accent button-lg" href={content.finalCtaButtonLink}>
                {content.finalCtaButtonLabel}
                <ArrowRight size={16} />
              </ActionLink>
            </Reveal>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
