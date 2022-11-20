import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    toggleBorder: string
    background: string
  }
}

export const millarBlack = '#1c1f21'
export const millarWhite = '#eaebed'

export const transitionSpeedDirection = '0.22s'

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
