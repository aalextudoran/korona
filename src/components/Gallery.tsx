"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Slot = {
  id: number;
  label: string;
  src: string;
  gridColumn: string;
  gridRow: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  noZoom?: boolean;
};

// 3-col grid, 6 rows — 6 portrait + 6 square
// Row heights: 160px mobile / 200px desktop
//
//   col1     col2     col3
// r1: [P]     [P]      [S]
// r2: [P]     [P]      [S]
// r3: [S]     [P]      [P]
// r4: [S]     [P]      [P]
// r5: [P]     [S]      [P]
// r6: [P]     [S]      [P]

const SLOTS: Slot[] = [
  { id:  1, label: "Muzică live",      src: "/photos/concert_night2.jfif", gridColumn: "1", gridRow: "1 / span 2" },
  { id:  2, label: "Bere la halbă",   src: "/photos/beer.jfif",            gridColumn: "3", gridRow: "1" },
  { id:  3, label: "Meniul zilei",    src: "/photos/food2.jpg",            gridColumn: "2", gridRow: "1 / span 2" },
  { id:  4, label: "Meniul zilei",    src: "/photos/food4.jpg",            gridColumn: "3", gridRow: "3 / span 2" },
  { id:  5, label: "Champions League",src: "/photos/meci6.jpeg",           gridColumn: "1", gridRow: "5 / span 2" },
  { id:  6, label: "Atmosfera Korona",src: "/photos/local.jfif",           gridColumn: "2", gridRow: "3 / span 2" },
  { id:  7, label: "Football night",  src: "/photos/meci.jfif",            gridColumn: "3", gridRow: "2" },
  { id:  8, label: "Desert",          src: "/photos/food7.jpg",            gridColumn: "1", gridRow: "4", objectPosition: "50% 38%" },
  { id:  9, label: "DJ Set weekend",  src: "/photos/dj.jfif",              gridColumn: "2", gridRow: "5" },
  { id: 10, label: "Happy Hour",      src: "/photos/happyHour2.jpg",       gridColumn: "1", gridRow: "3", noZoom: true },
  { id: 11, label: "Karaoke Night",   src: "/photos/concert_night.jfif",   gridColumn: "3", gridRow: "5 / span 2" },
  { id: 12, label: "Interior bar",    src: "/photos/bar1.jpeg",            gridColumn: "2", gridRow: "6" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + SLOTS.length) % SLOTS.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % SLOTS.length : null);
  const cur  = lightbox !== null ? SLOTS[lightbox] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-[2px] bg-[#F5A623]" />
            <span className="section-label">Imagini</span>
          </div>
          <h2
            className="font-anton text-[#FFFFFF]"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.92 }}
          >
            GALERIE
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed grid */}
      <div
        className="grid auto-rows-[160px] md:auto-rows-[200px]"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4px",
          background: "#111111",
        }}
      >
        {SLOTS.map((slot, i) => (
          <motion.div
            key={slot.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onClick={() => setLightbox(i)}
            className="group relative overflow-hidden cursor-pointer"
            style={{
              gridColumn: slot.gridColumn,
              gridRow: slot.gridRow,
              background: "#1A1500",
            }}
          >
            {/* Photo */}
            <Image
              src={slot.src}
              alt={slot.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`object-cover transition-transform duration-300 ${slot.noZoom ? "" : "group-hover:scale-105"}`}
              style={{
                objectFit: slot.objectFit ?? "cover",
                objectPosition: slot.objectPosition ?? "center",
              }}
            />

            {/* Accent rail */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-200 z-10" />

            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-20">
              <p
                className="text-white text-xs font-black tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                {slot.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && cur && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              transition={{ duration: 0.22 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-video border border-[#1E1E1E] overflow-hidden"
              style={{ background: "#111111" }}
            >
              <Image
                src={cur.src}
                alt={cur.label}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-contain"
              />

              {/* Counter */}
              <div className="absolute top-3 left-3 bg-[#1E1E1E]/90 border border-[#F5A623] px-2 py-1 z-10">
                <span
                  className="text-[#FFFFFF] text-xs font-black"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {lightbox + 1} / {SLOTS.length}
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                <p
                  className="text-white text-sm tracking-[0.15em] uppercase font-black"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  {cur.label}
                </p>
              </div>

              {/* Controls */}
              <button onClick={prev}
                className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111]/80 border border-[#1E1E1E] flex items-center justify-center text-[#FFFFFF] hover:border-[#F5A623] hover:text-[#F5A623] transition-colors z-10">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111]/80 border border-[#1E1E1E] flex items-center justify-center text-[#FFFFFF] hover:border-[#F5A623] hover:text-[#F5A623] transition-colors z-10">
                <ChevronRight size={20} />
              </button>
              <button onClick={() => setLightbox(null)}
                className="cursor-pointer absolute top-3 right-3 w-8 h-8 bg-[#111111]/80 border border-[#1E1E1E] flex items-center justify-center text-[#999999] hover:text-[#F5A623] transition-colors z-10">
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
