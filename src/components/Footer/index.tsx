import Linkedin from '../../assets/linkedin.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import {
  ArticleImgFooter,
  FooterContainer,
  NavFooter,
  SpanFooter,
} from './style'

const Footer = () => {
  return (
    <FooterContainer>
      <nav>
        <NavFooter>
          <li>Home</li>
          <li>Pessoa Usuaria</li>
          <li>Profissional</li>
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
