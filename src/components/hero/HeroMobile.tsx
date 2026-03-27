import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/config/site-data";

export default function HeroMobile() {
  return (
    <div className="lg:hidden relative min-h-screen">
      {/* Full screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HERO.imageMobile}
          alt={HERO.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1A1A]/40 via-[#2A1A1A]/20 to-[#F9F5E7]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between px-7 pt-20 pb-32">
        {/* Top content */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#F9F5E7] font-semibold mb-4 drop-shadow-md">
            {HERO.badge}
          </p>
          <h1 className="text-[2.8rem] leading-[1.0] font-serif font-bold text-white drop-shadow-lg mb-5">
            {HERO.title.line1}
            <br />
            {HERO.title.line2}
            <br />
            {HERO.title.line3}
          </h1>
          <p className="text-sm text-white/90 leading-relaxed mb-10 max-w-xs drop-shadow-md">
            {HERO.descriptionMobile}
          </p>
        </div>

        {/* Bottom buttons */}
        <div className="flex flex-col gap-3 max-w-[260px]">
          <Link
            href={HERO.ctaPrimary.href}
            className="flex items-center justify-center h-12 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors shadow-lg"
          >
            {HERO.ctaPrimary.label}
          </Link>
          <Link
            href={HERO.ctaSecondary.href}
            className="flex items-center justify-center h-12 rounded-full bg-[#F9F5E7]/90 text-[#5C1A1B] text-sm font-medium hover:bg-[#F9F5E7] transition-colors shadow-lg"
          >
            {HERO.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
