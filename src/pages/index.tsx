import * as React from "react"
import { Layout } from "../layout"
import { navigate } from "gatsby"


export default class Home extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        Loading...
      </Layout>
    )
  }

  componentDidMount() {
    navigate("/LoginPage")
  }
}
