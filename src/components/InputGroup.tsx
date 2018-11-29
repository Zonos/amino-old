import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInputGroup = styled.div`
  .amino-input-wrapper {
    margin-bottom: 20px;
  }
`;

export class InputGroup extends Component<any, {}> {
  render() {
    const { children } = this.props;

    return (
      <StyledInputGroup>
        {children}
      </StyledInputGroup>
    )
  }
}
