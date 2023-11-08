import styled from 'styled-components'
import { ArticleTitleContainer } from '../../components/SectionTitle/style'

export const ParagrafoUser = styled.p`
  border-left: 5px solid #018762;
  line-height: 2rem;
  font-size: 1.5rem;
  padding-left: 16px;
`

export const ArticleTitleUserPerson = styled(ArticleTitleContainer)`
  max-width: 540px;

  P {
    padding-bottom: 0;
  }
`
