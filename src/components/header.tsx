import React from "react"
import { StyledH1 } from "./h1-styled"
import { Color } from "../constants"
import { Link } from "@reach/router";

interface HeaderProps {
  className: string
}

export default class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <div className={this.props.className}>
        <Link to={"/LoginPage"}>
          <img src={"/logo.png"} alt="Gatsby" />
          <StyledH1 color={Color.Primary}>{this.props.children}</StyledH1>
        </Link>
      </div>
    )
  }
}
