import React, { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState("")

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Enviando...")
    await new Promise((r) => setTimeout(r, 800))
    setStatus("Mensagem enviada!")
  }

  return (
    <section id="contact" className="section container dark">
      <h2 className="sec-title">Contato</h2>
      <form className="form" onSubmit={onSubmit}>
        <input placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" rows={4} required />
        <button className="btn-cta" type="submit">Enviar</button>
        <span className="status">{status}</span>
      </form>
    </section>
  )
}
