import * as React from "react"
import { Layout } from "../layout"
import { Link } from "gatsby"

export default class Home extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Link to={"/LoginPage"}> Login </Link>
      </Layout>
    )
  }
}
