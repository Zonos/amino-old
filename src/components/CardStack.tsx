import styled from "styled-components";
import { Density } from "../styles/Density";

export const CardStack = styled.div`
  flex: 1;
  box-sizing: border-box;

  section {
    margin-bottom: ${props => props.theme.Density.spacing.lg};
  }
`;
