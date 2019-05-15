import styled from "styled-components"
import { Color, Fonts, FontSizes } from "../constants"

interface H1Props {
  color: Color
}

export const H1 = styled.h1`
  display: inline;
  font-size: ${FontSizes.XLarge};
  font-family: ${Fonts.SanSerif};
  text-align: left;
  color: ${(props: H1Props) => props.color};
  margin-left: 0.5em;
`
