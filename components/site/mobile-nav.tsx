"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[] };
export type MobileNavItem = NavLink | NavGroup;

// Menu sections collapse into accordions; the whole menu and any open
// section close again once the route changes.
export function MobileNav({
  items,
  loginUrl,
}: {
  items: MobileNavItem[];
  loginUrl: string;
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = menu.current;
    if (!root) return;
    root.open = false;
    root.querySelectorAll("details").forEach((group) => {
      group.open = false;
    });
  }, [pathname]);

  return (
    <details className="mobile-nav" ref={menu}>
      <summary aria-label="Open navigation">
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {items.map((item) =>
          "links" in item ? (
            <details className="mobile-sub" name="mobile-sub" key={item.label}>
              <summary>
                {item.label}
                <ChevronDown size={16} />
              </summary>
              <div>
                {item.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ),
        )}
        <Link href={loginUrl}>Log in</Link>
        <Link href="/start-free-trial/" className="mobile-nav-cta">
          Start free trial
        </Link>
      </nav>
    </details>
  );
}
