import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wydarzenia — Nieruchomości Spod Lady",
  description: "Nadchodzące wydarzenia, szkolenia, webinary i spotkania integracyjne społeczności Nieruchomości Spod Lady.",
};

const upcomingEvents = [
  {
    title: "Akademia AI dla Agentów Nieruchomości",
    subtitle: "Praktyczny warsztat: Claude, Gemini, automatyzacje, AI w sprzedaży nieruchomości",
    speaker: "Dariusz Szuca",
    date: "22.04.2026",
    time: "wtorek, 10:00",
    type: "Szkolenie",
    image: "/images/wydarzenia/webinar-odchudzamy-umowy.jpg",
  },
];

const recentlyFinishedEvents = [
  {
    title: "Odchudzamy umowy pośrednictwa",
    subtitle: "Jak stworzyć umowę prostą, skuteczną i taką, której klient nie będzie bał się podpisać",
    speaker: "Radca Prawny Sandra Anna Warda",
    date: "09.04.2026",
    time: "czwartek, 10:00",
    type: "Webinar",
    image: "/images/wydarzenia/webinar-odchudzamy-umowy.jpg",
  },
];

const pastEvents = [
  {
    title: "Odchudzamy umowy pośrednictwa",
    subtitle: "Jak stworzyć umowę prostą, skuteczną i taką, której klient nie będzie bał się podpisać",
    date: "09.04.2026",
    location: "Online",
    type: "Webinar",
    image: "/images/wydarzenia/webinar-odchudzamy-umowy.jpg",
  },
  {
    title: "Nowa Era Agenta",
    subtitle: "Współpraca, Technologia, Marka osobista!",
    date: "24.03.2026",
    location: "Warszawa",
    type: "Konferencja",
    image: "/images/wydarzenia/nowa-era-agenta.png",
  },
  {
    title: "Konferencja branżowa i Śniadanie Pośredników",
    subtitle: "NSL — Społeczność, która Sprzedaje",
    date: "10.10.2025",
    location: "Wrocław",
    type: "Konferencja",
    image: "/images/wydarzenia/konferencja-wroclaw.jpg",
  },
  {
    title: "Narzędzia do promocji i reklamy Agenta nieruchomości",
    subtitle: "Czego możesz użyć, aby zwiększyć skuteczność działań?",
    speaker: "Magdalena Sadowska",
    date: "13.11.2025",
    location: "Online",
    type: "Webinar",
    image: "/images/wydarzenia/webinar-narzedzia-promocji.jpg",
  },
  {
    title: "Jak skutecznie pracować w spowolnionych warunkach na rynku nieruchomości?",
    subtitle: "",
    speaker: "Natalia Drysiak",
    date: "09.10.2025",
    location: "Online",
    type: "Webinar",
    image: "/images/wydarzenia/webinar-spowolnienie.jpg",
  },
  {
    title: "Agenci wchodzą pierwsi",
    subtitle: "Czyli co zyskujesz, organizując dni otwarte dla Agentów w formule off market?",
    speaker: "Katarzyna Lewandowska",
    date: "17.09.2025",
    location: "Online",
    type: "Webinar",
    image: "/images/wydarzenia/webinar-agenci-pierwsi.jpg",
  },
  {
    title: "Mierzymy Wysoko — Disco Night",
    subtitle: "Impreza karnawałowa, 32 piętro Oliva Business Center, open bar i muzyka na żywo",
    date: "31.01.2025",
    location: "Gdańsk, Olivia Star",
    type: "Integracja",
    image: "/images/wydarzenia/mierzymy-wysoko.png",
  },
  {
    title: "Pierwsze Świąteczne Spotkanie Spod Lady",
    subtitle: "",
    date: "Grudzień 2025",
    location: "Gdańsk",
    type: "Integracja",
    image: "/images/wydarzenia/spotkanie-swiateczne.jpg",
  },
];

function EventTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Webinar: "bg-blue-50 text-blue-700 border-blue-200",
    Szkolenie: "bg-amber-50 text-amber-700 border-amber-200",
    Konferencja: "bg-purple-50 text-purple-700 border-purple-200",
    Integracja: "bg-pink-50 text-pink-700 border-pink-200",
  };
  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${colors[type] || "bg-gray-50 text-gray-700 border-gray-200"}`}>
      {type}
    </span>
  );
}

export default function Wydarzenia() {
  return (
    <>
      <PageHero
        title="Wydarzenia"
        subtitle="Szkolenia, webinary, konferencje i spotkania integracyjne dla naszej społeczności."
        badge="Kalendarz"
        image="/images/bg-konferencja.jpg"
      />

      {/* Upcoming */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-10">
            Nadchodzące wydarzenia
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                    <div className="relative overflow-hidden bg-gray-100">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={800}
                        height={420}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <EventTypeBadge type={event.type} />
                        <span className="text-primary font-semibold text-sm">NADCHODZĄCE</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
                        {event.title}
                      </h3>
                      {event.subtitle && (
                        <p className="mt-2 text-text-secondary leading-relaxed">
                          {event.subtitle}
                        </p>
                      )}
                      {event.speaker && (
                        <p className="mt-3 text-sm text-primary font-medium">
                          Prowadzi: {event.speaker}
                        </p>
                      )}
                      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-border/50 p-12 text-center">
              <p className="text-text-secondary text-lg">
                Nowe wydarzenia pojawią się wkrótce.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past events */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-10">
            To już za nami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[16/9]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <EventTypeBadge type={event.type} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {event.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
