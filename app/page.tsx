import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { FeaturedProducts } from "@/components/home/featured-products";
import { StoryTeaser } from "@/components/home/story-teaser";
import { CtaBand } from "@/components/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedProducts />
      <StoryTeaser />
      <CtaBand />
    </>
  );
}
