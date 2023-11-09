import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SectionTitleContainer = styled.section`
  max-width: 453px;
`

export const ArticleTitleContainer = styled.article`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 65.47px;
    color: #1f1f1f;
    padding-bottom: 2rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      line-height: 43.68px;
      text-align: center;
      padding-bottom: 1rem;
    }
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 32.74px;
    color: #515151;
    padding-bottom: 3rem;
  }
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 21.84px;
      text-align: center;
      padding-bottom: 1rem;
    }
  }
`

export const ArticleButtonContainer = styled.article`
  display: flex;
  justify-content: space-between;
  max-width: 453px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`
export const ArticleImgContainer = styled.article`
  max-width: 555px;

  @media (max-width: 767px) {
    margin-top: 2rem;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    margin-top: 2rem;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LinkUser = styled(Link)`
  padding: 0.75rem 2rem;
  background-color: rgb(1, 135, 98);
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 0.5rem;
`
export const LinkProf = styled(Link)`
  padding: 0.625rem 2.75rem;
  color: rgb(1, 135, 98);
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border: 2px solid rgb(1, 135, 98);
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 0.5rem;
`
