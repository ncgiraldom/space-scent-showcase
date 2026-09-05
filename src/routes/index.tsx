import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space Parfums — Fragancias inspiradas de alta calidad" },
      {
        name: "description",
        content:
          "Catálogo de Space Parfums: más de 140 perfumes inspirados para hombre, mujer y unisex. Busca, filtra por familia olfativa y pide por WhatsApp.",
      },
      { property: "og:title", content: "Space Parfums — Fragancias inspiradas de alta calidad" },
      {
        property: "og:description",
        content: "Explora nuestra colección de alta perfumería inspirada y pide por WhatsApp.",
      },
      { property: "og:image", content: "https://space-scent-showcase.lovable.app/og-cover.jpg" },
      { property: "og:url", content: "https://space-scent-showcase.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://space-scent-showcase.lovable.app/og-cover.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header query={query} onQuery={setQuery} />
      <main>
        <Hero />
        <Catalog query={query} />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
