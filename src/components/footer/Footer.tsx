import Link from "next/link";

const footerLinks = {
  "Social links": [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Facebook" },
    { href: "#", label: "TikTok" },
  ],
  "O nas": [
    { href: "#o-nas", label: "Nasza historia" },
    { href: "#zamowienie", label: "Jak zamawiać" },
    { href: "#sklep", label: "Sklep" },
  ],
  Contact: [
    { href: "mailto:andrzejmich2@gmail.com", label: "andrzejmich2@gmail.com" },
    { href: "tel:+41782067379", label: "+41 782 067 379" },
    { href: "#kontakt", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#5C1A1B] text-[#F9F5E7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 pb-10" style={{ paddingBottom: "calc(6rem + env(safe-area-inset-bottom,0px))" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-serif text-3xl font-bold mb-5">
              Ice<span className="text-[#B4CFB0]">mania</span>
            </Link>
            <p className="text-[#F9F5E7]/45 text-sm leading-relaxed mb-2 max-w-[180px]">
              Made with care in Kraków
            </p>
            <div className="w-8 h-px bg-[#B4CFB0]/40 mb-6" />
            <p className="text-[#F9F5E7]/40 text-xs leading-relaxed max-w-[180px]">
              Prawdziwe lody. Bez pośpiechu.
              Rzemieślniczo od 2022.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#F9F5E7]/35 mb-6">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F9F5E7]/55 hover:text-[#B4CFB0] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F9F5E7]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#F9F5E7]/25">
            © {new Date().getFullYear()} Icemania. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-[#F9F5E7]/25">
            Made with <span className="text-[#B4CFB0]">♥</span> i naturalnych składników
          </p>
        </div>
      </div>
    </footer>
  );
}
