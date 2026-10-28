import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { privacyPolicy } from "@/content/site/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bunch collects, uses, discloses, and safeguards information when you visit mybunch.ai or use the Bunch service.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyRoute() {
  return (
    <>
      <SiteHeader />
      <LegalPage document={privacyPolicy} />
      <SiteFooter />
    </>
  );
}
