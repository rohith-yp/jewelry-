import { createFileRoute } from "@tanstack/react-router";
import { CollectionsPage } from "@/components/jewellery-site";

export const Route = createFileRoute("/collections")({
  head: () => ({ meta: [
    { title: "Gold Jewellery Collections — Bohra’s Jewellery" },
    { name: "description", content: "Browse Bohra’s necklaces, earrings, bangles, rings and bridal jewellery collections." },
    { property: "og:title", content: "Gold Jewellery Collections — Bohra’s Jewellery" },
    { property: "og:description", content: "Browse handcrafted 22K gold, Kundan and diamond jewellery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CollectionsPage,
});