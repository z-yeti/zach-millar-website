import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    toggleBorder: string
    background: string
  }
}

const millarBlack = '#1c1f21'
const millarWhite = '#eaebed'

export const lightTheme = {
  body: millarWhite,
  text: millarBlack,
  toggleBorder: millarWhite,
  background: millarBlack,
}
export const darkTheme = {
  body: millarBlack,
  text: millarWhite,
  toggleBorder: millarBlack,
  background: millarWhite,
}
