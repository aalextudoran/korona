import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

/** Thin yellow rule between sections */
function Divider() {
  return <div style={{ height: 2, background: "#F5A623" }} aria-hidden />;
}

export default function Home() {
  return (
    <main className="bg-[#111111] text-[#FFFFFF]">
      <Navbar />
      <Hero />
      <Gallery />
      <Marquee />
      <About />
      <Divider />
      <Menu />
      <Divider />
      <Events />
      <Divider />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  );
}
