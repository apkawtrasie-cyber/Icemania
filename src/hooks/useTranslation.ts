"use client";

import { useCallback } from "react";
import { useLanguage, type Locale } from "@/context/LanguageContext";
import { t as translate, type TranslationKey } from "@/config/translations";

export function useTranslation() {
  const { locale, setLocale } = useLanguage();

  const t = useCallback(
    (key: TranslationKey) => translate(key, locale),
    [locale]
  );

  return { t, locale, setLocale };
}
