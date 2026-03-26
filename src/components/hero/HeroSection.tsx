"use client";

import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/use-hero-animation";
import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useHeroAnimation({ sectionRef, imageWrapRef, titleRef, scrollIndicatorRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F9F5E7]"
    >
      <HeroMobile />
      <HeroDesktop
        titleRef={titleRef}
        imageWrapRef={imageWrapRef}
        scrollIndicatorRef={scrollIndicatorRef}
      />
    </section>
  );
}
