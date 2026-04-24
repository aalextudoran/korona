"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Acasă",      href: "#hero" },
  { label: "Galerie",    href: "#gallery" },
  { label: "Meniu",      href: "#menu" },
  { label: "Evenimente", href: "#events" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
        className={`fixed top-0 inset-x-0 z-50 border-b-[2px] border-[#F5A623] transition-all duration-300 ${
          scrolled ? "bg-[#0D0D0D] backdrop-blur-sm shadow-lg shadow-black/40" : "bg-[#0D0D0D] backdrop-blur-sm"
        }`}
      >
        <div className="w-full pl-2 pr-4 sm:pl-4 sm:pr-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 h-20 w-72 block" style={{ lineHeight: 0 }}>
            <Image
              src="/logo.png"
              alt="Korona Pub Social Club"
              width={1170}
              height={751}
              className="object-contain object-left h-20 w-auto origin-left scale-x-130 scale-y-120"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map(link => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => go(link.href)}
                    className={`cursor-pointer relative px-4 py-2 text-xs tracking-[0.18em] uppercase font-black transition-colors ${
                      isActive ? "text-[#FFFFFF]" : "text-[#999999] hover:text-[#FFFFFF]"
                    }`}
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div layoutId="navUnderline" className="absolute bottom-0 inset-x-4 h-[2px] bg-[#F5A623]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => go("#contact")}
            className="cursor-pointer hidden md:block px-5 py-2 bg-[#F5A623] text-[#111111] text-xs font-black tracking-[0.18em] uppercase hover:brightness-110 transition-all"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            Rezervă
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(v => !v)} className="cursor-pointer md:hidden text-[#FFFFFF] p-1" aria-label="Meniu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.26, ease: [0.16,1,0.3,1] as [number,number,number,number] }}
              className="fixed top-0 right-0 h-full w-72 bg-[#111111] border-l-[2px] border-[#F5A623] z-50 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E1E1E]">
                <Image
                  src="/logo.png"
                  alt="Korona Pub"
                  width={1170}
                  height={751}
                  className="object-contain h-14 w-auto"
                />
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer text-[#999999] hover:text-[#FFFFFF]">
                  <X size={20} />
                </button>
              </div>
              <ul className="flex flex-col px-4 py-5 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <button
                      onClick={() => go(link.href)}
                      className="cursor-pointer w-full text-left px-4 py-3 text-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#1E1E1E] text-sm font-black tracking-[0.15em] uppercase transition-colors"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto px-5 pb-8">
                <button
                  onClick={() => go("#contact")}
                  className="cursor-pointer w-full py-3 bg-[#F5A623] text-[#111111] text-sm font-black tracking-[0.18em] uppercase hover:brightness-110 transition-all"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
                >
                  Rezervă Masă
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
