import { FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition: background 0.22s, color 0.22s;
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonRef?: React.Ref<HTMLButtonElement>
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({
  buttonRef,
  children,
  ...props
}): JSX.Element => {
  return (
    <StyledButton ref={buttonRef} {...props}>
      {children}
    </StyledButton>
  )
}
