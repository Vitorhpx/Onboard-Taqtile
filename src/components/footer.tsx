import React from "react";
import { StyledH1 } from "./h1-styled";

interface FooterProps {
  className:string
}


export default class Footer extends React.Component<FooterProps, any> {
  render() {
    return (
      <div className={this.props.className}>
        <p>Footer</p>
      </div>
    )
  }
}
