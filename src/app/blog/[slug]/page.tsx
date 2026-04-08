import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, getRelatedPosts } from "@/data/posts";
import { BlogSidebar } from "@/components/BlogSidebar";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPost(slug);
    if (!post) return { title: "Blog — Nieruchomości Spod Lady" };
    return {
      title: `${post.title} — Nieruchomości Spod Lady`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] to-[#1a2744]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/blog"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Blog
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-primary text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-montserrat)] tracking-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-white/50 text-sm">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{new Date(post.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            {/* Article */}
            <article>
              {/* Featured image */}
              <div className="rounded-2xl overflow-hidden mb-10 -mt-20 relative z-20 shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={420}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-text-secondary leading-relaxed [&_h2]:text-foreground [&_h2]:font-[family-name:var(--font-montserrat)] [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-5 [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-4 [&_strong]:text-foreground [&_p]:mb-5 [&_ul]:space-y-2 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-text-secondary/80 [&_a]:text-primary [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags / Share */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-text-secondary">Kategoria:</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <Link
                    href="/blog"
                    className="text-sm text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Powrót do bloga
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <BlogSidebar
                relatedPosts={related.map((p) => ({
                  slug: p.slug,
                  title: p.title,
                }))}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
