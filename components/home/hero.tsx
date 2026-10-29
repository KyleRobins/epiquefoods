"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  "/images/products/hibiscus-1.jpg",
  "/images/products/group-photo.jpg",
  "/images/about/packaging.jpg",
  "/images/products/paprika-3.jpg",
];

const SLIDE_DURATION = 5500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-cream">
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 scale-105"
        >
          <Image
            src={SLIDES[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover blur-sm"
          />
        </motion.div>
      </AnimatePresence>

      <div aria-hidden className="absolute inset-0 bg-cream/45" />

      <div className="relative mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/70 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.18em] text-ink/70 uppercase"
        >
          — Grown &amp; made in Kenya
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]"
        >
          Nourishment,
          <br />
          the <span className="font-display text-forest italic">Epique</span> way.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-md text-base text-ink/70 sm:text-lg"
        >
          Instant porridge flours, natural powders and spices, crafted from wholesome Kenyan
          ingredients — no additives, no preservatives. Healthy, organic and nutritious, made
          simple.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-12 rounded-full bg-ink px-6 text-base text-cream hover:bg-ink/90"
            nativeButton={false}
            render={<Link href="/products" />}
          >
            Shop the range
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-ink/25 bg-transparent px-6 text-base text-ink hover:bg-ink/5"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            Our story
          </Button>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-ink" : "w-1.5 bg-ink/25 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
