"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import type { MenuItem } from "@/config/site-data";
import { useTranslation } from "@/hooks/useTranslation";

interface ProductDetailProps {
  item: MenuItem;
}

export default function ProductDetail({ item }: ProductDetailProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const handleAddToCart = () => {
    // TODO: dodaj logikę zapisu do koszyka (Context/localStorage)
    router.push("/koszyk");
  };

  return (
    <div className="min-h-screen bg-[#F9F5E7]">
      {/* Back button — wraca tam skąd użytkownik przyszedł */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 pt-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#B4CFB0] hover:text-[#8FB88A] transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          {t("menuPage.back")}
        </button>
      </div>

      {/* Product */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#EDE5CA]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-4">
              {t("menuPage.artisanIceCream")}
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] leading-[1.05] mb-6">
              {item.name}
            </h1>
            <p className="text-base text-[#2A1A1A]/60 leading-relaxed mb-8">
              {item.longDescription}
            </p>

            {/* Ingredients */}
            <div className="mb-10">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#5C1A1B] font-bold mb-4">
                {t("menuPage.ingredients")}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="px-3.5 py-1.5 rounded-full bg-[#EDE5CA] text-xs text-[#2A1A1A]/70 font-medium"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-6">
              <span className="text-3xl font-bold text-[#5C1A1B]">
                {item.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-bold uppercase tracking-wider hover:bg-[#8FB88A] transition-colors cursor-pointer"
              >
                <ShoppingCart size={18} strokeWidth={2} />
                {t("menuPage.addToCart")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
