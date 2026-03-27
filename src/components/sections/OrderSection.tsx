"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function OrderSection() {
  const { t } = useTranslation();

  const steps = [
    { number: "01", title: t("order.step1.title"), desc: t("order.step1.desc") },
    { number: "02", title: t("order.step2.title"), desc: t("order.step2.desc") },
    { number: "03", title: t("order.step3.title"), desc: t("order.step3.desc") },
  ];

  return (
    <section
      id="zamowienie"
      className="w-full bg-[#EDE5CA]/50 py-24 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5">
            {t("order.badge")}
          </p>
          <h2 className="font-serif text-5xl lg:text-[3.6rem] font-bold text-[#5C1A1B] leading-[1.0]">
            {t("order.heading")}{" "}
            <em className="italic">{t("order.headingEm")}</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-8 rounded-3xl bg-white shadow-sm border border-[#EDE5CA]"
            >
              {/* Numer kroku */}
              <div className="font-serif text-7xl font-bold text-[#EDE5CA] leading-none mb-6 select-none">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5C1A1B] mb-3">
                {step.title}
              </h3>
              <p className="text-[#2A1A1A]/55 text-sm leading-relaxed">
                {step.desc}
              </p>
              {/* Strzałka łącząca */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-[#B4CFB0]"
                  >
                    <path
                      d="M8 16h16M18 10l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+48123456789"
            className="flex items-center gap-3 px-9 py-3.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 3a1 1 0 011-1h2a1 1 0 01.95.684l.6 1.8a1 1 0 01-.23 1.02l-.98.98a9.03 9.03 0 004.19 4.19l.98-.98a1 1 0 011.02-.23l1.8.6A1 1 0 0114 11v2a1 1 0 01-1 1C6.373 14 2 9.627 2 4a2 2 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            {t("order.callNow")}
          </a>
          <a
            href="#kontakt"
            className="flex items-center gap-3 px-9 py-3.5 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
          >
            {t("order.writeUs")}
          </a>
        </div>
      </div>
    </section>
  );
}
