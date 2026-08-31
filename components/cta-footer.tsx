export function CtaFooter() {
  return (
    <>
      <section id="contato" className="relative bg-background scroll-mt-20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
          <h2 className="text-balance font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl lg:text-5xl">
            Se essas imagens falam com você,
            <br />
            talvez seja hora de criarmos algo juntos.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#top"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar ensaio
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
            OK Photos
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            © 2026 OK Photos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
