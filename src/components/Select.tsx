import React from 'react'
import styled from 'styled-components'
import { Theme } from '../styles/Theme'

const SelectContainer = styled.div`
  border-radius: ${Theme.Surface.defaultRadius};
  border: 1.5px solid transparent;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: #525f7f;
  display: block;
  padding: 5px 15px;
  height: 40px;
  width: 100%;
  font-family: ${Theme.Typography.defaultFontFamily};
`

const StyledSelect = styled.select`
  padding: 5px 0;
  width: 130%;
  font-size: 15px;
  border: none;
  box-shadow: none;
  background: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

interface SelectProps {
  items: Array<any>
  label?: string
  itemLabelPath?: string
  itemValuePath?: string
}

export const Select = (props: SelectProps) => {
  const { items, itemValuePath, itemLabelPath } = props

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
    <SelectContainer>
      <StyledSelect>{renderedOptions}</StyledSelect>
    </SelectContainer>
  )
}
