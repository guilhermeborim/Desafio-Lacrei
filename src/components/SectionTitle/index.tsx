import {
  SectionTitleContainer,
  ArticleTitleContainer,
  ArticleButtonContainer,
  ArticleImgContainer,
  SectionContainer,
} from './style'
import { Box } from '@chakra-ui/react'
import ImgHomePage from '../../assets/rafiki-2.png'
const SectionTitle = () => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <ArticleTitleContainer>
          <h1>Boas vindas a Lacrei Saude</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        </ArticleTitleContainer>
        <ArticleButtonContainer>
          <Box
            bg="#018762"
            as="button"
            color="white"
            fontSize="18px"
            fontWeight="700"
            borderRadius="8px"
            width="192px"
            height="48px"
          >
            Pessoa Juridica
          </Box>
          <Box
            bg="#fff"
            border="2px"
            borderColor="##018762"
            as="button"
            color="#018762"
            fontSize="18px"
            fontWeight="700"
            borderRadius="8px"
            width="192px"
            height="48px"
          >
            Profissional
          </Box>
        </ArticleButtonContainer>
      </SectionTitleContainer>
      <ArticleImgContainer>
        <img src={ImgHomePage} alt="" />
      </ArticleImgContainer>
    </SectionContainer>
  )
}

export default SectionTitle
