"use client";

import { type RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface UseMenuHeroAnimationOptions {
  heroRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  scrollTargetRef: RefObject<HTMLElement | null>;
  autoScrollDelay?: number;
}

export function useMenuHeroAnimation({
  heroRef,
  contentRef,
  scrollTargetRef,
  autoScrollDelay = 1,
}: UseMenuHeroAnimationOptions): void {
  useGSAP(
    () => {
      // 1. Pin + scrub: tekst zwija/rozwija się płynnie ze scrollem w obie strony
      const st = ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=50%",
        pin: true,
        scrub: 0.6,
        animation: gsap.to(contentRef.current, {
          scale: 0.5,
          opacity: 0,
          ease: "none",
        }),
      });

      // 2. Auto-scroll po delay: przewiń do sekcji produktów
      const autoTimer = gsap.delayedCall(autoScrollDelay, () => {
        scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
      });

      // Jeśli user sam zacznie scrollować przed auto-scroll, anuluj
      const cancelAutoScroll = () => {
        autoTimer.kill();
        window.removeEventListener("wheel", cancelAutoScroll);
        window.removeEventListener("touchstart", cancelAutoScroll);
      };
      window.addEventListener("wheel", cancelAutoScroll, { once: true });
      window.addEventListener("touchstart", cancelAutoScroll, { once: true });
    },
    { scope: heroRef }
  );
}
