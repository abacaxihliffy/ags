import React from "react"

export default function Works() {
  return (
    <section id="works" className="section container">
      <h2 className="sec-title">Obras</h2>
      <div className="grid works">
        {Array.from({ length: 9 }).map((_, i) => (
          <a
            className="work"
            key={i}
            href={`/assets/obra${i + 1}.jpg`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={`/assets/obra${i + 1}.jpg`} alt={`Obra ${i + 1}`} />
          </a>
        ))}
      </div>
    </section>
  )
}
