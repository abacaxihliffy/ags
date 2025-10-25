import React from "react"

const items = [
  { t: "Manutenção de Fachadas", img: "/assets/serv1.jpg" },
  { t: "Limpeza de Vidros e ACM", img: "/assets/serv2.jpg" },
  { t: "Pintura Predial", img: "/assets/serv3.jpg" }
]

export default function Services() {
  return (
    <section id="services" className="section container">
      <h2 className="sec-title">Serviços</h2>
      <div className="grid">
        {items.map((s, i) => (
          <div className="card hoverable" key={i}>
            <img src={s.img} alt={s.t} />
            <h3>{s.t}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
