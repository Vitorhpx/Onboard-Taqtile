import React from "react"
<<<<<<< HEAD
import { StyledH1 } from "./h1-styled"
=======
import { H1 } from "./h1-styled"
>>>>>>> Removed Classnames
import { Color } from "../constants"
import { Link } from "@reach/router";
import { HeaderWrapper } from "./header-styled";

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderWrapper className={this.props.className}>
        <Link to={"/LoginPage"}>
          <img src={"/logo.png"} alt="Gatsby" />
<<<<<<< HEAD
          <StyledH1 color={Color.Primary}>{this.props.children}</StyledH1>
=======
          <H1 color={Color.Primary}>{this.props.children}</H1>
>>>>>>> Removed Classnames
        </Link>
      </HeaderWrapper>
    )
  }
}
