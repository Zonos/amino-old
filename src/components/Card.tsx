import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../styles/Theme'

const StyledCard = styled.section`
  background: white;
  border-radius: ${Theme.Surface.defaultRadius};
  padding: ${Theme.Density.spacing1};
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 12px; */
  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15), 0 4px 6px 0 rgba(112, 157, 199, 0.15);
  width: 100%;
`

const StyledTitle = styled.h1`
  margin-top: 0;
  color: #263238;
  margin: -${Theme.Density.spacing1};
  margin-bottom: ${Theme.Density.spacing1};
  padding: ${Theme.Density.spacing1};
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  font-size: 17px;
  font-weight: 500;
`

interface CardProps {
  cardTitle?: String,
}

export class Card extends Component<CardProps, {}> {
  render() {
    const { children, cardTitle } = this.props;

    return (
      <StyledCard>
        {cardTitle ? <StyledTitle>{cardTitle}</StyledTitle> : null }
        {children}
      </StyledCard>
    )
  }
}
