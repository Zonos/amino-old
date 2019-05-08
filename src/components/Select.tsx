import React from "react";
import styled from "styled-components";

import { DropdownIcon } from "../icons/DropdownIcon";
import { Color } from "../styles/Color";
import { Surface, Typography } from "../styles/Theme";
import { Density } from "../styles/Density";

const SelectContainer = styled.div`
  border-radius: ${Surface.defaultRadius};
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  height: 34px;
  width: 100%;
  padding: 0;
  position: relative;
  font-family: ${Typography.defaultFontFamily};
  background: white;

  svg {
    position: absolute;
    right: ${Density.spacing.sm};
    top: 4px;
    fill: ${Color.text.veryLight};
  }
`;

const StyledSelect = styled.select`
  padding: ${Density.spacing.xs} ${Density.spacing.sm};
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 34px;
  font-size: 15px;
  line-height: 17px;
  box-shadow: none;
  background: transparent;
  color: ${Color.text.light};
  font-family: ${Typography.defaultFontFamily};
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border: 1px solid ${Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${Color.primary.veryLight}33;
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
