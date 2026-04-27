import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <rect x="5" y="18" width="26" height="24" rx="3" fill="#F5A623"/>
    <path d="M31 22 C41 22 41 36 31 36" stroke="#F5A623" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="9"  cy="18" r="5"   fill="white"/>
    <circle cx="18" cy="15" r="6.5" fill="white"/>
    <circle cx="27" cy="18" r="5"   fill="white"/>
    <rect x="9" y="22" width="3" height="14" rx="1.5" fill="rgba(255,255,255,0.35)"/>
  </svg>`).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${svg}`}
          width={44}
          height={44}
          alt="beer"
          style={{ display: "flex" }}
        />
      </div>
    ),
    { ...size }
  );
}
