import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="fade-up">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Perfumería · Colombia
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
            Fragancias que dejan huella
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Descubre una selección cuidada de perfumes originales. Explora el
            catálogo y consúltanos directamente por WhatsApp.
          </p>
          <a
            href="#catalogo"
            className="mt-7 inline-flex items-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
          >
            Ver catálogo
          </a>
        </div>
        <div className="fade-up relative hidden justify-end md:flex" style={{ animationDelay: "120ms" }}>
          <img
            src={hero}
            alt="Perfume de lujo sobre fondo azul profundo"
            width={1280}
            height={1600}
            className="max-h-105 w-auto rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
