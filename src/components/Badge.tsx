import styled from "styled-components";
import { Color } from "../styles/Theme";
import { Density } from "../styles/Density";

export const Badge = styled.span`
  padding: ${Density.spacing.xxxs} ${Density.spacing.md};
  border: 1px solid ${Color.borderColor};
  display: inline-block;
  border-radius: 50px;
  width: fit-content;
  font-size: 14px;
  color: ${Color.text.base};
`;
