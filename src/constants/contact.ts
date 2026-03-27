// ── Contact Data Layer ────────────────────────────────────────────────────────
// Jedno miejsce na wszystkie dane kontaktowe. Zmiana numeru/adresu = 1 linia.

export interface ContactInfo {
  readonly label: string;
  readonly display: string;
  readonly href: string;
}

export interface Address {
  readonly label: string;
  readonly lines: readonly string[];
}

export interface HoursEntry {
  readonly day: string;
  readonly time: string;
}

export interface Branch {
  readonly name: string;
  readonly address: string;
  readonly hours: string;
  readonly mapsQuery: string;
}

export const CONTACT_CTA = {
  heading: "Masz ochotę na prawdziwe lody?",
  subheading: "Czekamy na Was codziennie od 11:00 do 20:00",
} as const;

export const CONTACT_ADDRESS: Address = {
  label: "Lodziarnia Icemania",
  lines: ["ul. Główna 42, 21-050 Michów", "woj. lubelskie, Polska"],
};

export const CONTACT_PHONE: ContactInfo = {
  label: "Telefon",
  display: "+48 81 234 56 78",
  href: "tel:+48812345678",
};

export const CONTACT_EMAIL: ContactInfo = {
  label: "E-mail",
  display: "cześć@icemania.pl",
  href: "mailto:cześć@icemania.pl",
};

export const CONTACT_HOURS: readonly HoursEntry[] = [
  { day: "Codziennie", time: "11:00 – 20:00" },
];

export const CONTACT_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.0!2d22.3!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAwLjAiTiAyMsKwMTgnMDAuMCJF!5e0!3m2!1spl!2spl!4v1700000000000";

export const BRANCHES: readonly Branch[] = [
  {
    name: "Icemania Michów (główna)",
    address: "ul. Główna 42, 21-050 Michów",
    hours: "Codziennie 11:00 – 20:00",
    mapsQuery: "51.5,22.3",
  },
  {
    name: "Icemania Lubartów",
    address: "ul. Lubelska 18, 21-100 Lubartów",
    hours: "Codziennie 11:00 – 20:00",
    mapsQuery: "Lubartów+ul.+Lubelska+18",
  },
  {
    name: "Icemania Lublin",
    address: "ul. Krakowskie Przedmieście 5, 20-002 Lublin",
    hours: "Codziennie 10:00 – 21:00",
    mapsQuery: "Lublin+Krakowskie+Przedmieście+5",
  },
];
