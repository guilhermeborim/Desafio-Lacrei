import ImgHomePage from '../../assets/rafiki-2.png'

import * as S from './style'

const SectionTitle = () => {
  return (
    <S.SectionContainer>
      <S.SectionTitleContainer>
        <S.ArticleTitleContainer>
          <h1>Boas vindas a Lacrei Saude</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        </S.ArticleTitleContainer>
        <S.ArticleButtonContainer>
          <S.LinkUser to="user-person">Pessoa Usuaria</S.LinkUser>
          <S.LinkProf to="profissional">Profissional</S.LinkProf>
        </S.ArticleButtonContainer>
      </S.SectionTitleContainer>
      <S.ArticleImgContainer>
        <img src={ImgHomePage} alt="" />
      </S.ArticleImgContainer>
    </S.SectionContainer>
  )
}

export default SectionTitle
