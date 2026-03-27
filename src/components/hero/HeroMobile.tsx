"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function HeroMobile() {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      {/* 1) Sticky image — pinned, shows original photo from top */}
      <div className="sticky top-0 z-0 w-full overflow-hidden">
        <Image
          src="/hero.mobile.webp"
          alt={t("hero.imageAlt")}
          width={1080}
          height={1350}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>

      {/* 2) Content block — scrolls over the sticky image */}
      <div className="relative z-10 bg-[#F9F5E7] -mt-6 px-7 pt-10 pb-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#B4CFB0] font-semibold mb-4">
          {t("hero.badge")}
        </p>
        <h1 className="text-[2.6rem] leading-[1.0] font-serif font-bold text-[#5C1A1B] mb-5">
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2")}
          <br />
          {t("hero.title.line3")}
        </h1>
        <p className="text-sm text-[#2A1A1A]/55 leading-relaxed mb-10 max-w-xs">
          {t("hero.descriptionMobile")}
        </p>
        <div className="flex flex-col gap-3 max-w-[260px]">
          <Link
            href="#menu"
            className="flex items-center justify-center h-12 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
          >
            {t("hero.ctaPrimary")}
          </Link>
          <Link
            href="#o-nas"
            className="flex items-center justify-center h-12 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </div>
    </div>
  );
}
