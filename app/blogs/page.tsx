import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { blogPage } from "@/content/site/pages";
import { useStaticPreview } from "@/content/static-preview";

export const metadata: Metadata = {
  title: "Blogs",
  description: blogPage.description,
  alternates: { canonical: "/blogs/" },
};

type Card = { slug: string; title: string; excerpt?: string; tags?: string[] };

async function loadPosts(): Promise<Card[]> {
  if (useStaticPreview) return blogPage.posts;
  const { getBlogPosts } = await import("@/sanity/queries");
  const posts = await getBlogPosts();
  // Fall back to the live site's article list until posts are published in Sanity.
  return posts?.length ? posts : blogPage.posts;
}

export default async function BlogsRoute() {
  const posts = await loadPosts();
  const [featured, ...rest] = posts;
  const tags = [...new Set(posts.flatMap((post) => post.tags ?? []))];

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Bunch Journal"
          title="The"
          accent="Blog"
          description={blogPage.description}
          centered
        />
        <section className="page-shell blog-index">
          {tags.length ? (
            <div className="article-tags blog-filter">
              {tags.map((tag) => (
                <Link href={`/blogs/tag/${encodeURIComponent(tag)}/`} key={tag}>
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}
          {featured ? (
            <Reveal>
              <Link className="blog-featured" href={`/blogs/${featured.slug}/`}>
                <span className="blog-featured-art" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="blog-featured-copy">
                  <span className="case-category">{featured.tags?.join(" · ") ?? "Featured"}</span>
                  <b>{featured.title}</b>
                  <span>{featured.excerpt}</span>
                  <span className="blog-read-link">
                    Read article <ArrowUpRight size={15} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ) : null}
          <div className="blog-grid">
            {rest.map((post, index) => (
              <Reveal delay={(index % 3) * 0.07} key={post.slug}>
                <Link className="blog-card spotlight" href={`/blogs/${post.slug}/`}>
                  <span className="case-category">{post.tags?.join(" · ")}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-read-link">
                    Read more <ArrowUpRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <CtaPanel
          eyebrow="Put it into practice"
          title="Run your whole business from one workspace."
          description="Every module, every user, one flat ₹4,900/month."
          label="Start free trial"
          href="/start-free-trial/"
        />
      </main>
      <SiteFooter />
    </>
  );
}
