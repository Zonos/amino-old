import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Theme from '../styles/Theme'

const StyledButton = styled.button`
  border-radius: ${Theme.Surface.defaultRadius};
  box-shadow: 0 2px 3px 0 #0000001d;
  background: ${Theme.Color.primaryColor};
  font-weight: 500;
  padding: 8px 20px;
  border: 0;
  color: hsla(0, 0%, 100%, 0.9);
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  transition: all 120ms ease-in-out;

  &:hover {
    background: ${Theme.Color.lightPrimaryColor};
    color: hsla(0, 0%, 100%, 1);
    box-shadow: 0 0 0 1px rgba(88, 106, 218, 0.1),
      0 2px 5px 0 rgba(88, 106, 218, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 0 transparent;
  }
`

const StyledSecondaryButton = styled.button`
  border-radius: ${Theme.Surface.defaultRadius};
  font-weight: 500;
  padding: 8px 20px;
  border: 0;
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  transition: all 120ms ease-in-out;
  background: white;
  color: #263238;
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(88, 106, 218, 0.1),
    0 2px 5px 0 rgba(88, 106, 218, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
    0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 0 0 0 transparent;

  &:hover {
    background: white;
    opacity: 1;
    color: #263238;
  }
`

interface ButtonProps {
  secondary?: Boolean,
}

export class Button extends Component<ButtonProps, {}> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    secondary: PropTypes.bool
  }

  render() {
    const { children, secondary } = this.props

    return (
      <React.Fragment>
        {secondary ? (
          <StyledSecondaryButton>{children}</StyledSecondaryButton>
        ) : (
          <StyledButton>{children}</StyledButton>
        )}
      </React.Fragment>
    );
  }
}
