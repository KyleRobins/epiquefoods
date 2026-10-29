"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name: A–Z" },
  { value: "price-asc", label: "Price: Low to high" },
  { value: "price-desc", label: "Price: High to low" },
];

export function SortSelect({ active }: { active: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setSort(value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  return (
    <Select value={active} onValueChange={setSort}>
      <SelectTrigger className="h-9 w-[180px] rounded-full border-ink/15 text-xs tracking-[0.05em] uppercase">
        <SelectValue placeholder="Sort">
          {(value: string | null) => SORT_OPTIONS.find((o) => o.value === value)?.label ?? "Featured"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} className="text-xs uppercase">
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
