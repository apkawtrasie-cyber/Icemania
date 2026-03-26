# Icemania — Strona Główna (Home)

## Struktura plików

```
src/
├── app/
│   └── page.tsx                          # Kontroler strony — składa sekcje
├── components/
│   ├── navigation/Navbar.tsx             # Nawigacja (pojawia się po scroll)
│   ├── hero/HeroSection.tsx              # Sekcja Hero z animacją GSAP
│   ├── sections/
│   │   ├── AboutSection.tsx              # Sekcja "O Nas"
│   │   ├── FlavorsSection.tsx            # Sekcja "Smaki" (horizontal scroll)
│   │   ├── ShopSection.tsx               # Sekcja "Sklep"
│   │   ├── OrderSection.tsx              # Sekcja "Zamówienie"
│   │   └── ContactSection.tsx            # Sekcja "Kontakt"
│   └── footer/Footer.tsx                 # Stopka (wspólna dla wszystkich stron)
├── lib/
│   ├── gsap.ts                           # Eksporty GSAP + ScrollTrigger + useGSAP
│   └── cn.ts                             # Helper cn() = clsx + tailwind-merge
└── public/
    ├── manifest.json                     # PWA manifest
    └── icon.svg                          # Ikona PWA
```

---

## Jak edytować treść

### 1. Tekst Hero (nagłówek, CTA)

**Plik:** `src/components/hero/HeroSection.tsx`

- **Nagłówek H1 (mobile):** szukaj `<h1` wewnątrz `{/* MOBILE LAYOUT */}`
- **Nagłówek H1 (desktop):** szukaj `<h1` wewnątrz `{/* DESKTOP LAYOUT */}`
- **Przycisk CTA:** szukaj `<Link href="/menu"` — zmień tekst wewnątrz

### 2. Sekcja "O Nas"

**Plik:** `src/components/sections/AboutSection.tsx`

- **Tytuł:** szukaj `<h2` → zmień tekst (obecnie "Smakuj Radość Domu")
- **Punkty (3 kolumny):** szukaj tablicy `points` na górze pliku — zmień `num`, `title`, `desc`
- **Przycisk "Zamów teraz":** szukaj `href="/menu"` → zmień cel lub tekst

### 3. Sekcja "Smaki" (horizontal scroll)

**Plik:** `src/components/sections/FlavorsSection.tsx`

- **Dane smaków:** szukaj tablicy `flavors` na górze pliku
- **Każdy smak ma:** `name`, `tag`, `price`, `image` (URL Unsplash)
- **Aby dodać nowy smak:** dodaj obiekt do tablicy `flavors`

```ts
// Przykład dodania nowego smaku:
{
  name: "Nowy Smak",
  tag: "Krótki opis",
  price: "25,00",
  image: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=400&q=85",
},
```

### 4. Sekcja "Sklep"

**Plik:** `src/components/sections/ShopSection.tsx`

- **Produkty (kubełki):** szukaj tablicy `products` — zmień `name`, `image`
- **Link "Zobacz całe menu":** już prowadzi do `/menu`

### 5. Sekcja "Kontakt"

**Plik:** `src/components/sections/ContactSection.tsx`

- Zmień dane kontaktowe (email, telefon, adres)

### 6. Stopka (Footer)

**Plik:** `src/components/footer/Footer.tsx`

- **Dane kontaktowe:** szukaj obiektu `Contact` w `footerLinks`
- **Email:** `andrzejmich2@gmail.com`
- **Telefon:** `+41 782 067 379`
- **Social links:** szukaj obiektu `"Social links"` — dodaj/zmień linki

### 7. Nawigacja (Navbar)

**Plik:** `src/components/navigation/Navbar.tsx`

- **Linki:** szukaj tablicy `navLinks` — zmień `href` i `label`
- **Ikona koszyka:** prowadzi do `/koszyk`
- **Przycisk "Zamów teraz":** prowadzi do `/menu`

---

## Jak podmienić zdjęcia

### Zdjęcia z Unsplash (zewnętrzne URL)

Większość zdjęć używa URL-i Unsplash. Aby podmienić:

1. Wejdź na [unsplash.com](https://unsplash.com)
2. Znajdź zdjęcie i skopiuj jego URL
3. Dodaj parametry: `?auto=format&fit=crop&w=600&q=85`
4. Wklej URL w odpowiednim pliku

**Przykład:**
```ts
// Przed:
image: "https://images.unsplash.com/photo-1570197788417?auto=format&fit=crop&w=600&q=85"

// Po (nowe zdjęcie):
image: "https://images.unsplash.com/photo-NOWE_ID?auto=format&fit=crop&w=600&q=85"
```

### Zdjęcia lokalne (folder public/)

Aby użyć własnych zdjęć zamiast Unsplash:

1. Umieść plik w `public/images/` (np. `public/images/lody-pistacja.jpg`)
2. W kodzie zmień URL na: `"/images/lody-pistacja.jpg"`
3. Dla `next/image` — nie musisz konfigurować `remotePatterns`

**Przykład:**
```ts
// Zamień URL Unsplash:
image: "https://images.unsplash.com/..."

// Na plik lokalny:
image: "/images/moj-smak.jpg"
```

### Konfiguracja domen zdjęć

**Plik:** `next.config.ts`

Jeśli chcesz użyć zdjęć z innego serwisu (np. Cloudinary):
```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "res.cloudinary.com" },  // dodaj nowy
  ],
},
```

---

## Paleta kolorów

| Kolor | Hex | Użycie |
|-------|-----|--------|
| Maślany krem | `#F9F5E7` | Tło strony |
| Sycylijska pistacja | `#B4CFB0` | Przyciski, akcenty |
| Głęboka wiśnia | `#5C1A1B` | Nagłówki, CTA, footer |
| Ciemniejszy krem | `#EDE5CA` | Tło sekcji |
| Tekst body | `#2A1A1A` | Paragrafy |

---

## Uruchomienie dev server

```bash
cd lody-app
npm run dev
# → http://localhost:3000
```
