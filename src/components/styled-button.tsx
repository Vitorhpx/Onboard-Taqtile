import styled, { css } from "styled-components"
import { Color, Fonts } from "../constants"

export const Button = styled.button`
  background-color: ${Color.Primary};
  font-size: 16px;
  color: white;
  border-radius: 8px;
  border: 2px solid;
  height: 44px;
  padding: 0.25em 1em;
  font-family: ${Fonts.SanSerif};
  min-width: 150px;
  max-width: 200px;

  ${props =>
    props.CTA &&
    css`
      background-color: ${Color.CallToAction};
    `};

  :disabled {
    background-color: ${Color.GrayLight};
  }
`
