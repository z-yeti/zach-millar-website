import { FC, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { lightTheme, darkTheme } from '../../styles/Themes'
import { BsMoonStars, BsSun } from 'react-icons/bs'

type ThemeWrapperProps = {
  children?: React.ReactNode
}

const ThemeSwitchButton = styled.button<{ appTheme: string }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  font-size: 1.5rem;
  color: ${({ appTheme }) =>
    appTheme === 'light' ? darkTheme.text : lightTheme.text};
  background: ${({ appTheme }) =>
    appTheme === 'light' ? darkTheme.body : lightTheme.body};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const ThemeWrapper: FC<ThemeWrapperProps> = ({
  children,
}): JSX.Element => {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      {theme && (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <ThemeSwitchButton onClick={themeToggler} appTheme={theme}>
            {theme === 'light' ? <BsMoonStars /> : <BsSun />}
          </ThemeSwitchButton>
          {children}
        </ThemeProvider>
      )}
    </>
  )
}
