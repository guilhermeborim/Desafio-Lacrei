import {
  ArticleImgContainer,
  SectionContainer,
} from '../../components/SectionTitle/style'
import ImgUserPerson from '../../assets/rafiki-1.png'
import { ParagrafoUser, ArticleTitleUserPerson } from './style'
const UserPerson = () => {
  return (
    <SectionContainer>
      <ArticleTitleUserPerson>
        <h1>Pessoa Usuária</h1>
        <ParagrafoUser>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </ParagrafoUser>
      </ArticleTitleUserPerson>
      <ArticleImgContainer>
        <img src={ImgUserPerson} alt="" />
      </ArticleImgContainer>
    </SectionContainer>
  )
}

export default UserPerson
