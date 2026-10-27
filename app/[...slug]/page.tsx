import type { Metadata } from "next";
import type { BlogPostContent } from "@/sanity/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import {
  getStaticPreviewPage,
  staticRouteParams,
  useStaticPreview,
} from "@/content/static-preview";
import { canonicalPath, catchAllRoutes } from "@/lib/site-routes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mybunch.ai";
type RouteProps = { params: Promise<{ slug: string[] }> };

function titleFromRoute(route: string) {
  const segment = route.split("/").filter(Boolean).at(-1) ?? "Bunch";
  return segment
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  if (useStaticPreview) return staticRouteParams();
  const { getSitemapContent } = await import("@/sanity/queries");
  const content = await getSitemapContent();
  const staticParams = catchAllRoutes
    .filter((route) => route !== "/")
    .map((route) => ({
      slug: route.split("/").filter(Boolean),
    }));
  const blogParams = content.blogRoutes.map((slug) => ({
    slug: ["blogs", slug],
  }));
  const tagParams = content.tags.map((tag) => ({
    slug: ["blogs", "tag", tag],
  }));
  return [...staticParams, ...blogParams, ...tagParams];
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const route = canonicalPath(slug);
  const title = titleFromRoute(route);
  const description = "Explore how Bunch helps your business work in sync.";

  if (useStaticPreview) {
    const preview = getPreviewRoute(route, slug);
    return {
      title: preview?.title ?? title,
      description: preview?.description ?? description,
      alternates: { canonical: route },
    };
  }

  if (slug[0] === "blogs" && slug[1] === "tag" && slug[2]) {
    return {
      title: `${titleFromRoute(slug[2])} articles`,
      description: `Articles about ${titleFromRoute(slug[2])} from Bunch.`,
      alternates: { canonical: route },
    };
  }

  if (slug[0] === "blogs" && slug[1]) {
    const { getBlogPost } = await import("@/sanity/queries");
    const post = await getBlogPost(slug[1]);
    if (!post) return { title, description, alternates: { canonical: route } };
    const postTitle = post.seoTitle ?? post.title;
    const postDescription = post.seoDescription ?? post.excerpt ?? description;
    return {
      title: postTitle,
      description: postDescription,
      alternates: { canonical: route },
      openGraph: {
        type: "article",
        title: postTitle,
        description: postDescription,
        url: route,
        images: post.socialImage ? [post.socialImage] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: postTitle,
        description: postDescription,
        images: post.socialImage ? [post.socialImage] : undefined,
      },
    };
  }

  const { getMarketingPage } = await import("@/sanity/queries");
  const page = await getMarketingPage(route);
  const pageTitle = page?.seoTitle ?? page?.title ?? title;
  const pageDescription =
    page?.seoDescription ?? page?.description ?? description;
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: route },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: route,
      images: page?.socialImage ? [page.socialImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: page?.socialImage ? [page.socialImage] : undefined,
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function Breadcrumbs({ segments }: { segments: string[] }) {
  const items = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => ({
      label: titleFromRoute(segment),
      href: canonicalPath(segments.slice(0, index + 1)),
    })),
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteUrl).toString(),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={schema} />
    </>
  );
}

export default async function MarketingRoute({ params }: RouteProps) {
  const { slug } = await params;
  const route = canonicalPath(slug);

  if (useStaticPreview) {
    const preview = getPreviewRoute(route, slug);
    if (!preview) notFound();
    return (
      <main className="editorial-page page-shell">
        <Breadcrumbs segments={slug} />
        <p className="eyebrow">BUNCH FOR BUSINESS</p>
        <h1>{preview.title}</h1>
        <p className="editorial-intro">{preview.description}</p>
        {preview.reviewNote ? (
          <p className="content-review-banner">{preview.reviewNote}</p>
        ) : null}
        {preview.body ? (
          <div className="portable-content"><p>{preview.body}</p></div>
        ) : null}
        <Link className="button button-primary" href="/start-free-trial/">
          Start free trial <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  if (slug[0] === "blogs" && slug[1] === "tag" && slug[2]) {
    const { getBlogPosts } = await import("@/sanity/queries");
    const posts = await getBlogPosts(slug[2]);
    return (
      <BlogIndex
        title={`${titleFromRoute(slug[2])} articles`}
        posts={posts ?? []}
        segments={slug}
      />
    );
  }

  if (slug[0] === "blogs" && slug[1]) {
    const { getBlogPost } = await import("@/sanity/queries");
    const post = await getBlogPost(slug[1]);
    if (!post) notFound();
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      image: post.socialImage,
      mainEntityOfPage: new URL(route, siteUrl).toString(),
      publisher: { "@type": "Organization", name: "Bunch", url: siteUrl },
    };
    return (
      <>
        <article className="editorial-page page-shell">
          <Breadcrumbs segments={slug} />
          <p className="eyebrow">BUNCH JOURNAL</p>
          <h1>{post.title}</h1>
          {post.publishedAt ? (
            <p className="article-date">
              <CalendarDays size={15} />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                dateStyle: "long",
              })}
            </p>
          ) : null}
          {post.excerpt ? (
            <p className="editorial-intro">{post.excerpt}</p>
          ) : null}
          <div className="portable-content">
            {post.body ? <PortableText value={post.body} /> : null}
          </div>
          {post.tags?.length ? (
            <div className="article-tags">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blogs/tag/${encodeURIComponent(tag)}/`}>
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}
        </article>
        <JsonLd data={articleSchema} />
      </>
    );
  }

  if (route === "/blogs/") {
    const { getBlogPosts } = await import("@/sanity/queries");
    const posts = await getBlogPosts();
    return (
      <BlogIndex
        title="Ideas for better business"
        posts={posts ?? []}
        segments={slug}
      />
    );
  }

  const { getMarketingPage, getSiteSettings } = await import(
    "@/sanity/queries"
  );
  const [page, settings] = await Promise.all([
    getMarketingPage(route),
    getSiteSettings(),
  ]);
  if (!page || !settings) notFound();
  const faqSchema = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;
  const applicationSchema = ["/", "/pricing/"].includes(route)
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Bunch",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: settings.pricing.annualAmount,
          description: "Annual plan, excluding GST",
        },
      }
    : null;

  return (
    <>
      <main className="editorial-page page-shell">
        <Breadcrumbs segments={slug} />
        <p className="eyebrow">BUNCH FOR BUSINESS</p>
        <h1>{page.title}</h1>
        {page.description ? (
          <p className="editorial-intro">{page.description}</p>
        ) : null}
        {page.ownerReviewRequired ? (
          <p className="content-review-banner">
            This page’s description needs owner review.
          </p>
        ) : null}
        <div className="portable-content">
          {page.body ? <PortableText value={page.body} /> : null}
        </div>
        {page.faqs?.length ? (
          <section className="editorial-faq">
            <h2>Frequently asked questions</h2>
            {page.faqs.map((faq) => (
              <details className="faq-item" key={faq._id}>
                <summary>
                  {faq.question}
                  <ArrowRight size={16} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
        ) : null}
        <Link className="button button-primary" href="/start-free-trial/">
          Start free trial <ArrowRight size={16} />
        </Link>
      </main>
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {applicationSchema ? <JsonLd data={applicationSchema} /> : null}
    </>
  );
}

function getPreviewRoute(route: string, slug: string[]) {
  if (slug[0] === "blogs" && slug[1] === "tag" && slug[2]) {
    return {
      title: `${titleFromRoute(slug[2])} articles`,
      description: "No articles are published yet. Check back soon.",
    };
  }
  if (slug[0] === "blogs" && slug[1]) {
    return {
      title: "Article in Bunch Journal",
      description: "No articles are published yet. Check back soon.",
    };
  }
  return getStaticPreviewPage(route);
}

function BlogIndex({
  title,
  posts,
  segments,
}: {
  title: string;
  posts: BlogPostContent[];
  segments: string[];
}) {
  return (
    <main className="editorial-page page-shell">
      <Breadcrumbs segments={segments} />
      <p className="eyebrow">BUNCH JOURNAL</p>
      <h1>{title}</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post._id}>
            <p className="article-date">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    dateStyle: "medium",
                  })
                : "Bunch Journal"}
            </p>
            <h2>
              <Link href={`/blogs/${post.slug}/`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link className="blog-read-link" href={`/blogs/${post.slug}/`}>
              Read article <ArrowUpRight size={15} />
            </Link>
            {post.tags?.length ? (
              <div className="article-tags">
                {post.tags.map((tag) => (
                  <Link
                    href={`/blogs/tag/${encodeURIComponent(tag)}/`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
