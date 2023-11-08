import { HeaderContainer, NavHeader } from './style'

const Header = () => {
  return (
    <header className="header-bg">
      <HeaderContainer className="container">
        <h2>Lacrei</h2>
        <nav>
          <NavHeader>
            <li>Home</li>
            <li>Pessoa Usuaria</li>
            <li>Profissional</li>
          </NavHeader>
        </nav>
      </HeaderContainer>
    </header>
  )
}

export default Header
