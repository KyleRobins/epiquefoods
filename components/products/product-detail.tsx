"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Check, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart/cart-provider";
import { formatKes } from "@/lib/utils";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find((s) => s.priceKes) ?? product.sizes[0]
  );

  const hasAnyPricing = product.sizes.some((s) => s.priceKes);

  function handleAddToCart() {
    if (!selectedSize?.priceKes) return;
    addItem({
      slug: product.slug,
      name: product.name,
      size: selectedSize.label,
      priceKes: selectedSize.priceKes,
      image: product.images[0],
    });
    toast.success(`${product.shortName} (${selectedSize.label}) added to cart`);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/products" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="size-3" />
        <span className="text-foreground">{product.shortName}</span>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-sand">
            <Image
              key={product.images[activeImage]}
              src={product.images[activeImage]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative size-16 overflow-hidden rounded-xl border-2 transition-colors ${
                    i === activeImage ? "border-forest" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5">
            {product.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-forest/10 text-forest">
                {badge}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.tagline}</p>

          <p className="mt-6 text-sm leading-relaxed text-foreground/90">{product.description}</p>

          {product.sizes.length > 0 && (
            <div className="mt-7">
              <p className="text-sm font-medium text-foreground">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.label}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      selectedSize?.label === size.label
                        ? "border-forest bg-forest text-cream"
                        : "border-border text-foreground hover:border-forest/50"
                    }`}
                  >
                    {size.label}
                    {size.priceKes ? ` — ${formatKes(size.priceKes)}` : ""}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hasAnyPricing && selectedSize?.priceKes ? (
              <Button size="lg" className="h-12 rounded-full px-6 text-base" onClick={handleAddToCart}>
                Add to cart — {formatKes(selectedSize.priceKes)}
              </Button>
            ) : null}
            <Button
              size="lg"
              variant={hasAnyPricing ? "outline" : "default"}
              className="h-12 rounded-full px-6 text-base"
              nativeButton={false}
              render={
                <a
                  href={buildProductEnquiryUrl(product.name, selectedSize?.label)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="size-4" />
              {hasAnyPricing ? "Enquire on WhatsApp" : "Enquire for price on WhatsApp"}
            </Button>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="font-display text-lg text-ink">Benefits</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {product.ingredients && (
            <div className="mt-8 border-t border-border pt-8">
              <h2 className="font-display text-lg text-ink">Ingredients</h2>
              <p className="mt-2 text-sm text-muted-foreground">{product.ingredients}</p>
            </div>
          )}

          {product.howToUse && (
            <div className="mt-8 border-t border-border pt-8">
              <h2 className="font-display text-lg text-ink">How to prepare</h2>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-foreground/90">
                {product.howToUse.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-burgundy" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.uses && (
            <div className="mt-8 border-t border-border pt-8">
              <h2 className="font-display text-lg text-ink">Ways to use</h2>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-foreground/90">
                {product.uses.map((use) => (
                  <li key={use} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-burgundy" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
