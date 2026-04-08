import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poznaj nas — Nieruchomości Spod Lady",
  description: "Poznaj zespół założycieli i koordynatorów Nieruchomości Spod Lady. Społeczność ponad 1600 agentów nieruchomości w Polsce.",
};

const team = [
  {
    name: "Sylwia Wróblewska",
    role: "Założycielka i pomysłodawca",
    region: "Pomorskie",
    image: "/images/team/sylwia-wroblewska.jpg",
    description: "Twórczyni idei Nieruchomości Spod Lady. Od ponad 15 lat związana z rynkiem nieruchomości. Wierzy, że współpraca pośredników prowadzi do najlepszych transakcji.",
  },
  {
    name: "Jolanta Starnawska",
    role: "Koordynator regionalny",
    region: "Pomorskie",
    image: "/images/team/jolanta-starnawska.jpg",
    description: "Doświadczona agentka z Trójmiasta. Współtworzy społeczność od samego początku.",
  },
  {
    name: "Weronika Chwietczuk",
    role: "Koordynator regionalny",
    region: "Śląsk",
    image: "/images/team/weronika-chwietczuk.jpg",
    description: "Odpowiada za rozwój społeczności w regionie śląskim.",
  },
  {
    name: "Stella Wilczyńska",
    role: "Koordynator regionalny",
    region: "Wrocław",
    image: "/images/team/stella-wilczynska.jpg",
    description: "Buduje społeczność agentów we Wrocławiu i okolicach.",
  },
  {
    name: "Anna Kadula",
    role: "Koordynator regionalny",
    region: "Małopolska",
    image: "/images/team/anna-kadula.jpg",
    description: "Rozwija sieć agentów w Krakowie i regionie małopolskim.",
  },
  {
    name: "Anna Suchowacka",
    role: "Koordynator regionalny",
    region: "Lubuskie",
    image: "/images/team/anna-suchowacka.jpg",
    description: "Koordynuje działania społeczności w Zielonej Górze i okolicach.",
  },
  {
    name: "Agnieszka Bodanka",
    role: "Koordynator regionalny",
    region: "Kujawsko-Pomorskie",
    image: "/images/team/agnieszka-bodanka.jpg",
    description: "Odpowiada za region kujawsko-pomorski z siedzibą w Bydgoszczy.",
  },
  {
    name: "Tomasz Lubina",
    role: "Administrator",
    region: "Śląsk",
    image: "/images/team/tomasz-lubina.jpg",
    description: "Wspiera społeczność śląską od strony organizacyjnej.",
  },
];

export default function PoznajNas() {
  return (
    <>
      <PageHero
        title="Poznaj nas"
        subtitle="Za Nieruchomościami Spod Lady stoją ludzie, którzy wierzą, że współpraca zmienia branżę nieruchomości na lepsze."
        badge="Nasz zespół"
        image="/images/bg-konferencja.jpg"
      />

      {/* Story section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nasza historia
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Jak powstały Nieruchomości Spod Lady?
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              Nieruchomości Spod Lady to społeczność ponad 1600 agentów nieruchomości,
              którzy wierzą, że współpraca, a nie rywalizacja, prowadzi do prawdziwego
              sukcesu. Działamy w 8 regionach Polski, łącząc profesjonalistów z całego
              kraju.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Nasi członkowie mają dostęp do ofert „spod lady" — nieruchomości
              niedostępnych publicznie — oraz do informacji, które dają realną przewagę
              na rynku. Organizujemy szkolenia, webinary, wydarzenia integracyjne
              i wspieramy się nawzajem w codziennej pracy.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Koordynatorzy
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Kto troszczy się o naszą społeczność?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div
                key={person.name}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg">
                    {person.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mt-1">
                    {person.role}
                  </p>
                  <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">
                    {person.region}
                  </p>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
