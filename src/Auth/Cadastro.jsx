import { useState } from "react"
import "./Cadastro.css"

function Cadastro() {
  // ---------- Estados ----------
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")

  const [user, setUser] = useState({})
  const [entrar, setEntrar] = useState(false)

  const [emailLogado, setEmailLogado] = useState("")
  const [senhaLogado, setSenhaLogado] = useState("")

  // ---------- Funções ----------
  function validarUser() {
    if (!nome || !email || !senha || !confirmaSenha) {
      alert("Preencha todos os campos")
      return
    }

    if (senha.length < 6) {
      alert("A senha precisa ter no mínimo 6 caracteres")
      return
    }

    if (senha !== confirmaSenha) {
      alert("Senhas diferentes")
      return
    }

    setUser({
      nome: nome,
      email: email,
      senha: senha,
    })

    alert("Conta criada! Agora é só entrar.")
    setEntrar(true)
  }

  function entrarComUser() {
    if (emailLogado === user.email && senhaLogado === user.senha) {
      alert("Logado com user")
    } else {
      alert("E-mail ou senha incorretos")
    }
  }

  function irParaLogin() {
    setEntrar(true)
  }

  function irParaCadastro() {
    setEntrar(false)
  }

  // ---------- Tela de cadastro ----------
  if (!entrar) {
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

            <button
              type="button"
              className="cadastro-botao"
              onClick={() => validarUser()}
            >
              Criar conta
            </button>

            <p className="cadastro-login">
              Já tem conta?{" "}
              <button
                type="button"
                className="cadastro-link"
                onClick={() => irParaLogin()}
              >
                Entrar
              </button>
            </p>
          </form>
        </section>
      </main>
    )
  }

  // ---------- Tela de login ----------
  return (
    <main className="cadastro">
      <aside className="cadastro-visual" aria-hidden="true">
        <div className="cadastro-disco">
          <div className="cadastro-disco-rotulo"></div>
        </div>
        <p className="cadastro-slogan">Que bom te ver de volta.</p>
      </aside>

      <section className="cadastro-painel">
        <form className="cadastro-form">
          <h2 className="cadastro-titulo">Entrar</h2>
          <p className="cadastro-subtitulo">
            Acesse sua biblioteca de artistas, álbuns e músicas.
          </p>

          <div className="cadastro-campo">
            <label htmlFor="emailLogin">E-mail</label>
            <input
              id="emailLogin"
              type="email"
              placeholder="voce@email.com"
              value={emailLogado}
              onChange={(e) => setEmailLogado(e.target.value)}
            />
          </div>

          <div className="cadastro-campo">
            <label htmlFor="senhaLogin">Senha</label>
            <input
              id="senhaLogin"
              type="password"
              placeholder="Sua senha"
              value={senhaLogado}
              onChange={(e) => setSenhaLogado(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="cadastro-botao"
            onClick={() => entrarComUser()}
          >
            Entrar
          </button>

          <p className="cadastro-login">
            Ainda não tem conta?{" "}
            <button
              type="button"
              className="cadastro-link"
              onClick={() => irParaCadastro()}
            >
              Criar conta
            </button>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Cadastro