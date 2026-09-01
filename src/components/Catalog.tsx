import { useMemo, useState } from "react";
import { FAMILIAS, perfumes, type Genero } from "@/data/perfumes";
import { PerfumeCard } from "./PerfumeCard";
import { ArrowDownUp, SearchX } from "lucide-react";

const GENEROS: ("Todos" | Genero)[] = ["Todos", "Hombre", "Mujer", "Unisex"];

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function Catalog({ query }: { query: string }) {
  const [genero, setGenero] = useState<(typeof GENEROS)[number]>("Todos");
  const [familia, setFamilia] = useState("Todas");
  const [orden, setOrden] = useState<"relevancia" | "asc" | "desc">("relevancia");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    let list = perfumes.filter((p) => {
      if (genero !== "Todos" && p.genero !== genero) return false;
      if (familia !== "Todas" && p.familiaGrupo !== familia) return false;
      if (q && !normalize(p.nombre).includes(q)) return false;
      return true;
    });
    if (orden === "asc") list = [...list].sort((a, b) => a.precio - b.precio);
    if (orden === "desc") list = [...list].sort((a, b) => b.precio - a.precio);
    return list;
  }, [query, genero, familia, orden]);

  return (
    <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-10 md:py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Catálogo <span className="text-muted-foreground">· {results.length} fragancias</span>
        </h2>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {GENEROS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGenero(g)}
              className={`h-9 rounded-full px-4 text-xs font-semibold transition-colors sm:text-sm ${
                genero === g
                  ? "bg-gold text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <select
            value={familia}
            onChange={(e) => setFamilia(e.target.value)}
            aria-label="Familia olfativa"
            className="h-10 w-full rounded-full border border-input bg-card px-4 text-xs font-medium outline-none focus:border-gold/60 sm:w-auto sm:text-sm"
          >
            <option value="Todas">Todas las familias</option>
            {FAMILIAS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value as typeof orden)}
            aria-label="Ordenar por precio"
            className="h-10 w-full rounded-full border border-input bg-card px-4 text-xs font-medium outline-none focus:border-gold/60 sm:w-auto sm:text-sm"
          >
            <option value="relevancia">Orden: catálogo</option>
            <option value="asc">Precio: menor a mayor</option>
            <option value="desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
          <SearchX size={32} className="text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No encontramos fragancias con esos filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {results.map((p) => (
            <PerfumeCard key={p.id} perfume={p} />
          ))}
        </div>
      )}
    </section>
  );
}
