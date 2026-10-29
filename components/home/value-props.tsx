import { Leaf, Package, ShieldCheck, Sprout } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { products, categories } from "@/lib/products";

const STATS = [
  { icon: Sprout, value: "100%", label: "Natural ingredients" },
  { icon: ShieldCheck, value: "0", label: "Additives or preservatives" },
  { icon: Package, value: String(products.length), label: "Signature products" },
  { icon: Leaf, value: String(categories.length), label: "Product categories" },
];

export function ValueProps() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-card px-4 py-8 text-center">
                <stat.icon className="size-5 text-burgundy" />
                <p className="font-display text-3xl text-ink sm:text-4xl">{stat.value}</p>
                <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
