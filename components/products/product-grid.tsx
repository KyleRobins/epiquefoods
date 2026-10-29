import { ProductCard } from "@/components/products/product-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        No products found in this category yet.
      </p>
    );
  }

  return (
    <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <StaggerItem key={product.slug}>
          <ProductCard product={product} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
