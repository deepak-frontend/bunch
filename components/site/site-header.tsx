import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  FileText,
  Info,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/content/site/shared";
import { industries } from "@/content/site/industries";
import { modules } from "@/content/site/modules";
import { BrandLogo } from "./brand-logo";
import { MobileNav, type MobileNavItem } from "./mobile-nav";

const resources = [
  { title: "About Bunch", description: "Our mission and values", href: "/about/", icon: Info },
  { title: "Blogs", description: "Guides and comparisons", href: "/blogs/", icon: BookOpen },
  { title: "Case Studies", description: "Real teams, real results", href: "/case-studies/", icon: Trophy },
  { title: "Book a discovery call", description: "Talk to a specialist", href: "/book-a-discovery-call/", icon: FileText },
];

// Same order as the desktop navigation.
const mobileItems: MobileNavItem[] = [
  { label: "Bunzo AI", href: "/bunzo/" },
  {
    label: "Modules",
    links: modules.map((item) => ({ label: item.name, href: `/modules/${item.slug}/` })),
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Compare Hub", href: "/compare-hub/" },
  { label: "Enterprise", href: "/enterprise/" },
  {
    label: "Industries",
    links: industries.map((item) => ({ label: item.name, href: `/industries/${item.slug}/` })),
  },
  {
    label: "Resources",
    links: resources.map((item) => ({ label: item.title, href: item.href })),
  },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link href="/" className="site-logo" aria-label="Bunch home">
          <BrandLogo />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/bunzo/" className="nav-bunzo">
            <Image src="/brand/bunzo/bunzo-head.webp" alt="" width={24} height={24} />
            Bunzo
          </Link>
          <div className="nav-group">
            <Link href="/modules/lead-management/" className="nav-trigger">
              Modules <ChevronDown size={14} />
            </Link>
            <div className="nav-menu">
              {modules.map((item) => (
                <Link href={`/modules/${item.slug}/`} key={item.slug}>
                  <b>{item.name}</b>
                  <span>{item.summary}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/pricing/">Pricing</Link>
          <Link href="/compare-hub/">Compare Hub</Link>
          <Link href="/enterprise/">Enterprise</Link>
          <div className="nav-group">
            <Link href="/industries/education-coaching/" className="nav-trigger">
              Industries <ChevronDown size={14} />
            </Link>
            <div className="nav-menu nav-menu-compact">
              {industries.map((item) => (
                <Link href={`/industries/${item.slug}/`} key={item.slug}>
                  <b>{item.name}</b>
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-group">
            <Link href="/blogs/" className="nav-trigger">
              Resources <ChevronDown size={14} />
            </Link>
            <div className="nav-menu nav-menu-right">
              {resources.map((item) => (
                <Link href={item.href} key={item.href} className="nav-menu-icon">
                  <item.icon size={18} />
                  <span>
                    <b>{item.title}</b>
                    <span>{item.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="header-actions">
          <Link className="header-login" href={contact.loginUrl}>
            Log in <ArrowUpRight size={14} />
          </Link>
          <Link className="button button-primary header-cta" href="/start-free-trial/">
            Start free trial <ArrowRight size={15} />
          </Link>
        </div>
        <MobileNav items={mobileItems} loginUrl={contact.loginUrl} />
      </div>
    </header>
  );
}
