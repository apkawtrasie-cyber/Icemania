"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import type { Locale } from "@/context/LanguageContext";

const languages: { code: Locale; flag: string; label: string }[] = [
  { code: "pl", flag: "🇵🇱", label: "Polski" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-[#2A1A1A]/70 hover:text-[#5C1A1B] hover:bg-[#EDE5CA]/50 transition-colors cursor-pointer"
        aria-label="Change language"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="hidden xl:inline">{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#EDE5CA] overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
                lang.code === locale
                  ? "bg-[#5C1A1B] text-[#F9F5E7]"
                  : "text-[#2A1A1A]/70 hover:bg-[#EDE5CA]/50 hover:text-[#5C1A1B]"
              }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
