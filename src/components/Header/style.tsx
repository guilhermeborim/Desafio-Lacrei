import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  h2 {
    color: #018762;
    font-size: 32px;
    font-weight: 700;
    padding: 8px 0;
  }
`

export const NavHeader = styled.ul`
  display: flex;
  align-items: center;

  li {
    color: #1f1f1f;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  li:not(:last-child) {
    margin-right: 40px;
  }
`
