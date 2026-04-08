import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Nieruchomości Spod Lady",
  description: "Artykuły o rynku nieruchomości, porady dla agentów, case studies i wywiady. Blog Nieruchomości Spod Lady.",
};

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Artykuły, porady i inspiracje ze świata nieruchomości."
        badge="Wiedza"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {new Date(post.date).toLocaleDateString("pl-PL", { year: "numeric", month: "short" })}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Czytaj dalej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
