import { useState } from "react"
import "./Cadastro.css"

function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")

  return (
    <main className="cadastro">
      <aside className="cadastro-visual" aria-hidden="true">
        <div className="cadastro-disco">
          <div className="cadastro-disco-rotulo"></div>
        </div>
        <p className="cadastro-slogan">Bem vindo(a) ao MusicHub.</p>
      </aside>

      <section className="cadastro-painel">
        <form className="cadastro-form">
          <h2 className="cadastro-titulo">Crie sua conta</h2>
          <p className="cadastro-subtitulo">
            Salve artistas, álbuns e músicas na sua biblioteca.
          </p>

          <div className="cadastro-campo">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Como quer ser chamado"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="cadastro-campo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="cadastro-campo">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Mínimo de 6 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="cadastro-campo">
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              id="confirmarSenha"
              type="password"
              placeholder="Repita a senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="cadastro-botao">
            Criar conta
          </button>

          <p className="cadastro-login">
            Já tem conta? <a href="/login">Entrar</a>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Cadastro