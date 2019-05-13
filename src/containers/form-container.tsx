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
import AddUserForm from "../components/add-user-form"

const CREATEUSER = gql`
  mutation createUser($data: UserInput!) {
    UserCreate(data: $data) {
      name
      email
    }
  }
`

export default class AddUserFormContainer extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Mutation
        mutation={CREATEUSER}
        onCompleted={() => this.handleCompleted()}
      >
        {(mutation, result: MutationResult) => (
          <AddUserForm mutation={mutation} result={result} />
        )}
      </Mutation>
    )
  }

  handleCompleted = () => {
    navigate("/UserListPage")
  }
}
