"use client";

import { useState, useCallback } from "react";
import { Navigation } from "lucide-react";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_MAP_EMBED_URL,
} from "@/constants/contact";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import OpeningHours from "@/components/contact/OpeningHours";
import ContactMap from "@/components/contact/ContactMap";
import BranchesDialog from "@/components/contact/BranchesDialog";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactSection() {
  const [branchesOpen, setBranchesOpen] = useState(false);
  const openBranches = useCallback(() => setBranchesOpen(true), []);
  const closeBranches = useCallback(() => setBranchesOpen(false), []);
  const { t } = useTranslation();

  return (
    <section id="kontakt" className="w-full bg-[#F9F5E7] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] mb-4">
            {t("contact.heading")}
          </h2>
          <p className="text-lg text-[#2A1A1A]/60">{t("contact.subheading")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <button
              onClick={openBranches}
              className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5 hover:text-[#5C1A1B] transition-colors cursor-pointer"
            >
              {t("contact.visitUs")}
            </button>
            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] leading-[1.0] mb-10">
              {t("contact.whereToFind")}<br /><em className="italic">{t("contact.whereToFindEm")}</em>
            </h3>

            <ContactInfoCard icon="pin" label={t("contact.address")}>
              <p className="text-[#2A1A1A]/55 text-sm leading-relaxed">
                {CONTACT_ADDRESS.lines.map((line, i) => (
                  <span key={i}>{line}{i < CONTACT_ADDRESS.lines.length - 1 && <br />}</span>
                ))}
              </p>
            </ContactInfoCard>

            <ContactInfoCard icon="phone" label={t("contact.phone")}>
              <a href={CONTACT_PHONE.href} className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors">
                {CONTACT_PHONE.display}
              </a>
            </ContactInfoCard>

            <ContactInfoCard icon="email" label={t("contact.email")} className="mb-8">
              <a href={CONTACT_EMAIL.href} className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors">
                {CONTACT_EMAIL.display}
              </a>
            </ContactInfoCard>

            <button
              onClick={openBranches}
              className="mb-12 flex items-center gap-2 px-6 py-3 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
            >
              <Navigation size={16} />
              {t("contact.seeAllBranches")}
            </button>

            <OpeningHours hours={CONTACT_HOURS} />
          </div>

          <ContactMap embedUrl={CONTACT_MAP_EMBED_URL} />
        </div>
      </div>

      <BranchesDialog open={branchesOpen} onClose={closeBranches} />
    </section>
  );
}
