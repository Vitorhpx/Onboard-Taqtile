import React from "react";
import logo from "../img/gatsby-logo.png"

interface HeaderProps {
  className:string
}


export default class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <div className={this.props.className}>
        <img src={logo} alt="Gatsby"></img>
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}
