import React, { useEffect, useRef } from "react"

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    const onScroll = () => {
      if (window.scrollY > 20) el.classList.add("nav--scrolled")
      else el.classList.remove("nav--scrolled")
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={ref} className="nav">
      <div className="container">
        <div className="brand">
          <img src="/assets/logo-ags.png" alt="AGS" height={28} />
          <span>AGS Serviços em Altura</span>
        </div>
        <nav>
          <a href="#hero">Início</a>
          <a href="#about">Quem Somos</a>
          <a href="#services">Serviços</a>
          <a href="#works">Obras</a>
          <a href="#stats">Números</a>
          <a href="#contact" className="btn-cta">Falar com especialista</a>
        </nav>
      </div>
    </div>
  )
}
