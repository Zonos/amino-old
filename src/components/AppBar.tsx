import styled from "styled-components";
import { Density } from "../styles/Density";

export const AppBar = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-bottom: ${Density.spacing.xl};
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  align-items: center;
  height: 73px;
`;
