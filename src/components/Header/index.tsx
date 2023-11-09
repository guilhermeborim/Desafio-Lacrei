import { useLocation } from 'react-router-dom'
import { HeaderContainer, LinkHeader, NavHeader } from './style'
const Header = () => {
  const location = useLocation()
  return (
    <HeaderContainer>
      <h2>Lacrei</h2>
      <nav>
        <NavHeader>
          <LinkHeader to="/" isActive={location.pathname === '/'}>
            Home
          </LinkHeader>
          <LinkHeader
            to="user-person"
            isActive={location.pathname === '/user-person'}
          >
            Pessoa Usuaria
          </LinkHeader>
          <LinkHeader
            to="profissional"
            isActive={location.pathname === '/profissional'}
          >
            Profissional
          </LinkHeader>
        </NavHeader>
      </nav>
    </HeaderContainer>
  )
}

export default Header
