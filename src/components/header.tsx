import React from "react"
<<<<<<< HEAD
import { StyledH1 } from "./h1-styled"
=======
import { H1 } from "./h1-styled"
>>>>>>> Removed Classnames
import { Color } from "../constants"
import { Link } from "@reach/router";
import { HeaderWrapper } from "./header-styled";
import { HeaderImgStyled } from "./header-img-styled";

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderWrapper className={this.props.className}>
        <Link to={"/LoginPage"}>
<<<<<<< HEAD
          <img src={"/logo.png"} alt="Gatsby" />
<<<<<<< HEAD
          <StyledH1 color={Color.Primary}>{this.props.children}</StyledH1>
=======
=======
          <HeaderImgStyled src={"/logo.png"} alt="Gatsby" />
>>>>>>> Fonts extraction
          <H1 color={Color.Primary}>{this.props.children}</H1>
>>>>>>> Removed Classnames
        </Link>
      </HeaderWrapper>
    )
  }
}
