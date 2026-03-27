"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

interface HeroDesktopProps {
  titleRef: React.RefObject<HTMLDivElement | null>;
  imageWrapRef: React.RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroDesktop({
  titleRef,
  imageWrapRef,
  scrollIndicatorRef,
}: HeroDesktopProps) {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:block relative h-screen w-full">
      {/* Title — LEFT side, z-index: 5 */}
      <div
        ref={titleRef}
        className="absolute inset-0 z-[5] flex flex-col justify-center px-16 xl:px-24 select-none"
      >
        <div className="max-w-[52%]">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#B4CFB0] font-semibold mb-8">
            {t("hero.badgeDesktop")}
          </p>
          <h1 className="text-[5.2rem] xl:text-[6.5rem] leading-[0.92] font-serif font-bold text-[#5C1A1B] mb-8">
            {t("hero.title.line1")}
            <br />
            {t("hero.title.line2")}
            <br />
            {t("hero.title.line3")}
          </h1>
          <p className="text-base text-[#2A1A1A]/55 max-w-xs leading-relaxed mb-12">
            {t("hero.descriptionDesktop")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors duration-200"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <Link
              href="#o-nas"
              className="px-8 py-3.5 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors duration-200"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Image — RIGHT side, z-index: 10; inline style = starting position before GSAP takes over */}
      <div
        ref={imageWrapRef}
        className="absolute overflow-hidden z-[10]"
        style={{
          left: "55vw",
          top: "20vh",
          width: "40vw",
          height: "60vh",
          borderRadius: "28px",
          backgroundColor: "#F2BB40",
        }}
      >
        <Image
          src="/hero.desktop.webp"
          alt={t("hero.imageAlt")}
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 right-16 z-[20] flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C1A1B]/40 font-medium">
          {t("hero.scrollIndicator")}
        </span>
        <div className="relative w-[1px] h-14 bg-[#5C1A1B]/15 overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-[#B4CFB0] animate-scrollLine" />
        </div>
      </div>
    </div>
  );
}
