import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/index'
import GlobalCss from './style'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <main className="container">
        <Rotas />
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
