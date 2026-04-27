import type { Metadata } from "next";
import { Anton, Barlow } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koronapub.ro"),
  title: {
    default: "Korona Pub Social Club | Pub Craiova — Fotbal, Muzică, DJ Techno",
    template: "%s | Korona Pub Craiova",
  },
  description:
    "Korona Pub Social Club — cel mai tare pub din Craiova. Concert live sâmbătă, DJ techno & house vinerea, karaoke joi, meniul zilei proaspăt, seara de meci pe ecran mare și Happy Hour sâmbătă 22:00–23:00. Rezervă masa ta!",
  keywords: [
    "pub Craiova",
    "bar Craiova",
    "Korona Pub Craiova",
    "concert live Craiova",
    "DJ techno Craiova",
    "muzica house Craiova",
    "karaoke Craiova",
    "meniul zilei Craiova",
    "fotbal live Craiova",
    "seara de meci Craiova",
    "happy hour Craiova",
    "social club Craiova",
    "evenimente Craiova",
    "pub fotbal Craiova",
    "koronapub_",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Korona Pub Social Club | Fotbal · DJ Techno · meniul Zilei — Craiova",
    description:
      "Concert live sâmbătă, DJ techno vinerea, karaoke joi, meniul zilei, seara de meci și Happy Hour. Cel mai bun pub social din Craiova — vino și tu!",
    url: "https://koronapub.ro",
    siteName: "Korona Pub Social Club",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Korona Pub Social Club Craiova",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korona Pub Social Club | Pub Craiova",
    description:
      "Fotbal live, DJ techno & house, meniul zilei, Happy Hour. Vino la Korona — cel mai bun pub din Craiova!",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${anton.variable} ${barlow.variable}`}>
      <body className="bg-[#111111] text-[#FFFFFF] antialiased">{children}</body>
    </html>
  );
}
