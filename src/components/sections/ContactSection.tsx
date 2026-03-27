"use client";

const hours = [
  { day: "Codziennie", time: "11:00 – 20:00" },
];

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="w-full bg-[#F9F5E7] py-24 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* CTA Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] mb-4">
            Masz ochotę na prawdziwe lody?
          </h2>
          <p className="text-lg text-[#2A1A1A]/60">
            Czekamy na Was codziennie od 11:00 do 20:00
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Lewa kolumna — info */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5">
              Odwiedź nas
            </p>
            <h3 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] leading-[1.0] mb-10">
              Gdzie nas
              <br />
              <em className="italic">znajdziesz?</em>
            </h3>

            {/* Adres */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE5CA] flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#5C1A1B]"
                >
                  <path
                    d="M10 11a3 3 0 100-6 3 3 0 000 6z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#5C1A1B] mb-1">
                  Lodziarnia Icemania
                </p>
                <p className="text-[#2A1A1A]/55 text-sm leading-relaxed">
                  ul. Główna 42, 21-050 Michów
                  <br />
                  woj. lubelskie, Polska
                </p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-2xl bg-[#EDE5CA] flex items-center justify-center shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#5C1A1B]"
                >
                  <path
                    d="M3 4a1 1 0 011-1h2.5a1 1 0 01.95.684l.8 2.4a1 1 0 01-.23 1.02L6.8 8.326a11.03 11.03 0 005.874 5.874l1.222-1.22a1 1 0 011.02-.23l2.4.8A1 1 0 0118 14.5V17a1 1 0 01-1 1C7.163 18 2 12.837 2 6a4 4 0 011-2.665V4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#5C1A1B] mb-1">Telefon</p>
                <a
                  href="tel:+48812345678"
                  className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors"
                >
                  +48 81 234 56 78
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-12">
              <div
                className="w-12 h-12 rounded-2xl bg-[#EDE5CA] flex items-center justify-center shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#5C1A1B]"
                >
                  <path
                    d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 5l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#5C1A1B] mb-1">E-mail</p>
                <a
                  href="mailto:cześć@icemania.pl"
                  className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors"
                >
                  cześć@icemania.pl
                </a>
              </div>
            </div>

            {/* Godziny otwarcia */}
            <div className="rounded-3xl bg-[#EDE5CA]/70 p-7">
              <p className="font-semibold text-[#5C1A1B] mb-5">
                Godziny otwarcia
              </p>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm text-[#2A1A1A]/65"
                  >
                    <span>{h.day}</span>
                    <span className="font-medium text-[#5C1A1B]">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prawa kolumna — mapa Google */}
          <div className="lg:mt-20">
            <div className="rounded-3xl bg-white shadow-lg shadow-[#5C1A1B]/5 p-4 h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.0!2d22.3!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAwLjAiTiAyMsKwMTgnMDAuMCJF!5e0!3m2!1spl!2spl!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lodziarnia Icemania - Michów"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
