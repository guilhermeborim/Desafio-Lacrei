import { useLocation } from 'react-router-dom'
import * as S from './style'
const Header = () => {
  const location = useLocation()
  return (
    <S.HeaderContainer>
      <h2>Lacrei</h2>
      <nav>
        <S.NavHeader>
          <S.LinkHeader to="/" isActive={location.pathname === '/'}>
            Home
          </S.LinkHeader>
          <S.LinkHeader
            to="user-person"
            isActive={location.pathname === '/user-person'}
          >
            Pessoa Usuaria
          </S.LinkHeader>
          <S.LinkHeader
            to="profissional"
            isActive={location.pathname === '/profissional'}
          >
            Profissional
          </S.LinkHeader>
        </S.NavHeader>
      </nav>
    </S.HeaderContainer>
  )
}

export default Header
