import * as React from "react"
import gql  from "graphql-tag"
import { Mutation, MutationResult } from "react-apollo"
import { navigate } from "gatsby"
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
        {(mutation, result: MutationResult) =>  (
          <AddUserForm mutation={mutation} result={result} />
        )}
      </Mutation>
    )
  }

  handleCompleted = () => {
    navigate("/UserListPage")
  }
}
