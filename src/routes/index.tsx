import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Space Perfums — Perfumería en Colombia" },
      {
        name: "description",
        content:
          "Catálogo online de Space Perfums: fragancias originales para hombre, mujer y unisex en Colombia. Consulta disponibilidad por WhatsApp.",
      },
      { property: "og:title", content: "Space Perfums — Perfumería en Colombia" },
      {
        property: "og:description",
        content:
          "Explora el catálogo de fragancias de Space Perfums y consulta por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
