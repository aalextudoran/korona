import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description: "Politica de confidențialitate a Korona Pub Social Club Craiova — cum colectăm, folosim și protejăm datele tale personale.",
};

export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#FFFFFF]" style={{ fontFamily: "var(--font-barlow, sans-serif)" }}>
      {/* Header */}
      <div className="border-b-[2px] border-[#F5A623] bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-[#F5A623] text-xs font-black tracking-[0.2em] uppercase hover:text-[#FFFFFF] transition-colors">
            ← Înapoi acasă
          </Link>
          <span className="text-[#999999] text-xs tracking-[0.2em] uppercase">Korona Pub Social Club</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-[2px] bg-[#F5A623]" />
          <span className="text-[#F5A623] text-[10px] font-black tracking-[0.3em] uppercase">Document legal</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[#CCCCCC]" style={{ fontFamily: "var(--font-barlow, sans-serif)", fontWeight: 700, letterSpacing: "0.02em" }}>
          Politica de Confidențialitate
        </h1>
        <p className="text-[#666666] text-sm mb-12">Ultima actualizare: ianuarie 2025</p>

        <div className="flex flex-col gap-10 text-[#CCCCCC] leading-relaxed">

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">1. Cine suntem — Operatorul de date</h2>
            <p className="mb-2">
              <strong className="text-[#FFFFFF]">Korona S.R.L.</strong>, cu sediul social la Strada Împăratul Traian 27,
              200399 Craiova, județul Dolj, România, este operatorul de date cu caracter personal în sensul
              Regulamentului (UE) 2016/679 (GDPR).
            </p>
            <p>
              Contact: <span className="text-[#F5A623]">0735 964 474</span> · Activitate principală: Restaurante (COD CAEN 5611)
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">2. Ce date colectăm</h2>
            <p className="mb-3">Colectăm doar datele strict necesare pentru funcționarea serviciilor noastre:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Nume și număr de telefon — pentru rezervări de mese",
                "Adresă de email — dacă ne contactați prin email",
                "Date de navigare anonimizate — prin Google Analytics (opțional)",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">3. Cum folosim datele</h2>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Procesarea și confirmarea rezervărilor",
                "Comunicări legate de evenimentele din local",
                "Îmbunătățirea experienței pe site (date anonime)",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">4. Temeiul legal (GDPR)</h2>
            <p>
              Prelucrăm datele tale în baza consimțământului tău explicit (Art. 6(1)(a) GDPR) sau în baza executării unui contract
              (Art. 6(1)(b) GDPR) — de exemplu, pentru rezervări. Nu vindem și nu transferăm datele tale către terți în scopuri
              comerciale.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">5. Cât păstrăm datele</h2>
            <p>
              Datele aferente rezervărilor sunt păstrate maxim 12 luni de la data rezervării. Datele de contact voluntare sunt
              șterse la cerere sau după maxim 2 ani de inactivitate.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">6. Drepturile tale</h2>
            <p className="mb-3">Conform GDPR, ai dreptul la:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Acces la datele tale personale",
                "Rectificarea datelor incorecte",
                "Stergerea datelor (dreptul de a fi uitat)",
                "Portabilitatea datelor",
                "Opoziție la prelucrare",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Pentru orice solicitare, contactează-ne la numărul de telefon sau email din secțiunea Contact.
              Ai dreptul să depui o plângere la{" "}
              <span className="text-[#F5A623]">ANSPDCP</span> (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal).
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">7. Cookie-uri</h2>
            <p>
              Site-ul nostru poate folosi cookie-uri tehnice esențiale pentru funcționare. Nu folosim cookie-uri de tracking
              fără consimțământul tău. Poți gestiona preferințele de cookie-uri din setările browser-ului tău.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">8. Securitate</h2>
            <p>
              Luăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor tale împotriva accesului
              neautorizat, pierderii sau divulgării accidentale.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">9. Modificări</h2>
            <p>
              Această politică poate fi actualizată periodic. Versiunea curentă este întotdeauna disponibilă pe această pagină.
              Te încurajăm să o consulți periodic.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[#999999] text-xs">© 2025 Korona Pub Social Club · Craiova, România</span>
          <Link href="/termeni" className="text-[#F5A623] text-xs font-black tracking-[0.2em] uppercase hover:text-[#FFFFFF] transition-colors">
            Termeni și Condiții →
          </Link>
        </div>
      </div>
    </div>
  );
}
