// ── ContactMap ───────────────────────────────────────────────────────────────
// Osobny komponent mapy Google. Podmiana URL → tylko zmiana w constants.

interface ContactMapProps {
  embedUrl: string;
  title?: string;
}

export default function ContactMap({
  embedUrl,
  title = "Lodziarnia Icemania - Michów",
}: ContactMapProps) {
  return (
    <div className="lg:mt-20">
      <div className="rounded-3xl bg-white shadow-lg shadow-[#5C1A1B]/5 p-4 h-[500px] lg:h-[600px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </div>
    </div>
  );
}
