import { FC, useState, useEffect, useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

const blinkAnimation = keyframes`
  to {
    visibility: hidden;
  }
`

const TypeWriterContainer = styled.div`
  display: flex;
`

const BlinkingCursor = styled.span`
  user-select: none;
  animation: ${blinkAnimation} 0.75s steps(2, start) infinite;
`

type TypeWriterProps = {
  tagName: keyof JSX.IntrinsicElements
  typedMessage: string
  typingDelay?: number
  typingSpeed?: number
  onFinishedTyping?: () => void
}

export const TypeWriter: FC<TypeWriterProps> = ({
  tagName: MessageTag = 'div',
  typedMessage,
  typingDelay,
  typingSpeed,
  onFinishedTyping,
}): JSX.Element => {
  const [displayedText, updateDisplayedText] = useState('')
  const animID: { current: NodeJS.Timeout | null } = useRef(null)
  const initTyping = () => {
    updateDisplayedText(typedMessage.charAt(0))
    animID.current = setInterval(typeLetter, typingSpeed || 1000)
  }

  const typeLetter = useCallback(() => {
    updateDisplayedText((prevText) => {
      if (typedMessage.length <= prevText.length)
        clearInterval(animID.current as NodeJS.Timeout)
      return prevText.concat(typedMessage.charAt(prevText.length))
    })
  }, [typedMessage])

  useEffect(() => {
    if (typingDelay) {
      setTimeout(() => {
        initTyping()
      }, typingDelay)
    } else {
      initTyping()
    }
    return () => {
      updateDisplayedText('')
      clearInterval(animID.current as NodeJS.Timeout)
    }
  }, [typeLetter, typedMessage, typingSpeed])

  useEffect(() => {
    if (typedMessage === displayedText && onFinishedTyping) {
      onFinishedTyping()
    }
  }, [displayedText, onFinishedTyping, typedMessage])

  return (
    <TypeWriterContainer>
      <MessageTag>{displayedText}</MessageTag>
      <BlinkingCursor as={MessageTag}>_</BlinkingCursor>
    </TypeWriterContainer>
  )
}
