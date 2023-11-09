import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavHeader } from '../Header/style'

export const ArticleImgFooter = styled.article`
  padding-bottom: 24px;
  img {
    width: 32px;
    display: inline-block;
    margin-right: 32px;
  }
`

export const FooterContainer = styled.footer`
  margin: 0 64px;
  border-top: 1px solid #b0e0d3;

  @media (max-width: 768px) {
    margin: 0 32px;
  }
`

export const NavFooter = styled(NavHeader)`
  padding-top: 32px;
  padding-bottom: 24px;
  li {
    font-weight: 400;
  }
`
export const SpanFooter = styled.span`
  color: #515151;
  font-weight: 400;
  font-size: 12px;
`

interface LinkFooterProps {
  isActive?: boolean
}
export const LinkFooter = styled(Link)<LinkFooterProps>`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#018762' : '#1F1F1F')};
  &:not(:last-child) {
    margin-right: 40px;
  }
`
