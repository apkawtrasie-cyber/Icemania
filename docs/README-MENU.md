# Icemania — Strona Menu (Sklep)

## Struktura plików

```
src/
├── app/
│   └── menu/
│       └── page.tsx                      # Kontroler strony — składa Hero + Grid + CTA + Footer
├── config/
│   └── menu-data.ts                      # ⭐ JEDYNE MIEJSCE do edycji danych menu
├── hooks/
│   └── use-menu-hero-animation.ts        # Custom hook GSAP (animacja hero)
├── components/
│   └── menu/
│       ├── MenuCard.tsx                  # Atomowy komponent karty produktu
│       ├── MenuHero.tsx                  # Fullscreen hero z animacją
│       └── MenuGrid.tsx                  # Siatka kart (3 kolumny)
└── lib/
    └── cn.ts                             # Helper cn() = clsx + tailwind-merge
```

---

## Jak edytować menu (dodać/usunąć/zmienić produkty)

### ⭐ Jedyny plik do edycji danych: `src/config/menu-data.ts`

To jest **jedyne źródło prawdy** dla całego menu. Wszystkie karty produktów generują się automatycznie z tej tablicy.

### Dodanie nowego produktu

Otwórz `src/config/menu-data.ts` i dodaj nowy obiekt do tablicy `MENU_ITEMS`:

```ts
{
  id: 9,                                    // unikalny numer
  name: "Kokos z Limonką",                  // nazwa produktu
  description: "Orzeźwiający kokos...",      // opis (max ~80 znaków)
  price: "22,00 zł",                        // cena z walutą
  image: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=600&q=85",
},
```

### Usunięcie produktu

Usuń cały obiekt `{ id: X, ... }` z tablicy `MENU_ITEMS`.

### Zmiana ceny

Znajdź produkt po `name` i zmień pole `price`:

```ts
// Przed:
price: "22,00 zł",

// Po:
price: "25,00 zł",
```

### Zmiana opisu

Znajdź produkt po `name` i zmień pole `description`:

```ts
description: "Nowy opis produktu. Maksymalnie ~80 znaków.",
```

---

## Jak podmienić zdjęcia produktów

### Opcja A: Zdjęcia z Unsplash

1. Wejdź na [unsplash.com](https://unsplash.com)
2. Wyszukaj np. "ice cream pistachio"
3. Kliknij zdjęcie → skopiuj ID z URL (np. `photo-1563805042-7684c019e1cb`)
4. Wklej w `menu-data.ts`:

```ts
image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=85",
```

**Parametry URL:**
- `w=600` — szerokość (600px wystarczy dla kart)
- `q=85` — jakość (85% to dobry balans)
- `fit=crop` — przycina do proporcji

### Opcja B: Własne zdjęcia lokalne

1. Utwórz folder `public/images/menu/` (jeśli nie istnieje)
2. Umieść zdjęcie: `public/images/menu/pistacja.jpg`
3. W `menu-data.ts` zmień URL:

```ts
// Przed (Unsplash):
image: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=600&q=85",

// Po (lokalne):
image: "/images/menu/pistacja.jpg",
```

**Wymagania zdjęć:**
- Format: `.jpg`, `.png` lub `.webp`
- Minimalna rozdzielczość: 600×400px
- Orientacja: landscape (pozioma) — najlepiej wygląda w kartach
- Rozmiar pliku: max 200KB (dla szybkości ładowania)

### Opcja C: Zdjęcia z innego serwisu (Cloudinary, AWS S3...)

Dodaj domenę w `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "res.cloudinary.com" },  // nowa domena
  ],
},
```

---

## Jak zmienić tekst Hero (splash screen)

**Plik:** `src/components/menu/MenuHero.tsx`

- **Tytuł:** szukaj `<h1>` → zmień "Pełne Menu"
- **Opis:** szukaj `<p>` pod tytułem → zmień tekst
- **Link powrotu:** szukaj `<Link href="/">`

## Jak zmienić animację Hero

**Plik:** `src/hooks/use-menu-hero-animation.ts`

- **Czas wyświetlania:** zmień `delay` (w sekundach, domyślnie `1`)
- **Czas zanikania:** zmień `duration` (domyślnie `0.8`)
- **Parametry w `MenuHero.tsx`:**

```tsx
useMenuHeroAnimation({
  heroRef,
  contentRef,
  scrollTargetRef,
  delay: 1,      // ← zmień na 2 = tekst widoczny 2 sek
  duration: 0.8,  // ← czas animacji zanikania
});
```

---

## Jak zmienić sekcję CTA (na dole strony)

**Plik:** `src/app/menu/page.tsx`

Szukaj `{/* CTA Section */}` — zmień:
- Tytuł: `"Gotowy na zamówienie?"`
- Opis: `"Skontaktuj się z nami..."`
- Link: `href="/#kontakt"`

---

## Jak zmienić wygląd karty produktu

**Plik:** `src/components/menu/MenuCard.tsx`

- **Zaokrąglenie:** `rounded-3xl` (zmień na `rounded-xl` dla mniejszego)
- **Cień:** `shadow-sm` / `hover:shadow-xl`
- **Kolor przycisku:** `bg-[#B4CFB0]` (pistacja)
- **Tekst przycisku:** `"Dodaj do koszyka"` (z ikoną `ShoppingCart`)

---

## Interfejs TypeScript

```ts
// src/config/menu-data.ts
export interface MenuItem {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly image: string;
}
```

Wszystkie komponenty (`MenuCard`, `MenuGrid`) importują ten interfejs. Jeśli dodasz nowe pole (np. `category`), zaktualizuj interfejs i odpowiednie komponenty.

---

## Szybki cheat sheet

| Co chcę zmienić | Gdzie |
|-----------------|-------|
| Dodać/usunąć produkt | `src/config/menu-data.ts` |
| Zmienić cenę | `src/config/menu-data.ts` → pole `price` |
| Podmienić zdjęcie | `src/config/menu-data.ts` → pole `image` |
| Zmienić tekst Hero | `src/components/menu/MenuHero.tsx` |
| Zmienić czas animacji | `src/hooks/use-menu-hero-animation.ts` |
| Zmienić wygląd karty | `src/components/menu/MenuCard.tsx` |
| Zmienić siatkę (kolumny) | `src/components/menu/MenuGrid.tsx` |
| Zmienić sekcję CTA | `src/app/menu/page.tsx` |
| Dodać nową domenę zdjęć | `next.config.ts` → `remotePatterns` |
