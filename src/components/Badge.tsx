import styled from "styled-components";
import { Color } from "../styles/Theme";
import { Density } from "../styles/Density";

export const Badge = styled.span`
  padding: ${props => props.theme.Density.spacing.xxxs} ${props => props.theme.Density.spacing.md};
  border: 1px solid ${Color.borderColor};
  display: inline-block;
  border-radius: 50px;
  width: fit-content;
  font-size: 15px;
  color: ${props => props.theme.Color.text.base};
`;
