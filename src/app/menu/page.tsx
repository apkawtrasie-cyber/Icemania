"use client";

import { useRef } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Footer from "@/components/footer/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuGrid from "@/components/menu/MenuGrid";

export default function MenuPage() {
  const productsRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-[#F9F5E7]">
      <MenuHero scrollTargetRef={productsRef} />

      <MenuGrid ref={productsRef} />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#EDE5CA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-6">
            Gotowy na zamówienie?
          </h2>
          <p className="text-[#2A1A1A]/60 mb-8 max-w-xl mx-auto">
            Skontaktuj się z nami, aby złożyć zamówienie lub odwiedzić naszą pracownię.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
          >
            <MessageCircle size={16} />
            Skontaktuj się z nami
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
