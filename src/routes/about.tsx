import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/jewellery-site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Heritage — Bohra’s Jewellery" },
    { name: "description", content: "Discover five decades of heritage, trust and master craftsmanship at Bohra’s Jewellery." },
    { property: "og:title", content: "Our Heritage — Bohra’s Jewellery" },
    { property: "og:description", content: "A legacy of handcrafted fine jewellery since 1974." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});