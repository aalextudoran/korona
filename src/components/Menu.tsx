"use client";

import { menuData } from "@/lib/menuData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("bere");
  const category = menuData.find(c => c.id === activeTab)!;

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FFFFFF]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(245,166,35,0.16) 39px, rgba(245,166,35,0.16) 40px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-[2px] bg-[#F5A623]" />
            <span className="section-label">meniu</span>
          </div>
          <h2
            className="font-anton text-[#111111]"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.92,
            }}
          >
            CE SERVIM
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border-b-[2px] border-[#F5A623] mb-10">
          {menuData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`cursor-pointer relative px-5 py-3 text-xs font-black tracking-[0.2em] uppercase transition-colors ${
                activeTab === cat.id
                  ? "bg-[#F5A623] text-[#111111]"
                  : "text-[#111111] hover:text-[#F5A623] bg-transparent"
              }`}
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Category header */}
            <div className="flex items-end justify-between mb-5 pb-2 border-b-[2px] border-[#F5A623]">
              <h3
                className="font-anton text-[#111111]"
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                }}
              >
                {category.emoji} {category.label}
              </h3>
              <span
                className="text-[#111111] text-xs tracking-[0.2em] uppercase mb-1"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
              >
                {category.items.length} articole
              </span>
            </div>

            {/* Items with images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex gap-4 p-3 border border-[#F5A623]/20 rounded-lg hover:shadow-md transition group bg-white"
                >
                  {/* IMAGE */}
                  {item.image && (
                    <div className="w-20 h-20 relative shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[#111111] font-black text-sm uppercase tracking-wide group-hover:text-[#F5A623] transition-colors"
                        style={{
                          fontFamily: "var(--font-barlow)",
                          fontWeight: 800,
                        }}
                      >
                        {item.name}
                      </span>

                      {item.badge && (
                        <span className="text-[9px] font-black tracking-[0.15em] uppercase px-1.5 py-0.5 bg-[#F5A623] text-[#111111] border border-[#F5A623]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div
                      className="text-[#111111] text-xs mt-1 leading-snug"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {item.description}
                    </div>

                    {/* PRICE */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="dotted-price-line flex-1" />
                      <span
                        className="text-[#F5A623] font-black text-base shrink-0"
                        style={{
                          fontFamily: "var(--font-barlow)",
                          fontWeight: 800,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p
              className="mt-8 text-[#111111] text-xs italic"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              * Prețuri includ TVA. Meniu subiect modificărilor. Întreabă
              ospătarul pentru ofertele zilei.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}