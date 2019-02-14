import React, { Component } from 'react'
import styled from 'styled-components'
import { Surface, Density, Color } from '../styles/Theme'

const StyledCard = styled.section`
  background: white;
  border-radius: ${Surface.defaultRadius};
  padding: ${Density.default.base};
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15), 0 4px 6px 0 rgba(112, 157, 199, 0.15);
  display: flex;
  flex: 1;
  flex-direction: column;
`

const StyledTitle = styled.h1`
  margin-top: 0;
  color: ${Color.text.dark};
  margin: -${Density.default.base};
  margin-bottom: ${Density.default.base};
  padding: 20px ${Density.default.base};
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  font-size: 16px;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

interface CardProps {
  cardTitle?: String,
  className?: string,
}

export class Card extends Component<CardProps, {}> {
  render() {
    const { children, cardTitle } = this.props;

    return (
      <StyledCard {...this.props}>
        {cardTitle ? <StyledTitle>{cardTitle}</StyledTitle> : null }
        {children}
      </StyledCard>
    )
  }
}
