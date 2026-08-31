"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Depoimentos", href: "#depoimentos" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="OK Photos - Início">
          <span className="font-serif text-2xl font-semibold leading-none tracking-tight text-foreground">
            OK
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Fotografia &amp; Vídeo
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          Contato
        </a>
      </div>
    </header>
  )
}
