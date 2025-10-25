import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    el.querySelectorAll("[data-num]").forEach((n) => {
      const end = parseInt(n.getAttribute("data-num") || "0")
      const obj = { val: 0 }
      gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: end,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: n, start: "top 80%", once: true },
          onUpdate: () => {
            n.textContent = Math.floor(obj.val).toString()
          }
        }
      )
    })
  }, [])

  return (
    <section id="stats" className="section container" ref={ref}>
      <h2 className="sec-title">Números</h2>
      <div className="stats">
        <div className="stat">
          <span data-num="139">0</span>
          <p>Obras Entregues</p>
        </div>
        <div className="stat">
          <span data-num="11">0</span>
          <p>Anos de Experiência</p>
        </div>
        <div className="stat">
          <span data-num="104">0</span>
          <p>Clientes Satisfeitos</p>
        </div>
      </div>
    </section>
  )
}
