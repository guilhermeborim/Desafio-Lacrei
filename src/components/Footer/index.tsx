import { useLocation } from 'react-router-dom'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import * as S from './style'
const Footer = () => {
  const location = useLocation()
  return (
    <S.FooterContainer>
      <nav>
        <S.NavFooter>
          <S.LinkFooter to="/" isActive={location.pathname === '/'}>
            Home
          </S.LinkFooter>
          <S.LinkFooter
            to="user-person"
            isActive={location.pathname === '/user-person'}
          >
            Pessoa Usuaria
          </S.LinkFooter>
          <S.LinkFooter
            to="profissional"
            isActive={location.pathname === '/profissional'}
          >
            Profissional
          </S.LinkFooter>
        </S.NavFooter>
      </nav>
      <S.ArticleImgFooter>
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
      </S.ArticleImgFooter>
      <S.SpanFooter>Desafio Front-end Lacrei</S.SpanFooter>
    </S.FooterContainer>
  )
}

export default Footer
