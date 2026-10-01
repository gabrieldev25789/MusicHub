import { useState } from "react"
import "./Home.css"

// ---------- Dados mockados (depois podem ir pra um arquivo separado) ----------
const generos = [
  { nome: "Pop", cores: ["#ff4f7b", "#ffb547"] },
  { nome: "Rock", cores: ["#e5383b", "#6a1b9a"] },
  { nome: "Indie Rock", cores: ["#ffb547", "#2fd1c5"] },
  { nome: "Hip hop", cores: ["#7b5cff", "#ff4f7b"] },
  { nome: "R&B", cores: ["#2fd1c5", "#7b5cff"] },
  { nome: "Soul", cores: ["#f9844a", "#ffd166"] },
  { nome: "Jazz", cores: ["#3a86ff", "#8338ec"] },
]

const artistas = {
  Pop: ["Taylor Swift", "Dua Lipa", "Billie Eilish", "Ariana Grande"],
  Rock: ["Queen", "Nirvana", "Foo Fighters", "Led Zeppelin"],
  "Indie Rock": ["Arctic Monkeys", "Tame Impala", "The Strokes", "Vampire Weekend"],
  "Hip hop": ["Kendrick Lamar", "Travis Scott", "J. Cole", "Tyler, the Creator"],
  "R&B": ["SZA", "The Weeknd", "Frank Ocean", "Daniel Caesar"],
  Soul: ["Amy Winehouse", "Aretha Franklin", "Stevie Wonder", "Leon Bridges"],
  Jazz: ["Miles Davis", "John Coltrane", "Norah Jones", "Ella Fitzgerald"],
}

function Home() {
  // ---------- Estado ----------
  const [ativo, setAtivo] = useState(2)
  const genero = generos[ativo]

  // ---------- Funções ----------
  function anterior() {
    setAtivo((i) => Math.max(i - 1, 0))
  }

  function proximo() {
    setAtivo((i) => Math.min(i + 1, generos.length - 1))
  }

  function aoApertarTecla(e) {
    if (e.key === "ArrowLeft") anterior()
    if (e.key === "ArrowRight") proximo()
  }

  return (
    <div className="home" style={{ "--c1": genero.cores[0], "--c2": genero.cores[1] }}>
      {/* ---------- Topo ---------- */}
      <header className="home-topo">
        <h1 className="home-logo">MusicHub</h1>

        <nav className="home-nav" aria-label="Principal">
          <button type="button" className="home-nav-item home-nav-item--ativo">Início</button>
          <button type="button" className="home-nav-item">Biblioteca</button>
        </nav>

        <input
          className="home-busca"
          type="search"
          placeholder="Buscar artistas, álbuns, músicas"
          aria-label="Buscar"
        />
        <button type="button" className="home-perfil" aria-label="Perfil">U</button>
      </header>

      <main className="home-conteudo">
        {/* ---------- Roda de gêneros ---------- */}
        <section className="home-hero">
          <h2 className="home-hero-titulo">O que você quer ouvir hoje?</h2>

          <div className="home-roda" role="group" aria-label="Escolha um gênero" onKeyDown={aoApertarTecla}>
            {generos.map((g, i) => {
              const distancia = i - ativo
              const longe = Math.abs(distancia) > 3
              return (
                <button
                  key={g.nome}
                  type="button"
                  className={"home-roda-item" + (longe ? " home-roda-item--oculto" : "")}
                  style={{
                    "--pos": distancia,
                    "--abs": Math.abs(distancia),
                    "--g1": g.cores[0],
                    "--g2": g.cores[1],
                  }}
                  aria-pressed={i === ativo}
                  onClick={() => setAtivo(i)}
                >
                  {g.nome}
                </button>
              )
            })}
          </div>

          <div className="home-roda-setas">
            <button type="button" onClick={anterior} disabled={ativo === 0} aria-label="Gênero anterior">‹</button>
            <button type="button" onClick={proximo} disabled={ativo === generos.length - 1} aria-label="Próximo gênero">›</button>
          </div>
        </section>

        {/* ---------- Artistas do gênero escolhido ---------- */}
        <section className="home-secao" key={genero.nome}>
          <h2 className="home-secao-titulo">Artistas de {genero.nome}</h2>
          <ul className="home-artistas">
            {artistas[genero.nome].map((nome) => (
              <li key={nome} className="home-artista">
                <span className="home-artista-capa"></span>
                <strong>{nome}</strong>
                <small>Artista</small>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ---------- Player flutuante ---------- */}
      <footer className="home-player">
        <span className="home-player-capa"></span>
        <div className="home-player-info">
          <strong>Nome da música</strong>
          <small>Nome do artista</small>
        </div>
        <button type="button" className="home-player-play" aria-label="Tocar">▶</button>
        <div className="home-player-barra"><div className="home-player-barra-cheia"></div></div>
      </footer>
    </div>
  )
}

export default Home