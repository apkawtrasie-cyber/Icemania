// ── OpeningHours ─────────────────────────────────────────────────────────────
// Czysta lista godzin otwarcia renderowana z tablicy.

"use client";

import type { HoursEntry } from "@/constants/contact";
import { Clock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface OpeningHoursProps {
  hours: readonly HoursEntry[];
}

export default function OpeningHours({ hours }: OpeningHoursProps) {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl bg-[#EDE5CA]/70 p-7">
      <h4 className="flex items-center gap-2 text-sm font-bold text-[#5C1A1B] uppercase tracking-wide mb-4">
        <Clock size={16} />
        {t("contact.openingHours")}
      </h4>
      <ul className="space-y-3">
        {hours.map((h) => (
          <li key={h.day} className="flex justify-between text-sm text-[#2A1A1B]/65">
            <span>{h.day}</span>
            <span className="font-medium text-[#5C1A1B]">{h.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
