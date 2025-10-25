import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    gsap.fromTo(
      el.querySelector(".hero-title"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    gsap.fromTo(
      el.querySelector(".hero-sub"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: "power3.out" }
    )
    gsap.fromTo(
      el.querySelector(".hero-ctas"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.3, ease: "power3.out" }
    )
    gsap.to(".hero-bg", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top top", scrub: true }
    })
  }, [])

  return (
    <section id="hero" className="hero" ref={ref}>
      <img className="hero-bg" src="/assets/hero.jpg" alt="Hero" />
      <div className="overlay" />
      <div className="container content">
        <h1 className="hero-title">
          Especialistas em reforma, pintura e revitalização de fachadas prediais e industriais.
        </h1>
        <p className="hero-sub">
          Garantia de segurança e valorização do seu imóvel com soluções especializadas.
        </p>
        <div className="hero-ctas">
          <a href="#services" className="btn-cta">Conheça nossos serviços</a>
          <a href="#contact" className="btn-outline">Fale com um especialista</a>
        </div>
      </div>
    </section>
  )
}
