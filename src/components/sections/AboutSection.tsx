const points = [
  {
    num: "1.",
    title: "Lokalne Michowskie mleko",
    desc: "Mleko pochodzi wprost z Michowa — od lokalnych rolników, którym ufamy od lat.",
  },
  {
    num: "2.",
    title: "Owoce z naszej farmy",
    desc: "Sezonowe owoce zbieramy własnoręcznie z naszego sadu — pełne smaku, bez pośredników.",
  },
  {
    num: "3.",
    title: "Ręcznie przygotowane w małych partiach",
    desc: "Każda porcja powstaje w naszej pracowni — małe partie, pełna kontrola jakości, prawdziwy smak.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      className="relative w-full bg-[#F9F5E7] py-24 lg:py-36 overflow-hidden"
    >
      {/* Dekoracyjny okrąg */}
      <div className="absolute -left-48 bottom-0 w-[500px] h-[500px] rounded-full bg-[#B4CFB0]/15 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEWA kolumna — tekst + numerowana lista */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5">
              Dlaczego my
            </p>
            <h2 className="font-serif text-5xl lg:text-[3.6rem] font-bold text-[#5C1A1B] leading-[1.0] mb-12">
              Smakuj Radość Domu
            </h2>

            {/* Numerowana lista jak na makiecie */}
            <div className="space-y-10">
              {points.map((p) => (
                <div key={p.num} className="flex gap-6 items-start">
                  <span className="font-serif text-4xl font-bold text-[#5C1A1B]/20 leading-none shrink-0 w-10">
                    {p.num}
                  </span>
                  <div>
                    <p className="font-serif text-xl font-bold text-[#5C1A1B] mb-1.5">
                      {p.title}
                    </p>
                    <p className="text-sm text-[#2A1A1A]/55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/menu"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
              >
                Zamów teraz
              </a>
            </div>
          </div>

          {/* PRAWA kolumna — zdjęcie maszyny do lodów (jak na makiecie) */}
          <div className="relative">
            {/* Główne zdjęcie */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ backgroundColor: "#B4CFB0" }}
            >
              <img
                src="https://images.unsplash.com/photo-1633933358116-a27b902fad35?auto=format&fit=crop&w=800&q=85"
                alt="Trzy gałki lodów w rożkach — pistacjowe, truskawkowe, śmietankowe"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Od 2012 badge */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#5C1A1B] flex flex-col items-center justify-center text-[#F9F5E7] shadow-xl">
              <span className="font-serif text-xs font-medium leading-none">od</span>
              <span className="font-serif text-3xl font-bold leading-tight">2022</span>
            </div>

            {/* Pistacja badge */}
            <div className="absolute top-6 -right-4 px-5 py-3 rounded-2xl bg-[#B4CFB0] shadow-lg">
              <p className="font-serif text-sm font-bold text-[#2A1A1A]">♥ Kraków</p>
              <p className="text-xs text-[#2A1A1A]/60">Made with care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
