import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavHeader } from '../Header/style'

export const ArticleImgFooter = styled.article`
  padding-bottom: 1.5rem;
  img {
    width: 32px;
    display: inline-block;
    margin-right: 2rem;
  }
`

export const FooterContainer = styled.footer`
  margin: 0 4rem;
  border-top: 1px solid #b0e0d3;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`

export const NavFooter = styled(NavHeader)`
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  li {
    font-weight: 400;
  }
`
export const SpanFooter = styled.span`
  color: #515151;
  font-weight: 400;
  font-size: 0.75rem;
`

interface LinkFooterProps {
  isActive?: boolean
}
export const LinkFooter = styled(Link)<LinkFooterProps>`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#018762' : '#1F1F1F')};
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`
