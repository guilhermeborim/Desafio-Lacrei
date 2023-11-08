import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default Rotas
