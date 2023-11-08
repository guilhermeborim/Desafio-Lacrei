import {
  SectionTitleContainer,
  ArticleTitleContainer,
  ArticleButtonContainer,
  ArticleImgContainer,
  SectionContainer,
} from './style'
import ImgHomePage from '../../assets/rafiki-2.png'
import Button from '../Button'
const SectionTitle = () => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <ArticleTitleContainer>
          <h1>Boas vindas a Lacrei Saude</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        </ArticleTitleContainer>
        <ArticleButtonContainer>
          <Button
            name="Pessoa Usuaria"
            color="#fff"
            bg="#018762"
            padding="0.75rem 2rem"
          />
          <Button
            bg="#fff"
            border="2px"
            borderColor="##018762"
            name="Profissional"
            padding="0.625rem 2.75rem"
          />
        </ArticleButtonContainer>
      </SectionTitleContainer>
      <ArticleImgContainer>
        <img src={ImgHomePage} alt="" />
      </ArticleImgContainer>
    </SectionContainer>
  )
}

export default SectionTitle
