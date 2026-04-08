import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { regions } from "@/data/regions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regiony — Nieruchomości Spod Lady",
  description: "Działamy w 8 regionach Polski. Znajdź swoją lokalną społeczność agentów nieruchomości i dołącz do nas.",
};

export default function Regiony() {
  return (
    <>
      <PageHero
        title="Nasze regiony"
        subtitle="Działamy w 8 regionach Polski. Znajdź swoją lokalną społeczność i dołącz do ponad 1600 agentów."
        badge="Zasięg ogólnopolski"
        image="/images/mapa-bg.png"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/regiony/${region.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-hover"
              >
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl font-[family-name:var(--font-montserrat)]">
                    {region.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{region.city}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Zobacz
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
            Nie widzisz swojego regionu?
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Skontaktuj się z nami — stale rozwijamy sieć i otwieramy nowe regiony.
          </p>
          <Link
            href="/#kontakt"
            className="mt-8 inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:scale-105 text-lg"
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </>
  );
}
