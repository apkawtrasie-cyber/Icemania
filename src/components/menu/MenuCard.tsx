"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MenuItem } from "@/config/site-data";
import { useTranslation } from "@/hooks/useTranslation";

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export default function MenuCard({ item, className }: MenuCardProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const handleAddToCart = () => {
    // TODO: dodaj logikę zapisu do koszyka (Context/localStorage)
    router.push("/koszyk");
  };

  const handleCardClick = () => {
    router.push(`/menu/${item.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "group bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer",
        "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        "flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-[#EDE5CA]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold text-[#5C1A1B] mb-3">
          {item.name}
        </h3>
        <p className="text-sm text-[#2A1A1A]/60 leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-[#5C1A1B]">
            {item.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer",
              "bg-[#B4CFB0] text-[#2A1A1A] text-xs font-bold uppercase tracking-wider",
              "hover:bg-[#8FB88A] transition-colors"
            )}
          >
            <ShoppingCart size={14} strokeWidth={2.2} />
            {t("menuPage.addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}
