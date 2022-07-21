import './App.css'
import Header from './Componentes/header/Header'
import Bio from './Componentes/bio/Bio'
import Firstsection from './Componentes/projetos/Firstsection'
import Secondsection from './Componentes/projetosgit/Secondsection'
import Footer from './Componentes/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Firstsection />
      <Secondsection />
      <Footer />
    </div>
  )
}

export default App
