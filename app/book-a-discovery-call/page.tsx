import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import { DemoForm } from "@/components/sections/demo-form";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Talk with the Bunch team about bringing your business into one workspace.",
  alternates: { canonical: "/book-a-discovery-call/" },
};

export default function DiscoveryCallPage() {
  return (
    <main className="trial-page">
      <header className="trial-header page-shell">
        <Link className="site-logo" href="/">
          <span className="brand-mark">b</span>
          <span>bunch</span>
        </Link>
        <Link className="trial-back" href="/">
          <ArrowLeft size={15} />
          Back to Bunch
        </Link>
      </header>
      <div className="discovery-layout page-shell">
        <section className="trial-copy">
          <p className="eyebrow">LET&apos;S TALK</p>
          <h1>See Bunch in your workflow.</h1>
          <p>
            Share a few details and the team will follow up to arrange a
              discovery call.
          </p>
          <div className="demo-contact-note">
            <span className="demo-note-icon">
              <Bot size={17} />
            </span>
            <span>
              We will use your details only to respond to this request.
            </span>
          </div>
        </section>
        <section className="trial-panel">
          <div className="trial-panel-heading">
            <h2>Book a discovery call</h2>
            <p>Tell us how to reach you.</p>
          </div>
          <DemoForm />
        </section>
      </div>
      <footer className="trial-footer page-shell">
        <span>© {new Date().getFullYear()} Bunch</span>
        <span>
          <Link href="/terms-of-service/">Terms</Link>
          <Link href="/privacy-policy/">Privacy</Link>
        </span>
      </footer>
    </main>
  );
}
