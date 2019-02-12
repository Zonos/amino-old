import React from 'react'
import styled from 'styled-components'
import { Typography, Surface } from '../styles/Theme'
import { DropdownIcon } from '../icons/DropdownIcon'
import { Color } from '../styles/Color';

const SelectContainer = styled.div`
  border-radius: ${Surface.defaultRadius};
  border: 1.5px solid transparent;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  padding: 5px 15px;
  height: 40px;
  width: 100%;
  position: relative;
  font-family: ${Typography.defaultFontFamily};

  svg {
    position: absolute;
    right: 15px;
    top: 6px;
    fill: ${Color.text.light};
  }
`

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
`

const SelectLabel = styled.label`
  color: ${Color.text.light};
  font-size: 15px;
  opacity: 0.6;
  margin-bottom: 8px; /* TODO: subspacing from Theme.ts */
  display: block;
`

interface SelectProps {
  items: Array<any>
  label?: string
  itemLabelPath?: string
  itemValuePath?: string
  onChange?: any
}

export const Select = (props: SelectProps) => {
  const { label, items, itemValuePath, itemLabelPath, onChange } = props

  const renderedOptions = items.map((item, index) => {
    const value = itemValuePath ? item[itemValuePath as string] : item.value
    const label = itemLabelPath ? item[itemLabelPath as string] : item.label

    return (
      <option value={value} key={index}>
        {label}
      </option>
    )
  })

  return (
    <div className="amino-input-wrapper">
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectContainer>
        <StyledSelect onChange={onChange}>{renderedOptions}</StyledSelect>
        <DropdownIcon />
      </SelectContainer>
    </div>
  )
}
