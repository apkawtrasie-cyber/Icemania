"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const navLinks = [
    { href: "#menu", label: t("nav.smaki") },
    { href: "#o-nas", label: t("nav.oNas") },
    { href: "#sklep", label: t("nav.sklep") },
  ];

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // GSAP animation
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        maxHeight: "500px",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        maxHeight: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="lg:hidden overflow-hidden"
      style={{ maxHeight: 0 }}
    >
      <div className="bg-[#5C1A1B] px-6 py-8 flex flex-col items-center gap-6">
        {/* Przycisk "+" na środku — pistacja bg, wiśnia tekst → /menu */}
        <Link
          href="/menu"
          onClick={onClose}
          className="w-14 h-14 rounded-full bg-[#B4CFB0] flex items-center justify-center hover:bg-[#8FB88A] transition-colors shadow-lg"
          aria-label="Menu lodów"
        >
          <Plus size={28} strokeWidth={2.5} className="text-[#5C1A1B]" />
        </Link>

        {/* Linki — kolor pistacja */}
        <ul className="flex flex-col items-center gap-5 w-full">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="text-base font-medium text-[#B4CFB0] hover:text-[#8FB88A] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/koszyk"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-base font-medium text-[#B4CFB0] hover:text-[#8FB88A] transition-colors"
            >
              <ShoppingCart size={18} strokeWidth={1.8} />
              {t("nav.koszyk")}
            </Link>
          </li>
        </ul>

        {/* Language switcher */}
        <div className="flex justify-center">
          <LanguageSwitcher />
        </div>

        {/* CTA */}
        <Link
          href="/menu"
          onClick={onClose}
          className="mt-2 inline-block px-8 py-3 rounded-full bg-[#B4CFB0] text-[#5C1A1B] text-sm font-bold uppercase tracking-wider hover:bg-[#8FB88A] transition-colors"
        >
          {t("nav.zamowTeraz")}
        </Link>
      </div>
    </div>
  );
}
