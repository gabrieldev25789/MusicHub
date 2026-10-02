import '../../musicHub/global.css'
import Cadastro from './Auth/Cadastro'
import Home from './Home/Home'
import { useState } from 'react'

function App() {

  const [entrarNaHome, setEntrarNaHome] = useState(
    () => !!localStorage.getItem("usuarioLogado")
  )

  return entrarNaHome ? (
    <Home sair={() => setEntrarNaHome(false)} />
  ) : (
    <Cadastro setEntrarNaHome={setEntrarNaHome} />
  )
}

export default App
