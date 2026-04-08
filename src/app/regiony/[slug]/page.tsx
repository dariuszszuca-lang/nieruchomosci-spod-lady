import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { regions, getRegion } from "@/data/regions";
import type { Metadata } from "next";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const region = getRegion(slug);
    if (!region) return { title: "Region — Nieruchomości Spod Lady" };
    return {
      title: `Nieruchomości Spod Lady ${region.name} — Dołącz do społeczności`,
      description: `Społeczność agentów nieruchomości w regionie ${region.name}. Oferty off-market, współpraca, szkolenia. Dołącz do nas!`,
    };
  });
}

const whyJoin = [
  {
    title: "Wsparcie społeczności",
    desc: "Ponad 1600 aktywnych agentów gotowych do dzielenia się ofertami, doświadczeniem i wiedzą.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Networkingowe okazje",
    desc: "Cykliczne webinary, szkolenia i mini-konferencje. Nawiąż cenne kontakty biznesowe.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Budowa wizerunku",
    desc: "Posługuj się naszym logiem i nazwą — synonimem kompetencji i etyki w branży.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Oferty off-market",
    desc: "Dni otwarte, oferty dyskretne, nieruchomości niedostępne publicznie.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Specjalne warunki",
    desc: "Rabaty i zniżki na wydarzenia, szkolenia, konferencje branżowe oraz narzędzia.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: "Dostęp do informacji",
    desc: "Obniżki cen, zmiany MPZP, podziały gruntów, zmiany koniunktury w branży.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const requirements = [
  "Pracuje w branży co najmniej 3 miesiące",
  "Posiada aktualną polisę OC w tym zakresie",
  "Przeważający rodzaj jego działalności (PKD) to pośrednictwo w obrocie nieruchomościami",
  "Lub jest osobą zatrudnioną w biurze nieruchomości, które posiada aktualną polisę OC",
];

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  return (
    <>
      <PageHero
        title={`Nieruchomości Spod\u00A0Lady ${region.name}`}
        subtitle="Najlepsze oferty, to te których nie ma. Dołącz do społeczności agentów, którzy wierzą, że współpraca prowadzi do sukcesu."
        badge={region.city}
        image={region.heroImage}
      />

      {/* Why join */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Najlepsi współpracują
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Dlaczego warto być agentem Spod&nbsp;Lady?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyJoin.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-apartment.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0f172a]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Wymagania
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
                Kto może zostać członkiem?
              </h2>
              <p className="mt-6 text-white/60 text-lg">
                Członkiem może zostać czynny pośrednik nieruchomości, który spełnia poniższe warunki:
              </p>
              <div className="mt-10 space-y-5">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed pt-2.5">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to join */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)]">
                Jak dołączyć?
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <h4 className="text-lg font-semibold">Etap 1 — Zgłoszenie</h4>
                </div>
                <p className="text-white/60 ml-14">
                  Wypełnij formularz zgłoszeniowy na Facebooku. Nasz koordynator regionalny zweryfikuje Twoje dane.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <h4 className="text-lg font-semibold">Etap 2 — Wykup członkostwo</h4>
                </div>
                <p className="text-white/60 ml-14">
                  Po pozytywnej weryfikacji wykup roczne członkostwo w swoim regionie i zyskaj pełen dostęp do społeczności.
                </p>
              </div>
              <a
                href={region.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:scale-105 text-lg"
              >
                Wypełnij zgłoszenie
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators */}
      {region.coordinators.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Twoi koordynatorzy
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
                Kto troszczy się o społeczność w&nbsp;regionie {region.name}?
              </h2>
            </div>
            <div className={`grid gap-8 max-w-4xl mx-auto ${region.coordinators.length === 1 ? "max-w-sm" : "sm:grid-cols-2"}`}>
              {region.coordinators.map((coord) => (
                <div key={coord.name} className="bg-white rounded-2xl overflow-hidden border border-border/50 shadow-lg text-center">
                  <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                    <Image src={coord.image} alt={coord.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground text-xl">{coord.name}</h3>
                    <p className="text-primary text-sm font-medium mt-1">{coord.role}</p>
                    <div className="mt-4 space-y-2 text-sm text-text-secondary">
                      <p>
                        <a href={`tel:+48${coord.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                          {coord.phone}
                        </a>
                      </p>
                      <p>
                        <a href={`mailto:${coord.email}`} className="hover:text-primary transition-colors">
                          {coord.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Kontakt
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
                Masz pytania o region {region.name}?
              </h2>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                Skontaktuj się z nami, aby dowiedzieć się więcej o członkostwie
                w regionie {region.name}. Nasz koordynator odpowie na wszystkie pytania.
              </p>
              <Link
                href={`/czlonkostwo`}
                className="mt-8 inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:scale-105 text-lg"
              >
                Sprawdź członkostwo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
