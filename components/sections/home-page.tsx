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
import type { HeroPreview, HomeSectionKey, SiteSettings } from "@/sanity/queries";
import { fillTokens, type ResolvedHomeContent } from "@/content/site/home";
import { DemoForm } from "@/components/sections/demo-form";
import { HeroEntrance } from "@/components/sections/hero-entrance";
import { HeroTitle, Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type Props = {
  content: ResolvedHomeContent;
  settings: SiteSettings;
};

const moduleIcons = [
  ContactRound,
  UsersRound,
  ListTodo,
  ClipboardCheck,
  Workflow,
];
const previewNavIcons = [Layers3, ContactRound, ListTodo, UsersRound, BriefcaseBusiness];
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

function ProductPreview({ preview }: { preview: HeroPreview }) {
  const stats = preview.stats ?? [];
  const activities = preview.activities ?? [];
  const activityColors = ["activity-purple", "activity-orange", "activity-green"];
  const statBars = ["64%", "91%"];
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
          <span>{preview.address}</span>
          <span className="preview-window-avatar">{preview.userInitials?.slice(0, 1)}</span>
        </div>
        <div className="preview-layout">
          <aside className="preview-sidebar" aria-hidden="true">
            <div className="preview-brand">
              <span className="brand-mark">b</span>
              <b>bunch</b>
            </div>
            <div className="preview-workspace">
              <span className="workspace-dot" />
              {preview.workspaceLabel} <ChevronDown size={12} />
            </div>
            {(preview.navItems ?? []).map((item, index) => {
              const Icon = previewNavIcons[index % previewNavIcons.length];
              return (
                <div
                  className={`preview-nav-item${index === 0 ? " preview-nav-active" : ""}`}
                  key={`${item}-${index}`}
                >
                  <Icon size={14} />
                  {item}
                </div>
              );
            })}
            <div className="preview-sidebar-bottom">
              <span className="preview-avatar">{preview.userInitials}</span>
              {preview.userName}
            </div>
          </aside>
          <div className="preview-main">
            <div className="preview-topline">
              <span>{preview.dateLabel}</span>
              <span className="preview-today">{preview.todayLabel}</span>
            </div>
            <div className="preview-greeting">
              <div>
                <b>{preview.greeting}</b>
                <span>{preview.greetingNote}</span>
              </div>
              <span className="preview-add">{preview.addLabel}</span>
            </div>
            <div className="preview-stat-grid">
              {stats.slice(0, 3).map((stat, index) => {
                // "42 / 46" shows the part after the slash in a lighter style.
                const [value, total] = stat.value.split(/\s*\/\s*/);
                return (
                  <div className="preview-stat" key={`${stat.label}-${index}`}>
                    <span>{stat.label}</span>
                    <b>
                      {value}
                      {total ? <i> / {total}</i> : null}
                    </b>
                    <small>{stat.note}</small>
                    {index === 0 ? (
                      <svg viewBox="0 0 80 20" aria-hidden="true">
                        <path d="M0 16 L12 13 L24 15 L36 9 L48 11 L60 5 L80 2" />
                      </svg>
                    ) : (
                      <span className="preview-bar">
                        <i style={{ width: statBars[(index - 1) % statBars.length] }} />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="preview-lower-grid">
              <div className="preview-panel">
                <div className="preview-panel-heading">
                  <b>{preview.activityTitle}</b>
                  <span>{preview.activityLinkLabel}</span>
                </div>
                {activities.slice(0, 3).map((activity, index) => (
                  <div className="preview-activity" key={`${activity.name}-${index}`}>
                    <i className={activityColors[index % activityColors.length]} />
                    <span>
                      <b>{activity.name}</b> {activity.action}
                    </span>
                    <small>{activity.time}</small>
                  </div>
                ))}
              </div>
              <div className="preview-ai">
                <span className="ai-orbit">
                  <Sparkles size={15} />
                </span>
                <small>{preview.aiLabel}</small>
                <b>{preview.aiMessage}</b>
                <span>{preview.aiQuestion}</span>
                <span className="preview-ai-action">
                  {preview.aiActionLabel} <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preview.chipTop ? (
        <div className="float-chip float-chip-top" aria-hidden="true">
          <span className="float-chip-icon">
            <Check size={13} />
          </span>
          {preview.chipTop}
        </div>
      ) : null}
      {preview.chipBottom ? (
        <div className="float-chip float-chip-bottom" aria-hidden="true">
          <span className="float-chip-icon float-chip-icon-ember">
            <Sparkles size={13} />
          </span>
          {preview.chipBottom}
        </div>
      ) : null}
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

export function HomePage({ content, settings }: Props) {
  const t = (text: string) => fillTokens(text, settings);
  const visible = (section: HomeSectionKey) =>
    !content.hiddenSections?.includes(section);
  const annualMonthly = Math.round(settings.pricing.annualAmount / 12);
  const tickerSource = content.tickerItems.length
    ? content.tickerItems
    : [
        ...content.moduleCards.map((item) => item.title),
        "Bunzo AI",
        ...content.industryCards.map((item) => item.title),
      ].filter(Boolean);
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
      note: t(content.monthlyPriceNote),
      inclusions: content.monthlyInclusions,
    },
    {
      key: "annual",
      featured: true,
      label: content.annualPlanLabel,
      title: content.annualPlanTitle,
      description: content.annualPlanDescription,
      price: annualMonthly,
      note: t(content.annualPriceNote),
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
                <ProductPreview preview={content.heroPreview} />
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
                        <small>{content.pricePeriod}</small>
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
                      <ActionLink
                        className={`button ${plan.featured ? "button-accent" : "button-outline"}`}
                        href={content.pricingButtonLink}
                      >
                        {content.pricingButtonLabel} <ArrowRight size={16} />
                      </ActionLink>
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
              {content.moduleCards.map((module, index) => {
                const Icon = moduleIcons[index % moduleIcons.length];
                return (
                  <Reveal className="module-cell" delay={index * 0.07} key={`${module.title}-${index}`}>
                    <ActionLink className="module-item spotlight" href={module.link || "/modules/"}>
                      <span className="module-icon">
                        <Icon size={20} />
                      </span>
                      <span className="module-title">{module.title}</span>
                      {module.description ? (
                        <span className="module-description">{module.description}</span>
                      ) : null}
                      <ArrowUpRight className="module-arrow" size={17} />
                    </ActionLink>
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
        {visible("testimonials") && content.testimonials.length ? (
          <section className="testimonials-section page-shell">
            <Heading eyebrow={content.testimonialsEyebrow} title={content.testimonialsTitle} />
            <div className="testimonials-grid">
              {content.testimonials.map((item, index) => (
                <Reveal delay={(index % 3) * 0.08} key={`${item.person}-${index}`}>
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
                {content.industryCards.map((industry, index) => {
                  const Icon = industryIcons[index % industryIcons.length];
                  return (
                    <Reveal delay={(index % 4) * 0.06} key={`${industry.title}-${index}`}>
                      <ActionLink className="industry-card spotlight" href={industry.link || "/industries/"}>
                        <span className="industry-icon">
                          <Icon size={18} />
                        </span>
                        <b>{industry.title}</b>
                        {industry.description ? <span>{industry.description}</span> : null}
                        <ArrowUpRight className="industry-card-arrow" size={16} />
                      </ActionLink>
                    </Reveal>
                  );
                })}
              </div>
              {content.industriesNote ? <p className="section-note">{content.industriesNote}</p> : null}
            </div>
          </section>
        ) : null}
        {visible("caseStudies") && content.caseStudyCards.length ? (
          <section className="case-studies-section page-shell">
            <Heading eyebrow={content.caseStudiesEyebrow} title={content.caseStudiesTitle}>
              <p>{content.caseStudiesDescription}</p>
            </Heading>
            <div className="case-studies-grid">
              {content.caseStudyCards.map((study, index) => (
                <Reveal delay={index * 0.08} key={`${study.company}-${index}`}>
                  <article className="case-study-item spotlight">
                    <span className="case-study-company">{study.company}</span>
                    <b>{study.metric}</b>
                    {study.summary ? <p>{study.summary}</p> : null}
                  </article>
                </Reveal>
              ))}
            </div>
            {content.caseStudiesLinkLabel ? (
              <Reveal className="case-more">
                <ActionLink className="case-more-link" href={content.caseStudiesLink}>
                  {content.caseStudiesLinkLabel} <ArrowUpRight size={16} />
                </ActionLink>
              </Reveal>
            ) : null}
          </section>
        ) : null}
        {visible("comparison") && content.comparisonRows.length ? (
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
                      {content.comparisonRows.map((row, index) => (
                        <tr key={`${row.feature}-${index}`}>
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
              <DemoForm
                labels={{
                  name: content.demoFormNameLabel,
                  email: content.demoFormEmailLabel,
                  phone: content.demoFormPhoneLabel,
                  button: content.demoFormButtonLabel,
                  privacy: content.demoFormPrivacyNote,
                }}
              />
            </Reveal>
          </section>
        ) : null}
        {visible("faq") && content.faqs.length ? (
          <section className="faq-section section-band" id="faq">
            <div className="page-shell faq-layout">
              <Heading eyebrow={content.faqEyebrow} title={content.faqTitle}>
                <p>{content.faqDescription}</p>
              </Heading>
              <div className="faq-list">
                {content.faqs.map((item, index) => (
                  <details className="faq-item" key={`${item.question}-${index}`}>
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
