import { site, whatsappLink } from "@/config/site";
import { MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 md:grid-cols-[1.3fr_1fr] md:py-14">
        <div className="fade-up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Alta perfumería inspirada
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Explora nuestra colección de alta perfumería inspirada
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Más de 140 fragancias para hombre, mujer y unisex. Pide directamente
            por WhatsApp, sin complicaciones.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ver catálogo
            </a>
            <a
              href={whatsappLink("Hola Space Parfums, ¿no encontré lo que buscaba en el catálogo. ¿Me pueden ayudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-whatsapp/60 px-5 py-3 text-sm font-medium text-whatsapp transition-colors hover:bg-whatsapp/10"
            >
              <MessageCircle size={16} />
              ¿No encontraste lo que buscabas?
            </a>
          </div>
        </div>
        <div className="fade-up hidden md:block" style={{ animationDelay: "120ms" }}>
          <img
            src={hero}
            alt="Botella de perfume de lujo en fondo azul oscuro"
            width={1280}
            height={1600}
            className="mx-auto max-h-72 w-auto rounded-2xl object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
