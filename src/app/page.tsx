import Image from "next/image";
import Link from "next/link";

const regions = [
  { name: "Trójmiasto", href: "/regiony/pomorskie", image: "/images/regions/region-Trojmiasto.jpg" },
  { name: "Wrocław", href: "/regiony/wroclaw", image: "/images/regions/region-wroclaw.png" },
  { name: "Katowice", href: "/regiony/slask", image: "/images/regions/katowice-region.png" },
  { name: "Zielona Góra", href: "/regiony/lubuskie", image: "/images/regions/Zielona-Gora-region.jpg" },
  { name: "Warszawa", href: "/regiony/mazowieckie", image: "/images/regions/Warszawa-NsL.jpg" },
  { name: "Bydgoszcz", href: "/regiony/kujawsko-pomorskie", image: "/images/regions/Bydgoszcz-NsL.jpg" },
  { name: "Kraków", href: "/regiony/malopolskie", image: "/images/regions/region-Malopolskie.jpg" },
  { name: "Olsztyn", href: "/regiony/warmia-i-mazury", image: "/images/regions/region-Warmia-i-Mazury.jpg" },
];

const values = [
  { title: "Odpowiedzialność", desc: "Za słowo i za czyny, które prowadzą do wspólnych transakcji", icon: "🤝" },
  { title: "Uczciwość", desc: "I dobre intencje w drodze do uzyskania porozumienia", icon: "💎" },
  { title: "Wiedza", desc: "Nie każdy zna się na wszystkim — wymieniamy się doświadczeniem", icon: "📚" },
  { title: "Etyka zawodowa", desc: "Szanujemy konkurencję, klientów, prawo i siebie nawzajem", icon: "⚖️" },
  { title: "Zaufanie", desc: "Nie da się realizować dobrych transakcji bez zaufania do drugiej strony", icon: "🛡️" },
  { title: "Współpraca", desc: "W tej społeczności masz gwarancję, że każdy pośrednik współpracuje", icon: "🌐" },
  { title: "Lojalność", desc: "Aktywność w grupie oznacza jednostronną reprezentację klienta", icon: "⭐" },
  { title: "Empatia", desc: "Wspólne serdeczne spotkania i uważność na potrzeby klientów", icon: "❤️" },
];

const benefits = [
  {
    title: "Wsparcie społeczności",
    desc: "Ponad 1600 aktywnych agentów gotowych do dzielenia się ofertami na wyłączność, doświadczeniem i wiedzą.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Akademia Nieruchomości",
    desc: "Cykliczne webinary, szkolenia i mini-konferencje. Bądź na bieżąco z trendami i nawiąż cenne kontakty biznesowe.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Budowa wizerunku",
    desc: "Posługuj się naszym logiem i nazwą — synonimem kompetencji i etyki w branży nieruchomości.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Dedykowane narzędzia",
    desc: "Dostęp do unikatowych narzędzi pomagających w codziennej pracy agenta nieruchomości.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Specjalne warunki",
    desc: "Rabaty i zniżki na wydarzenia, szkolenia, konferencje branżowe oraz pomocne narzędzia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    title: "Dostęp do informacji",
    desc: "Oferty off-market, obniżki cen, okazje cenowe i nieruchomości komercyjne niedostępne publicznie.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const knowledgeItems = [
  "Nowych ofertach nieruchomości wprowadzanych do sprzedaży i wynajmu",
  "Ofertach dyskretnych niedostępnych publicznie",
  "Obniżkach cen nieruchomości",
  "Zmianach MPZP i podziałach gruntów",
  "Nadciągających zmianach koniunktury w branży",
  "Na czym aktualnie można zarobić",
];

const galleryImages = [
  "/images/gallery/1.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3a.jpg",
];

const faqItems = [
  {
    q: "Dla kogo przeznaczona jest grupa?",
    a: "Grupa jest wyłącznie przeznaczona dla agentów nieruchomości. Chcemy stworzyć środowisko skoncentrowane na profesjonalizmie agentów w naszej społeczności.",
  },
  {
    q: "Jakie korzyści otrzymam, dołączając do grupy?",
    a: "Zyskasz ekskluzywny dostęp do ofert off-market, profesjonalne doradztwo, wsparcie społeczności oraz uczestnictwo w wydarzeniach i szkoleniach.",
  },
  {
    q: "Jak często odbywają się spotkania?",
    a: "Spotkania odbywają się regularnie — zarówno online, jak i offline — aby umożliwić członkom budowanie relacji biznesowych i towarzyskich.",
  },
  {
    q: "Czy grupa oferuje szkolenia?",
    a: "Tak, organizujemy szkolenia, seminaria i webinaria, które pomagają w rozwoju umiejętności agentów oraz utrzymaniu ich na bieżąco z najnowszymi trendami.",
  },
  {
    q: "Czy mogę promować swoją agencję?",
    a: "Tak, członkowie mają możliwość promocji swojej agencji w ramach grupy. Wspieramy się nawzajem i promujemy profesjonalizm.",
  },
  {
    q: 'Jak dołączyć do "Nieruchomości Spod Lady"?',
    a: "Skontaktuj się z nami poprzez formularz kontaktowy na stronie. Nasz zespół skontaktuje się z Tobą i przedstawi proces rejestracji.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-[#0f172a] pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left — text */}
          <div className="py-16 lg:py-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ponad 1600 agentów w całej Polsce
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-[family-name:var(--font-montserrat)] tracking-tight">
              Ogólnopolska sieć agentów{" "}
              <span className="text-primary whitespace-nowrap">spod lady</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
              Współpraca, a nie rywalizacja, prowadzi do prawdziwego sukcesu.
              Dołącz do największej społeczności pośredników nieruchomości w
              Polsce.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/czlonkostwo"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 text-lg"
              >
                Dołącz do społeczności
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/poznaj-nas"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                Poznaj nas
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative hidden lg:block h-[calc(100vh-5rem)]">
            <Image
              src="/images/Nsl-baner-www.jpg"
              alt="Nieruchomości Spod Lady — agenci"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1600+", label: "Agentów" },
            { number: "8", label: "Regionów" },
            { number: "15+", label: "Lat doświadczenia" },
            { number: "∞", label: "Wspólnych transakcji" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text font-[family-name:var(--font-montserrat)]">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                O społeczności
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight font-[family-name:var(--font-montserrat)]">
                Poznaj Nieruchomości Spod Lady — społeczność, która{" "}
                <span className="gradient-text">sprzedaje</span>
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                W świecie nieruchomości istnieje coś więcej niż tylko
                transakcje. To społeczność wyjątkowych agentów, którzy wierzą, że
                współpraca prowadzi do prawdziwego sukcesu.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Nasza społeczność to ponad 1600 członków i ciągle rośnie — to
                więcej niż w największych sieciowych biurach łącznie w Polsce.
                Niezależnie od reprezentowanego biura, miasta czy specjalizacji,
                razem zapewniamy klientom najwyższą jakość usług.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Agenci w naszej społeczności mają dostęp do ofert „spod lady" —
                nieruchomości niedostępnych publicznie — oraz do informacji
                wpływających na sprzedaż i biznes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10" />
              <Image
                src="/images/wspolne-transakcje-spod-lady.jpg"
                alt="Wspólne transakcje"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WE KNOW FIRST */}
      <section className="py-24 bg-gradient-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Przewaga informacyjna
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              To my pierwsi wiemy o
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeItems.map((item, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary font-bold text-lg mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nasze wartości
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Budujemy silną markę zawodu i podnosimy standardy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-hover bg-white rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Członkostwo
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
              Dlaczego warto być członkiem?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/czlonkostwo"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:scale-105 text-lg"
            >
              Sprawdź jak dołączyć
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Wspólne transakcje
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Co u nas słychać?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Codziennie robimy wspólne transakcje „spod lady" oszczędzając czas, pieniądze i dostarczając wartość naszym klientom.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Transakcja ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP REQUIREMENTS */}
      <section className="py-24 bg-gradient-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Wymagania
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Kto może zostać członkiem?
            </h2>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed">
              Członkiem Nieruchomości Spod Lady może zostać czynny pośrednik nieruchomości, który:
            </p>
          </div>
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            {[
              "Pracuje w branży co najmniej 3 miesiące",
              "Posiada aktualną polisę OC w tym zakresie",
              "Przeważający rodzaj jego działalności (PKD) to pośrednictwo w obrocie nieruchomościami",
              "Lub jest osobą zatrudnioną w biurze nieruchomości, które posiada aktualną polisę OC",
            ].map((req, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-border/50"
              >
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Zasięg ogólnopolski
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Sprawdź jak do nas dołączyć
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {regions.map((region) => (
              <Link
                key={region.name}
                href={region.href}
                className="card-hover group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {region.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-text-secondary uppercase tracking-wider font-semibold mb-10">
            Współpracujemy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              "/images/partners/1.png",
              "/images/partners/2.png",
              "/images/partners/3.png",
              "/images/partners/logo-ssrn.png",
              "/images/partners/Giraffe360.png",
              "/images/partners/UG.png",
              "/images/partners/nieruchomosci-online.png",
            ].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt="Partner"
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
              Najczęściej zadawane pytania
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-border/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-24 bg-gradient-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Kontakt
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
                Dołącz do naszej społeczności
              </h2>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                Skontaktuj się z nami, by dołączyć do społeczności „Nieruchomości
                Spod Lady". Razem budujmy profesjonalizm, wspierajmy się i
                odkrywajmy nowe możliwości na rynku nieruchomości!
              </p>
              <Image
                src="/images/nsl-agenci.jpg"
                alt="Agenci NSL"
                width={500}
                height={300}
                className="mt-8 rounded-2xl shadow-lg"
              />
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Napisz do nas</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Region
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                    <option value="">Wybierz region</option>
                    {regions.map((r) => (
                      <option key={r.name} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+48 000 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="jan@biuro.pl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Napisz wiadomość..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] text-lg"
                >
                  Wysyłam!
                </button>
                <p className="text-xs text-text-secondary text-center">
                  Przesłanie formularza oznacza zgodę na przetwarzanie danych w celu odpowiedzi na zapytanie.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
