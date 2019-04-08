import React from "react";
import styled from "styled-components";
import { Color, Surface } from "../styles/Theme";
import { Spinner } from "./Spinner";
import { Density } from "../styles/Density";
import { Intent } from "../schemas/Intent";

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
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${Color.text.light};
  background: #fff;
  /* border: ${(p: any) => (p.primary ? "0" : "1px solid rgba(0, 0, 0, 0.1)")}; */
  /* color: ${(p: any) => (p.primary ? "#fff" : Color.text.light)};
  background: ${(p: any) => (p.primary ? Color.primary.base : "#fff")}; */
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.00);
    color: ${Color.text.light};
  }

  &:active {
    box-shadow: 0 0 0 3px ${Color.primary.veryLight}33;
    background: rgba(0, 0, 0, 0.015);
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background: ${Color.primary.base};
  color: #fff;
  border: 0;

  &:hover {
    background: ${Color.primary.dark};
    color: #fff;
  }

  &:active {
    background: ${Color.primary.veryDark};
    color: #fff;
  }
`;

const DangerButton = styled(StyledButton)`
  background: ${Color.danger.base};
  color: #fff;
  border: 0;

  &:hover {
    background: ${Color.danger.dark};
    color: #fff;
  }

  &:active {
    background: ${Color.danger.dark};
    box-shadow: 0 0 0 3px ${Color.danger.light};
    color: #fff;
  }
`;

type ButtonProps = {
  primary?: boolean;
  saving?: boolean;
  onClick?: any;
  intent?: Intent;
};

type Props = ButtonProps & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>;

export const Button: React.FC<Props> = props => {
  const { intent, children, onClick, saving, disabled } = props;

  const ButtonInner = () => (
    <>{saving ? <Spinner compact inverted={intent === Intent.Primary} /> : children}</>
  );

  const buttonProps = { disabled: disabled || saving, onClick: onClick, ...props };

  const BuildButton = () => {
    switch (intent) {
      case Intent.Primary:
        return (
          <PrimaryButton {...buttonProps}>
            <ButtonInner />
          </PrimaryButton>
        );
      case Intent.Danger:
        return (
          <DangerButton {...buttonProps}>
            <ButtonInner />
          </DangerButton>
        );
      case Intent.None:
      default:
        return (
          <StyledButton {...buttonProps}>
            <ButtonInner />
          </StyledButton>
        );
    }
  };

  return <BuildButton />;
};

Button.defaultProps = {
  intent: Intent.None
};
