import type { Perfume } from "@/data/perfumes";
import { whatsappLink, formatPrice } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-4/5 overflow-hidden bg-muted">
        <img
          src={perfume.image}
          alt={`Perfume ${perfume.name} de ${perfume.brand}`}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            {perfume.brand}
          </span>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {perfume.category}
          </span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
          {perfume.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {perfume.description}
        </p>
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <span className="text-base font-semibold text-primary">{formatPrice(perfume.price)}</span>
          <span className="text-xs text-muted-foreground">{perfume.size}</span>
        </div>
        <a
          href={whatsappLink(`Hola Space Perfums, me interesa el perfume ${perfume.name} (${perfume.brand}, ${perfume.size}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  );
}
