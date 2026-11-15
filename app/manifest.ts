import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khalis Kothi — Desi Pantry",
    short_name: "Khalis Kothi",
    description: "Pure pantry staples, the desi way. Order on WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf6",
    theme_color: "#16301f",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
