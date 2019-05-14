import React from "react";
import { StyledH1 } from "./h1-styled";
import { StyledH2 } from "./h2-styled";
import { Color } from "../constants";

interface FooterProps {
  className:string
}


export default class Footer extends React.Component<FooterProps, any> {
  render() {
    return (
      <div className={this.props.className}>
      <StyledH2 color = {Color.White}>Onboard TaqTile</StyledH2>
      </div>
    )
  }
}
