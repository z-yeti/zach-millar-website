import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: niveau-grotesk-small-caps,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.22s linear;
  }
  #root {
    margin:0 auto;
  }
`
