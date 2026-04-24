"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { label: "Acasă",      href: "#hero" },
  { label: "Meniu",      href: "#menu" },
  { label: "Evenimente", href: "#events" },
  { label: "Galerie",    href: "#gallery" },
  { label: "Contact",    href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <rect width="20" height="20" x="2" y="2" rx="4"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const go = (href: string) =>
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t-[2px] border-[#F5A623] overflow-hidden" style={{ background: "#111111" }}>
      {/* Giant background text */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
        style={{ lineHeight: 0.8 }}
      >
        <div
          className="font-anton text-[#FFFFFF]"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(6rem, 20vw, 18rem)",
            letterSpacing: "-0.02em",
            opacity: 0.03,
          }}
        >
          KORONA
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Top section — logo left, columns right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14"
        >
          {/* Logo + tagline */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="relative h-16 w-60 bg-[#1E1E1E] px-2 py-1.5 border border-[#1E1E1E]" style={{ lineHeight: 0 }}>
              <Image
                src="/logo.png"
                alt="Korona Pub Social Club"
                fill
                className="object-contain object-left"
              />
            </div>
            <p
              className="text-[#999999] text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Cel mai bun pub social din Craiova. Bere rece, sport live,
              muzică bună și oameni adevărați.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-[#FFFFFF] hover:border-[#F5A623] transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-[#FFFFFF] hover:border-[#F5A623] transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              className="text-[#F5A623] text-[10px] font-black tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Navigare
            </div>
            <ul className="flex flex-col gap-2">
              {LINKS.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className="cursor-pointer text-[#999999] hover:text-[#FFFFFF] text-sm font-bold transition-colors text-left"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div
              className="text-[#F5A623] text-[10px] font-black tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Info
            </div>
            <div className="flex flex-col gap-2">
              {[
                "📍 Str. Împăratul Traian 27, Craiova",
                "📞 0735 964 474",
                "🕐 Lun–Joi: 08:00–00:00",
                "🕐 Vin–Sâm: Non-stop",
                "🕐 Dum: Închis",
              ].map(item => (
                <div key={item}
                  className="text-[#999999] text-xs"
                  style={{ fontFamily: "var(--font-barlow)" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="text-[#999999] text-xs"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            © 2025 Korona Pub Social Club · Craiova, România · Consumul responsabil de alcool este recomandat · 18+
          </span>
          <div className="flex items-center gap-4">
            <a
              href="/politica-confidentialitate"
              className="text-[#999999] text-[10px] font-black tracking-[0.2em] uppercase hover:text-[#F5A623] transition-colors"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Confidențialitate
            </a>
            <span className="text-[#1E1E1E]">|</span>
            <a
              href="/termeni"
              className="text-[#999999] text-[10px] font-black tracking-[0.2em] uppercase hover:text-[#F5A623] transition-colors"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Termeni
            </a>
            <span className="text-[#1E1E1E]">|</span>
            <button
              onClick={() => go("#hero")}
              className="cursor-pointer text-[#F5A623] text-[10px] font-black tracking-[0.25em] uppercase hover:text-[#FFFFFF] transition-colors"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              ↑ SUS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
