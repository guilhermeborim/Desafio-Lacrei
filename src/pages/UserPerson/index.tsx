import ImgUserPerson from '../../assets/rafiki-1.png'
import {
  ArticleImgContainer,
  SectionContainer,
} from '../../components/SectionTitle/style'
import * as S from './style'
const UserPerson = () => {
  return (
    <SectionContainer>
      <S.ArticleTitleUserPerson>
        <h1>Pessoa Usuária</h1>
        <S.ParagrafoUser>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </S.ParagrafoUser>
      </S.ArticleTitleUserPerson>
      <ArticleImgContainer>
        <img src={ImgUserPerson} alt="" />
      </ArticleImgContainer>
    </SectionContainer>
  )
}

export default UserPerson
