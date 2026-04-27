import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Korona Pub Social Club — Craiova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Amber top border */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#F5A623", display: "flex" }} />

        {/* Amber bottom border */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#F5A623", display: "flex" }} />

        {/* Content */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "60px 80px", height: "100%" }}>

          {/* Left — logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={420} height={270} style={{ objectFit: "contain", objectPosition: "left center" }} alt="Korona Pub" />
          </div>

          {/* Right — text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0 }}>
            {/* Divider line */}
            <div style={{ width: 60, height: 3, background: "#F5A623", marginBottom: 24, display: "flex" }} />

            <span style={{ color: "#FFFFFF", fontSize: 72, fontWeight: 900, lineHeight: 0.9, textAlign: "right", letterSpacing: "-2px", display: "flex" }}>
              PUB
            </span>
            <span style={{ color: "#FFFFFF", fontSize: 72, fontWeight: 900, lineHeight: 0.9, textAlign: "right", letterSpacing: "-2px", display: "flex" }}>
              SOCIAL
            </span>
            <span style={{ color: "#F5A623", fontSize: 72, fontWeight: 900, lineHeight: 0.9, textAlign: "right", letterSpacing: "-2px", display: "flex" }}>
              CLUB
            </span>

            <div style={{ width: 60, height: 3, background: "#F5A623", marginTop: 24, marginBottom: 28, display: "flex" }} />

            <span style={{ color: "#999999", fontSize: 18, fontWeight: 700, letterSpacing: "6px", textTransform: "uppercase", display: "flex" }}>
              CRAIOVA · ROMÂNIA
            </span>

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["CONCERT LIVE", "DJ TECHNO", "SPORT LIVE"].map((tag) => (
                <span key={tag} style={{ background: "#1E1E1E", color: "#F5A623", fontSize: 11, fontWeight: 800, letterSpacing: "3px", padding: "6px 14px", display: "flex" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
