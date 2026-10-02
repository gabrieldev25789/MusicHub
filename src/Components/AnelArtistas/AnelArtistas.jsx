import { useState } from "react"
import "./AnelArtistas.css"

function AnelArtistas({ artistas }) {
  // ---------- Estado ----------
  // "giro" conta quantos passos o anel já girou (pode crescer sem limite,
  // assim a animação nunca "volta pra trás": ela só continua a volta)
  const [giro, setGiro] = useState(0)

  const total = artistas.length
  const passo = 360 / total
  const raio = Math.max(Math.round(110 / Math.sin(Math.PI / total)), 230)
  const ativo = ((giro % total) + total) % total

  // ---------- Funções ----------
  function girar(direcao) {
    setGiro((g) => g + direcao)
  }

  // gira pelo caminho mais curto até o card clicado
  function trazerParaFrente(i) {
    let d = i - ativo
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total
    setGiro((g) => g + d)
  }

  function aoApertarTecla(e) {
    if (e.key === "ArrowLeft") girar(-1)
    if (e.key === "ArrowRight") girar(1)
  }

  return (
    <div className="anel" role="group" aria-label="Artistas" onKeyDown={aoApertarTecla}>
      <div className="anel-cena">
        <div
          className="anel-roda"
          style={{ "--raio": `${raio}px`, "--giro": `${-giro * passo}deg` }}
        >
          <span className="anel-linha"></span>

          {artistas.map((nome, i) => {
            const diferenca = Math.abs(i - ativo)
            const distancia = Math.min(diferenca, total - diferenca)
            return (
              <button
                key={nome}
                type="button"
                className={"anel-card" + (i === ativo ? " anel-card--ativo" : "")}
                style={{ "--i": i, "--ang": `${passo}deg`, "--d": distancia }}
                aria-current={i === ativo}
                onClick={() => trazerParaFrente(i)}
              >
                <span className="anel-capa"></span>
                <strong>{nome}</strong>
                <small>Artista</small>
              </button>
            )
          })}
        </div>
      </div>

      <div className="anel-setas">
        <button type="button" onClick={() => girar(-1)} aria-label="Artista anterior">‹</button>
        <button type="button" onClick={() => girar(1)} aria-label="Próximo artista">›</button>
      </div>
    </div>
  )
}

export default AnelArtistas