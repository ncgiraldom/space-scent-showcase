import { perfumes } from "@/data/perfumes";
import { PerfumeCard } from "./PerfumeCard";

export function Catalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 md:py-20">
      <div className="mb-8 text-center md:mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Nuestra selección
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
          Catálogo
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Explora nuestras fragancias y consulta disponibilidad y entregas
          directamente por WhatsApp.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {perfumes.map((p) => (
          <PerfumeCard key={p.id} perfume={p} />
        ))}
      </div>
    </section>
  );
}
