import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/jewellery-site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bohra’s Jewellery — Timeless Gold, Modern Elegance" },
    { name: "description", content: "Discover handcrafted 22K hallmarked gold jewellery and heritage Kundan masterpieces at Bohra’s Jewellery." },
    { property: "og:title", content: "Bohra’s Jewellery — Timeless Gold, Modern Elegance" },
    { property: "og:description", content: "Discover handcrafted 22K hallmarked gold jewellery and heritage Kundan masterpieces." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});
