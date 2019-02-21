import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  inverted?: boolean
  compact?: boolean
}

const SkBounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`

const StyledSpinner = styled.div`
  width: 70px;
  text-align: center;
`

const SpinnerDiv = styled.div`
  background-color: ${(props: Props) => (props.inverted ? '#fff' : '#333')};
  width: ${(props: Props) => (props.compact ? '10px' : '18px')};
  height: ${(props: Props) => (props.compact ? '10px' : '18px')};
  border-radius: 100%;
  display: inline-block;
  animation: ${SkBounceDelay} 1.4s infinite ease-in-out both;
`

const Bounce1 = styled(SpinnerDiv)`
  animation-delay: -0.32s;
`

const Bounce2 = styled(SpinnerDiv)`
  animation-delay: -0.16s;
`

const Bounce3 = SpinnerDiv

export const Spinner: React.FC<Props> = props => (
  <StyledSpinner {...props}>
    <Bounce1 {...props} />
    <Bounce2 {...props} />
    <Bounce3 {...props} />
  </StyledSpinner>
)
