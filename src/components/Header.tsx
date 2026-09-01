import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, whatsappLink } from "@/config/site";

const links = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-semibold tracking-wide text-primary">
            Space
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Perfums
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola Space Perfums, quiero más información sobre sus perfumes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/60 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-gold/10"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md text-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink("Hola Space Perfums, quiero más información sobre sus perfumes.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-gold/60 px-4 py-2.5 text-center text-sm font-medium text-primary"
            >
              WhatsApp · {site.whatsappDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
