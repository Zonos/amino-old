import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Theme } from '../styles/Theme'

const SkBounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`

const StyledSpinner = styled.div<SpinnerProps>`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`

const SpinnerDiv = styled.div`
  background-color: ${(props: SpinnerProps) => (props.inverted ? '#fff' : '#333')};
  width: ${(props: SpinnerProps) => (props.compact ? '10px' : '18px')};
  height: ${(props: SpinnerProps) => (props.compact ? '10px' : '18px')};
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

interface SpinnerProps {
  inverted?: boolean
  compact?: boolean
}

export class Spinner extends Component<SpinnerProps, {}> {
  render() {
    return (
      <StyledSpinner {...this.props}>
        <Bounce1 {...this.props} />
        <Bounce2 {...this.props} />
        <Bounce3 {...this.props} />
      </StyledSpinner>
    )
  }
}
