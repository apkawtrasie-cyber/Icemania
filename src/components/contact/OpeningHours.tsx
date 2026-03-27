// ── OpeningHours ─────────────────────────────────────────────────────────────
// Czysta lista godzin otwarcia renderowana z tablicy.

import type { HoursEntry } from "@/constants/contact";

interface OpeningHoursProps {
  hours: readonly HoursEntry[];
}

export default function OpeningHours({ hours }: OpeningHoursProps) {
  return (
    <div className="rounded-3xl bg-[#EDE5CA]/70 p-7">
      <p className="font-semibold text-[#5C1A1B] mb-5">Godziny otwarcia</p>
      <ul className="space-y-3">
        {hours.map((h) => (
          <li key={h.day} className="flex justify-between text-sm text-[#2A1A1A]/65">
            <span>{h.day}</span>
            <span className="font-medium text-[#5C1A1B]">{h.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
