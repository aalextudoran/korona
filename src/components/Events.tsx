"use client";

import { motion } from "framer-motion";

type Poster = {
  id: number;
  overline: string;
  title: string;
  subtitle: string;
  when: string;
  time: string;
  tags: string[];
  variant: "warm" | "dark" | "card";
};

const POSTERS: Poster[] = [
  {
    id: 1,
    overline: "în fiecare sâmbătă",
    title: "CONCERT\nLIVE",
    subtitle: "Artiști live pe scena Korona",
    when: "SAT",
    time: "21:00 → 01:00",
    tags: ["Concert", "Live", "Sâmbătă"],
    variant: "warm",
  },
  {
    id: 2,
    overline: "în fiecare vineri",
    title: "DJ\nNIGHT",
    subtitle: "Techno · House · Deep House Funky",
    when: "VIN",
    time: "22:00 → 03:00",
    tags: ["Techno", "House", "DJ Set"],
    variant: "dark",
  },
  {
    id: 3,
    overline: "în fiecare zi",
    title: "MENIUL\nZILEI",
    subtitle: "Bucătărie proaspătă, gătit zilnic",
    when: "ZI",
    time: "12:00 → 15:00",
    tags: ["Mâncare", "Zilnic", "Prânz"],
    variant: "card",
  },
  {
    id: 4,
    overline: "ori de câte ori e meci",
    title: "SEARA\nDE MECI",
    subtitle: "Toate meciurile importante pe ecranele noastre",
    when: "LIVE",
    time: "Când e meci",
    tags: ["Fotbal", "Sport Live", "Ecran Mare"],
    variant: "dark",
  },
  {
    id: 5,
    overline: "în fiecare sâmbătă",
    title: "HAPPY\nHOUR",
    subtitle: "Bere + cocktailuri la prețuri speciale",
    when: "SAT",
    time: "22:00 → 23:00",
    tags: ["Reduceri", "Bere"],
    variant: "card",
  },
  {
    id: 6,
    overline: "în fiecare zi",
    title: "GOOD\nVIBES",
    subtitle: "Mâncare bună și atmosferă caldă",
    when: "MEREU",
    time: "toată ziua",
    tags: ["Mâncare", "Atmosferă", "Zilnic"],
    variant: "warm",
  },
];

const VARIANTS = {
  warm: {
    bg: "#1A1500", text: "#FFFFFF", subText: "#999999",
    rule: "#F5A623", tagBg: "#1E1E1E",
    tagText: "#FFFFFF", corner: "rgba(245,166,35,0.2)",
  },
  dark: {
    bg: "#111111", text: "#FFFFFF", subText: "#999999",
    rule: "#F5A623", tagBg: "#1E1E1E",
    tagText: "#F5A623", corner: "rgba(255,255,255,0.08)",
  },
  card: {
    bg: "#1E1E1E", text: "#FFFFFF", subText: "#999999",
    rule: "#F5A623", tagBg: "#111111",
    tagText: "#FFFFFF", corner: "rgba(255,255,255,0.08)",
  },
};

function Poster({ p, index }: { p: Poster; index: number }) {
  const v = VARIANTS[p.variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative flex flex-col justify-between p-6 md:p-8 cursor-default overflow-hidden"
      style={{
        background: v.bg,
        border: "1px solid #111111",
        minHeight: 300,
      }}
    >
      {/* Corner date stamp */}
      <div className="absolute top-6 right-6 text-right" style={{ color: v.corner }}>
        <div className="font-anton leading-none"
          style={{ fontFamily: "var(--font-anton)", fontSize: "3rem", lineHeight: 1 }}>
          {p.when}
        </div>
      </div>

      {/* Overline + rule */}
      <div>
        <span className="text-[10px] font-black tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, color: v.subText }}>
          {p.overline}
        </span>
        <div className="w-10 h-[2px] mt-2 mb-4" style={{ background: v.rule }} />
      </div>

      {/* Title */}
      <h3
        className="font-anton leading-none my-auto py-2"
        style={{
          fontFamily: "var(--font-anton)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          lineHeight: 0.9,
          color: v.text,
          whiteSpace: "pre-line",
        }}
      >
        {p.title}
      </h3>

      {/* Bottom */}
      <div className="mt-4">
        <p className="text-xs md:text-sm mb-4 leading-snug"
          style={{ fontFamily: "var(--font-barlow)", fontWeight: 600, color: v.subText }}>
          {p.subtitle}
        </p>
        <div className="w-full h-[2px] mb-4" style={{ background: v.rule, opacity: 0.55 }} />
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map(t => (
              <span key={t}
                className="text-[9px] font-black tracking-[0.15em] uppercase px-2 py-1"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, background: v.tagBg, color: v.tagText }}>
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs font-black tracking-[0.15em] uppercase shrink-0"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800, color: v.subText }}>
            {p.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-28 bg-[#1A1500]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-[2px] bg-[#F5A623]" />
              <span className="section-label">Ce se întâmplă</span>
            </div>
            <h2
              className="font-anton text-[#FFFFFF]"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.92 }}
            >
              EVENIMENTE
            </h2>
          </div>
          <p className="text-[#999999] text-sm max-w-xs md:text-right"
            style={{ fontFamily: "var(--font-barlow)" }}>
            Fotbal, techno, concerte live și seri de neuitat.<br />
            Urmărește-ne pe Instagram pentru program complet.
          </p>
        </motion.div>

        {/* Poster grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1E1E1E]">
          {POSTERS.map((p, i) => (
            <div
              key={p.id}
              className={[
                i % 3 !== 2 ? "lg:border-r border-[#1E1E1E]" : "",
                i < 3       ? "border-b border-[#1E1E1E]"    : "",
              ].join(" ")}
            >
              <Poster p={p} index={i} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 bg-[#1E1E1E] border border-[#1E1E1E]"
        >
          <span className="text-[#999999] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>
            Program actualizat săptămânal — seri speciale, DJ sets, meciuri live și surprize.
          </span>
          <a
            href="https://www.instagram.com/koronapub_/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            @koronapub_
          </a>
        </motion.div>
      </div>
    </section>
  );
}
