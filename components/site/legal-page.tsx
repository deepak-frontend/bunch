import { Globe, Mail } from "lucide-react";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import type { LegalBlock, LegalDocument } from "@/content/site/legal";
import { PageHero } from "./blocks";

// Links [text](href), bare email addresses and https URLs inside legal copy.
const inlinePattern =
  /\[([^\]]+)\]\(([^)]+)\)|([\w.+-]+@[\w-]+\.[\w.]+[a-z])|(https:\/\/[^\s,)]+[^\s.,)])/gi;

function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const [whole, label, href, email, url] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (href) {
      parts.push(
        href.startsWith("/") ? (
          <Link href={href} key={index}>
            {label}
          </Link>
        ) : (
          <a href={href} key={index}>
            {label}
          </a>
        ),
      );
    } else if (email) {
      parts.push(
        <a href={`mailto:${email}`} key={index}>
          {email}
        </a>,
      );
    } else if (url) {
      parts.push(
        <a href={url} key={index}>
          {url}
        </a>,
      );
    }
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item, index) => (
          <li key={index}>
            {item.label ? <strong>{item.label} </strong> : null}
            <RichText text={item.text} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "contact") {
    return (
      <div className="legal-contact">
        <b>{block.name}</b>
        <a href={`mailto:${block.email}`}>
          <Mail size={16} />
          {block.email}
        </a>
        <a href={block.website}>
          <Globe size={16} />
          {block.website.replace(/^https:\/\//, "")}
        </a>
      </div>
    );
  }
  return (
    <p>
      {block.label ? <strong>{block.label} </strong> : null}
      <RichText text={block.text} />
    </p>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={document.title}
        accent={document.accent}
        description={document.description}
        centered
      />
      <div className="legal-layout page-shell">
        <aside className="legal-toc" aria-label="On this page">
          <p className="legal-updated">Last updated: {document.updated}</p>
          <b>On this page</b>
          <ol>
            {document.sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="legal-content">
          <Reveal className="legal-intro">
            {document.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>
                <RichText text={paragraph} />
              </p>
            ))}
          </Reveal>
          {document.sections.map((section, index) => (
            <section className="legal-section" id={section.id} key={section.id}>
              <h2>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              {section.blocks.map((block, blockIndex) => (
                <Block block={block} key={blockIndex} />
              ))}
              {section.subsections?.map((subsection) => (
                <Fragment key={subsection.heading}>
                  <h3>{subsection.heading}</h3>
                  {subsection.blocks.map((block, blockIndex) => (
                    <Block block={block} key={blockIndex} />
                  ))}
                </Fragment>
              ))}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
