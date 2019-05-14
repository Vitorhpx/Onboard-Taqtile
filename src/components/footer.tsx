import React from "react";
import { H1 } from "./h1-styled";
import { H2 } from "./h2-styled";
import { Color } from "../constants";
import { FooterWrapper } from "./footer-styled";


export default class Footer extends React.Component<any, any> {
  render() {
    return (
      <FooterWrapper>
      <H2 color = {Color.White}>Onboard TaqTile</H2>
      </FooterWrapper>
    )
  }
}
