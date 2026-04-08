import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wydarzenia — Nieruchomości Spod Lady",
  description: "Nadchodzące wydarzenia, szkolenia, webinary i spotkania integracyjne społeczności Nieruchomości Spod Lady.",
};

export default function Wydarzenia() {
  return (
    <>
      <PageHero
        title="Wydarzenia"
        subtitle="Szkolenia, webinary, konferencje i spotkania integracyjne dla naszej społeczności."
        badge="Kalendarz"
        image="/images/bg-konferencja.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Upcoming */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-10">
              Nadchodzące wydarzenia
            </h2>
            <div className="bg-white rounded-2xl border border-border/50 p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-text-secondary text-lg">
                Nowe wydarzenia pojawią się wkrótce. Śledź nasz newsletter i social media!
              </p>
            </div>
          </div>

          {/* Past events */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-10">
              To już za nami
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Konferencja branżowa i Śniadanie Pośredników", location: "Wrocław", date: "10.10.2025" },
                { title: "Mierzymy Wysoko — impreza integracyjna", location: "Gdańsk", date: "2025" },
                { title: "Pierwsze Świąteczne Spotkanie Spod Lady", location: "Gdańsk", date: "Grudzień 2025" },
                { title: "Wydarzenie integracyjne", location: "Wrocław", date: "2025" },
                { title: "Webinar: Narzędzia do promocji agenta", location: "Online", date: "13.11.2025" },
                { title: "Nowa Era Agenta — szkolenie AI", location: "Gdańsk", date: "24.03.2026" },
              ].map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-2xl p-6 border border-border/50"
                >
                  <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                    <span className="mx-1">|</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
