"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581481125590&locale=ro_RO",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/koronapub_/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

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
          <button onClick={() => setMenuOpen(v => !v)} className="cursor-pointer md:hidden text-[#FFFFFF] p-1" aria-label="meniu">
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
                <div className="flex items-center gap-4 mb-5">
                  {SOCIAL_LINKS.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-[#999999] hover:text-[#F5A623] transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
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
