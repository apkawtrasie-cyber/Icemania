"use client";

import { Milk, Cherry, Hand } from "lucide-react";

const steps = [
  {
    icon: Milk,
    title: "Mleko z Michowa",
    description:
      "Nie używamy proszku. Nasze lody powstają na bazie świeżego mleka i śmietanki z lokalnego gospodarstwa.",
  },
  {
    icon: Cherry,
    title: "Owoce z naszej Farmy",
    description:
      "Truskawki, maliny i porzeczki zbieramy sami. Wiemy, co jecie, bo sami to wyhodowaliśmy.",
  },
  {
    icon: Hand,
    title: "Tradycyjna produkcja",
    description:
      "Kręcimy lody małymi partiami, dbając o to, by każda gałka była idealnie kremowa.",
  },
] as const;

export default function ProcessSection() {
  return (
    <section id="proces" className="py-20 lg:py-28 bg-[#EDE5CA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-4">
            Droga od Pola do Wafelka
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-4">
            Nasz przepis jest prosty: Natura.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                {/* Icon circle */}
                <div className="w-24 h-24 rounded-full bg-[#F9F5E7] flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-10 h-10 text-[#5C1A1B]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-[#5C1A1B] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#2A1A1A]/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
