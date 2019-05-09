import React from "react";
import { Color } from "../styles/Theme";
import styled, { keyframes } from "styled-components";

type Props = {
  inverted?: boolean;
  compact?: boolean;
};

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-width: ${(p: Props) => (p.compact ? "2px" : "4px")};
  border-color: ${(p: Props) => (p.inverted ? "#fff" : "rgba(0, 0, 0, 0.1)")};
  border-left-color: ${(p: Props) => (p.inverted ? "transparent" : p.theme.Color.primary.base)};
  border-radius: 50%;
  width: ${(p: Props) => (p.compact ? "15px" : "30px")};
  height: ${(p: Props) => (p.compact ? "15px" : "30px")};
  animation: ${SpinnerAnimation} 800ms linear infinite;
`;
