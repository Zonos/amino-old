import React from "react";
import styled from "styled-components";

import { IDataConstraints } from "../schemas/IDataConstraints";

const StyledInput = styled.input<Props>`
  border-radius: 6px;
  border: 1px solid ${props => (props.valid ? props.theme.Color.border : "red")};
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${props => props.theme.Color.text.light};
  display: block;
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.sm};
  padding-left: ${props => (props.prefix ? "42px" : props.theme.Density.spacing.sm)};
  padding-right: ${props => (props.postfix ? "42px" : props.theme.Density.spacing.sm)};
  //height: 34px;
  height: 40px;
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
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}88;
    //border: 1px solid ${props => props.theme.Color.primary.base};
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Prefix = styled.div`
  background: #fafafa;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  //height: 32px;
  //line-height: 32px;
  height: 38px;
  line-height: 38px;
  border: 1px solid ${props => props.theme.Color.border};
  color: ${props => props.theme.Color.text.light};
  padding: 0 ${props => props.theme.Density.spacing.sm};
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
`;

const Postfix = styled.div`
  background: #fafafa;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 38px;
  line-height: 38px;
  border: 1px solid ${props => props.theme.Color.border};
  color: ${props => props.theme.Color.text.light};
  padding: 0 ${props => props.theme.Density.spacing.sm};
  z-index: 10;
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
`;

type InputProps = {
  label?: string;
  onChange?: any;
  valid?: boolean;
  constraints?: IDataConstraints;
  prefix?: string;
  postfix?: string;
};

type Props = InputProps & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export const Input: React.FC<Props> = props => {
  const { label, onChange, prefix, postfix } = props;

  const onInvalid = (e: any) => {
    e.target.classList.add("invalid");
  };

  return (
    <div className="amino-input-wrapper">
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput onChange={onChange} onInvalid={onInvalid} {...props} />
        {postfix && <Postfix>{postfix}</Postfix>}
      </InputWrapper>
    </div>
  );
};

Input.defaultProps = {
  valid: true
};
