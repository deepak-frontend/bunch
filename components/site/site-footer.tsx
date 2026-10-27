import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { contact, socialLinks } from "@/content/site/shared";
import { industries } from "@/content/site/industries";
import { modules } from "@/content/site/modules";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link href="/" className="site-logo">
            <BrandLogo />
          </Link>
          <p>Business, in sync.</p>
          <a className="footer-phone" href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
        </div>
        <div className="footer-links footer-links-wide">
          <div>
            <b>Modules</b>
            {modules.map((item) => (
              <Link href={`/modules/${item.slug}/`} key={item.slug}>
                {item.name}
              </Link>
            ))}
            <Link href="/bunzo/">Bunzo AI</Link>
          </div>
          <div>
            <b>Industries</b>
            {industries.map((item) => (
              <Link href={`/industries/${item.slug}/`} key={item.slug}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <b>Company</b>
            <Link href="/about/">About Bunch</Link>
            <Link href="/pricing/">Pricing</Link>
            <Link href="/compare-hub/">Compare Hub</Link>
            <Link href="/enterprise/">Enterprise</Link>
            <Link href="/case-studies/">Case Studies</Link>
            <Link href="/blogs/">Blogs</Link>
            <Link href="/book-a-discovery-call/">Book a call</Link>
          </div>
          <div>
            <b>Follow</b>
            {socialLinks.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-wordmark page-shell" aria-hidden="true">
        bunch
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Bunch. All rights reserved.</span>
        <div>
          <Link href="/terms-of-service/">Terms</Link>
          <Link href="/privacy-policy/">Privacy</Link>
          <Link href="/cookie-policy/">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
