import React from 'react'
import styled from 'styled-components'
import { ResponsiveContainer } from './ResponsiveContainer'

const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
`

export const Page: React.FC = props => {
  const { children } = props

  return (
    <StyledPage>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </StyledPage>
  )
}
