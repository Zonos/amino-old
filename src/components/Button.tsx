import React from "react";
import styled from "styled-components";
import { Color, Surface } from "../styles/Theme";
import { Spinner } from "./Spinner";
import { Density } from "../styles/Density";

const StyledButton = styled.button`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  border: 0;
  border-radius: ${Surface.defaultRadius};
  font-weight: 500;
  padding-left: ${Density.spacing.md};
  padding-right: ${Density.spacing.md};
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  transition: all 100ms ease-in-out;
  height: 34px;
  border: ${(p: any) => (p.primary ? "0" : "1px solid rgba(0, 0, 0, 0.1)")};
  color: ${(p: any) => (p.primary ? "#fff" : Color.text.light)};
  background: ${(p: any) => (p.primary ? Color.primary.base : "#fff")};

  &:hover {
    background: ${(p: any) => (p.primary ? Color.primary.dark : "rgba(0, 0, 0, 0.008)")};
    color: ${(p: any) => (p.primary ? "#fff" : Color.text.light)};
  }

  &:active {
    box-shadow: 0 0 0 2px ${Color.primary.veryLight}99;
    background: ${(p: any) => (p.primary ? Color.primary.veryDark : "rgba(0, 0, 0, 0.015)")};
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

type ButtonProps = {
  primary?: boolean;
  saving?: boolean;
  onClick?: any;
};

type Props = ButtonProps & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>;

export const Button: React.FC<Props> = props => {
  const { children, primary, onClick, saving, disabled } = props;

  return (
    <StyledButton disabled={disabled || saving} onClick={onClick} {...props}>
      {saving ? <Spinner compact inverted={primary} /> : children}
    </StyledButton>
  );
};
