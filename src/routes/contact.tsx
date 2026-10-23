import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/jewellery-site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Page — Bohra’s Jewellery" },
    { name: "description", content: "Visit Bohra’s Jewellery boutique or contact us for private gold consultations in Bengaluru." },
    { property: "og:title", content: "Contact Page — Bohra’s Jewellery" },
    { property: "og:description", content: "Plan your visit or book a private jewellery appointment." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});