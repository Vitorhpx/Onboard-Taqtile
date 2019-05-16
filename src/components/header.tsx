import React from "react"
import { H1 } from "./h1-styled"
import { Color } from "../constants"
import { Link } from "@reach/router"
import { HeaderWrapper } from "./header-styled"
import { HeaderImgStyled } from "./header-img-styled"

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderWrapper className={this.props.className}>
        <Link to={"/LoginPage"}>
          <HeaderImgStyled src={"/logo.png"} alt="Gatsby" />
          <H1 color={Color.Primary}>{this.props.children}</H1>
        </Link>
      </HeaderWrapper>
    )
  }
}
