import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/jewellery-site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Visit Our Showroom — Bohra’s Jewellery" },
    { name: "description", content: "Visit Bohra’s Jewellery boutique or book a private jewellery consultation in Bengaluru." },
    { property: "og:title", content: "Visit Our Showroom — Bohra’s Jewellery" },
    { property: "og:description", content: "Plan your visit or book a private jewellery appointment." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});