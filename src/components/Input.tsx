import React from "react";
import styled from "styled-components";

import { IDataConstraints } from "../schemas/IDataConstraints";
import { Color, Surface, Typography } from "../styles/Theme";

const StyledInput = styled.input<Props>`
  border-radius: ${Surface.defaultRadius};
  border: 1px solid ${(p: Props) => (p.valid ? "transparent" : "red")};
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  padding: 5px 15px;
  height: 34px;
  width: 100%;
  font-family: ${Typography.defaultFontFamily};

  &::-webkit-input-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &::-moz-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &:-ms-input-placeholder {
    color: ${Color.text.light};
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid ${Color.primary.veryLight};
  }
`;

const InputLabel = styled.label`
  color: ${Color.text.light};
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
