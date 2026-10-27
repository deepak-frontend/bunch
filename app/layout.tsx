import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Geist, Instrument_Serif } from "next/font/google";
import { Spotlight } from "@/components/motion/spotlight";
import "./globals.css";
import "./pages.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-brand-display",
  subsets: ["latin"],
});

const serifFont = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mybunch.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bunch | One platform for your whole business",
    template: "%s | Bunch",
  },
  description:
    "Bring sales, projects, HR, payroll, and operations together in one business platform with unlimited users and one flat price.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Bunch",
    title: "Bunch | One platform for your whole business",
    description:
      "Bring sales, projects, HR, payroll, and operations together in one business platform with unlimited users and one flat price.",
    url: "/",
    images: [{ url: "/brand/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunch | One platform for your whole business",
    description:
      "Bring sales, projects, HR, payroll, and operations together in one business platform with unlimited users and one flat price.",
    images: ["/brand/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bunch",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      {/* Browser extensions (Grammarly, ColorZilla…) add attributes to <body>
          before React hydrates; ignore that mismatch on this element only. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Spotlight />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
