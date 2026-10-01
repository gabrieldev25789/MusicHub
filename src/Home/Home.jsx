import "./Home.css"

function Home() {
  return (
    <div className="home">
      {/* ---------- Menu lateral ---------- */}
      <aside className="home-sidebar">
        <h1 className="home-logo">MusicHub</h1>

        <nav className="home-nav" aria-label="Principal">
          <button type="button" className="home-nav-item home-nav-item--ativo">
            Início
          </button>
          <button type="button" className="home-nav-item">
            Buscar
          </button>
        </nav>

        <section className="home-biblioteca">
          <h2 className="home-biblioteca-titulo">Sua biblioteca</h2>
          <ul className="home-biblioteca-lista">
            <li><button type="button" className="home-nav-item">Artistas</button></li>
            <li><button type="button" className="home-nav-item">Álbuns</button></li>
            <li><button type="button" className="home-nav-item">Músicas salvas</button></li>
            <li><button type="button" className="home-nav-item">Playlists</button></li>
          </ul>
        </section>
      </aside>

      {/* ---------- Conteúdo principal ---------- */}
      <main className="home-conteudo">
        <header className="home-topo">
          <input
            className="home-busca"
            type="search"
            placeholder="O que você quer ouvir?"
            aria-label="Buscar"
          />
          <button type="button" className="home-perfil" aria-label="Perfil">
            U
          </button>
        </header>

        <section className="home-secao">
          <h2 className="home-secao-titulo">Bem-vindo de volta</h2>
          <ul className="home-atalhos">
            <li className="home-atalho"><span className="home-capa"></span>Músicas salvas</li>
            <li className="home-atalho"><span className="home-capa"></span>Favoritas</li>
            <li className="home-atalho"><span className="home-capa"></span>Para treinar</li>
            <li className="home-atalho"><span className="home-capa"></span>Descobertas</li>
            <li className="home-atalho"><span className="home-capa"></span>Madrugada</li>
            <li className="home-atalho"><span className="home-capa"></span>Clássicos</li>
          </ul>
        </section>

        <section className="home-secao">
          <h2 className="home-secao-titulo">Artistas que você segue</h2>
          <ul className="home-carrossel">
            <li className="home-card home-card--artista">
              <span className="home-capa"></span>
              <strong>Nome do artista</strong>
              <small>Artista</small>
            </li>
            <li className="home-card home-card--artista">
              <span className="home-capa"></span>
              <strong>Nome do artista</strong>
              <small>Artista</small>
            </li>
            <li className="home-card home-card--artista">
              <span className="home-capa"></span>
              <strong>Nome do artista</strong>
              <small>Artista</small>
            </li>
            <li className="home-card home-card--artista">
              <span className="home-capa"></span>
              <strong>Nome do artista</strong>
              <small>Artista</small>
            </li>
          </ul>
        </section>

        <section className="home-secao">
          <h2 className="home-secao-titulo">Álbuns salvos</h2>
          <ul className="home-carrossel">
            <li className="home-card">
              <span className="home-capa"></span>
              <strong>Título do álbum</strong>
              <small>Artista, 2024</small>
            </li>
            <li className="home-card">
              <span className="home-capa"></span>
              <strong>Título do álbum</strong>
              <small>Artista, 2024</small>
            </li>
            <li className="home-card">
              <span className="home-capa"></span>
              <strong>Título do álbum</strong>
              <small>Artista, 2024</small>
            </li>
            <li className="home-card">
              <span className="home-capa"></span>
              <strong>Título do álbum</strong>
              <small>Artista, 2024</small>
            </li>
          </ul>
        </section>
      </main>

      {/* ---------- Player ---------- */}
      <footer className="home-player">
        <div className="home-player-faixa">
          <span className="home-capa"></span>
          <div>
            <strong>Nome da música</strong>
            <small>Nome do artista</small>
          </div>
        </div>

        <div className="home-player-controles">
          <div className="home-player-botoes">
            <button type="button" aria-label="Anterior">⏮</button>
            <button type="button" className="home-player-play" aria-label="Tocar">▶</button>
            <button type="button" aria-label="Próxima">⏭</button>
          </div>
          <div className="home-player-progresso">
            <span>0:00</span>
            <div className="home-barra"><div className="home-barra-cheia"></div></div>
            <span>3:30</span>
          </div>
        </div>

        <div className="home-player-volume">
          <label htmlFor="volume">Volume</label>
          <input id="volume" type="range" min="0" max="100" defaultValue="70" />
        </div>
      </footer>
    </div>
  )
}

export default Home