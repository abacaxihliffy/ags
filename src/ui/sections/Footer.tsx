import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <img src="/assets/logo-ags.png" alt="AGS" height={24} />
          <span>© 2025 AGS Serviços em Altura LTDA</span>
        </div>
        <div className="right">
          <a href="#hero">Início</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  )
}
