import Image from "next/image";
import Link from "next/link";

interface RelatedPost {
  slug: string;
  title: string;
}

interface BlogSidebarProps {
  relatedPosts: RelatedPost[];
}

export function BlogSidebar({ relatedPosts }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* CTA Członkostwo */}
      <div className="bg-gradient-to-br from-[#0a1128] to-[#1a2744] rounded-2xl p-8 text-white">
        <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">
          Dołącz do społeczności
        </h3>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          Ponad 1600 agentów nieruchomości. Oferty off-market, szkolenia, networking.
        </p>
        <Link
          href="/czlonkostwo"
          className="mt-5 inline-flex items-center w-full justify-center px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all"
        >
          Sprawdź członkostwo
        </Link>
      </div>

      {/* Banner wydarzenia */}
      <Link href="/wydarzenia" className="block rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all">
        <Image
          src="/images/wydarzenia/nowa-era-agenta.png"
          alt="Nowa Era Agenta — wydarzenie"
          width={400}
          height={210}
          className="w-full h-auto"
        />
      </Link>

      {/* Powiązane artykuły */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-2xl border border-border/50 p-6">
          <h3 className="font-semibold text-foreground mb-4">Przeczytaj również</h3>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block text-sm text-text-secondary hover:text-primary transition-colors leading-relaxed"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regiony */}
      <div className="bg-white rounded-2xl border border-border/50 p-6">
        <h3 className="font-semibold text-foreground mb-4">Nasze regiony</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { slug: "pomorskie", name: "Pomorskie" },
            { slug: "slask", name: "Śląsk" },
            { slug: "wroclaw", name: "Wrocław" },
            { slug: "malopolskie", name: "Małopolska" },
            { slug: "mazowieckie", name: "Warszawa" },
            { slug: "lubuskie", name: "Zielona Góra" },
            { slug: "kujawsko-pomorskie", name: "Bydgoszcz" },
            { slug: "warmia-i-mazury", name: "Olsztyn" },
          ].map((r) => (
            <Link
              key={r.slug}
              href={`/regiony/${r.slug}`}
              className="text-xs text-text-secondary hover:text-primary transition-colors py-1"
            >
              {r.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Kontakt */}
      <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
        <h3 className="font-semibold text-foreground mb-2">Masz pytania?</h3>
        <p className="text-sm text-text-secondary mb-4">Skontaktuj się z nami</p>
        <Link
          href="/#kontakt"
          className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
        >
          Napisz do nas
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </aside>
  );
}
