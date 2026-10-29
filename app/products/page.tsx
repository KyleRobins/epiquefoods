import type { Metadata } from "next";
import { Suspense } from "react";
import { products, categories, type Category } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { CategoryFilter } from "@/components/products/category-filter";
import { SortSelect } from "@/components/products/sort-select";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Shop all products",
  description:
    "Browse Epique Foods' full range of porridge flours, flours, natural powders and spices — healthy, organic and nutritious.",
};

function isCategory(value: string | undefined): value is Category {
  return !!value && categories.some((c) => c.key === value);
}

function sortProducts(list: typeof products, sort: string) {
  const sorted = [...list];
  switch (sort) {
    case "name-asc":
      return sorted.sort((a, b) => a.shortName.localeCompare(b.shortName));
    case "price-asc":
    case "price-desc": {
      const priceOf = (p: (typeof products)[number]) =>
        p.sizes.find((s) => s.priceKes)?.priceKes;
      return sorted.sort((a, b) => {
        const pa = priceOf(a);
        const pb = priceOf(b);
        if (pa == null && pb == null) return 0;
        if (pa == null) return 1;
        if (pb == null) return -1;
        return sort === "price-asc" ? pa - pb : pb - pa;
      });
    }
    default:
      return sorted;
  }
}

export default async function ProductsPage({
  searchParams,
}: PageProps<"/products">) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category;
  const sortParam = Array.isArray(params.sort) ? params.sort[0] : (params.sort ?? "featured");
  const activeCategory = isCategory(categoryParam) ? categoryParam : undefined;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;
  const sorted = sortProducts(filtered, sortParam);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
          — 2026 Harvest
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          The <span className="text-forest italic">Epique</span> collection
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Healthy, organic and nutritious — no additives, no preservatives, made in Kenya.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <Suspense fallback={<div className="h-9" />}>
          <CategoryFilter active={activeCategory} />
        </Suspense>
        <div className="flex shrink-0 items-center gap-4">
          <span className="text-xs tracking-[0.08em] text-muted-foreground uppercase">
            {sorted.length} {sorted.length === 1 ? "piece" : "pieces"}
          </span>
          <Suspense fallback={<div className="h-9 w-[180px]" />}>
            <SortSelect active={sortParam} />
          </Suspense>
        </div>
      </div>

      <div className="mt-8">
        <ProductGrid products={sorted} />
      </div>
    </div>
  );
}
