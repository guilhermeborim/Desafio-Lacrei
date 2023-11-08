import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 8px 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px 32px;
  }
  h2 {
    color: #018762;
    font-size: 32px;
    font-weight: 700;
  }
`

export const NavHeader = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    li:not(:last-child) {
      margin-right: 20px;
    }
  }
`

interface LinkHeaderProps {
  clicked?: boolean
}

export const LinkHeader = styled(Link)<LinkHeaderProps>`
  color: ${(props) => (props.clicked ? '#018762' : '#1F1F1F')};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }
`
