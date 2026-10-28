import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { termsOfService } from "@/content/site/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that apply when you use the Bunch website, software, and related services.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsOfServiceRoute() {
  return (
    <>
      <SiteHeader />
      <LegalPage document={termsOfService} />
      <SiteFooter />
    </>
  );
}
