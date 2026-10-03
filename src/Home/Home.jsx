import { useState } from "react"
import { generos, artistas, albuns } from "../data/musicData"
import { faixasDoAlbum } from "../data/faixas"
import RodaGeneros from "../Components/RodaGeneros/RodaGeneros"
import AnelArtistas from "../Components/AnelArtistas/AnelArtistas"
import Player from "../Components/Player/Player"
import "./Home.css"

function Home({ sair }) {
  // ---------- Estados ----------
  const [ativo, setAtivo] = useState(2)
  const [artistaEscolhido, setArtistaEscolhido] = useState(null)
  const [albumEscolhido, setAlbumEscolhido] = useState(null)

  const genero = generos[ativo]
  const listaArtistas = artistas[genero.nome]

  // só mostra os álbuns se o artista pertence ao gênero atual
  const artistaVisivel = listaArtistas.includes(artistaEscolhido)
    ? artistaEscolhido
    : null

  // só mostra as faixas se o álbum pertence ao artista visível
  const albumVisivel = artistaVisivel
    ? albuns[artistaVisivel].find((a) => a.titulo === albumEscolhido)
    : null

  const faixas = albumVisivel
    ? faixasDoAlbum(artistaVisivel, albumVisivel.titulo)
    : null

  const userLogado = JSON.parse(localStorage.getItem("usuarioLogado"))

  // ---------- Funções ----------
  function aoSair() {
    localStorage.removeItem("usuarioLogado")
    sair()
  }

  function aoEscolherArtista(nome) {
    setArtistaEscolhido(nome)
    setAlbumEscolhido(null) // fecha as faixas do artista anterior
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
          <AnelArtistas
            key={genero.nome}
            artistas={listaArtistas}
            aoEscolher={aoEscolherArtista}
          />
        </section>

        {/* ---------- Álbuns do artista escolhido ---------- */}
        {artistaVisivel && (
          <section className="home-secao" key={artistaVisivel}>
            <h2 className="home-secao-titulo">Álbuns de {artistaVisivel}</h2>
            <ul className="home-albuns">
              {albuns[artistaVisivel].map((album) => (
                <li key={album.titulo}>
                  <button
                    type="button"
                    className={
                      "home-album" +
                      (album.titulo === albumEscolhido ? " home-album--ativo" : "")
                    }
                    aria-pressed={album.titulo === albumEscolhido}
                    onClick={() => setAlbumEscolhido(album.titulo)}
                  >
                    <span className="home-album-capa"></span>
                    <strong>{album.titulo}</strong>
                    <small>{album.ano}</small>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ---------- Faixas do álbum escolhido ---------- */}
        {albumVisivel && (
          <section className="home-secao" key={albumVisivel.titulo}>
            <h2 className="home-secao-titulo">{albumVisivel.titulo}</h2>
            {faixas ? (
              <ol className="home-faixas">
                {faixas.map((faixa) => (
                  <li key={faixa.titulo} className="home-faixa">
                    <span className="home-faixa-titulo">{faixa.titulo}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="home-faixas-vazio">Faixas em breve</p>
            )}
          </section>
        )}
      </main>

      {/* ---------- Player ---------- */}
      <Player />
    </div>
  )
}

export default Home