import * as React from "react"
import { Layout } from "../layout"
import AddUserFormContainer from "../containers/add-user-form-container"



export default class AddUserPage extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <AddUserFormContainer />
      </Layout>
    )
  }
}
