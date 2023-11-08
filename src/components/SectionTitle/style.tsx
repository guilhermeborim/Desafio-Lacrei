import styled from 'styled-components'

export const SectionTitleContainer = styled.section`
  max-width: 453px;
`

export const ArticleTitleContainer = styled.article`
  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 65.47px;
    color: #1f1f1f;
    padding-bottom: 32px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
      line-height: 43.68px;
      text-align: center;
      padding-bottom: 16px;
    }
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 32.74px;
    color: #515151;
    padding-bottom: 48px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 16px;
      line-height: 21.84px;
      text-align: center;
      padding-bottom: 16px;
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
    gap: 16px;
  }
`
export const ArticleImgContainer = styled.article`
  max-width: 555px;

  @media (max-width: 767px) {
    margin-top: 32px;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding: 0 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 32px;
    margin-top: 32px;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`
