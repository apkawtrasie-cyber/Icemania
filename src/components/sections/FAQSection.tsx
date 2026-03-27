"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const faqs = [
  {
    question: "Czy Wasze lody są bezglutenowe?",
    answer:
      "Większość naszych smaków owocowych (sorbetów) oraz lody mleczne są naturalnie bezglutenowe. O szczegóły zawsze możesz zapytać naszą obsługę!",
  },
  {
    question: "Gdzie mogę kupić lody w większym opakowaniu?",
    answer:
      "Prowadzimy sprzedaż na wynos w naszych punktach – pakujemy lody w specjalne termoboxy, abyś mógł cieszyć się nimi w domu.",
  },
  {
    question: "Czy robicie lody na zamówienie (np. na wesela)?",
    answer:
      "Tak! Obsługujemy imprezy okolicznościowe. Skontaktuj się z nami, aby ustalić szczegóły.",
  },
] as const;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#EDE5CA]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-4">
            Najczęstsze pytania
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B]">
            Masz pytanie? Mamy odpowiedź.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#EDE5CA] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F5E7]/50 transition-colors"
              >
                <span className="font-serif text-lg font-bold text-[#5C1A1B] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#5C1A1B] shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-40" : "max-h-0"
                )}
              >
                <p className="px-6 pb-6 text-[#2A1A1A]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#2A1A1A]/50 mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-[#5C1A1B] font-medium hover:underline"
          >
            <HelpCircle size={16} />
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}
