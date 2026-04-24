"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#111111]"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#111111]" />
        <div
          className="absolute top-0 right-0 h-full w-[58%]"
          style={{
            backgroundImage: "url('/photos/bar1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-[58%]"
          style={{
            background: "linear-gradient(135deg, rgba(26,21,0,0.78) 0%, rgba(17,17,17,0.84) 100%)",
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </motion.div>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex min-h-screen flex-col justify-between pt-28 pb-10 px-6 md:px-12 lg:px-20"
      >
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-start justify-end"
        >
          <div className="text-right hidden sm:block pt-1">
            <div
              className="text-[#999999] text-[10px] tracking-[0.35em] uppercase font-black"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              Craiova · România
            </div>
          </div>
        </motion.div>

        {/* Centre — MASSIVE headline */}
        <div className="my-auto py-8 md:py-12">
          {/* Rule above */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
            className="h-[2px] bg-[#F5A623] mb-6 md:mb-8 origin-left max-w-[30rem]"
          />

          {/* KORONA */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className="font-anton leading-none text-[#FFFFFF]"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(4.8rem, 16vw, 15rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.88,
              }}
            >
              KORONA
            </motion.h1>
          </div>

          {/* PUB */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className="font-anton leading-none text-[#FFFFFF]"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(4.8rem, 16vw, 15rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.88,
              }}
            >
              PUB
            </motion.div>
          </div>

          {/* Rule below */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
            className="h-[2px] bg-[#F5A623] mt-6 md:mt-8 origin-left max-w-[30rem]"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-5 md:mt-6 text-[#999999] text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase font-black"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Fotbal Live&nbsp;&nbsp;•&nbsp;&nbsp;DJ Techno&nbsp;&nbsp;•&nbsp;&nbsp;Meniu Zilei&nbsp;&nbsp;•&nbsp;&nbsp;Craiova
          </motion.p>
        </div>

        {/* Bottom — CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-row items-center gap-4"
        >
          <button
            onClick={() => go("menu")}
            className="cursor-pointer px-7 py-3.5 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all active:scale-95"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Vezi Meniul
          </button>
          <button
            onClick={() => go("events")}
            className="cursor-pointer px-7 py-3.5 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all active:scale-95"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Evenimente
          </button>
          {/* Scroll cue */}
          <div className="ml-auto flex items-center gap-2 text-[#999999]">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-10 bg-gradient-to-b from-[#F5A623] to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
