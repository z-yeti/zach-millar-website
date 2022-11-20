import { createGlobalStyle } from 'styled-components'
import { transitionSpeedDirection } from './Themes'

export const GlobalStyles = createGlobalStyle`
  html * {
      font-family: niveau-grotesk-small-caps,sans-serif;
    }
  body {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: niveau-grotesk-small-caps,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color ${transitionSpeedDirection}, color ${transitionSpeedDirection};
  }
  #root {
    margin:0 auto;
  }
`
