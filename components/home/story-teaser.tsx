import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function StoryTeaser() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about/packaging.jpg"
              alt="Hand-packed at the Epique Foods production floor"
              fill
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-xs font-semibold tracking-[0.18em] text-cream/70 uppercase">
            — Our story
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            A healthier future, <span className="italic">made by hand</span> in Kenya.
          </h2>
          <p className="mt-5 max-w-lg text-cream/80">
            Epique Foods exists to create wholesome, organic and nutritious foods that nourish
            families, support healthy lifestyles, create value for farmers, and make healthy
            eating simple and enjoyable — every pack is portioned, sealed and checked by hand.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest transition-opacity hover:opacity-90"
          >
            Read our story <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
