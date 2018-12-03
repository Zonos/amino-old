import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../styles/Theme'

const StyledInput = styled.input`
  border-radius: ${Theme.Surface.defaultRadius};
  border: 1px solid ${Theme.Color.borderColor};
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: #525f7f;
  display: block;
  padding: 5px 15px;
  height: 40px;
  width: 100%;

  &::-webkit-input-placeholder {
    color: #525f7f;
    opacity: .6;
  }

  &::-moz-placeholder {
    color: #525f7f;
    opacity: .6;
  }

  &:-ms-input-placeholder {
    color: #525f7f;
    opacity: .6;
  }

  &:focus {
    box-shadow: 0 0 0 1.5px ${Theme.Color.primaryColor};
  }
`;

const InputLabel = styled.label`
  color: #525f7f;
  opacity: .6;
  margin-bottom: 8px; /* TODO: subspacing from Theme.ts */
  display: block;
`;

interface InputProps {
  label?: String,
  placeholder?: string,
}

export class Input extends Component<InputProps, {}> {
  render() {
    const { label, placeholder } = this.props;

    return (
      <div className="amino-input-wrapper">
        { label && <InputLabel>{label}</InputLabel>}
        <StyledInput placeholder={placeholder} size={50} />
      </div>
    )
  }
}
