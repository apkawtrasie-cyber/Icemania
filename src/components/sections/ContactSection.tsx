"use client";

const hours = [
  { day: "Poniedziałek – Piątek", time: "12:00 – 20:00" },
  { day: "Sobota", time: "10:00 – 21:00" },
  { day: "Niedziela", time: "11:00 – 19:00" },
];

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="w-full bg-[#F9F5E7] py-24 lg:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Lewa kolumna — info */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5">
              Odwiedź nas
            </p>
            <h2 className="font-serif text-5xl lg:text-[3.6rem] font-bold text-[#5C1A1B] leading-[1.0] mb-10">
              Gdzie nas
              <br />
              <em className="italic">znajdziesz?</em>
            </h2>

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
                  ul. Słodka 14, 00-001 Warszawa
                  <br />
                  Śródmieście, przy Placu Zbawiciela
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
                  href="tel:+48123456789"
                  className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors"
                >
                  +48 123 456 789
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
                  href="mailto:czesc@icemania.pl"
                  className="text-[#2A1A1A]/55 text-sm hover:text-[#5C1A1B] transition-colors"
                >
                  czesc@icemania.pl
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

          {/* Prawa kolumna — formularz */}
          <div className="lg:mt-20">
            <div className="rounded-3xl bg-white shadow-lg shadow-[#5C1A1B]/5 p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#5C1A1B] mb-8">
                Napisz do nas
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#2A1A1A]/50 uppercase tracking-wider mb-2">
                      Imię
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl border border-[#EDE5CA] bg-[#F9F5E7] text-[#2A1A1A] text-sm placeholder:text-[#2A1A1A]/30 focus:outline-none focus:border-[#5C1A1B] transition-colors"
                      placeholder="Anna"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#2A1A1A]/50 uppercase tracking-wider mb-2">
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-xl border border-[#EDE5CA] bg-[#F9F5E7] text-[#2A1A1A] text-sm placeholder:text-[#2A1A1A]/30 focus:outline-none focus:border-[#5C1A1B] transition-colors"
                      placeholder="Kowalska"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2A1A1A]/50 uppercase tracking-wider mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full h-12 px-4 rounded-xl border border-[#EDE5CA] bg-[#F9F5E7] text-[#2A1A1A] text-sm placeholder:text-[#2A1A1A]/30 focus:outline-none focus:border-[#5C1A1B] transition-colors"
                    placeholder="anna@email.pl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2A1A1A]/50 uppercase tracking-wider mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-[#F9F5E7] text-[#2A1A1A] text-sm placeholder:text-[#2A1A1A]/30 focus:outline-none focus:border-[#5C1A1B] transition-colors resize-none"
                    placeholder="Zapytaj o smaki, zamówienia i catering..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors duration-200 py-3.5"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
