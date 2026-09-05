import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";

export function Header({ query, onQuery }: { query: string; onQuery: (v: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex min-w-0 flex-col">
            <span className="truncate text-base font-bold tracking-tight">
              Space <span className="text-gold">Parfums</span>
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              {site.slogan}
            </span>
          </a>
          <a
            href="#catalogo"
            className="hidden shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold/60 hover:text-gold md:block"
          >
            Catálogo
          </a>
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-foreground md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Buscador fijo */}
        <div className="relative mt-3">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Buscar perfume, marca o familia… ej: 212, Versace, vainilla"
            aria-label="Buscar perfume"
            className="h-11 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/60"
          />
        </div>

        {open && (
          <nav className="mt-3 flex flex-col gap-1 border-t border-border/60 pt-3 md:hidden">
            <a
              href="#catalogo"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Catálogo
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Contacto
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
