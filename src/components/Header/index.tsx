import { useState } from 'react'
import { HeaderContainer, NavHeader, LinkHeader } from './style'

const Header = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }
  return (
    <HeaderContainer>
      <h2>Lacrei</h2>
      <nav>
        <NavHeader>
          <LinkHeader to="/" clicked={clicked} onClick={handleClick}>
            Home
          </LinkHeader>
          <LinkHeader to="user-person">Pessoa Usuaria</LinkHeader>
          <LinkHeader to="profissional">Profissional</LinkHeader>
        </NavHeader>
      </nav>
    </HeaderContainer>
  )
}

export default Header
