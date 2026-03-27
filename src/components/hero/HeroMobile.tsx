import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/config/site-data";

export default function HeroMobile() {
  return (
    <div className="lg:hidden">
      {/* 1) Sticky image — pinned, shows original photo from top */}
      <div className="sticky top-0 z-0 w-full overflow-hidden">
        <Image
          src={HERO.imageMobile}
          alt={HERO.imageAlt}
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
          {HERO.badge}
        </p>
        <h1 className="text-[2.6rem] leading-[1.0] font-serif font-bold text-[#5C1A1B] mb-5">
          {HERO.title.line1}
          <br />
          {HERO.title.line2}
          <br />
          {HERO.title.line3}
        </h1>
        <p className="text-sm text-[#2A1A1A]/55 leading-relaxed mb-10 max-w-xs">
          {HERO.descriptionMobile}
        </p>
        <div className="flex flex-col gap-3 max-w-[260px]">
          <Link
            href={HERO.ctaPrimary.href}
            className="flex items-center justify-center h-12 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
          >
            {HERO.ctaPrimary.label}
          </Link>
          <Link
            href={HERO.ctaSecondary.href}
            className="flex items-center justify-center h-12 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
          >
            {HERO.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
