import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description: "Politica de confidențialitate Korona Pub Social Club Craiova.",
  robots: { index: false, follow: false },
};

export default function PoliticaConfidentialitate() {
  return (
    <>
      <Navbar />
      <main className="bg-[#111111] min-h-screen text-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-[#F5A623]" />
          <span className="text-[#F5A623] text-[10px] font-black tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
            Legal
          </span>
        </div>
        <h1 className="font-anton text-[#FFFFFF] mb-12" style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 0.92 }}>
          POLITICA DE<br />CONFIDENȚIALITATE
        </h1>

        <div className="flex flex-col gap-8 text-[#999999] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              1. Operator de date
            </h2>
            <p>
              Korona Pub Social Club, cu sediul la Strada Împăratul Traian 27, Craiova, România,
              este operatorul datelor cu caracter personal colectate prin intermediul acestui site.
              Contact: <a href="tel:+40735964474" className="text-[#F5A623] hover:text-[#FFFFFF] transition-colors">0735 964 474</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              2. Ce date colectăm
            </h2>
            <p>
              Site-ul nostru nu colectează date cu caracter personal în mod automat. Dacă ne contactați
              prin telefon sau WhatsApp pentru o rezervare, colectăm doar informațiile pe care ni le
              furnizați voluntar (nume, număr de telefon, data rezervării).
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              3. Scopul prelucrării
            </h2>
            <p>
              Datele colectate sunt utilizate exclusiv pentru gestionarea rezervărilor și comunicarea
              cu clienții. Nu le transmitem unor terți și nu le folosim în scopuri de marketing fără
              consimțământul dumneavoastră.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              4. Cookie-uri
            </h2>
            <p>
              Site-ul poate utiliza cookie-uri tehnice necesare funcționării (ex. Google Maps). Nu
              utilizăm cookie-uri de tracking sau publicitate. Prin utilizarea site-ului, acceptați
              folosirea acestor cookie-uri tehnice.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              5. Drepturile dumneavoastră
            </h2>
            <p>
              Conform GDPR, aveți dreptul de acces, rectificare, ștergere și portabilitate a datelor.
              Pentru orice solicitare, ne puteți contacta la <a href="tel:+40735964474" className="text-[#F5A623] hover:text-[#FFFFFF] transition-colors">0735 964 474</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              6. Actualizări
            </h2>
            <p>
              Această politică poate fi actualizată periodic. Ultima actualizare: aprilie 2026.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E1E1E]">
          <Link
            href="/"
            className="text-[#F5A623] text-xs font-black tracking-[0.2em] uppercase hover:text-[#FFFFFF] transition-colors"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}
          >
            ← Înapoi la site
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
