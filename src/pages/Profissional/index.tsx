import {
  ArticleImgContainer,
  SectionContainer,
} from '../../components/SectionTitle/style'
import { ArticleTitleUserPerson, ParagrafoUser } from '../UserPerson/style'
import ImgProfissional from '../../assets/profissional-1.png'
const Profissional = () => {
  return (
    <SectionContainer>
      <ArticleTitleUserPerson>
        <h1>Profissional</h1>
        <ParagrafoUser>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </ParagrafoUser>
      </ArticleTitleUserPerson>
      <ArticleImgContainer>
        <img src={ImgProfissional} alt="" />
      </ArticleImgContainer>
    </SectionContainer>
  )
}

export default Profissional
