import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../styles/Theme'

const InputWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(88, 106, 218, 0.1),
    0 2px 5px 0 rgba(88, 106, 218, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
    0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 0 transparent;
`;

const StyledInput = styled.input`
  border-radius: ${Theme.Surface.defaultRadius};
  border: 0;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: #525f7f;
  display: block;
  padding: 5px 15px;
  height: 40px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 1.5px ${Theme.Color.primaryColor};
  }
`;

interface InputProps {}

export class Input extends Component<InputProps, {}> {
  render() {
    return (
      <InputWrapper>
        <StyledInput placeholder="Some input" size={50} />
      </InputWrapper>
    )
  }
}
