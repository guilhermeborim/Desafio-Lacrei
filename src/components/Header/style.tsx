import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 0.5rem 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
  }
  h2 {
    color: #018762;
    font-size: 2rem;
    font-weight: 700;
  }
`

export const NavHeader = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    li:not(:last-child) {
      margin-right: 1.25rem;
    }
  }
`
interface LinkHeaderProps {
  isActive?: boolean
}
export const LinkHeader = styled(Link)<LinkHeaderProps>`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#018762' : '#1F1F1F')};
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`
