import { site, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-10 text-center">
        <p className="text-sm font-semibold">
          Space <span className="text-gold">Parfums</span>
          <span className="text-muted-foreground"> — Fragancias de alta calidad</span>
        </p>
        <a
          href={whatsappLink("Hola Space Parfums.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          WhatsApp: {site.whatsappDisplay}
        </a>
        <p className="mt-2 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Space Parfums
        </p>
      </div>
    </footer>
  );
}
