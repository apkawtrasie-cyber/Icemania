"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, IceCreamCone, ShoppingCart, UserRound } from "lucide-react";
import { cn } from "@/lib/cn";

const bottomLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#menu", label: "Smaki", icon: IceCreamCone },
  { href: "/menu", label: "Menu", icon: null },
  { href: "/koszyk", label: "Koszyk", icon: ShoppingCart },
  { href: "/konto", label: "Konto", icon: UserRound },
] as const;

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#F9F5E7]/95 backdrop-blur-md border-t border-[#EDE5CA] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16 px-2">
        {bottomLinks.map((link) => {
          const isCenter = link.icon === null;
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href.split("#")[0] || "/");

          if (isCenter) {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative -mt-5 w-14 h-14 rounded-full bg-[#B4CFB0] flex items-center justify-center shadow-lg hover:bg-[#8FB88A] transition-colors"
                aria-label={link.label}
              >
                <span className="text-[#5C1A1B] text-2xl font-bold leading-none">+</span>
              </Link>
            );
          }

          const Icon = link.icon!;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 transition-colors",
                isActive
                  ? "text-[#5C1A1B]"
                  : "text-[#2A1A1A]/40 hover:text-[#5C1A1B]"
              )}
            >
              <Icon size={20} strokeWidth={1.8} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
