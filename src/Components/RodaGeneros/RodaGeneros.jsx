function RodaGeneros({ generos, ativo, setAtivo }) {
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
    <>
      <div
        className="home-roda"
        role="group"
        aria-label="Escolha um gênero"
        onKeyDown={aoApertarTecla}
      >
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
    </>
  )
}

export default RodaGeneros