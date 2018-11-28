import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '../styles/Theme'

// const StyledCard = styled.section`
//   background: white;
//   padding: ${Theme.Density.spacing1};
//   box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 12px;
//   width: 100%;
// `

// const StyledTitle = styled.h1`
//   margin-top: 0;
//   color: #263238;
//   margin: -${Theme.Density.spacing1};
//   margin-bottom: ${Theme.Density.spacing1};
//   padding: ${Theme.Density.spacing1};
//   box-sizing: border-box;
//   border-bottom: 1px solid #eee;
//   font-size: 17px;
//   font-weight: 500;
// `

const StyledInput = styled.input`
  border-radius: ${Theme.Surface.defaultRadius};
  border: 1px solid ${Theme.Color.borderColor};
  padding: 7.5px 15px;
  font-size: 15px;
  outline: none;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  transition: all 100ms ease-in-out;

  &:focus {
    border: 1px solid ${Theme.Color.primaryColor};
  }
`;

interface InputProps {}

export class Input extends Component<InputProps, {}> {
  render() {
    // const { children, cardTitle } = this.props;

    return (
      <StyledInput placeholder="Some input" size={50} />
    )
  }
}
