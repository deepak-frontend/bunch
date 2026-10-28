import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero, StepsTimeline } from "@/components/site/blocks";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { contact } from "@/content/site/shared";

const supportEmail = "support@mybunch.ai";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Tell us a bit about your systems and goals. The Bunch team will follow up with the next steps.",
  alternates: { canonical: "/contact-us/" },
};

const nextSteps = [
  {
    title: "Initial review",
    description: "We review your systems and the workflows you mentioned.",
  },
  {
    title: "Discovery conversation",
    description: "A short conversation to understand your systems and goals.",
  },
  {
    title: "Direction",
    description:
      "If there's a fit, we outline a possible automation approach and next steps.",
  },
];

export default function ContactUsRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact us"
          title="Book a discovery"
          accent="call"
          description="Tell us a bit about your systems and goals. We'll follow up with the next steps."
          centered
        />
        <section className="contact-section page-shell">
          <Reveal className="contact-aside">
            <h2>
              Still have questions?
              <em>Let&apos;s talk.</em>
            </h2>
            <p>
              We&apos;re here to answer your questions, understand your needs, and
              help you choose the right next step.
            </p>
            <a className="contact-channel" href={`mailto:${supportEmail}`}>
              <span>
                <Mail size={18} />
              </span>
              <span>
                <small>For more questions, please email</small>
                <b>{supportEmail}</b>
              </span>
            </a>
            <a className="contact-channel" href={`tel:${contact.phone}`}>
              <span>
                <Phone size={18} />
              </span>
              <span>
                <small>Or call us at</small>
                <b>{contact.phone}</b>
              </span>
            </a>
          </Reveal>
          <Reveal className="contact-card" delay={0.1}>
            <header>
              <span className="brand-mark">b</span>
              <b>Schedule a discovery call</b>
            </header>
            <div className="contact-card-body">
              <p>
                Tell us about your goals, and we&apos;ll tailor our expertise to fit
                your needs. Fill out the form below and we&apos;ll get back to you
                soon.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </section>
        <StepsTimeline
          eyebrow="After you reach out"
          title="What happens next"
          items={nextSteps}
        />
      </main>
      <SiteFooter />
    </>
  );
}
