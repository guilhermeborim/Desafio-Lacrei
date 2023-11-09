import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

`

export default GlobalCss
