"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories, type Category } from "@/lib/products";

export function CategoryFilter({ active }: { active?: Category }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setCategory(category?: Category) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
      <button
        type="button"
        onClick={() => setCategory(undefined)}
        className={cn(
          "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium tracking-[0.08em] uppercase transition-colors",
          !active
            ? "border-ink bg-ink text-cream"
            : "border-ink/15 bg-transparent text-muted-foreground hover:border-ink/40 hover:text-foreground"
        )}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c.key}
          type="button"
          onClick={() => setCategory(c.key)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium tracking-[0.08em] uppercase transition-colors",
            active === c.key
              ? "border-ink bg-ink text-cream"
              : "border-ink/15 bg-transparent text-muted-foreground hover:border-ink/40 hover:text-foreground"
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
