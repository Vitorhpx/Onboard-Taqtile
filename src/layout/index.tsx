import * as React from "react"
import "./global.css"
import Header from "../components/header"
import Footer from "../components/footer"

export class Layout extends React.Component {
  render() {
    return (
      <div className="site">
        <Header>User List Gatsby</Header>
        <div className="site-content">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}
