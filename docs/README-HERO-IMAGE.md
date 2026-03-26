# Icemania — Jak dodać zdjęcie w tle Hero (Menu)

## Obecny stan

Hero na stronie `/menu` ma jednolity kolor tła `bg-[#5C1A1B]` (ciemna wiśnia).
Poniżej znajdziesz instrukcję jak zamienić kolor na zdjęcie w tle.

---

## Krok po kroku

### 1. Przygotuj zdjęcie

**Wymagania:**
- Rozdzielczość: min. **1920×1080px** (landscape)
- Format: `.jpg` lub `.webp` (mniejszy rozmiar)
- Rozmiar pliku: max **500KB** (dla szybkości ładowania)
- Ciemne zdjęcie lub takie, na którym biały tekst będzie czytelny

### 2. Umieść zdjęcie w projekcie

Skopiuj plik do folderu:
```
public/images/hero-menu.jpg
```

### 3. Edytuj plik `src/components/menu/MenuHero.tsx`

#### Opcja A: Zdjęcie jako tło CSS (najprostsza)

Znajdź tę linię:
```tsx
"relative h-screen w-full bg-[#5C1A1B] overflow-hidden",
```

Zamień na:
```tsx
"relative h-screen w-full overflow-hidden",
```

I dodaj `style` do tego samego `<div>`:
```tsx
<div
  ref={...}
  className={cn(
    "relative h-screen w-full overflow-hidden",
    className
  )}
  style={{
    backgroundImage: "url('/images/hero-menu.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
```

#### Opcja B: Zdjęcie z `next/image` (lepsza optymalizacja)

Dodaj import na górze pliku:
```tsx
import Image from "next/image";
```

Następnie dodaj `<Image>` wewnątrz hero `<div>`, PRZED `<Link>` i `<div ref={contentRef}>`:
```tsx
<div
  ref={...}
  className={cn(
    "relative h-screen w-full overflow-hidden",
    className
  )}
>
  {/* Zdjęcie w tle */}
  <Image
    src="/images/hero-menu.jpg"
    alt="Hero tło"
    fill
    priority
    className="object-cover"
  />
  {/* Overlay — przyciemnienie żeby tekst był czytelny */}
  <div className="absolute inset-0 bg-[#5C1A1B]/70 z-[1]" />

  {/* Link powrotu — dodaj z-[2] */}
  <Link
    href="/"
    className={cn(
      "absolute top-8 left-6 lg:left-16 z-[2] ...",
    )}
  >
    ...
  </Link>

  {/* Tekst hero — dodaj z-[2] */}
  <div
    ref={contentRef}
    className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6"
  >
    ...
  </div>
</div>
```

**Ważne:** Dodaj `z-[2]` do linku i tekstu, żeby były nad overlay.

#### Opcja C: Zdjęcie z Unsplash (bez pliku lokalnego)

Zamiast `/images/hero-menu.jpg` użyj URL Unsplash:
```tsx
<Image
  src="https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=1920&q=80"
  alt="Hero tło"
  fill
  priority
  className="object-cover"
/>
```

Unsplash jest już skonfigurowany w `next.config.ts`.

---

## Overlay — kontrola przyciemnienia

Overlay to warstwa między zdjęciem a tekstem. Kontrolujesz go klasą:

| Klasa | Efekt |
|-------|-------|
| `bg-[#5C1A1B]/50` | 50% przyciemnienie (lżejsze) |
| `bg-[#5C1A1B]/70` | 70% przyciemnienie (zalecane) |
| `bg-[#5C1A1B]/85` | 85% przyciemnienie (prawie jak kolor) |
| `bg-black/40` | Czarny overlay 40% (neutralny) |

---

## Szybki cheat sheet

| Co chcę zrobić | Gdzie |
|----------------|-------|
| Zmienić zdjęcie tła | `public/images/hero-menu.jpg` (podmień plik) |
| Zmienić overlay | `MenuHero.tsx` → `bg-[#5C1A1B]/70` (zmień %) |
| Wrócić do koloru | Usuń `<Image>` i overlay, przywróć `bg-[#5C1A1B]` |
| Użyć URL Unsplash | Wklej URL w `src` komponentu `<Image>` |
