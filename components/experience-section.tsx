const steps = [
  { n: "01", title: "Conexão", desc: "Entendemos sua história para criar algo único." },
  { n: "02", title: "Direção leve", desc: "Guiamos você sem poses rígidas ou forçadas." },
  { n: "03", title: "Fotografia", desc: "Técnica apurada e sensibilidade no olhar." },
  { n: "04", title: "Entrega", desc: "Edição premium entregue em galeria digital." },
]

const testimonials = [
  {
    quote:
      "Passando para agradecer imensamente por tudo. Desde o começo, com o carinho e a atenção na primeira reunião, no ensaio do teatro e do bosque e, então, na festa. Ter um momento tão especial registrado com tanto amor por vocês enche meu coração.",
    author: "Daniella, 15 anos",
  },
  {
    quote:
      "Está tudo perfeito, momentos em cada clique com muitos sentimentos. Vocês são maravilhosos, especiais demais. Deus abençoe grandemente.",
    author: "Glaucia, mãe da debutante Valentina",
  },
  {
    quote:
      "Meu Deus, vocês são demais. Oscar e Kátia são uma dupla imbatível, top, top, top. Escreve aí: meu casamento vai ser com vocês também, se Deus quiser.",
    author: "Eric, pai da debutante Maryana",
  },
  {
    quote: "Me emocionei muito vendo o vídeo. Foi impossível segurar as lágrimas.",
    author: "Fabi, mãe da debutante Maryana",
  },
]

export function ExperienceSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div id="experiencia" className="scroll-mt-24">
          <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            A Experiência
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            Toda sessão é planejada para ser leve, confortável e verdadeira, do primeiro contato à
            entrega final.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm transition-colors hover:border-accent/50"
              >
                <span className="font-serif text-5xl font-semibold text-accent">{step.n}</span>
                <h3 className="mt-5 text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="depoimentos" className="mt-28 scroll-mt-24">
          <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            O que dizem
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            Cada história que fotografamos deixa uma memória, e ouvir quem já viveu essa experiência
            é o que nos motiva a continuar.
          </p>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="border-l-2 border-accent pl-6">
                <blockquote className="text-pretty text-base italic leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
