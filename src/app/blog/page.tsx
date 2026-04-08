import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Nieruchomości Spod Lady",
  description: "Artykuły o rynku nieruchomości, porady dla agentów, case studies i wywiady. Blog Nieruchomości Spod Lady.",
};

const posts = [
  {
    slug: "kupujesz-mieszkanie-czy-meble",
    title: "Kupujesz mieszkanie czy meble?",
    excerpt: "Jak wystrój wnętrza wpływa na decyzje kupujących i dlaczego staging ma tak wielkie znaczenie.",
    image: "/images/blog/kupujesz-mieszkanie.jpg",
    category: "Artykuły",
  },
  {
    slug: "nieruchomosci-premium-jak-sprzedawac-milionowe-domy",
    title: "Nieruchomości premium: Jak sprzedawać milionowe domy w rekordowym czasie?",
    excerpt: "Sekrety Victorii Hall i sprawdzone strategie sprzedaży luksusowych nieruchomości.",
    image: "/images/blog/premium-domy.jpg",
    category: "Artykuły",
  },
  {
    slug: "czy-naprawde-mozesz-zaufac-posrednikowi",
    title: "Czy naprawdę możesz zaufać pośrednikowi?",
    excerpt: "Obalamy mity i pokazujemy, jak profesjonalny agent chroni Twoje interesy.",
    image: "/images/blog/zaufanie-posrednik.jpg",
    category: "Artykuły",
  },
  {
    slug: "jak-profesjonalne-zdjecia-moga-wplynac-na-pierwsze-wrazenie-klienta",
    title: "Jak profesjonalne zdjęcia mogą wpłynąć na pierwsze wrażenie klienta?",
    excerpt: "Wpływ fotografii na atrakcyjność oferty i szybkość sprzedaży nieruchomości.",
    image: "/images/blog/zdjecia-nieruchomosci.jpg",
    category: "Artykuły",
  },
  {
    slug: "czynniki-wplywajace-na-wartosc-nieruchomosci",
    title: "Czynniki wpływające na wartość nieruchomości",
    excerpt: "Co decyduje o cenie nieruchomości? Poznaj kluczowe czynniki, które warto znać.",
    image: "/images/blog/wartosc-nieruchomosci.jpg",
    category: "Artykuły",
  },
  {
    slug: "porady-dla-pierwszych-nabywcow-nieruchomosci",
    title: "Porady dla pierwszych nabywców nieruchomości",
    excerpt: "Kupujesz pierwsze mieszkanie? Oto co musisz wiedzieć przed podjęciem decyzji.",
    image: "/images/blog/pierwszy-nabywca.jpg",
    category: "Poradniki",
  },
  {
    slug: "jak-byc-dobrym-agentem-nieruchomosci",
    title: "Jak być dobrym agentem nieruchomości?",
    excerpt: "Cechy i umiejętności, które wyróżniają najlepszych agentów na rynku.",
    image: "/images/blog/dobry-agent.jpg",
    category: "Poradniki",
  },
  {
    slug: "jak-wyglada-praca-posrednika-od-kuchni",
    title: "Jak wygląda praca pośrednika od kuchni?",
    excerpt: "Czego nie wiesz o swojej transakcji? Kulisy pracy agenta nieruchomości.",
    image: "/images/blog/praca-posrednika.jpg",
    category: "Pośrednictwo",
  },
  {
    slug: "za-co-najczesciej-dziekuja-klienci",
    title: "Za co najczęściej dziękują klienci?",
    excerpt: "Historie sukcesów i wartość, jaką wnosi profesjonalny pośrednik w transakcję.",
    image: "/images/blog/dziekuja-klienci.jpg",
    category: "Pośrednictwo",
  },
  {
    slug: "najlepsze-oferty-to-te-ktorych-nie-ma",
    title: "Najlepsze oferty to te których nie ma",
    excerpt: "Oferty off-market — dlaczego najciekawsze nieruchomości nie trafiają na portale.",
    image: "/images/blog/oferty-spod-lady.jpg",
    category: "Pośrednictwo",
  },
  {
    slug: "jak-przenioslem-sprzedaz-mieszkan-do-podziemia",
    title: "Jak przeniosłam sprzedaż mieszkań w Trójmieście do podziemia",
    excerpt: "Historia powstania Nieruchomości Spod Lady i rewolucji w podejściu do współpracy.",
    image: "/images/blog/sprzedaz-podziemie.jpg",
    category: "Pośrednictwo",
  },
];

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Czytaj dalej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
