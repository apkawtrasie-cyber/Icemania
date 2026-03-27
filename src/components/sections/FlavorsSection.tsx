"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { FLAVORS } from "@/config/site-data";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/config/translations";

const flavorNameKeys: Record<string, TranslationKey> = {
  "Słony Karmel z Himalajów": "flavor.slonyKarmel.name",
  "Sycylijska Pistacja": "flavor.pistacja.name",
  "Palone Masło z Orzechami": "flavor.paloneMaslo.name",
  "Wegańska Ciemna Czekolada": "flavor.czekolada.name",
  "Malina z Naszej Farmy": "flavor.malina.name",
  "Wanilia Bourbon": "flavor.wanilia.name",
};

const flavorTagKeys: Record<string, TranslationKey> = {
  "Delikatny": "flavor.slonyKarmel.tag",
  "Półpłynna konsystencja": "flavor.pistacja.tag",
  "Chrupiące kawałki": "flavor.paloneMaslo.tag",
  "Bogaty smak": "flavor.czekolada.tag",
  "Sezonowy": "flavor.malina.tag",
  "Klasyczny": "flavor.wanilia.tag",
};

export default function FlavorsSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(
        Array.from(cards),
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          } as ScrollTrigger.Vars,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="w-full bg-[#F9F5E7] overflow-hidden"
    >
      {/* ── Banner przejściowy ─────────────────────────────────────────────── */}
      <div className="py-14 lg:py-20 text-center px-6 border-t border-[#EDE5CA]">
        <p className="font-serif text-2xl lg:text-3xl font-bold text-[#5C1A1B] italic">
          {t("flavors.banner")}
        </p>
      </div>

      {/* ── Nagłówek sekcji ───────────────────────────────────────────────── */}
      <div className="text-center px-6 mb-12">
        <h2 className="font-serif text-4xl lg:text-[3.6rem] font-bold text-[#5C1A1B] uppercase tracking-wide leading-[1.05] mb-5">
          {t("flavors.heading")}
        </h2>
        <p className="text-[#2A1A1A]/50 text-sm lg:text-base leading-relaxed">
          {t("flavors.subheading")}
        </p>
      </div>

      {/* ── Horizontal scroll ─────────────────────────────────────────────── */}
      <div className="-mx-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div ref={cardsRef} className="flex gap-5 px-6 lg:px-16 pb-16 min-w-max">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.name}
              onClick={() => router.push(`/menu/${flavor.menuItemId}`)}
              className="group shrink-0 w-40 lg:w-52 bg-white rounded-2xl overflow-hidden cursor-pointer hover:bg-[#FDFAF3] transition-colors duration-300 shadow-sm hover:shadow-lg flex flex-col"
            >
              {/* Zdjęcie kwadratowe */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                <img
                  src={flavor.image}
                  alt={flavorNameKeys[flavor.name] ? t(flavorNameKeys[flavor.name]) : flavor.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Treść */}
              <div className="p-4 lg:p-5 flex flex-col h-full">
                <h3 className="font-serif text-xs lg:text-sm font-bold text-[#2A1A1A] uppercase tracking-wide leading-snug">
                  {flavorNameKeys[flavor.name] ? t(flavorNameKeys[flavor.name]) : flavor.name}
                </h3>
                <p className="text-[11px] text-[#2A1A1A]/45 leading-tight mt-1.5">
                  {flavorTagKeys[flavor.tag] ? t(flavorTagKeys[flavor.tag]) : flavor.tag}
                </p>
                <p className="text-sm font-semibold text-[#2A1A1A] mt-2">
                  {flavor.price}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/koszyk");
                  }}
                  className="mt-auto pt-3 w-full py-2.5 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-[#8FB88A] transition-colors duration-200 cursor-pointer"
                >
                  {t("flavors.addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
