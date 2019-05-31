import styled from "styled-components";

export const CheckboxGroup = styled.div`
  * {
    margin-bottom: ${props => props.theme.Density.spacing.sm};
  }

  *:last-of-type {
    margin-bottom: 0;
  }
`;
