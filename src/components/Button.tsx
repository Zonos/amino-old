import React from "react";
import styled from "styled-components";
import { Color, Surface } from "../styles/Theme";
import { Spinner } from "./Spinner";

const StyledButton = styled.button`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  border: 0;
  border-radius: ${Surface.defaultRadius};
  font-weight: 500;
  padding-left: 25px;
  padding-right: 25px;
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  transition: all 100ms ease-in-out;
  height: 34px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);

  color: ${(p: any) => (p.primary ? "#fff" : Color.text.light)};
  background: ${(p: any) => (p.primary ? Color.primary.base : "#fff")};

  &:hover {
    background: ${(p: any) => (p.primary ? Color.primary.dark : "rgba(0, 0, 0, 0.008)")};
    color: ${(p: any) => (p.primary ? "#fff" : Color.text.light)};
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 3px 5px rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    opacity: 0.8;
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
