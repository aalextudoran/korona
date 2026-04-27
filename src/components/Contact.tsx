"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const HOURS = [
  { day: "Luni – Joi",  time: "08:00 – 00:00" },
  { day: "Vineri",      time: "Non-stop" },
  { day: "Sâmbătă",    time: "Non-stop" },
  { day: "Duminică",   time: "Închis" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <rect width="20" height="20" x="2" y="2" rx="4"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

/* Shared card styles */
const card = "bg-[#1E1E1E] border border-[#1E1E1E] hover:border-[#F5A623] transition-colors";
const label = { fontFamily: "var(--font-barlow)", fontWeight: 800 };

export default function Contact() {
  const [mapEnabled, setMapEnabled] = useState(false);

  useEffect(() => {
    const check = () => setMapEnabled(localStorage.getItem("korona_cookies") === "accepted");
    check();
    window.addEventListener("korona_cookies_change", check);
    return () => window.removeEventListener("korona_cookies_change", check);
  }, []);

  const enableMap = () => {
    localStorage.setItem("korona_cookies", "accepted");
    window.dispatchEvent(new Event("korona_cookies_change"));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

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
            <span className="section-label">Găsește-ne</span>
          </div>
          <h2
            className="font-anton text-[#FFFFFF]"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.92 }}
          >
            CONTACT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* ── Left column ─────────────────────────────── */}
          <div className="flex flex-col gap-3">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45 }}
              className={`flex gap-4 p-6 ${card}`}
            >
              <MapPin size={20} className="text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#999999] text-[10px] tracking-[0.25em] uppercase mb-1" style={label}>Adresă</div>
                <div className="text-[#FFFFFF] font-bold text-sm" style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}>
                  Strada Împăratul Traian 27, 200399 Craiova
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }}
              className={`flex gap-4 p-6 ${card}`}
            >
              <Phone size={20} className="text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#999999] text-[10px] tracking-[0.25em] uppercase mb-1" style={label}>Telefon</div>
                <a href="tel:+40735964474"
                  className="text-[#FFFFFF] font-black text-sm hover:text-[#F5A623] transition-colors"
                  style={label}>
                  0735 964 474
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }}
              className={`p-6 ${card}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-[#F5A623]" />
                <span className="text-[#999999] text-[10px] tracking-[0.25em] uppercase" style={label}>Program</span>
              </div>
              {HOURS.map((h, i) => (
                <div key={h.day}
                  className={`flex justify-between items-center py-2.5 ${i < HOURS.length - 1 ? "border-b border-[#111111]" : ""}`}
                >
                  <span className="text-[#999999] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>{h.day}</span>
                  <span className="text-[#FFFFFF] text-sm font-black" style={label}>{h.time}</span>
                </div>
              ))}
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.24 }}
              className="flex gap-2"
            >
              <a href="https://www.instagram.com/koronapub_/" target="_blank" rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-4 ${card} text-[#999999] hover:text-[#FFFFFF] text-xs font-black tracking-[0.15em] uppercase`}
                style={label}>
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581481125590" target="_blank" rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-4 ${card} text-[#999999] hover:text-[#FFFFFF] text-xs font-black tracking-[0.15em] uppercase`}
                style={label}>
                <FacebookIcon /> Facebook
              </a>
            </motion.div>
          </div>

          {/* ── Right — Map ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-[#1E1E1E] overflow-hidden min-h-[400px]"
          >
            {mapEnabled ? (
              <iframe
                src="https://maps.google.com/maps?q=Strada+Imparatul+Traian+27+Craiova+Romania&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 0, minHeight: 400, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Korona Pub Craiova"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-5 min-h-[400px] px-8 text-center"
                style={{ background: "#1E1E1E" }}
              >
                <MapPin size={32} className="text-[#F5A623]" />
                <div>
                  <p className="text-[#FFFFFF] text-sm font-black tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
                    Harta este dezactivată
                  </p>
                  <p className="text-[#999999] text-xs leading-relaxed max-w-xs"
                    style={{ fontFamily: "var(--font-barlow)" }}>
                    Google Maps folosește cookie-uri. Acceptă cookie-urile pentru a vedea harta.
                  </p>
                </div>
                <button
                  onClick={enableMap}
                  className="cursor-pointer px-6 py-2.5 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  Activează harta
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Reservation bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#1E1E1E] border border-[#1E1E1E]"
        >
          <div>
            <div className="font-anton text-[#FFFFFF] text-xl md:text-2xl leading-tight"
              style={{ fontFamily: "var(--font-anton)" }}>
              REZERVĂ MASA TA
            </div>
            <div className="text-[#999999] text-xs font-bold mt-0.5 tracking-wide"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 700 }}>
              Pentru grupe sau seri speciale — contactează-ne în avans
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href="tel:+40735964474"
              className="px-6 py-3 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all"
              style={label}>
              📞 Sună
            </a>
            <a href="https://wa.me/40735964474" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-[#F5A623] text-[#111111] border border-[#F5A623] text-xs font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all"
              style={label}>
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
