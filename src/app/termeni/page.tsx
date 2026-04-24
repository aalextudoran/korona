import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: "Termenii și condițiile de utilizare a serviciilor Korona Pub Social Club Craiova.",
};

export default function Termeni() {
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
          Termeni și Condiții
        </h1>
        <p className="text-[#666666] text-sm mb-12">Ultima actualizare: ianuarie 2025</p>

        <div className="flex flex-col gap-10 text-[#CCCCCC] leading-relaxed">

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">1. Identificarea societății</h2>
            <p className="mb-2">
              <strong className="text-[#FFFFFF]">Korona S.R.L.</strong>, cu sediul la Strada Împăratul Traian 27,
              200399 Craiova, județul Dolj, România · Tel: <span className="text-[#F5A623]">0735 964 474</span>
            </p>
            <p>
              Prin accesarea site-ului <span className="text-[#FFFFFF] font-bold">koronapub.ro</span> și utilizarea
              serviciilor noastre, ești de acord cu prezentii termeni și condiții. Dacă nu ești de acord,
              te rugăm să nu utilizezi site-ul.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">2. Servicii oferite</h2>
            <p className="mb-3">Korona Pub Social Club oferă:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Servicii de bar și restaurație (bere, cocktailuri, meniu zilei)",
                "Transmisiuni live ale evenimentelor sportive (fotbal, F1, NBA)",
                "Evenimente muzicale — DJ sets techno & house, concerte live",
                "Posibilitate de rezervare a meselor pentru grupuri",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">3. Rezervări</h2>
            <p className="mb-2">
              Rezervările se pot efectua telefonic sau prin WhatsApp la numerele afișate pe site. O rezervare este confirmată
              doar după contactul direct cu personalul nostru.
            </p>
            <p>
              Vă rugăm să anulați rezervarea cu cel puțin 2 ore înainte în caz de neprezentare. Rezervările pentru grupuri
              mari (&gt;10 persoane) pot necesita o confirmare suplimentară.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">4. Politica privind vârsta</h2>
            <p>
              Accesul în local și consumul de băuturi alcoolice este permis exclusiv persoanelor cu vârsta de{" "}
              <span className="text-[#FFFFFF] font-bold">minimum 18 ani</span>. Personalul nostru are dreptul de a solicita
              un act de identitate. Consumul responsabil de alcool este încurajat.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">5. Program și prețuri</h2>
            <p>
              Programul de funcționare și prețurile afișate pe site sunt orientative și pot fi modificate fără notificare
              prealabilă. Prețurile din local includ TVA conform legislației în vigoare.
              Verificați întotdeauna prețurile actuale cu personalul nostru.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">6. Conduită în local</h2>
            <p>
              Korona Pub Social Club este un spațiu de socializare pentru toată lumea. Ne rezervăm dreptul de a refuza
              accesul sau de a solicita plecarea oricărei persoane care tulbură ordinea publică, este sub influența excesivă
              a alcoolului sau adoptă un comportament agresiv față de personal sau alți clienți.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">7. Evenimente și modificări de program</h2>
            <p>
              Evenimentele anunțate (DJ sets, meciuri, concerte) pot fi modificate sau anulate din motive independente de
              voința noastră (tehnologie, forță majoră, modificări de program sportiv). Nu ne asumăm responsabilitatea pentru
              astfel de modificări, însă vom comunica orice schimbare pe canalele noastre de social media.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">8. Proprietate intelectuală</h2>
            <p>
              Toate conținuturile de pe site-ul <span className="text-[#FFFFFF] font-bold">koronapub.ro</span> — texte,
              imagini, logo, design — sunt proprietatea Korona Pub Social Club și sunt protejate de legea drepturilor de autor.
              Reproducerea fără acordul scris este interzisă.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">9. Limitarea răspunderii</h2>
            <p>
              Korona Pub Social Club nu răspunde pentru eventualele erori sau întreruperi ale site-ului. Informațiile de pe
              site sunt furnizate cu bună-credință, dar nu garantăm acuratețea completă a tuturor detaliilor în orice moment.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">10. Legislație aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația română în vigoare. Orice litigiu va fi soluționat pe cale amiabilă
              sau, în caz contrar, de instanțele competente din Craiova, România.
            </p>
          </section>

          <section>
            <h2 className="text-[#F5A623] text-lg font-black uppercase tracking-widest mb-3">11. Contact</h2>
            <p>
              Pentru orice întrebări legate de acești termeni, ne poți contacta prin telefon sau email — detalii în secțiunea
              Contact de pe pagina principală.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[#999999] text-xs">© 2025 Korona Pub Social Club · Craiova, România</span>
          <Link href="/politica-confidentialitate" className="text-[#F5A623] text-xs font-black tracking-[0.2em] uppercase hover:text-[#FFFFFF] transition-colors">
            Politica de Confidențialitate →
          </Link>
        </div>
      </div>
    </div>
  );
}
