import { useLocation } from 'react-router-dom'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import {
  ArticleImgFooter,
  FooterContainer,
  LinkFooter,
  NavFooter,
  SpanFooter,
} from './style'
const Footer = () => {
  const location = useLocation()
  return (
    <FooterContainer>
      <nav>
        <NavFooter>
          <LinkFooter to="/" isActive={location.pathname === '/'}>
            Home
          </LinkFooter>
          <LinkFooter
            to="user-person"
            isActive={location.pathname === '/user-person'}
          >
            Pessoa Usuaria
          </LinkFooter>
          <LinkFooter
            to="profissional"
            isActive={location.pathname === '/profissional'}
          >
            Profissional
          </LinkFooter>
        </NavFooter>
      </nav>
      <ArticleImgFooter>
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
      </ArticleImgFooter>
      <SpanFooter>Desafio Front-end Lacrei</SpanFooter>
    </FooterContainer>
  )
}

export default Footer
