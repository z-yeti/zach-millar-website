import { TypeWriter } from '../../components/TypeWriter'
import styled from 'styled-components'
import { FC, useRef, useState } from 'react'
import { Button } from '../../components/Button'
import { CSSTransition } from 'react-transition-group'

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 2rem;
`

const LandingContent = styled.div`
  position: relative;
  .enter-site-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .enter-site-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.22s, transform 0.22s;
  }
  .enter-site-exit {
    opacity: 1;
  }
  .enter-site-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.22s, transform 0.22s;
  }
`

const LandingButton = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`

export const Landing: FC = (): JSX.Element => {
  const [messageTyped, setMessageTyped] = useState(false)
  const nodeRef = useRef(null)

  const handleTypeWriterComplete = () => {
    setTimeout(() => {
      setMessageTyped(true)
    }, 500)
  }

  return (
    <LandingContainer>
      <LandingContent>
        <TypeWriter
          typedMessage='ZachMillar.com'
          typingDelay={1500}
          typingSpeed={100}
          tagName='h1'
          onFinishedTyping={handleTypeWriterComplete}
        />
        <CSSTransition
          in={messageTyped}
          nodeRef={nodeRef}
          timeout={300}
          unmountOnExit
          classNames='enter-site'
        >
          <LandingButton buttonRef={nodeRef}>Enter Site</LandingButton>
        </CSSTransition>
      </LandingContent>
    </LandingContainer>
  )
}
