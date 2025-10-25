import React, { useEffect } from "react"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Works from "./sections/Works"
import Stats from "./sections/Stats"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Lenis from "lenis"

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.2 })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
