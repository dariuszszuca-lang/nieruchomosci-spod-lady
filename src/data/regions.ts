export interface Coordinator {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

export interface Region {
  slug: string;
  name: string;
  city: string;
  image: string;
  heroImage: string;
  agentsImage: string;
  coordinators: Coordinator[];
  facebookUrl: string;
}

export const regions: Region[] = [
  {
    slug: "pomorskie",
    name: "Pomorskie",
    city: "Trójmiasto",
    image: "/images/regions/region-Trojmiasto.jpg",
    heroImage: "/images/regions/region-Trojmiasto.jpg",
    agentsImage: "/images/gallery/1.jpg",
    coordinators: [
      {
        name: "Sylwia Wróblewska",
        role: "Koordynator regionalny",
        phone: "571 309 209",
        email: "sylwia@nieruchomoscispodlady.pl",
        image: "/images/team/sylwia-wroblewska.jpg",
      },
      {
        name: "Jolanta Starnawska",
        role: "Koordynator regionalny",
        phone: "608 692 552",
        email: "jola@nieruchomoscispodlady.pl",
        image: "/images/team/jolanta-starnawska.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady",
  },
  {
    slug: "slask",
    name: "Śląsk",
    city: "Katowice",
    image: "/images/regions/katowice-region.png",
    heroImage: "/images/regions/katowice-region.png",
    agentsImage: "/images/gallery/2.jpg",
    coordinators: [
      {
        name: "Weronika Chwietczuk",
        role: "Koordynator regionalny",
        phone: "608 882 552",
        email: "katowice@nieruchomoscispodlady.pl",
        image: "/images/team/weronika-chwietczuk.jpg",
      },
      {
        name: "Tomasz Lubina",
        role: "Administrator",
        phone: "690 070 009",
        email: "katowice@nieruchomoscispodlady.pl",
        image: "/images/team/tomasz-lubina.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.slask",
  },
  {
    slug: "wroclaw",
    name: "Wrocław",
    city: "Wrocław",
    image: "/images/regions/region-wroclaw.png",
    heroImage: "/images/regions/region-wroclaw.png",
    agentsImage: "/images/gallery/3.jpg",
    coordinators: [
      {
        name: "Stella Wilczyńska",
        role: "Koordynator regionalny",
        phone: "608 127 500",
        email: "s.wilczynska@nieruchomoscispodlady.pl",
        image: "/images/team/stella-wilczynska.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.wroclaw",
  },
  {
    slug: "lubuskie",
    name: "Lubuskie",
    city: "Zielona Góra",
    image: "/images/regions/Zielona-Gora-region.jpg",
    heroImage: "/images/regions/Zielona-Gora-region.jpg",
    agentsImage: "/images/gallery/4.jpg",
    coordinators: [
      {
        name: "Anna Suchowacka",
        role: "Koordynator regionalny",
        phone: "602 106 201",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/anna-suchowacka.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.lubuskie",
  },
  {
    slug: "malopolskie",
    name: "Małopolska",
    city: "Kraków",
    image: "/images/regions/region-Malopolskie.jpg",
    heroImage: "/images/regions/region-Malopolskie.jpg",
    agentsImage: "/images/gallery/5.jpg",
    coordinators: [
      {
        name: "Anna Kadula",
        role: "Koordynator regionalny",
        phone: "793 640 085",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/anna-kadula.jpg",
      },
      {
        name: "Anna Ziernicka",
        role: "Koordynator regionalny",
        phone: "502 714 706",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/anna-ziernicka.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.malopolska",
  },
  {
    slug: "mazowieckie",
    name: "Mazowieckie",
    city: "Warszawa",
    image: "/images/regions/Warszawa-NsL.jpg",
    heroImage: "/images/regions/Warszawa-NsL.jpg",
    agentsImage: "/images/gallery/6.jpg",
    coordinators: [],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.warszawa",
  },
  {
    slug: "kujawsko-pomorskie",
    name: "Kujawsko-Pomorskie",
    city: "Bydgoszcz",
    image: "/images/regions/Bydgoszcz-NsL.jpg",
    heroImage: "/images/regions/Bydgoszcz-NsL.jpg",
    agentsImage: "/images/gallery/8.jpg",
    coordinators: [
      {
        name: "Agnieszka Bodanka",
        role: "Koordynator regionalny",
        phone: "571 309 207",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/agnieszka-bodanka.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.bydgoszcz",
  },
  {
    slug: "warmia-i-mazury",
    name: "Warmia i Mazury",
    city: "Olsztyn",
    image: "/images/regions/region-Warmia-i-Mazury.jpg",
    heroImage: "/images/regions/region-Warmia-i-Mazury.jpg",
    agentsImage: "/images/gallery/9.jpg",
    coordinators: [
      {
        name: "Aleksandra Piotrowska",
        role: "Koordynator regionalny",
        phone: "606 665 517",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/aleksandra-piotrowska.jpg",
      },
      {
        name: "Robert Tomczak",
        role: "Koordynator regionalny",
        phone: "600 619 217",
        email: "kontakt@nieruchomoscispodlady.pl",
        image: "/images/team/robert-tomczak.jpg",
      },
    ],
    facebookUrl: "https://www.facebook.com/groups/nieruchomoscispodlady.warmia",
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
