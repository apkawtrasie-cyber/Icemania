"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShoppingCart, UserRound } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const oNas = document.getElementById("o-nas");
      const threshold = oNas
        ? oNas.getBoundingClientRect().top + window.scrollY - 80
        : window.innerHeight * 1.8;
      setScrolled(window.scrollY >= threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#menu", label: t("nav.smaki") },
    { href: "#o-nas", label: t("nav.oNas") },
    { href: "#sklep", label: t("nav.sklep") },
  ];

  return (
    <header
      ref={navRef}
      className={`hidden lg:block fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "bg-[#F9F5E7]/95 backdrop-blur-md shadow-sm translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-[#5C1A1B]"
        >
          Ice<span className="text-[#B4CFB0]">mania</span>
        </Link>

        {/* Desktop Links */}
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#2A1A1A]/70 hover:text-[#5C1A1B] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: Language + Konto + Koszyk + CTA */}
        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          <Link
            href="/konto"
            className="relative text-[#2A1A1A]/70 hover:text-[#5C1A1B] transition-colors"
            aria-label={t("nav.konto")}
          >
            <UserRound size={22} strokeWidth={1.8} />
          </Link>
          <Link
            href="/koszyk"
            className="relative text-[#2A1A1A]/70 hover:text-[#5C1A1B] transition-colors"
            aria-label={t("nav.koszyk")}
          >
            <ShoppingCart size={22} strokeWidth={1.8} />
          </Link>
          <Link
            href="/menu"
            className="px-6 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors duration-200"
          >
            {t("nav.zamowTeraz")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
