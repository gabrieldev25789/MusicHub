import { useState } from "react"
import { generos, artistas } from "../data/musicData"
import RodaGeneros from "../Components/RodaGeneros/RodaGeneros"
import Player from "../Components/Player/Player"
import "./Home.css"

function Home({ sair }) {
  // ---------- Estado ----------
  const [ativo, setAtivo] = useState(2)
  const genero = generos[ativo]

  const userLogado = JSON.parse(localStorage.getItem("usuarioLogado"))

  // ---------- Funções ----------
  function aoSair() {
    localStorage.removeItem("usuarioLogado")
    sair()
  }

  return (
    <div className="home" style={{ "--c1": genero.cores[0], "--c2": genero.cores[1] }}>
      {/* ---------- Topo ---------- */}
      <header className="home-topo">
        <h1 className="home-logo">MusicHub</h1>

        <nav className="home-nav" aria-label="Principal">
          <button type="button" className="home-nav-item home-nav-item--ativo">Início</button>
          <button type="button" className="home-nav-item">Biblioteca</button>
          <button type="button" className="home-nav-item" onClick={() => aoSair()}>Sair</button>
        </nav>

        <input
          className="home-busca"
          type="search"
          placeholder="Buscar artistas, álbuns, músicas"
          aria-label="Buscar"
        />

        <button type="button" className="home-perfil" aria-label="Perfil">
          <span className="home-perfil-inicial">{userLogado?.nome?.[0]}</span>
          <span className="home-perfil-nome">{userLogado?.nome}</span>
        </button>
      </header>

      <main className="home-conteudo">
        {/* ---------- Roda de gêneros ---------- */}
        <section className="home-hero">
          <h2 className="home-hero-titulo">O que você quer ouvir hoje?</h2>
          <RodaGeneros generos={generos} ativo={ativo} setAtivo={setAtivo} />
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

      {/* ---------- Player ---------- */}
      <Player />
    </div>
  )
}

export default Home