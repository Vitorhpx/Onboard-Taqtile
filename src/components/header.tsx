import React from "react";
import logo from "../../static/logo.png"
import { StyledH1 } from "./h1-styled";

interface HeaderProps {
  className:string
}


export default class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <div className={this.props.className}>
        <img src={logo} alt="Gatsby"></img>
        <StyledH1>{this.props.children}</StyledH1>
      </div>
    )
  }
}
