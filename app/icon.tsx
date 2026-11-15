import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#16301f", borderRadius: 32 }}>
        <div style={{ display: "flex", width: 36, height: 22, background: "#e0a93b", borderRadius: "18px 18px 4px 4px" }} />
        <div style={{ position: "absolute", top: 12, width: 8, height: 14, background: "#8fd09f", borderRadius: 8 }} />
      </div>
    ),
    size,
  );
}
