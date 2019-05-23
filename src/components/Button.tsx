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
  border-radius: ${props => props.theme.Surface.defaultRadius};
  font-weight: 500;
  padding-left: ${props => props.theme.Density.spacing.sm};
  padding-right: ${props => props.theme.Density.spacing.sm};
  outline: none;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  height: 34px;
  //border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.Color.text.light};
  background: #fff;
  text-decoration: none;

  svg {
    fill: ${props => props.theme.Color.text.light};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.015);
    color: ${props => props.theme.Color.text.light};
  }

  &:active {
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}33;
    background: rgba(0, 0, 0, 0.015);
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background: ${props => props.theme.Color.primary.base};
  color: #fff;
  border: 0;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 85, 255, 0.3);

  &:hover {
    background: ${props => props.theme.Color.primary.dark};
    color: #fff;
  }

  &:active {
    background: ${props => props.theme.Color.primary.veryDark};
    color: #fff;
  }
`;

const DangerButton = styled(StyledButton)`
  background: ${props => props.theme.Color.danger.base};
  color: #fff;
  border: 0;

  &:hover {
    background: ${props => props.theme.Color.danger.dark};
    color: #fff;
  }

  &:active {
    background: ${props => props.theme.Color.danger.dark};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.danger.light};
    color: #fff;
  }
`;

const IconButton = styled(StyledButton)`
  padding-left: ${props => props.theme.Density.spacing.sm};
  padding-right: ${props => props.theme.Density.spacing.sm};
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
      case Intent.Icon:
        return (
          <IconButton {...buttonProps}>
            <ButtonInner />
          </IconButton>
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
