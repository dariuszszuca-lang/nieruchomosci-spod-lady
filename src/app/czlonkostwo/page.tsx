import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { regions } from "@/data/regions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Członkostwo — Nieruchomości Spod Lady",
  description: "Dołącz do społeczności 1600+ agentów nieruchomości. Wybierz swój region i wykup członkostwo.",
};

export default function Czlonkostwo() {
  return (
    <>
      <PageHero
        title="Wykup członkostwo"
        subtitle="Wybierz swój region i dołącz do ogólnopolskiej społeczności agentów nieruchomości."
        badge="Dołącz do nas"
        image="/images/bg-konferencja.jpg"
      />

      {/* Regions grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Wybierz region
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              W którym regionie działasz?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Kliknij swój region, aby poznać szczegóły członkostwa i wykupić dostęp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/regiony/${region.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-bold text-lg">{region.name}</h3>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{region.city}</span>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Kupuję
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

      {/* Benefits reminder */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-apartment.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0f172a]/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
            Co zyskujesz jako członek?
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { label: "Oferty off-market", desc: "Nieruchomości niedostępne publicznie" },
              { label: "Szkolenia i webinary", desc: "Cykliczne wydarzenia edukacyjne" },
              { label: "Sieć kontaktów", desc: "1600+ agentów w całej Polsce" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-primary">{item.label}</h3>
                <p className="mt-2 text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
