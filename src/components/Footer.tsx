import { site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-semibold tracking-wide text-primary">Space</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">Perfums</span>
        </div>
        <a
          href={whatsappLink("Hola Space Perfums.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          WhatsApp: {site.whatsappDisplay}
        </a>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Space Perfums. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
