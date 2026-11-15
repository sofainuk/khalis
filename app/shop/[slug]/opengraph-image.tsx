import { ImageResponse } from "next/og";
import { products, startingPrice, formatPrice } from "@/lib/products";

export const alt = "Khalis Kothi product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug) ?? products[0];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#f7e7c6 0%,#e0a93b 100%)", color: "#16301f" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, textTransform: "uppercase", color: "#7e4e10" }}>Khalis Kothi · {p.category}</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>{p.name}</div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 14, color: "#5c3c22" }}>{p.localName}</div>
        <div style={{ display: "flex", marginTop: 44, alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>From {formatPrice(startingPrice(p))}</div>
          <div style={{ display: "flex", marginLeft: 36, fontSize: 28, color: "#16301f", background: "#25D366", padding: "14px 30px", borderRadius: 999, fontWeight: 700 }}>Order on WhatsApp</div>
        </div>
      </div>
    ),
    size,
  );
}
