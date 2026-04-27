import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: "Termenii și condițiile de utilizare Korona Pub Social Club Craiova.",
  robots: { index: false, follow: false },
};

export default function Termeni() {
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
          TERMENI<br />ȘI CONDIȚII
        </h1>

        <div className="flex flex-col gap-8 text-[#999999] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              1. Informații generale
            </h2>
            <p>
              Prezentul site aparține Korona Pub Social Club, Strada Împăratul Traian 27, Craiova,
              România. Prin accesarea site-ului, acceptați termenii și condițiile de mai jos.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              2. Utilizarea site-ului
            </h2>
            <p>
              Site-ul este destinat exclusiv informării clienților cu privire la serviciile, programul
              și evenimentele Korona Pub Social Club. Este interzisă reproducerea, distribuirea sau
              modificarea conținutului fără acordul scris al operatorului.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              3. Rezervări
            </h2>
            <p>
              Rezervările efectuate prin telefon sau WhatsApp sunt supuse disponibilității și sunt
              confirmate direct de echipa noastră. Ne rezervăm dreptul de a refuza sau modifica o
              rezervare în cazuri excepționale, cu notificarea prealabilă a clientului.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              4. Evenimente și program
            </h2>
            <p>
              Programul evenimentelor publicat pe site este orientativ și poate fi modificat fără
              notificare prealabilă. Vă recomandăm să urmăriți paginile noastre de social media
              pentru informații actualizate.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              5. Răspundere
            </h2>
            <p>
              Korona Pub Social Club nu își asumă răspunderea pentru inexactități sau întreruperi
              ale serviciului site-ului. Informațiile sunt furnizate ca atare, fără garanții
              de nicio natură.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              6. Legea aplicabilă
            </h2>
            <p>
              Prezentele condiții sunt guvernate de legislația română. Orice litigiu va fi soluționat
              de instanțele competente din Craiova, România.
            </p>
          </section>

          <section>
            <h2 className="text-[#FFFFFF] font-black tracking-[0.15em] uppercase text-xs mb-3" style={{ fontFamily: "var(--font-barlow)", fontWeight: 800 }}>
              7. Contact
            </h2>
            <p>
              Pentru orice întrebări legate de acești termeni, ne puteți contacta la{" "}
              <a href="tel:+40735964474" className="text-[#F5A623] hover:text-[#FFFFFF] transition-colors">0735 964 474</a>.
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
