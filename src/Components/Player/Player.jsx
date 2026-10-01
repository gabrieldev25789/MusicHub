import { useRef, useState } from "react"

function Player() {
  // ---------- Estados ----------
  const audioRef = useRef(null)
  const [tocando, setTocando] = useState(false)

  // ---------- Funções ----------
  function alternar() {
    if (tocando) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setTocando(!tocando)
  }

  return (
    <footer className="home-player">
      <span className="home-player-capa"></span>

      <div className="home-player-info">
        <strong>Música de teste</strong>
        <small>MusicHub</small>
      </div>

      <button
        type="button"
        className="home-player-play"
        aria-label={tocando ? "Pausar" : "Tocar"}
        onClick={() => alternar()}
      >
        {tocando ? "⏸" : "▶"}
      </button>

      <div className="home-player-barra">
        <div className="home-player-barra-cheia"></div>
      </div>

      <audio
        ref={audioRef}
        src="/audio/musica-teste.wav"
        onEnded={() => setTocando(false)}
      />
    </footer>
  )
}

export default Player