"use client";

import { type RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface UseHeroAnimationRefs {
  sectionRef: RefObject<HTMLElement | null>;
  imageWrapRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation({
  sectionRef,
  imageWrapRef,
  titleRef,
  scrollIndicatorRef,
}: UseHeroAnimationRefs): void {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ─── DESKTOP (≥1024px): scroll-linked animation ─────────────────────
      mm.add("(min-width: 1024px)", () => {
        gsap.set(imageWrapRef.current, {
          position: "absolute",
          width: "40vw",
          height: "60vh",
          left: "55vw",
          top: "20vh",
          borderRadius: "28px",
          zIndex: 10,
          overflow: "hidden",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          } as ScrollTrigger.Vars,
        });

        // Image grows from right side to fullscreen
        tl.to(
          imageWrapRef.current,
          {
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            borderRadius: 0,
            ease: "none",
          },
          0
        );

        // Title fades out as image covers it
        tl.to(
          titleRef.current,
          {
            opacity: 0,
            x: -30,
            ease: "none",
          },
          0.25
        );

        // Scroll indicator fades at start
        tl.to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            ease: "none",
          },
          0
        );

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      // ─── MOBILE (<1024px): no animation ─────────────────────────────────
      mm.add("(max-width: 1023px)", () => {
        gsap.set(imageWrapRef.current, { clearProps: "all" });
      });
    },
    { scope: sectionRef }
  );
}
