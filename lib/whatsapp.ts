import { site } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(product: string, pack: string, qty = 1): string {
  return [
    "Hello! I would like to order:",
    `Product: ${product}`,
    `Pack size: ${pack}`,
    `Quantity: ${qty}`,
    "Please confirm availability and delivery details.",
  ].join("\n");
}

export const generalMessage = "Hello Khalis Kothi! I'd like to know more about your products.";
