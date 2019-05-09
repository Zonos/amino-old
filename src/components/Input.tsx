import React from "react";
import styled from "styled-components";

import { IDataConstraints } from "../schemas/IDataConstraints";
import { Color, Surface, Typography, Density } from "../styles/Theme";

const StyledInput = styled.input<Props>`
  border-radius: ${props => props.theme.Surface.defaultRadius};
  border: 1px solid ${props => (props.valid ? "rgba(0, 0, 0, 0.1)" : "red")};
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${props => props.theme.Color.text.light};
  display: block;
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.sm};
  height: 34px;
  width: 100%;

  &::-webkit-input-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &::-moz-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &:-ms-input-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid ${props => props.theme.Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}33;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputLabel = styled.label`
  color: ${props => props.theme.Color.text.light};
  opacity: 0.6;
  font-size: 15px;
  margin-bottom: 8px; /* TODO: subspacing from Theme.ts */
  display: block;
`;

type InputProps = {
  label?: string;
  onChange?: any;
  valid?: boolean;
  constraints?: IDataConstraints;
};

type Props = InputProps & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export const Input: React.FC<Props> = props => {
  const { label, constraints, onChange } = props;

  const onInvalid = (e: any) => {
    console.log("its invalid");
    e.target.classList.add("invalid");
  };

  return (
    <div className="amino-input-wrapper">
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput
        // required={constraints && constraints.required}
        onChange={onChange}
        onInvalid={onInvalid}
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  valid: true
};
