import * as React from "react"
import { gql } from "apollo-boost"
import { Mutation, MutationResult } from "react-apollo"
import { Layout } from "../layout"
import { navigate } from "gatsby"
import { Field } from "../components/field"
import { Validator } from "../utils/validator"
import { Button } from "../components/styled-button"
import { ErrorMessage } from "../components/error-message"
import { StyledForm } from "../components/form-styled"
import { Title } from "../components/title"
import AddUserFormContainer from "../containers/add-user-form-container"

const CREATEUSER = gql`
  mutation createUser($data: UserInput!) {
    UserCreate(data: $data) {
      name
      email
    }
  }
`

export default class AddUserPage extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <AddUserFormContainer />
      </Layout>
    )
  }
}
