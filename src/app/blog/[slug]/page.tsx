import { notFound } from "next/navigation";
import FaqSection from "@/components/page/FaqSection";
import JsonLd from "@/components/page/JsonLd";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import RelatedLinks from "@/components/page/RelatedLinks";
import SiteChrome from "@/components/page/SiteChrome";
import Sources from "@/components/page/Sources";
import { postBySlug, posts } from "@/lib/blog";
import { BUSINESS_ID, SITE_NAME, absoluteUrl, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const published = new Date(`${post.datePublished}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SiteChrome>
      <PageHero
        eyebrow={`Guide · ${published}`}
        title={post.title}
        intro={[post.excerpt]}
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[
          { name: "Guides", path: "/blog" },
          { name: post.title, path },
        ]}
        cta={false}
      />
      <article data-nav-theme="light" className="bg-soft-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 leading-relaxed text-charcoal/90 md:px-8">
          {post.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <h2 key={i} className="mt-12 font-display text-3xl text-espresso">
                  {b.text}
                </h2>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="mt-4 list-disc space-y-2 pl-5">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="mt-4">
                {b.text}
              </p>
            );
          })}
          <div className="mt-10 rounded-2xl border border-gold/30 bg-ivory p-6">
            <p className="font-display text-2xl text-espresso">Want real Lancaster quotes?</p>
            <p className="mt-2 text-warm-gray">Pricing varies by pro and project. Describe yours once and compare quotes from local pros for free.</p>
            <a href="#contact" className="mt-4 inline-flex rounded-full bg-espresso px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-ivory hover:bg-charcoal">
              Request a free quote
            </a>
          </div>
          <Sources sources={post.sources} />
          <p className="mt-6 text-xs text-warm-gray">
            Published by {SITE_NAME}, a free referral service connecting Lancaster County homeowners and hosts with independent décor professionals.
          </p>
        </div>
      </article>
      <FaqSection faqs={post.faqs} />
      <RelatedLinks paths={post.related} />
      <LeadCta source={`blog-${post.slug}`} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.image),
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          mainEntityOfPage: absoluteUrl(path),
          author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          publisher: { "@id": BUSINESS_ID },
        }}
      />
    </SiteChrome>
  );
}
