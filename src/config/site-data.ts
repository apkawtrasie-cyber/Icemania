// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — Wszystkie dane strony Icemania
// Edytuj TYLKO ten plik, gdy chcesz zmienić treść, ceny, zdjęcia lub linki.
// ─────────────────────────────────────────────────────────────────────────────

// ── Interfaces ───────────────────────────────────────────────────────────────

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export interface MenuItem {
  readonly id: number;
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly longDescription: string;
  readonly ingredients: readonly string[];
  readonly price: string;
  readonly image: string;
}

export interface FlavorItem {
  readonly name: string;
  readonly price: string;
  readonly tag: string;
  readonly image: string;
  readonly menuItemId: number;
}

export interface PopularProduct {
  readonly name: string;
  readonly image: string;
  readonly menuItemId: number;
}

// ── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#menu", label: "Smaki" },
  { href: "#o-nas", label: "O Nas" },
  { href: "#sklep", label: "Sklep" },
] as const;

// ── Hero Section ─────────────────────────────────────────────────────────────

export const HERO = {
  image:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=clip&w=1200&q=85",
  imageAlt: "Prawdziwe domowe lody rzemieślnicze",
  badge: "Domowe Lody Rzemieślnicze",
  badgeDesktop: "Domowe Lody Rzemieślnicze · Kraków",
  title: {
    line1: "Domowe",
    line2: "lody gałkowe.",
    line3: "Bez pośpiechu.",
  },
  descriptionMobile:
    "Każda gałka to efekt godzin pracy. Naturalne składniki, zero skrótów.",
  descriptionDesktop:
    "Każda gałka to efekt godzin pracy. Lokalne składniki, zero skrótów — tylko czysty smak.",
  ctaPrimary: { href: "#menu", label: "Odkryj Smaki" },
  ctaSecondary: { href: "#o-nas", label: "Nasza Historia" },
  scrollIndicatorText: "Przewiń",
} as const;

// ── Flavors Section (horizontal scroll, strona główna) ──────────────────────

export const FLAVORS: readonly FlavorItem[] = [
  {
    name: "Słony Karmel z Himalajów",
    price: "22,00",
    tag: "Delikatny",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=85",
    menuItemId: 1,
  },
  {
    name: "Sycylijska Pistacja",
    price: "23,00",
    tag: "Półpłynna konsystencja",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=85",
    menuItemId: 2,
  },
  {
    name: "Palone Masło z Orzechami",
    price: "22,00",
    tag: "Chrupiące kawałki",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=500&q=85",
    menuItemId: 3,
  },
  {
    name: "Wegańska Ciemna Czekolada",
    price: "23,00",
    tag: "Bogaty smak",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=85",
    menuItemId: 4,
  },
  {
    name: "Malina z Naszej Farmy",
    price: "21,00",
    tag: "Sezonowy",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=85",
    menuItemId: 5,
  },
  {
    name: "Wanilia Bourbon",
    price: "20,00",
    tag: "Klasyczny",
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=500&q=85",
    menuItemId: 6,
  },
] as const;

// ── Menu Items (strona /menu — pełne karty) ─────────────────────────────────

export const MENU_ITEMS: readonly MenuItem[] = [
  {
    id: 1,
    slug: "slony-karmel",
    name: "Słony Karmel z Himalajów",
    description:
      "Delikatny karmel z nutą soli himalajskiej. Idealne połączenie słodkiego i słonego.",
    longDescription:
      "Nasz Słony Karmel to hołd złożony kontrastom — delikatna, kremowa baza karmelowa spotyka się z różową solą prosto z Himalajów. Każda gałka jest ręcznie mieszana przez kilka godzin, aż osiągnie idealną, jedwabistą konsystencję. Smak jest głęboki, z nutami toffi i lekkim posmakiem soli, który sprawia, że chcesz więcej.",
    ingredients: ["Mleko pełne", "Śmietanka 36%", "Cukier trzcinowy", "Karmel domowy", "Sól himalajska", "Żółtka jaj"],
    price: "22,00 zł",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 2,
    slug: "sycylijska-pistacja",
    name: "Sycylijska Pistacja",
    description:
      "Prawdziwe pistacje z Sycylii. Półpłynna konsystencja, intensywny smak orzechów.",
    longDescription:
      "Pistacje importujemy bezpośrednio z Bronte na Sycylii — regionu słynącego z najlepszych pistacji na świecie. Pasta pistacjowa jest mielona na kamiennych żarnach, co zachowuje pełnię aromatu. Rezultat? Intensywnie zielone lody o bogatym, orzechowym smaku z naturalną słodyczą.",
    ingredients: ["Mleko pełne", "Śmietanka 36%", "Pasta pistacjowa z Bronte", "Cukier", "Żółtka jaj"],
    price: "23,00 zł",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 3,
    slug: "palone-maslo-orzechy",
    name: "Palone Masło z Orzechami",
    description:
      "Chrupiące kawałki orzechów w kremowym palanym maśle. Bogaty, karmelowy smak.",
    longDescription:
      "Masło palujemy powoli na małym ogniu, aż nabierze głębokiego, orzechowego aromatu. Do kremowej bazy dodajemy chrupiące kawałki prażonych orzechów laskowych i migdałów. Efekt — lody o złożonym smaku, które rozpływają się w ustach, zostawiając karmelowy finisz.",
    ingredients: ["Mleko pełne", "Masło irlandzkie", "Orzechy laskowe", "Migdały", "Cukier trzcinowy", "Żółtka jaj", "Wanilia"],
    price: "22,00 zł",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 4,
    slug: "weganska-czekolada",
    name: "Wegańska Ciemna Czekolada",
    description:
      "Bogaty smak ciemnej czekolady bez produktów mlecznych. 100% wegańskie.",
    longDescription:
      "Używamy czekolady 72% kakao z Ekwadoru, którą łączymy z kremowym mlekiem kokosowym. Rezultat to intensywnie czekoladowe lody, które zachwycą zarówno wegan, jak i tradycyjnych smakoszy. Bez kompromisów — pełen, głęboki smak kakao.",
    ingredients: ["Mleko kokosowe", "Czekolada 72% kakao", "Cukier kokosowy", "Kakao", "Wanilia"],
    price: "23,00 zł",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 5,
    slug: "malina-farma",
    name: "Malina z Naszej Farmy",
    description:
      "Sezonowe maliny z naszego sadu. Świeże, naturalne, pełne smaku.",
    longDescription:
      "Maliny zbieramy ręcznie z naszego sadu w sezonie — od czerwca do września. Owoce przerabiamy tego samego dnia, żeby zachować maksimum świeżości. Lekko kwaskowe, z wyrazistym malinowym aromatem i delikatną słodyczą. Dostępne tylko w sezonie!",
    ingredients: ["Maliny świeże (40%)", "Mleko pełne", "Śmietanka 36%", "Cukier", "Sok z cytryny"],
    price: "21,00 zł",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 6,
    slug: "wanilia-bourbon",
    name: "Wanilia Bourbon",
    description:
      "Klasyczna wanilia bourbon z Madagaskaru. Kremowa, aromatyczna, ponadczasowa.",
    longDescription:
      "Laski wanilii bourbon sprowadzamy z Madagaskaru — każda jest ręcznie krojona i macerowana w naszej bazie przez 24 godziny. Widoczne czarne ziarenka to dowód na prawdziwą wanilię. Smak jest ciepły, kremowy, z kwiatowymi nutami — klasyk, który nigdy nie zawodzi.",
    ingredients: ["Mleko pełne", "Śmietanka 36%", "Wanilia bourbon z Madagaskaru", "Cukier", "Żółtka jaj"],
    price: "20,00 zł",
    image:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 7,
    slug: "truskawka-polna",
    name: "Truskawka Polna",
    description:
      "Dojrzałe truskawki z lokalnych pól. Słodkie, soczyste, sezonowe.",
    longDescription:
      "Truskawki polne to mniejsze, ale znacznie bardziej aromatyczne odmiany, które zbieramy z lokalnych pól. Ich intensywny, słodki smak z lekką kwaskowością tworzy lody, które smakują jak lato w najczystszej postaci. Sezonowa edycja limitowana.",
    ingredients: ["Truskawki polne (45%)", "Mleko pełne", "Śmietanka 36%", "Cukier", "Sok z cytryny"],
    price: "21,00 zł",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 8,
    slug: "mango-alphonso",
    name: "Mango Alphonso",
    description:
      "Egzotyczne mango z Indii. Słodkie, kremowe, tropikalne.",
    longDescription:
      "Mango Alphonso to król wśród odmian mango — słynne z niezwykle intensywnego aromatu i kremowej konsystencji. Importujemy dojrzałe owoce z regionu Ratnagiri w Indiach. Lody mają jaskrawy, żółty kolor i tropikalny smak, który przenosi Cię prosto na plażę.",
    ingredients: ["Pulpa mango Alphonso (35%)", "Mleko kokosowe", "Śmietanka 36%", "Cukier", "Sok z limonki"],
    price: "24,00 zł",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=85",
  },
] as const;

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getMenuItemById(id: number): MenuItem | undefined {
  return MENU_ITEMS.find((item) => item.id === id);
}

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return MENU_ITEMS.find((item) => item.slug === slug);
}

// ── Shop Section (popularne produkty) ────────────────────────────────────────

export const POPULAR_PRODUCTS: readonly PopularProduct[] = [
  {
    name: "Słony Karmel",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=300&q=80",
    menuItemId: 1,
  },
  {
    name: "Pistacja Sycylijska",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80",
    menuItemId: 2,
  },
  {
    name: "Wanilia Bourbon",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=300&q=80",
    menuItemId: 6,
  },
] as const;
