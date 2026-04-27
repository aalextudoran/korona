"use client";

const ITEMS = [
  "HAPPY HOUR 22:00–23:00",
  "FOOTBALL LIVE",
  "TECHNO NIGHTS",
  "DEEP HOUSE FUNKY",
  "KORONA PUB SOCIAL CLUB",
  "CRAIOVA",
  "CHAMPIONS LEAGUE",
  "DJ NIGHT — VINERI",
  "BERE RECE",
  "SPORT PE ECRAN MARE",
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-3 select-none" style={{ background: "#1A1500" }}>
      <div className="marquee-track">
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-[#F5A623] font-black text-xs md:text-sm tracking-[0.25em] uppercase px-6"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
            >
              {item}
            </span>
            <span className="text-[#F5A623]/40 text-base font-black">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
