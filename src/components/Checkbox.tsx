import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Color, Density } from "../styles/Theme";

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:active {
    box-shadow: 0 0 0 3px ${Color.primary.veryLight}33;
    background: rgba(0, 0, 0, 0.015);
  }
`;

const SelectedCheckbox = styled(StyledCheckbox)`
  background: ${Color.primary.base} !important;

  svg {
    fill: white;
  }
`;

const CheckIcon = () => (
  <svg width={10} height={7} viewBox="0 0 10 7">
    <path
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
);

type Props = {
  checked?: boolean;
  onChange?: any;
};

export const Checkbox: React.FC<Props> = props => {
  const { checked, onChange } = props;

  const [value, setValue] = useState(false);

  useEffect(() => {
    if (checked !== undefined) {
      setValue(checked);
    } else {
      setValue(false);
    }
  }, [checked]);

  useEffect(() => {
    console.log(value);

    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <>
      {!value && <StyledCheckbox onClick={() => setValue(!value)} />}
      {value && (
        // TODO: animate in
        <SelectedCheckbox onClick={() => setValue(!value)}>
          <CheckIcon />
        </SelectedCheckbox>
      )}
    </>
  );
};

Checkbox.defaultProps = {
  checked: false
};
