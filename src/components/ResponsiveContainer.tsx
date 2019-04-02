import React from "react";
import styled from "styled-components";

export const ResponsiveContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;

  /* Desktops and laptops */
  @media only screen and (max-width: 1279px) {
    width: 90%;
  }

  /* Big screens */
  @media only screen and (min-width: 1921px) {
    width: 30%;
  }
`;

// export class ResponsiveContainer extends Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired
//   }

//   render() {
//     const { children } = this.props

//     return <StyledContainer>{children}</StyledContainer>
//   }
// }
