"use client"

import { useState } from "react"

type Photo = {
  src: string
  category: string
  alt: string
}

const photos: Photo[] = [
  { src: "/images/portfolio-1.png", category: "Casamento", alt: "Noiva com véu em momento especial de casamento" },
  { src: "/images/portfolio-2.png", category: "15 Anos", alt: "Debutante dançando em festa de 15 anos" },
  { src: "/images/portfolio-3.png", category: "Ensaios", alt: "Ensaio fotográfico em barco com luzes" },
  { src: "/images/portfolio-4.png", category: "Casamento", alt: "Noiva dentro de carro clássico com buquê" },
  { src: "/images/portfolio-5.png", category: "Ensaios", alt: "Ensaio fotográfico ao ar livre com buquê" },
  { src: "/images/portfolio-6.png", category: "15 Anos", alt: "Debutante posando em portão ornamentado" },
  { src: "/images/portfolio-7.png", category: "Casamento", alt: "Casal de noivos abraçados em uma ponte" },
  { src: "/images/portfolio-8.png", category: "Ensaios", alt: "Retrato com luzes bokeh ao fundo" },
]

export function PortfolioSection() {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <section id="portfolio" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">Portfólio</h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Cada ensaio carrega uma história única. Aqui estão alguns destaques para você sentir o
          nosso olhar.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(photo)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Abrir foto de ${photo.category.toLowerCase()} em destaque`}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {photo.category}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contato"
            className="inline-flex rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver portfólio completo
          </a>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Fechar
          </button>
          <img
            src={active.src || "/placeholder.svg"}
            alt={active.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
