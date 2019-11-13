import React from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { SpinnerIcon } from "../icons/SpinnerIcon";

const Stepper = styled.div`
  position: relative;
  border-radius: ${p => p.theme.Surface.radius.sm};
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1px;
  top: 1px;
  bottom: 1px;
  border-top-right-radius: ${p => p.theme.Surface.radius.sm};
  border-bottom-right-radius: ${p => p.theme.Surface.radius.sm};
  background: ${p => p.theme.Color.gray.veryLight};
  border-left: 1px solid ${p => p.theme.Color.gray.base};

  svg {
    fill: ${p => p.theme.Color.text.light};
    width: 10px;
    height: 10px;
  }

  div {
    cursor: pointer;
    padding: 0 ${p => p.theme.Density.spacing.xs};
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: center;
    background: ${p => p.theme.Color.gray.veryLight};
    transition: all 100ms ease-in-out;
    user-select: none;
  }

  div:hover {
    background: ${p => p.theme.Color.gray.light};
  }

  div:focus {
    background: ${p => p.theme.Color.gray.base};
  }

  div:first-of-type {
    border-top-right-radius: ${p => p.theme.Surface.radius.sm};
    border-bottom: 1px solid ${p => p.theme.Color.gray.base};
  }

  div:last-of-type {
    border-bottom-right-radius: ${p => p.theme.Surface.radius.sm};
  }

  .flip svg {
    transform: rotate(180deg);
  }
`;

type Props = {
  value: number;
  onChange: any;
  min: number;
  max: number;
};

export const StepperInput: React.FC<Props> = props => {
  const { value, onChange, min, max } = props;

  const inc = () => {
    if (value + 1 <= max) {
      onChange(value + 1);
    }
  };

  const dec = () => {
    if (value - 1 >= min) {
      onChange(value - 1);
    }
  };

  const prettyValue = () => `${value} / ${max}`;

  return (
    <Stepper>
      <Input value={prettyValue()} readOnly />
      <Arrows>
        <div className="flip" onClick={inc}>
          <SpinnerIcon />
        </div>
        <div onClick={dec}>
          <SpinnerIcon />
        </div>
      </Arrows>
    </Stepper>
  );
};
