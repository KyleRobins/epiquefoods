import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
              — Our range
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              The <span className="text-forest italic">Epique</span> collection
            </h2>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] text-forest uppercase hover:underline"
          >
            View all products <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-10">
        <ProductGrid products={featured} />
      </div>
    </section>
  );
}
