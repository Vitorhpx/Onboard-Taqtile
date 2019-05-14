import styled from 'styled-components'
import { Fonts, FontSizes } from '../constants';

export const H2 = styled.h2`
  font-size: ${FontSizes.Large};
  font-weight:bold;
  font-family: ${Fonts.SanSerif};
  color: ${props => props.color};
  margin-bottom:1em;
`
