import React, { Component } from "react";
import styled from "styled-components";
import { Density } from "../styles/Theme";

export const InputGroup = styled.div`
  .amino-input-wrapper {
    margin-bottom: ${props => props.theme.Density.spacing.md};
  }

  .amino-input-wrapper:last-of-type {
    margin-bottom: 0;
  }
`;

// export class InputGroup extends Component<any, {}> {
//   render() {
//     const { children } = this.props;

//     return (
//       <StyledInputGroup>
//         {children}
//       </StyledInputGroup>
//     )
//   }
// }
