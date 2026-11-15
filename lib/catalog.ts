import "server-only";
import fs from "node:fs";
import path from "node:path";
import { products, type Product } from "./products";

const EXTS = ["webp", "avif", "jpg", "jpeg", "png"];

function findPhoto(slug: string): string | undefined {
  const dir = path.join(process.cwd(), "public", "products");
  for (const ext of EXTS) {
    if (fs.existsSync(path.join(dir, `${slug}.${ext}`))) return `/products/${slug}.${ext}`;
  }
  return undefined;
}

/** Products with `photo` auto-attached when a matching file exists in /public/products */
export function getProducts(): Product[] {
  return products.map((p) => ({ ...p, photo: findPhoto(p.slug) }));
}

export function getProduct(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}
