"use client";

import { useRef } from "react";
import { Leaf, MapPin, Clock, Download } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const benefits = [
  {
    icon: Leaf,
    title: "Czysta Etykieta",
    description: "Produkt 100% naturalny, bez sztucznych aromatów.",
  },
  {
    icon: MapPin,
    title: "Lokalność",
    description: "Przyciągnij klientów, którzy cenią produkty prosto od rolnika.",
  },
  {
    icon: Clock,
    title: "Wsparcie",
    description: "Dostarczamy lody zawsze świeże i na czas.",
  },
] as const;

export default function B2BSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Cards staggered from bottom
      gsap.from("[data-card]", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "[data-card]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // CTA fade in
      gsap.from("[data-cta]", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cta]",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="b2b" className="py-20 lg:py-28 bg-[#F9F5E7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-4">
            Współpraca
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-4">
            Serwuj Ice Cream w swoim lokalu!
          </h2>
          <p className="text-lg text-[#2A1A1A]/60 max-w-2xl mx-auto">
            Szukasz produktu, który wyróżni Cię na tle konkurencji?
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                data-card
                className="bg-white rounded-2xl p-8 border border-[#EDE5CA] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#B4CFB0]/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-[#5C1A1B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#5C1A1B] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#2A1A1A]/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div data-cta className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/oferta-b2b.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
            >
              <Download size={18} />
              Pobierz ofertę dla partnerów
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
            >
              Zapytaj o współpracę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
