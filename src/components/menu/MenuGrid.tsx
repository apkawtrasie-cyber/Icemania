import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { MENU_ITEMS } from "@/config/site-data";
import MenuCard from "./MenuCard";

interface MenuGridProps {
  className?: string;
}

const MenuGrid = forwardRef<HTMLElement, MenuGridProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-10 bg-[#F9F5E7] rounded-t-[2.5rem] py-16 lg:py-24",
          className
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {MENU_ITEMS.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

MenuGrid.displayName = "MenuGrid";

export default MenuGrid;
