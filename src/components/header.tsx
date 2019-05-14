import React from "react";
import logo from "../../static/logo.png"
import { StyledH1 } from "./h1-styled";
import { Color } from "../constants";

interface HeaderProps {
  className:string
}


export default class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <div className={this.props.className}>
        <img src={logo} alt="Gatsby"></img>
        <StyledH1 color={Color.Primary}>{this.props.children}</StyledH1>
      </div>
    )
  }
}
