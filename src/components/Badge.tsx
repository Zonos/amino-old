import styled from "styled-components";
import { Color } from "../styles/Theme";
import { Density } from "../styles/Density";

export const Badge = styled.span`
  padding: ${props => props.theme.Density.spacing.xxxs} ${props => props.theme.Density.spacing.sm};
  border: 0;
  background: #f3f6f7;
  display: inline-block;
  border-radius: 50px;
  width: fit-content;
  color: ${props => props.theme.Color.text.light};
`;
