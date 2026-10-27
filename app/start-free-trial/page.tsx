import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { TrialForm } from "@/components/sections/trial-form";

export const metadata: Metadata = {
  title: "Start your free trial",
  description:
    "Create your Bunch workspace and bring your team into one place.",
  alternates: { canonical: "/start-free-trial/" },
};

export default function StartFreeTrialPage() {
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
      <div className="trial-layout page-shell">
        <section className="trial-copy">
          <p className="eyebrow">GET YOUR TEAM STARTED</p>
          <h1>Your whole business, in one place.</h1>
          <p>
            Create a workspace for your team. Your address is yours to choose
            and can be edited before you start.
          </p>
          <ul>
            <li>
              <Check size={16} />
              All included modules
            </li>
            <li>
              <Check size={16} />
              Unlimited team members
            </li>
            <li>
              <Check size={16} />
              No card required
            </li>
          </ul>
        </section>
        <section className="trial-panel">
          <div className="trial-panel-heading">
            <h2>Create your workspace</h2>
            <p>Start setting up your Bunch account.</p>
          </div>
          <TrialForm />
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
