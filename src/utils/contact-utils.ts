// ── Contact Logic Layer ──────────────────────────────────────────────────────
// Funkcje pomocnicze dla sekcji kontaktowej.

/**
 * Formatuje numer telefonu do postaci href (usuwa spacje, dodaje prefix).
 * @example formatPhoneHref("+48 81 234 56 78") → "tel:+48812345678"
 */
export function formatPhoneHref(display: string): string {
  return `tel:${display.replace(/\s/g, "")}`;
}

/**
 * Formatuje adres email do href mailto.
 */
export function formatEmailHref(email: string): string {
  return `mailto:${email}`;
}

/**
 * Generuje link do Google Maps Directions na podstawie zapytania.
 * @example buildMapsDirectionsUrl("51.5,22.3")
 */
export function buildMapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

/**
 * Kopiuje tekst do schowka. Zwraca true jeśli sukces.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
