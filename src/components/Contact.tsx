import { site, whatsappLink } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-primary">
      <div className="mx-auto max-w-3xl px-5 py-14 text-center md:py-20">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Contacto
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
          ¿Buscas una fragancia en especial?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
          Escríbenos y te ayudamos a encontrar el perfume perfecto. Atendemos
          por WhatsApp con gusto.
        </p>
        <a
          href={whatsappLink("Hola Space Perfums, quiero más información sobre sus perfumes.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp · {site.whatsappDisplay}
        </a>
      </div>
    </section>
  );
}
