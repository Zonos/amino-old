import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ResponsiveContainer } from './ResponsiveContainer'

const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: block;
`

export class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <StyledPage>
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </StyledPage>
    )
  }
}
