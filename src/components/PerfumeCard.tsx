import type { Perfume } from "@/data/perfumes";
import { whatsappPedido, formatPrice } from "@/config/site";
import { MessageCircle } from "lucide-react";

const generoStyles: Record<Perfume["genero"], string> = {
  Hombre: "bg-hombre/15 text-hombre",
  Mujer: "bg-mujer/15 text-mujer",
  Unisex: "bg-unisex/15 text-unisex",
};

export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-square overflow-hidden bg-white">
        <img
          src={perfume.imagen}
          alt={`Perfume ${perfume.nombre}`}
          loading="lazy"
          width={520}
          height={520}
          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${generoStyles[perfume.genero]}`}>
            {perfume.genero}
          </span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            {perfume.familia}
          </span>
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug sm:text-base">
          {perfume.nombre}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-gold sm:text-base">
            {formatPrice(perfume.precio)}
          </span>
          <span className="text-xs text-muted-foreground">{perfume.ml} ml</span>
        </div>
        <a
          href={whatsappPedido(perfume)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-transparent px-3 text-[11px] font-semibold text-gold transition-colors hover:bg-gold/10 sm:text-xs"
        >
          <MessageCircle size={13} />
          Pedir
        </a>
      </div>
    </article>
  );
}
