import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Epique Foods",
    short_name: "Epique Foods",
    description: "Healthy, Organic & Nutritious — Kenyan porridge flours, powders and spices.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ee",
    theme_color: "#2e6b3a",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
