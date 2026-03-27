// ── ContactIcon ──────────────────────────────────────────────────────────────
// Dynamiczne serwowanie ikon SVG na podstawie typu.

import type { ReactNode } from "react";

const ICON_PATHS: Record<string, ReactNode> = {
  pin: (
    <>
      <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path d="M3 4a1 1 0 011-1h2.5a1 1 0 01.95.684l.8 2.4a1 1 0 01-.23 1.02L6.8 8.326a11.03 11.03 0 005.874 5.874l1.222-1.22a1 1 0 011.02-.23l2.4.8A1 1 0 0118 14.5V17a1 1 0 01-1 1C7.163 18 2 12.837 2 6a4 4 0 011-2.665V4z" stroke="currentColor" strokeWidth="1.5" />
  ),
  email: (
    <>
      <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 5l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export type IconName = keyof typeof ICON_PATHS;

interface ContactIconProps {
  name: IconName;
}

export default function ContactIcon({ name }: ContactIconProps) {
  return (
    <div className="w-12 h-12 rounded-2xl bg-[#EDE5CA] flex items-center justify-center shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#5C1A1B]">
        {ICON_PATHS[name]}
      </svg>
    </div>
  );
}
