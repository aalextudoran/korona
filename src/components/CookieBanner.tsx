"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("korona_cookies");
    if (!choice) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("korona_cookies", "accepted");
    window.dispatchEvent(new Event("korona_cookies_change"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("korona_cookies", "declined");
    window.dispatchEvent(new Event("korona_cookies_change"));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="fixed bottom-0 inset-x-0 z-[200] border-t-[2px] border-[#F5A623]"
          style={{ background: "#111111" }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-[#999999] text-xs leading-relaxed text-center sm:text-left"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Folosim cookie-uri tehnice pentru funcționarea site-ului (ex. Google Maps).{" "}
              <Link
                href="/politica-confidentialitate"
                className="text-[#F5A623] hover:text-[#FFFFFF] transition-colors underline underline-offset-2"
              >
                Politica de confidențialitate
              </Link>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="cursor-pointer px-5 py-2 text-[#999999] text-[10px] font-black tracking-[0.2em] uppercase border border-[#2C2C2C] hover:border-[#F5A623] hover:text-[#FFFFFF] transition-colors"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                Refuz
              </button>
              <button
                onClick={accept}
                className="cursor-pointer px-5 py-2 bg-[#F5A623] text-[#111111] text-[10px] font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
