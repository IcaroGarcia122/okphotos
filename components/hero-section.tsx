export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Uma experiência leve, humana e profissional do início ao fim.
          </p>
          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Fotografia que transforma momentos em memórias eternas.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos Oscar e Kátia. Fotografamos histórias reais com sensibilidade, técnica e um olhar
            que valoriza cada detalhe.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar ensaio
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-border bg-background/40 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
