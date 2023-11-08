import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPerson from './pages/UserPerson'
import Profissional from './pages/Profissional'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user-person" element={<UserPerson />} />
      <Route path="profissional" element={<Profissional />} />
    </Routes>
  )
}

export default Rotas
