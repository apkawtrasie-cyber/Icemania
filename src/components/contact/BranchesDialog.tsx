"use client";

// ── BranchesDialog ───────────────────────────────────────────────────────────
// Modal z listą filii i przyciskiem "Jak dojechać?" (Google Maps directions).

import { X, Navigation } from "lucide-react";
import { BRANCHES } from "@/constants/contact";
import { buildMapsDirectionsUrl } from "@/utils/contact-utils";
import ContactIcon from "./ContactIcon";

interface BranchesDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function BranchesDialog({ open, onClose }: BranchesDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2A1A1A]/50 backdrop-blur-sm" />

      {/* Dialog */}
      <div
        className="relative bg-[#F9F5E7] rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#F9F5E7] rounded-t-3xl px-7 pt-7 pb-4 border-b border-[#EDE5CA] flex items-center justify-between z-10">
          <h3 className="font-serif text-2xl font-bold text-[#5C1A1B]">
            Nasze lokalizacje
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#EDE5CA] flex items-center justify-center hover:bg-[#ddd5b4] transition-colors"
            aria-label="Zamknij"
          >
            <X size={18} className="text-[#5C1A1B]" />
          </button>
        </div>

        {/* Branch list */}
        <div className="px-7 py-6 space-y-4">
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-2xl p-5 border border-[#EDE5CA]"
            >
              <div className="flex items-start gap-4">
                <ContactIcon name="pin" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#5C1A1B] mb-1">
                    {branch.name}
                  </p>
                  <p className="text-[#2A1A1A]/55 text-sm leading-relaxed">
                    {branch.address}
                  </p>
                  <p className="text-[#2A1A1A]/40 text-xs mt-1">
                    {branch.hours}
                  </p>
                </div>
              </div>
              <a
                href={buildMapsDirectionsUrl(branch.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
              >
                <Navigation size={16} />
                Jak dojechać?
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
