import styled from 'styled-components'
import { Theme } from '../styles/Theme'

export const Badge = styled.span`
  padding: 5px 15px;
  border: 1px solid ${Theme.Color.borderColor};
  display: inline-block;
  border-radius: 50px;
  width: fit-content;
  color: #525f7f;
`
