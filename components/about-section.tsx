export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="text-balance font-serif text-3xl font-medium leading-snug text-foreground sm:text-4xl lg:text-5xl">
            &ldquo;Não fotografamos poses.
            <br />
            <span className="text-muted-foreground">
              Fotografamos pessoas, emoções e conexões reais.&rdquo;
            </span>
          </p>
        </blockquote>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/photographers.png"
              alt="Retrato dos fotógrafos Oscar e Kátia no estúdio"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Quem somos
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Somos Oscar e Kátia, fotógrafos apaixonados por registrar histórias reais com
              sensibilidade e estética atemporal.
            </p>
            <a
              href="#contato"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Conheça nossa história <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
