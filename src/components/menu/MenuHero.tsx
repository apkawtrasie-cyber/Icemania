"use client";

import { forwardRef, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { useMenuHeroAnimation } from "@/hooks/use-menu-hero-animation";
import { useTranslation } from "@/hooks/useTranslation";

interface MenuHeroProps {
  scrollTargetRef: React.RefObject<HTMLElement | null>;
  className?: string;
}

const MenuHero = forwardRef<HTMLDivElement, MenuHeroProps>(
  ({ scrollTargetRef, className }, ref) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useMenuHeroAnimation({
      heroRef,
      contentRef,
      scrollTargetRef,
    });

    return (
      <div
        ref={(node) => {
          (heroRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(
          "relative h-screen w-full bg-[#5C1A1B] overflow-hidden",
          className
        )}
      >
        {/* Link powrotu — stały, lewy górny róg */}
        <Link
          href="/"
          className={cn(
            "absolute top-8 left-6 lg:left-16 z-10 inline-flex items-center gap-2 text-sm font-medium",
            "text-[#B4CFB0] hover:text-[#8FB88A] transition-colors"
          )}
        >
          <ArrowLeft size={16} />
          {t("menuPage.backHome")}
        </Link>

        {/* Tekst hero — animowany */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="font-serif text-6xl lg:text-[6rem] xl:text-[7rem] font-bold text-[#F9F5E7] leading-[0.95] mb-8">
            {t("menuPage.title")}
          </h1>

          <p className="text-lg lg:text-xl text-[#F9F5E7]/60 max-w-2xl leading-relaxed">
            {t("menuPage.subtitle1")}
            <br className="hidden lg:block" />
            {t("menuPage.subtitle2")}
          </p>
        </div>
      </div>
    );
  }
);

MenuHero.displayName = "MenuHero";

export default MenuHero;
