"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle, Plus } from "lucide-react";
import { categories, hasPricing, type Product } from "@/lib/products";
import { useCart } from "@/components/cart/cart-provider";
import { formatKes } from "@/lib/utils";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const priced = hasPricing(product);
  const firstPricedSize = product.sizes.find((s) => s.priceKes);
  const categoryLabel = categories.find((c) => c.key === product.category)?.label;

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    if (!firstPricedSize) return;
    addItem({
      slug: product.slug,
      name: product.name,
      size: firstPricedSize.label,
      priceKes: firstPricedSize.priceKes,
      image: product.images[0],
    });
    toast.success(`${product.shortName} added to cart`);
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-sand">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1 pt-3">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {categoryLabel}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-base leading-snug text-foreground">{product.shortName}</h3>
        </Link>
        <p className="line-clamp-1 text-xs text-muted-foreground">{product.tagline}</p>

        <div className="mt-2 flex items-center justify-between">
          {priced && firstPricedSize ? (
            <span className="font-display text-base text-burgundy">
              {formatKes(firstPricedSize.priceKes!)}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">Enquire for price</span>
          )}

          {priced ? (
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Add ${product.shortName} to cart`}
              className="flex size-8 items-center justify-center rounded-full bg-ink text-cream transition-transform hover:scale-105 active:scale-95"
            >
              <Plus className="size-4" />
            </button>
          ) : (
            <a
              href={buildProductEnquiryUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Enquire about ${product.shortName} on WhatsApp`}
              className="flex size-8 items-center justify-center rounded-full bg-ink text-cream transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
