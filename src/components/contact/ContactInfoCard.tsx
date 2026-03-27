// ── ContactInfoCard ──────────────────────────────────────────────────────────
// Atomowy kafelek: ikona + label + treść (children).

import type { ReactNode } from "react";
import ContactIcon, { type IconName } from "./ContactIcon";

interface ContactInfoCardProps {
  icon: IconName;
  label: string;
  children: ReactNode;
  className?: string;
}

export default function ContactInfoCard({
  icon,
  label,
  children,
  className = "mb-8",
}: ContactInfoCardProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <ContactIcon name={icon} />
      <div>
        <p className="font-semibold text-[#5C1A1B] mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}
