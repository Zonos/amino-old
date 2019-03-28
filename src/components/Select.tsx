import React from "react";
import styled from "styled-components";

import { DropdownIcon } from "../icons/DropdownIcon";
import { Color } from "../styles/Color";
import { Surface, Typography } from "../styles/Theme";

const SelectContainer = styled.div`
  border-radius: ${Surface.defaultRadius};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  padding: 0 12px; /* TODO: density */
  height: 34px;
  width: 100%;
  padding-top: 1.5px;
  position: relative;
  font-family: ${Typography.defaultFontFamily};
  background: white;

  svg {
    position: absolute;
    right: 12px;
    top: 4px;
    fill: ${Color.text.veryLight};
  }
`;

const StyledSelect = styled.select`
  padding: 5px 0;
  width: 100%;
  font-size: 15px;
  border: none;
  box-shadow: none;
  background: transparent;
  color: ${Color.text.light};
  font-family: ${Typography.defaultFontFamily};
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

const SelectLabel = styled.label`
  color: ${Color.text.light};
  font-size: 15px;
  opacity: 0.6;
  margin-bottom: 8px; /* TODO: subspacing from Theme.ts */
  display: block;
`;

type Props = {
  items: Array<any>;
  label?: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  onChange?: any;
  defaultValue?: any;
};

export const Select: React.FC<Props> = props => {
  const { label, items, itemValuePath, itemLabelPath, onChange, defaultValue } = props;

  const renderedOptions = items.map((item, index) => {
    const value = itemValuePath ? item[itemValuePath] : item.value;
    const label = itemLabelPath ? item[itemLabelPath] : item.label;

    return (
      <option value={value} key={index}>
        {label}
      </option>
    );
  });

  return (
    <div className="amino-input-wrapper">
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectContainer>
        <StyledSelect
          onChange={(e: any) => onChange && onChange(e.target.value)}
          defaultValue={defaultValue}
        >
          {renderedOptions}
        </StyledSelect>
        <DropdownIcon />
      </SelectContainer>
    </div>
  );
};
