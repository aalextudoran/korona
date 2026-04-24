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
    "Korona Pub Social Club — cel mai tare pub din Craiova. Fotbal live pe ecran mare, DJ sets techno & house în fiecare weekend, meniu zilei proaspăt și Happy Hour zilnic 17:00–19:00. Rezervă masa ta!",
  keywords: [
    "pub Craiova",
    "bar Craiova",
    "Korona Pub Craiova",
    "fotbal live Craiova",
    "Champions League Craiova",
    "DJ techno Craiova",
    "muzica house Craiova",
    "happy hour Craiova",
    "meniu zilei Craiova",
    "bere artizanala Craiova",
    "social club Craiova",
    "evenimente Craiova",
    "pub fotbal Craiova",
    "techno house DJ Craiova",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Korona Pub Social Club | Fotbal · DJ Techno · Meniu Zilei — Craiova",
    description:
      "Fotbal live pe ecran mare, DJ sets techno & house, meniu zilei proaspăt și Happy Hour zilnic. Cel mai bun pub social din Craiova — vino și tu!",
    url: "https://koronapub.ro",
    siteName: "Korona Pub Social Club",
    images: [
      {
        url: "/photos/bar1.jpeg",
        width: 1200,
        height: 630,
        alt: "Korona Pub Social Club Craiova — interior bar",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korona Pub Social Club | Pub Craiova",
    description:
      "Fotbal live, DJ techno & house, meniu zilei, Happy Hour. Vino la Korona — cel mai bun pub din Craiova!",
    images: ["/photos/bar1.jpeg"],
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
