import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../styles/Theme'

const StyledBadge = styled.span`
  padding: 5px 15px;
  border: 1px solid ${Theme.Color.borderColor};
  display: inline-block;
  border-radius: 50px;
  width: fit-content;
  color: #525f7f;
`

export class Badge extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledBadge>
        {children}
      </StyledBadge>
    )
  }
}
