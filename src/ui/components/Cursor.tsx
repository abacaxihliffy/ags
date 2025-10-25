import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const d = dot.current!
    const r = ring.current!
    const pos = { x: innerWidth / 2, y: innerHeight / 2 }
    const mouse = { ...pos }
    const speed = 0.2

    const move = () => {
      pos.x += (mouse.x - pos.x) * speed
      pos.y += (mouse.y - pos.y) * speed
      d.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      r.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      requestAnimationFrame(move)
    }
    move()

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    addEventListener("mousemove", onMove)

    const enter = () => gsap.to(r, { scale: 2.2, duration: 0.2 })
    const leave = () => gsap.to(r, { scale: 1, duration: 0.2 })

    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", enter)
      el.addEventListener("mouseleave", leave)
    })

    return () => removeEventListener("mousemove", onMove)
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
