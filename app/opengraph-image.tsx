import { ImageResponse } from "next/og";

export const alt = "Khalis Kothi — Pure pantry staples, the desi way.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#16301f 0%,#2c5a3d 100%)", color: "#fbf6ea" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#efc46a", textTransform: "uppercase" }}>Desi Pantry</div>
        <div style={{ display: "flex", fontSize: 128, fontWeight: 700, marginTop: 16 }}>Khalis Kothi</div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 20, color: "#ebddbe" }}>Pure pantry staples, the desi way.</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 28, color: "#16301f", background: "#25D366", padding: "16px 34px", borderRadius: 999, alignSelf: "flex-start", fontWeight: 700 }}>
          Order on WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
