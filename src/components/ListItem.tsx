import React from 'react'
import styled from 'styled-components'
import { Density, Color } from '../styles/Theme'

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${Density.spacing1};
  margin: 0 -${Density.spacing1};
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  cursor: ${(props: any) => (props.onClick ? 'pointer' : 'inherit')};

  &:first-of-type {
    margin-top: -${Density.spacing1};
  }

  &:last-of-type {
    margin-bottom: -${Density.spacing1};
    border-bottom: 0;
  }

  &:hover {
    background: ${(props: any) => (props.onClick ? '#fafafa' : 'inherit')};
  }
`

const StyledLabel = styled.span``

const StyledSubtitle = styled.span``

const StyledIcon = styled.img`
  border-radius: 4px;
  width: 34px;
  height: 34px;
  margin-right: ${Density.spacing1};
`

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

type ListItemProps = {
  label: string
  subtitle?: string
  icon?: string
  onClick?: any
  action?: React.ReactNode
}

export const ListItem: React.SFC<ListItemProps> = props => {
  const { label, subtitle, icon, action, onClick } = props

  return (
    <StyledItem onClick={onClick}>
      <StyledLeft>
        {icon && <StyledIcon src={icon} />}
        <StyledLabel>{label}</StyledLabel>
        {subtitle && <StyledSubtitle />}
      </StyledLeft>
      {action}
    </StyledItem>
  )
}
