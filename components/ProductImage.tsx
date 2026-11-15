import Image from "next/image";
import ProductArt from "./ProductArt";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/** Shows the real photo if one exists in /public/products, otherwise the built-in illustration. */
export default function ProductImage({ product, sizes = "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw", priority = false, className = "" }: Props) {
  const label = `${product.name} (${product.localName}) — Khalis Kothi`;
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {product.photo ? (
        <Image
          src={product.photo}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <ProductArt kind={product.art} label={label} />
      )}
    </div>
  );
}
