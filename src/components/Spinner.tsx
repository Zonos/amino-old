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

export const Spinner = styled.div<any>`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-width: ${(props: any) => (props.compact ? "2px" : "4px")};
  border-color: ${(props: any) => (props.inverted ? "#fff" : "rgba(0, 0, 0, 0.1)")};
  border-left-color: ${(props: any) =>
    props.inverted ? "transparent" : props.theme.Color.primary.base};
  border-radius: 50%;
  width: ${(props: any) => (props.compact ? "15px" : "30px")};
  height: ${(props: any) => (props.compact ? "15px" : "30px")};
  animation: ${SpinnerAnimation} 800ms linear infinite;
`;
