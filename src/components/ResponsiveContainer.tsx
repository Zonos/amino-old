import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
`

// export class ResponsiveContainer extends Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired
//   }

//   render() {
//     const { children } = this.props

//     return <StyledContainer>{children}</StyledContainer>
//   }
// }
