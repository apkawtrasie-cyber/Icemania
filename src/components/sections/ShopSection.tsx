"use client";

import { useRouter } from "next/navigation";
import { POPULAR_PRODUCTS } from "@/config/site-data";
import { useTranslation } from "@/hooks/useTranslation";

export default function ShopSection() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <section id="sklep" className="w-full bg-[#EDE5CA]/40 py-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Baner CTA — zielone koło jak na makiecie */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-[420px]">

          {/* LEWY panel — zielony okrąg z hasłem */}
          <div className="flex items-center justify-center py-20 lg:py-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-[#B4CFB0] flex flex-col items-center justify-center text-center p-8 shadow-lg">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2A1A1A] leading-[1.05] mb-6">
                {t("shop.heading.line1")}
                <br />
                {t("shop.heading.line2")}
                <br />
                {t("shop.heading.line3")}
              </h2>
              <a
                href="/menu"
                className="px-7 py-2.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-xs font-bold uppercase tracking-wider hover:bg-[#3d1112] transition-colors"
              >
                {t("shop.orderNow")}
              </a>
            </div>
          </div>

          {/* PRAWY panel — popularne kubełki */}
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#EDE5CA]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-4">
              {t("shop.popularBuckets")}
            </p>
            <h3 className="font-serif text-2xl font-bold text-[#5C1A1B] mb-10">
              {t("shop.takeHome")}
            </h3>
            <div className="flex gap-6">
              {POPULAR_PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  onClick={() => router.push(`/menu/${p.menuItemId}`)}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#EDE5CA] group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-[#2A1A1A]/60 font-medium text-center max-w-[80px] leading-tight">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/menu"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#5C1A1B] hover:text-[#3d1112] transition-colors"
            >
              {t("shop.seeFullMenu")}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
