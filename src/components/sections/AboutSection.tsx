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

          {/* LEWA kolumna — tekst storytelling */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B4CFB0] font-semibold mb-5">
              O nas
            </p>
            <h2 className="font-serif text-4xl lg:text-[3.2rem] font-bold text-[#5C1A1B] leading-[1.05] mb-8">
              Ice Cream –<br />
              Rodzinna Pasja z Michowa
            </h2>

            <div className="space-y-6 text-[#2A1A1A]/70 leading-relaxed">
              <p className="text-base">
                Nasza przygoda zaczęła się na gospodarstwie. Chcieliśmy stworzyć deser, 
                który smakuje tak, jak owoce zerwane prosto z krzaka i świeże mleko u babci.
              </p>
              <p className="text-base">
                Dziś dzielimy się tym smakiem z Wami. Ice Cream to nie tylko biznes, 
                to nasz sposób na pokazanie, że prawdziwe jedzenie nie potrzebuje ulepszaczy.
              </p>
              <p className="text-base">
                Zapraszamy do naszego świata, gdzie czas płynie wolniej, a lody smakują słońcem.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
              >
                Odwiedź nas
              </a>
              <a
                href="#proces"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#B4CFB0] text-[#2A1A1A] text-sm font-medium hover:bg-[#8FB88A] transition-colors"
              >
                Jak powstają
              </a>
            </div>
          </div>

          {/* PRAWA kolumna — zdjęcie */}
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

            {/* Od 2022 badge */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#5C1A1B] flex flex-col items-center justify-center text-[#F9F5E7] shadow-xl">
              <span className="font-serif text-xs font-medium leading-none">od</span>
              <span className="font-serif text-3xl font-bold leading-tight">2022</span>
            </div>

            {/* Lokalizacja badge */}
            <div className="absolute top-6 -right-4 px-5 py-3 rounded-2xl bg-[#B4CFB0] shadow-lg">
              <p className="font-serif text-sm font-bold text-[#2A1A1A]">♥ Michów</p>
              <p className="text-xs text-[#2A1A1A]/60">Lubelskie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
