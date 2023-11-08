import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    //font-family: 'Poppins', sans-serif;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
