"use client";

import { motion } from "framer-motion";

const STATS = [
  { number: "meniul",    label: "ZILEI",        sub: "Proaspăt · Gustos · Accesibil" },
  { number: "MECIURI",  label: "LIVE",         sub: "Fotbal · Champions League" },
  { number: "PETRECERI",label: "VIN + SÂM",    sub: "DJ Techno · House · Non-stop" },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#1A1500]">

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[2px] bg-[#F5A623]" />
          <span className="section-label">De ce Korona</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-anton text-[#FFFFFF] leading-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 0.9,
              }}
            >
              CEL MAI BUN<br />
              <span style={{ color: "#F5A623" }}>PUB</span> DIN<br />
              CRAIOVA.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[#999999] text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}>
              Korona Pub Social Club e locul unde Craiova se adună seară de seară.
              Fotbal live, DJ sets techno &amp; house în fiecare
              weekend, meniul zilei proaspăt gătit și bere rece — totul într-un singur loc.
              Simplu, autentic, al tău.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Happy Hour in fiecare sambata intre 22:00–23:00",
                "Fotbal live: Champions League, LaLiga, SuperLiga",
                "DJ Sets techno & house în fiecare vineri de la 22:00",
                "Muzică live in fiecare sâmbătă seara",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 border border-[#F5A623] shrink-0" />
                  <span className="text-[#FFFFFF] text-sm"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── YELLOW STATS BAND ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: "#F5A623" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#111111]/20">
            {STATS.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-0 md:px-10 py-10 first:pl-0 last:pr-0 cursor-default group"
              >
                <div
                  className="font-anton text-[#111111] leading-none mb-3 group-hover:opacity-60 transition-opacity"
                  style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.4rem, 5.5vw, 5rem)", lineHeight: 0.88 }}
                >
                  {s.number}
                </div>
                <div
                  className="font-anton text-[#111111] leading-none mb-4"
                  style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(1.4rem, 3.5vw, 3rem)", lineHeight: 0.92 }}
                >
                  {s.label}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-[#111111]/35" />
                  <span className="text-[#111111] text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}>
                    {s.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
